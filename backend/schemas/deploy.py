from pydantic import BaseModel, HttpUrl, field_validator
import re


class DeployRequest(BaseModel):
    prefix: str
    git_repo: HttpUrl
    branch: str = "main"

    @field_validator("prefix")
    @classmethod
    def validate_prefix(cls, v: str) -> str:
        # k8s namespace + 도메인 prefix 제약: 소문자, 숫자, 하이픈
        if not re.fullmatch(r"[a-z0-9-]+", v):
            raise ValueError("prefix는 소문자/숫자/하이픈만 사용할 수 있습니다.")
        if len(v) > 30:
            raise ValueError("prefix는 30자 이하여야 합니다.")
        return v
