import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import LeftSideNav from "./LeftSideNav/LeftSideNav";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link to="/">Dragon News 24 </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="categories">Categories</Nav.Link>
              <Nav.Link href="news">News</Nav.Link>
            </Nav>
            {
              <div className="d-lg-none">
                <LeftSideNav></LeftSideNav>
              </div>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
