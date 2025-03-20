from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import requests
from app.database import SessionLocal, engine, Base
from app import models, schemas, crud

# Initialize database
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Route to create a new product
@app.post("/products/", response_model=schemas.ProductResponse)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return crud.create_product(db, product)

# Route to retrieve products
@app.get("/products/", response_model=list[schemas.ProductResponse])
def read_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_products(db, skip=skip, limit=limit)

# Fetch external data from FakeStoreAPI and store in database
FAKE_STORE_API = "https://fakestoreapi.com/products"

@app.get("/fetch_products/")
def fetch_products(db: Session = Depends(get_db)):
    response = requests.get(FAKE_STORE_API)
    if response.status_code != 200:
        return {"error": "Failed to fetch data"}
    
    data = response.json()
    for item in data:
        product = schemas.ProductCreate(name=item["title"], price=item["price"], category=item["category"])
        crud.create_product(db, product)
    
    return {"message": "Products stored successfully!"}