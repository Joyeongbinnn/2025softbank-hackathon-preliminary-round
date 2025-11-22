from sqlalchemy.orm import Session
from models.service import Service
from schemas.service import ServiceCreate

def create_service(db: Session, service_data: ServiceCreate) -> Service:
    new_service = Service(**service_data.model_dump())
    db.add(new_service)
    db.commit()
    db.refresh(new_service)
    return new_service

def get_service(db: Session, service_id: int) -> Service:
    return db.query(Service).filter(Service.service_id == service_id).first()

def get_services_by_user(db: Session, user_id: int) -> list[Service]:
    return db.query(Service).filter(Service.user_id == user_id).all()