// src/components/TodoItem.jsx
import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo, openUpdateModal }) => {
  return (
    <div className="todo-item">
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button className='btn btn-success' onClick={() => openUpdateModal(todo)}>Update</button>
      <button className='btn btn-danger' onClick={() => removeTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
