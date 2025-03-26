from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.database import SessionLocal, engine, Base
from app import models, schemas, crud
import requests

''' This is the FAST API main file serving as the backend.'''

# Initialization of database
Base.metadata.create_all(bind=engine)

# Initialization FastAPI app
app = FastAPI()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

## test if base api works
@app.get("/")
def read_root():
    return {"message": "Data Pipeline API is working. Proceed..."}

# This is the route to create a new product, as an API endpoint
@app.post("/products/", response_model=schemas.ProductResponse)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    return crud.create_product(db, product)

'''# Route to retrieve products
@app.get("/products/", response_model=list[schemas.ProductResponse])
def read_products(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return crud.get_products(db, skip=skip, limit=limit)'''
    
'''With retrieval of 'products', multiple experiements were undertaken to help the systemm make functional'''
@app.get("/products/")
async def get_products(db: Session = Depends(get_db)):
    product_list = db.query(models.Product).all()
    print("Database Query Result:", product_list)  # To debug Log
    return product_list  # Ensures returning of data'''

# This is the API from where the system fetches external data from FakeStoreAPI and store in the local database PGAdmin 4
FAKE_STORE_API = "https://fakestoreapi.com/products"

# API endpoint for fetch_product, responds as a Json
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

'''CORS middleware has been enabled to make the data_fetching functional.
React fetched data issue on console'''
# cors enabled to get fetched_data on react console, this resolved the react issue
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all domains during testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
