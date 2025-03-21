from app.database import Base
from sqlalchemy import Column, Integer, String, Float

'''models file defines the data table that appears as an SQL database.
we can make changes here as how we want our data table should look like.

For example, we want these four features only from API data source, not all features'''

class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    price = Column(Float)
    category = Column(String)
