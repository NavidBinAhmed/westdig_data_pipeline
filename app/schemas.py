from pydantic import BaseModel


'''this ensures consistency and validity of data types that we extract.
string, float, int.'''

class ProductCreate(BaseModel):
    name: str
    price: float
    category: str

class ProductResponse(ProductCreate):
    id: int
