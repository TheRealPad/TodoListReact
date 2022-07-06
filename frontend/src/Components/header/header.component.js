import React from "react";
import './header.component.css';
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { FaHome, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar className="nav-bar" bg="dark" variant="dark">
        <div>
        <Container className="elem-nav">
            <div>
              <Link to={"/"} 
                className="nav-link">
                  <button className="button-nav">
                    <FaHome className="icon-button"/>
                  </button>
              </Link>
            </div>
            <div>
              <Link to={"/create-student"} 
                className="nav-link">
                  <button className="button-nav">
                    Add todo
                  </button>
              </Link>
            </div>
        </Container>
        </div>
        <div className="profil">
          Pierre-Alexandre <FaUserAlt/>
        </div>
      </Navbar>
    </header>
  );
}

export default Header;
