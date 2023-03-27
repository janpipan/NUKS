from typing import Union
from fastapi import FastAPI, HTTPException, status
from database import engine, Base, TodoTable
from sqlalchemy.orm import Session
import schemas

from fastapi_versioning import VersionedFastAPI, version


Base.metadata.create_all(engine)

app = FastAPI()

@app.get("/")
@version(1)
def read_root():
    return "TODO app"

@app.post("/add/", status_code=status.HTTP_201_CREATED)
@version(1)
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
@version(1)
def delete_todo(id:int):
    return "Delete TODO"

@app.delete("/delete/{id}")
@version(2)
def delete_todo(id:int):
    session = Session(bind=engine, expire_on_commit=False)
    todo = session.query(TodoTable).get(id)
    if todo:
        session.delete(todo)
        session.commit()
        session.close()
    else:
        session.close()
        raise HTTPException(status_code=404, detail=f"Todo item with {id} doesn't exist")
    return todo


@app.put("/update/{id}")
@version(1)
def update_todo(id:int):
    return "Update TODO"

@app.put("/update/{id}")
@version(2)
def update_todo(id:int, task: str):
    session = Session(bind=engine, expire_on_commit=False)
    todo = session.query(TodoTable).get(id)
    if todo:
        todo.task = task
        session.commit()
    session.close()
    if not todo:
        raise HTTPException(status_code=404, detail=f"Todo item with {id} doesn't exist")
    return todo

@app.get("/get/{id}")
@version(1)
def get_todo(id:int):
    return "Get TODO"

@app.get("/get/{id}")
@version(2)
def get_todo(id:int):
    session = Session(bind=engine, expire_on_commit=False)
    todo = session.query(TodoTable).get(id)
    session.close()
    if not todo:
        raise HTTPException(status_code=404, detail=f"Todo item with {id} doesn't exist")
    return todo

@app.get("/list")
@version(1)
def list_todo():
    return "List TODO"

@app.get("/list")
@version(2)
def list_todo():
    session = Session(bind=engine, expire_on_commit=False)
    todoList = session.query(TodoTable).all()
    session.close()
    return todoList

app = VersionedFastAPI(app, version_format="{major}", prefix_format="/v{major}")