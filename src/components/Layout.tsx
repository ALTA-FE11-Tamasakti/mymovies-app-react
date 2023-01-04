import React, { Component } from "react";
import CardComponent from "./Card";
import Navigation from "./Navbar";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Col } from "react-bootstrap";

interface LayoutProps {
  children: React.ReactNode;
}

export default class Layout extends Component<LayoutProps> {
  render() {
    return (
      <Container fluid="md">
        <Row>
          <Col>
            <Navigation />
            {this.props.children}
          </Col>
        </Row>
      </Container>
    );
  }
}
