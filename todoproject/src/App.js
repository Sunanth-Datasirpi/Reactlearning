import React, { useEffect, useState } from "react";
import "./App.css";
import ListItem from "./Todo/ListItem";
import "./style.css";

function App() {
  const [todoName, setTodoName] = useState("");
  //Accessing the list from Local storage
  const [list, setList] = useState(() => {
    const local = localStorage.getItem("Items");
    if (local == null) return [];

    return JSON.parse(local);
  });

  //storing the list in Local storage for later
  useEffect(() => {
    localStorage.setItem("Items", JSON.stringify(list));
  }, [list]);

  //Updating the list name.Handling event change
  const updateTodoName = (e) => {
    setTodoName(e.target.value);
  };

  //Adding the list of tasks. Handling event change
  const addTodo = () => {
    setList([...list, { name: todoName, completed: false }]);
    setTodoName("");
  };

  //Marking the list as completed.Handling event change
  const Done = (item) => {
    const newList = list.map((listItem) => {
      if (listItem.name === item.name) {
        return { ...listItem, completed: !listItem.completed };
      }
      return listItem;
    });
    setList(newList);
  };

  //Deleting the list using Delete button.Handling event change
  const Delete = (item) => {
    const newList = list.filter((listItem) => {
      if (listItem.name === item.name) {
        return false;
      }
      return true;
    });
    setList(newList);
  };

  return (
    <div>
      <h3>Todo List</h3>
      <input
        type="text"
        placeholder="Type...."
        value={todoName}
        onChange={updateTodoName}
      />
      <button onClick={addTodo}>Add</button>
      {list.map((item) => (
        <ListItem key={item.name} obj={item} onDone={Done} onDelete={Delete} />
      ))}
    </div>
  );
}

export default App;
