import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

//We know that a React app wont end up looking like this
//We would probably want to seperate out this app into seperate components.
//We'll probabbly ha/e a component for the heading area, for the di/, for the
//li's (each being a seperate component rendered)

//So let's create a new file inside our components folder called
//toDoItem.jsx (check left)
//Now inside this ToDoItem, let's take out <li> from this file and ]
// place it in there and create a seperate component.
//The beha.iour that we're looking for afterwards is the ability to add new
//items to the list.
//Check ToDoItem.js for further notes. Add the boiler plate codes etc.

//After we ha/e created the <li> in its own file, we import it in here and we
//can use this component rather than writing li in this file when we want
//to render it.
//So below we will ha/e ToDoItem. (check below, under item.map)
//And then to display a diff toDo item each time we map through our array
//we are going to pass this ToDoItem which is the text in

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
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
          {items.map((todoItem) => (
            <ToDoItem />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
