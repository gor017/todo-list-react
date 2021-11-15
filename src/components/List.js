import React from "react";
import ToDoItem from "./ToDoItem";


class List extends React.Component {
 
  
  render() {
    return (
      <div>
        {this.props.toDoItems.map((toDoItem) =>
          <ToDoItem 
          remove = {this.props.remove}
          edit = {this.props.edit} 
          key={toDoItem.id} 
          item={toDoItem} />)}
      </div>
    )
    }
  }

  
export default List