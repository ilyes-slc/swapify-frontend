import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logos/logo-name.png';
import logo1 from '../assets/logos/logo2.png';
import logobutton from '../assets/logos/button-logo.png';
import AuthService from '../services/auth.service'; // Import your AuthService

function Header() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Link to="/" className="navbar-brand">
            <img src={logo} width="160" alt="Swapify" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {!currentUser && (
                  <Link to="/signin" className="nav-link">
                    SignIn
                  </Link>
              )}
              <Link to="/team" className="nav-link">
                Team
              </Link>
              {currentUser && (
                  <>
                    <Link to="/items" className="nav-link">
                      Your Items
                    </Link>
                    <Link to="/items" className="nav-link">
                      Add Item
                    </Link>
                    <Link to="/swipe" className="nav-link">
                      <img src={logobutton} width="30" alt="Swap" />
                    </Link>
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                    <button onClick={handleLogout} className="nav-link">
                      Logout
                    </button>
                  </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;
