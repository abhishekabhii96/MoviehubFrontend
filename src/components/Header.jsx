import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import imglogo from '../assets/movieappLogo.png';
import '../pages/stylee.css';

function Header({ logoutshow }) {
  const navigate = useNavigate(); // Initialize useNavigate

  // Logout handler function
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session storage
    // Redirect to login page or any other page
    navigate('/login');
  };

  return (
    <>
      <Navbar expand="lg" style={{ height: '170px' }}>
        <Container>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Navbar.Brand className='text-light fs-2'>
              <img src={imglogo} style={{ width: '70px' }} alt="MovieHubLogo" />
              MovieHub
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <ul className="navbar-menu d-flex flex-column flex-lg-row ms-auto">
              <li className="navbar-item me-lg-4 mt-1">
               {/*  <Link to={'/login'} style={{ color: 'grey', fontSize: '17px', textDecoration: 'none' }}>
                  Login
                </Link> */}
              </li>
              <li className="navbar-item me-lg-4 mt-1">
                <Link to={'/moviereviews'} style={{ color: 'grey', fontSize: '17px', textDecoration: 'none' }}>
                  MovieReviews
                </Link>
              </li>
              <li className="navbar-item mt-1">
                <Link to={'/about'} style={{ color: 'grey', fontSize: '17px', textDecoration: 'none' }}>
                  About
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
        {logoutshow && (
          <button
            className='btn text-warning me-4 mb-3'
            style={{ fontFamily: 'cursive', fontSize: '25px' }}
            onClick={handleLogout} // Attach the logout handler
          >
            Logout
          </button>
        )}
      </Navbar>
    </>
  );
}

export default Header;