import React from 'react';
import './App.css';
import List from './components/List';
import ToDoHeader from './components/ToDoHeader.js';
import { v4 as uuidv4 } from 'uuid';
import { toDoItems } from './mock/toDoItems';
import ToDoFooter from './components/ToDoFooter';
import ToDoItem from './components/ToDoItem';


class App extends React.Component {

  state = {
    toDoItems,
  }

  addToDo = (text) => {
    if (text) {
      const newToDo = {
        id: uuidv4(),
        text: text,
        done: false
      }
      this.setState({
        toDoItems: [...this.state.toDoItems, newToDo]
      })
    }
  }


  editToDo = (id) => {
    const index = this.state.toDoItems.findIndex((toDoItem) => toDoItem.id === id)
    const editingToDoItem = this.state.toDoItems.find((toDo) => toDo.id === id)
    const newItems = [...this.state.toDoItems]
    newItems.splice(index, 1, {...editingToDoItem, done: !editingToDoItem.done})
    this.setState({toDoItems: newItems})
  }
  
  

  removeToDo = (id) => {
    const index = this.state.toDoItems.findIndex((toDoItem) => toDoItem.id === id)
    const newItems = [...this.state.toDoItems]
    newItems.splice(index, 1)
    this.setState({
      toDoItems: newItems
    })
    console.log(newItems)
  }

  render(){
    return (
      <div className="div1">
        <ToDoHeader 
          add = {
            this.addToDo
          }
        />
        <List
        toDoItems = {
          this.state.toDoItems
        } 
        remove = {
          this.removeToDo
        }
        edit = {
          this.editToDo
        }
        />
        <ToDoFooter 
          toDoItems = {
            this.state.toDoItems
          }
          doneTodos = {
            this.state.toDoItems.filter((t) => t.done)
          }
          clearDones = {() => {
            const newItems = this.state.toDoItems.filter((item) => !item.done)
            this.setState({
              toDoItems: newItems
            })
          }}
        /> 
      </div>
    )
  }
}

export default App;