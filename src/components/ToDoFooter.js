import React from "react";

class ToDoFooter extends React.Component {


    render() {
        return(
            <div>
                <span>{this.props.doneTodos.length}/{this.props.toDoItems.length} completed</span>
                <button onClick={this.props.clearDones}>Clear all completed</button>
            </div>
        )
    }
}

export default ToDoFooter