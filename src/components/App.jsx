import React, { useState } from "react";
// import ToDoItem from "./ToDoItem";

//We know that a React app wont end up looking like this
//We would probably want to seperate out this app into seperate components.
//We'll probabbly ha/e a component for the heading area, for the di/, for the
//li's (each being a seperate component rendered)



function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => ( <li>{todoItem}</li> ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
