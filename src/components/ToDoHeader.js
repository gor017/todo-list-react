import React from "react";

class ToDoHeader extends React.Component {

  state = {
    toDoName: "",
  }
  change = (e) => {
    this.setState({
      toDoName: e.target.value
    })
    // this.state.toDoName = e.target.value 
  } 


  render() {
    return (
      <div style = {{
        marginLeft: 50
      }}>
        <h3>To do list</h3>
        <input type="text" value={this.state.toDoName} onChange={this.change} />
        <button 
        style={{cursor:'pointer'}} 
        onClick = {() => {
          this.props.add(this.state.toDoName)
          this.setState({
            toDoName: ""
          })
        }}>Add</button>
      </div>
    )
  }
}

export default ToDoHeader