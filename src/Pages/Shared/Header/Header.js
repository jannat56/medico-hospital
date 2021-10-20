import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
          <Container>
          <Navbar.Brand className="text-white" href="#home">Medico</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
            <Nav.Link as={HashLink} to="/home#facilities">Facilities</Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
            <Nav.Link as={Link} to="/review">Review</Nav.Link>
            <Nav.Link as={Link} to="/complain">Complain</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
           
          {  
          user?.email ?
          <Button onClick={logOut}variant="light">Logout</Button>
          :
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          
          }
      <Navbar.Text className="text-primary">
     
        Signed in as: <a className="text-primary" href="#login"> {user?.displayName || user.email}</a>
      </Navbar.Text>
    </Navbar.Collapse>
          </Container>
        </Navbar>
       
      </>
    );
};

export default Header;