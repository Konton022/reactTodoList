import { Nav, Navbar, Container, Button } from "react-bootstrap";

export default function Navibar() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>Test Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="root-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Projects</Nav.Link>
            <Nav.Link>Contact me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="m-2">Log In</Button>
        <Button>Sing In</Button>
      </Container>
    </Navbar>
  );
}
