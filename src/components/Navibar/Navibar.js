import { Nav, Navbar, Container } from "react-bootstrap";

export default function Navibar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Test Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="root-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>Home</Nav>
          <Nav>Projects</Nav>
          <Nav>Contact me</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
