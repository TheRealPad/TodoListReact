import React from "react";
import './App.css';
import TodoList from "./Components/list/todo-list.component";
import Footer from "./Components/footer/footer.component";
import Header from "./Components/header/header.component";

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
      <Footer/>
    </div>
  );
}

export default App;
