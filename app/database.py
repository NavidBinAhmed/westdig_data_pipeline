from sqlalchemy import create_engine, Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


'''I used local PGAdmin 4 as a database that works on PostgreSQL.
This simple file set ups the database and corresponding data sessions.'''

DATABASE_URL = "postgresql://postgres:pga4_pass12@localhost:5432/data_pipeline"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()