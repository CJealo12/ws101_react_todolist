import React, { useState } from 'react';

const Todolist = ({ todos, setTodos }) => {
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleComplete = (todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  };

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditValue(todo.title);
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, title: editValue } : item
      )
    );
    setEditingId(null);
    setEditValue("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li className={`list-item ${todo.completed ? "complete" : ""}`} key={todo.id}>
          {editingId === todo.id ? (
            <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                className="list"
              />
              <button type="submit" className="button-edit task-button">Save</button>
            </form>
          ) : (
            <>
              <input
                type="text"
                value={todo.title}
                className="list"
                readOnly
              />
              <div>
                <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
                  <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button" onClick={() => handleEditClick(todo)}>
                  <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={() => handleDelete(todo.id)}>
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Todolist;
