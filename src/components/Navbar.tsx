import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#">FilmUhuy!</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              variant="pills"
              navbarScroll
            >
              <Button variant="outline-dark" style={{ border: "none" }}>
                Home
              </Button>
              <Button variant="outline-dark" style={{ border: "none" }}>
                Favorites
              </Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
