from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    price: float
    category: str

class ProductResponse(ProductCreate):
    id: int
