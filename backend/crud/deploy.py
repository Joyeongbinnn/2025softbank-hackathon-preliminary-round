from sqlalchemy.orm import Session
from models.deploy import Deploy
from schemas.deploy import DeployCreate

def create_deploy(db: Session, deploy_data: DeployCreate) -> Deploy:
    new_deploy = Deploy(**deploy_data.model_dump())
    db.add(new_deploy)
    db.commit()
    db.refresh(new_deploy)
    return new_deploy

def get_deploy(db: Session, deploy_id: int) -> Deploy:
    return db.query(Deploy).filter(Deploy.deploy_id == deploy_id).first()

def get_latest_deploy_by_service(db: Session, service_id: int) -> Deploy:
    return db.query(Deploy).filter(Deploy.service_id == service_id).order_by(Deploy.created_date.desc()).first()

def get_deploys_by_user(db: Session, user_id: int, limit: int = 4):
    return db.query(Deploy).filter(Deploy.user_id == user_id).order_by(Deploy.created_date.desc()).limit(limit).all()
