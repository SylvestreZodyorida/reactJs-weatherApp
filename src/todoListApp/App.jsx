// src/components/TodoList.jsx
import React, { useState } from 'react';
import TodoItem from './TodoItem';
import Modal from './Modal';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [todoToUpdate, setTodoToUpdate] = useState(null);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const openUpdateModal = (todo) => {
    setTodoToUpdate(todo);
    setIsModalVisible(true);
  };

  const closeUpdateModal = () => {
    setIsModalVisible(false);
    setTodoToUpdate(null);
  };

  const updateTodo = (id, updatedText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
    closeUpdateModal();
  };

  return (
    <div className="todo-list"><br />
      <center>
        <h1>To-Do List</h1>
      </center><br />
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-items">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
            openUpdateModal={openUpdateModal}
          />
        ))}
      </div>
      <Modal
        isVisible={isModalVisible}
        onClose={closeUpdateModal}
        onSave={updateTodo}
        todo={todoToUpdate}
      />
    </div>
  );
};

export default TodoList;
