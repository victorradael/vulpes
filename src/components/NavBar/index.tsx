import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../../public/logo_written.svg";
import styles from "./styles.module.css";

function NavigationBar() {
  return (
    <Navbar variant="dark" expand="xxl" className={styles.nav}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo} alt="Vulpes Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">Sobre nós</Nav.Link>
            <Nav.Link href="#link">Preços</Nav.Link>
            <NavDropdown title="Outros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Missão</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Visão
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Valores</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Fale conosco
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
