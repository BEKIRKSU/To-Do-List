import React from "react";

//First let's go and import this item inside the App.js

//This ToDoItem component atm is what we call a stateless component becasue
//it's not trying to change itself or anything else. All it's doing
//is receiing some read only properties and it just displays them inside.
//Remember tha props are read only. So you can't add like a di/ and
// an input and then try and modify the props when an onChange is triggered.
//

function ToDoItem() {
  return <li>Text</li>;
}

export default ToDoItem;
