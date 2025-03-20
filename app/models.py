from app.database import Base
from sqlalchemy import Column, Integer, String, Float

'''models file defines the data table that appears as an SQL database.'''

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Float)
    category = Column(String)
