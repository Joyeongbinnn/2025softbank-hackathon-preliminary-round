import os
import requests
from fastapi.responses import PlainTextResponse
from pydantic import BaseModel


from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from database.yoitang import get_db
from crud.log import create_log, get_log
from schemas.log import LogResponse, LogCreate

router = APIRouter()

class JenkinsLogResponse(BaseModel):
    chunk: str          # 이번 요청으로 받은 로그
    nextOffset: int     # 다음 요청할 offset
    hasMore: bool       # 아직 로그가 더 있는지 여부

# 🔥 Jenkins progressive-text 로그 API
@router.get("/jenkins/{build_number}", response_model=JenkinsLogResponse, summary="Jenkins 로그 실시간 조회")
async def get_jenkins_log(build_number: int, offset: int = 0):
    # Jenkins 환경 변수 로드
    JENKINS_URL = os.getenv("JENKINS_URL")
    JENKINS_USER = os.getenv("JENKINS_USER")
    JENKINS_TOKEN = os.getenv("JENKINS_TOKEN")
    JOB_NAME = os.getenv("JENKINS_JOB_NAME", "yoitang-autodeploy")

    if not (JENKINS_URL and JENKINS_USER and JENKINS_TOKEN):
        raise HTTPException(
            status_code=500,
            detail="Jenkins 환경변수가 설정되지 않았습니다. (JENKINS_URL, JENKINS_USER, JENKINS_TOKEN)"
        )

    url = f"{JENKINS_URL}/job/{JOB_NAME}/{build_number}/logText/progressiveText?start={offset}"

    try:
        resp = requests.get(url, auth=(JENKINS_USER, JENKINS_TOKEN), timeout=10)
    except requests.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Jenkins 호출 실패: {e}")

    # 정상 응답이 아닌 경우
    if resp.status_code != 200:
        raise HTTPException(
            status_code=resp.status_code,
            detail=f"Jenkins 응답 코드: {resp.status_code}"
        )

    chunk = resp.text or ""

    size_header = resp.headers.get("X-Text-Size")
    next_offset = int(size_header) if size_header else offset + len(chunk)
    has_more = resp.headers.get("X-More-Data", "false").lower() == "true"

    return JenkinsLogResponse(chunk=chunk, nextOffset=next_offset, hasMore=has_more)


# 로그 생성
@router.post("/", response_model=LogResponse, summary="DB에 새 로그 생성")
async def create_new_log(log_data: LogCreate, db: Session = Depends(get_db)):
    return create_log(db, log_data)

# 로그 내용 조회
@router.get("/{deploy_id}", response_model=LogResponse, summary="단일 로그 정보 조회")
async def get_log_by_deploy(deploy_id: int, db: Session = Depends(get_db)):
    log = get_log(db, deploy_id)

    if not log:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="해당 배포가 존재하지 않습니다."
        )

    return log

