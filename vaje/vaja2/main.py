from typing import Union
from fastapi import FastAPI
from database import engine, Base, TodoTable
from sqlalchemy.orm import Session
import schemas


Base.metadata.create_all(engine)

app = FastAPI()

@app.get("/")
def read_root():
    return "TODO app"

@app.post("/add/")
def add_todo(todo: schemas.Todo):
    """ 
        ADD item
    """
    session = Session(bind=engine, expire_on_commit=False)
    todoDB = TodoTable(task=todo.task)
    session.add(todoDB)
    session.commit()
    id = todoDB.id
    session.close()

    return f"Added new todo item with id {id}"

@app.delete("/delete/{id}")
def delete_todo(id:int):
    return "Delete TODO"

@app.put("/update/{id}")
def update_todo(id:int):
    return "Update TODO"

@app.get("/get/{id}")
def get_todo(id:int):
    return "Get TODO"

@app.get("/list")
def list_todo(id:int):
    return "List TODO"