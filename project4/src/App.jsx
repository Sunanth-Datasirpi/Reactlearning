import React from "react";
import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    //prevents refreshing when clicking add button
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    //clears the text in input after clicking add button
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed,
          };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter
    })
  }

  return (
    <>
      <form className="New_form" onSubmit={handleSubmit}>
        <div className="Form_Row">
          <label htmlFor="items">New Items</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
            id="items"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h2 className="header">Todo Lists</h2>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
                <button className="btn btn-delete">Delete</button>
              </label>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
