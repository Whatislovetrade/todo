import React, {Component} from "react";

import AppHeader from "../../components/app-header";
import SearchPanel from "../../components/search-panel";
import TodoList from "../../components/todo-list";
import ItemStatusFilter from '../../components/item-status-filter';
import AddTodoListItem from "../../components/add-todo-list-item"

import './app.css'

export default class App extends Component {

  maxId = 100

  state = {
    todoData:[
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    term: '',
    filter: 'all', // active, all, done
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {

    this.setState(({ todoData }) => {
      
      const idx = todoData.findIndex((el) => el.id === id)

      const newArray = [
         ...todoData.slice(0, idx),
         ...todoData.slice(idx + 1)
      ]

      return {
        todoData: newArray
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData, newItem
      ]
      return {
        todoData:newArr
      }
    })
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id)

    const oldItem = arr[idx]
    const newItem = {...oldItem, 
      [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ]
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
  
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }

    })
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
  
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }

    })
  }

  onSearchChange = (term) => {
    this.setState({ term })
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  search(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.label.toLowerCase()
              .indexOf(term.toLowerCase()) > -1
    })
  }

  filter(items, filter) {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter(item => !item.done)
      case 'done':
        return items.filter(item => item.done)
      default:
        return items
    }
  }

  render() {

    const { todoData, term, filter } = this.state

    const visibleItem = this.filter(
          this.search(todoData, term), filter)

    const doneCount = todoData
                      .filter((el) => el.done).length
    const todoCount = todoData.length - doneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={ todoCount } done={ doneCount } />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={ this.onSearchChange} />
          <ItemStatusFilter filter={filter}
            onFilterChange={ this.onFilterChange } />
        </div>
  
        <TodoList
         todos={ visibleItem } 
         onDeleted={ this.deleteItem }
         onToggleImportant ={this.onToggleImportant}
         onToggleDone ={this.onToggleDone} />
         <AddTodoListItem
         addItem={this.addItem}
          />
      </div>
    );
  }
}