import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "../assets/FY-BpW9XwAIXIui.jpg";

export default function ModalComponent() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Detail Movies
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Detail Movies
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} md={12}>
                <img src={Image} style={{ width: "90%" }} />
              </Col>
              <Col xs={12} md={12}>
                <p style={{ fontFamily: "Poppins", margin: "2rem 0" }}>
                  A cosmic entity called the Beyonder observes the mainstream
                  Marvel universe. Fascinated by the presence of superheroes on
                  Earth and their potential, this entity chooses a group of both
                  heroes and supervillains and teleports characters against
                  their will to "Battleworld", a planet created by the Beyonder
                  in a distant galaxy. This world has also been stocked with
                  alien weapons and technology. The Beyonder then declares: "I
                  am from beyond! Slay your enemies and all that you desire
                  shall be yours! Nothing you dream of is impossible for me to
                  accomplish!
                </p>
                <Button
                  variant="outline-success"
                  style={{ marginLeft: "32%", marginRight: "32%" }}
                >
                  Add To favorites
                </Button>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
