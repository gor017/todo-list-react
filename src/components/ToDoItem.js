import React from "react";

function ToDoItem({ item, remove, edit }) {
  return (
    <div
      style={{
        marginBottom: 10,
        border: "1px solid black",
        display: "flex",
        width: 400,
        justifyContent: "space-between",
      }}
    >
      <input
      style={{cursor: "pointer"}} 
      onClick = {() => {
        edit(item.id)  
      }}
      type='checkbox'></input>
      <div
        style={{
          textDecoration: item.done ? 'line-through' : null
        }}
      >{item.text}</div>
      <button
        style = {{cursor: "pointer"}}
        onClick={() => {
          remove(item.id);
        }}
      >
        X
      </button>
    </div>
  )
}

export default ToDoItem