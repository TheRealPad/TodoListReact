import React from "react";
import './header.component.css';
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
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
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
