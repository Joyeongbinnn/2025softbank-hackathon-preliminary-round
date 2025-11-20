from fastapi import APIRouter
from api.routes import temp
from api.routes import deploy

api_router = APIRouter()

api_router.include_router(temp.router, prefix="/temp", tags=["temp"])
api_router.include_router(deploy.router, prefix="/deploy", tags=["deploy"])
