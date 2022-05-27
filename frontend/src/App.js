import React from "react";
import './App.css';
import TodoList from "./Components/list/todo-list.component";
import Header from "./Components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList className="test" />
    </div>
  );
}

export default App;
