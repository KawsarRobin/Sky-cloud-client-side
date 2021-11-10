import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <img
          src="http://hrkit.rometheme.pro/skyandcloud/wp-content/uploads/sites/10/2021/06/logo-6.png"
          alt=""
          className="img-fluid"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto text-white my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/explore" className="text-white">
              Explore
            </Nav.Link>

            {user.email ? (
              <>
                <Nav.Link as={Link} to="/dashboard" className="text-white">
                  Dashboard
                </Nav.Link>
                <Nav.Link className="text-white">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={logOut}
                  >
                    {' '}
                    LogOut
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login" className="text-white">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
