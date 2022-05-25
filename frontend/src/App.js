import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaHome } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar className="nav-bar" bg="dark" variant="dark">
          <Container className="elem-nav">
              <div>
                <Link to={"/"} 
                  className="nav-link">
                    <button className="button-nav" type="button">
                      <FaHome className="icon-button"/>
                    </button>
                </Link>
              </div>
              <div>
                <Link to={"/create-student"} 
                  className="nav-link">
                    <button className="button-nav" type="button">
                      Add todo
                    </button>
                </Link>
              </div>
              <div>
                <Link to={"/student-list"} 
                  className="nav-link">
                    <button className="button-nav" type="button">
                      Todo list
                    </button>
                </Link>
              </div>
          </Container>
        </Navbar>
      </header>
      <body>
        <div className="box">
          <h1>
            Une API en react js et node js
          </h1>
          <h2>
            Stockant les données dans une base de donnée mangodb
          </h2>
          <p>
            Cette API CRUD a été réalisé par Pierre-Alexandre Delgado, étudiant a Epitech Paris en 2ème année<br/>
            <a href="https://github.com/TheRealPad">github</a><br/>
            <a href="https://www.linkedin.com/in/pierre-alexandre-delgado-106b81202">linkedin</a><br/>
            mail: delgadopierrealexandre@gmail.com<br/>
            API CRUD pouvant AJOUTER, MODIFIER, SUPPRIMER et LISTER tous les utilisateurs venant de la base de donnée.
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;
