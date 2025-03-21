from sqlalchemy.orm import Session
from app import models, schemas


'''This draft inteds to work on CRUD operations and data manipulation.
Uses the stored database after extracting the data

CRUD methods as we require should go here.'''

def create_product(db: Session, product: schemas.ProductCreate):
    db_product = models.Product(**product.dict())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product

def get_products(db: Session, skip: int = 0, limit: int = 10):
    return db.query(models.Product).offset(skip).limit(limit).all()
