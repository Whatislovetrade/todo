import React from "react";
import ReactDOM from "react-dom/client"; // В React 18 используем 'react-dom/client'
import AppHeader from "./components/app-header";
import TodoList from "./components/todo-list";
import SearchPanel from "./components/search-panel";

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

