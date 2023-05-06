import { FC } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import './Navigation.scss'
import { Button } from "react-bootstrap";

const Navigation: FC = () => {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container className="py-2 w-75">
        <Navbar.Brand href="#home">Examify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="px-3">Home</Nav.Link>
            <Nav.Link href="#link" className="px-3">Contact</Nav.Link>
            <Nav.Link href="#link" className="px-3">About us</Nav.Link>
            <Button variant="primary" className="px-5 mx-5">Sign in</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
