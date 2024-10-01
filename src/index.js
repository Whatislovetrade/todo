import React from "react";
import ReactDOM from "react-dom/client"; // В React 18 используем 'react-dom/client'

const TodoList = () => {
  return (
    <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
      </ul>
  )
}

const AppHeader = () => {
  return <h1>My Todo List</h1>
}

const SearchPanel = () => {
  return <input placeholder="search"></input>
}

const App = () => {
  return (
    <div>
    <AppHeader />
    <SearchPanel />
    <TodoList />
  </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

