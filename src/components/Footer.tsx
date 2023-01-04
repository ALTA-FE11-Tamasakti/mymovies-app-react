import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Facebook from "../assets/Facebook.svg";
import Instagram from "../assets/Instragram.svg";
import Tiktok from "../assets/Tiktok.svg";
import Twitter from "../assets/Twitter.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col>
              <h2
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
              >
                @Copyright FilmUhuy 2022
              </h2>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
