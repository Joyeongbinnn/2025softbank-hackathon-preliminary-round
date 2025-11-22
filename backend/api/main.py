from fastapi import APIRouter
from api.routes import deploy, metrics, log

app = FastAPI(root_path="/api")

api_router.include_router(deploy.router, prefix="/deploy", tags=["deploy"])
api_router.include_router(metrics.router, prefix="/metrics", tags=["metrics"])
api_router.include_router(log.router, prefix="/log", tags=["log"])
