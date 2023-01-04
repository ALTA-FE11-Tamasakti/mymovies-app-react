import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ModalComponent from "./Modal";

interface CardProps {
  title: string;
  image: string;
}

export default class CardComponent extends Component<CardProps> {
  render() {
    return (
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={this.props.image}
                alt={this.props.title}
              />
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  <ModalComponent />
                </Card.Text>
                <Button variant="outline-success">Add To favorites</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
