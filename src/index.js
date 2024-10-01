import React from "react";
import ReactDOM from "react-dom/client"; // В React 18 используем 'react-dom/client'

const el = (
  <div>
      <h1>My Todo List</h1>
      <input placeholder="search"></input>
      <ul>
        <li>Learn React</li>
        <li>Build Awesome App</li>
      </ul>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el);

