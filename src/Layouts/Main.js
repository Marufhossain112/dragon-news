import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="2">Side Nav</Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">Right Side</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
