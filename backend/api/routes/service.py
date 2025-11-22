from fastapi import APIRouter, HTTPException, status, Depends
from sqlalchemy.orm import Session
from database.yoitang import get_db
from crud.service import create_service, get_service, get_services_by_user
from schemas.service import ServiceCreate, ServiceResponse

router = APIRouter()

# 서비스 생성(미완)
@router.post("/", response_model=ServiceResponse, summary="DB에 새 서비스 생성(미완)")
async def create_new_service(service_data: ServiceCreate, db: Session = Depends(get_db)):
    return create_service(db, service_data)

# 서비스 내용 조회
@router.get("/{service_id}", response_model=ServiceResponse, summary="단일 서비스 정보 조회")
async def get_service_by_id(service_id: int, db: Session = Depends(get_db)):
    service = get_service(db, service_id)

    if not service:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, 
            detail="해당 서비스가 존재하지 않습니다."
        )

    return service

@router.get("/user/{user_id}", response_model=list[ServiceResponse], summary="특정 유저의 모든 서비스 조회")
async def get_services_by_user_id(user_id: int, db: Session = Depends(get_db)):
    services = get_services_by_user(db, user_id)
    return services