import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navibar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Test Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="root-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>Home</Nav>
            <Nav>Projects</Nav>
            <Nav>Contact me</Nav>
          </Nav>
        </Navbar.Collapse>
        <Button className="m-2">Log In</Button>
        <Button>Sing In</Button>
      </Container>
    </Navbar>
  );
}
