from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base


engine = create_engine("sqlite:///tododatbase.db")


Base = declarative_base()

class Todo(Base):
    __tablename__ = "todoTable"
    id = Column(Integer, primary_key=True)
    task = Column(String(50))