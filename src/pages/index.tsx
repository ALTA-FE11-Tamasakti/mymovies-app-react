import { Component, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Layout from "../components/Layout";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col } from "react-bootstrap";
import CardComponent from "../components/Card";
import CarouselComponent from "../components/Carousel";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DatasType {
  id: number;
  title: string;
  image: string;
}

export default class Index extends Component<DatasType> {
  state = {
    datas: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    let count = 1;
    count += 1;
    setTimeout(() => {
      this.setState({
        datas: [
          {
            id: new Date(),
            title: `Avengers Movies`,
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
          {
            id: new Date(),
            title: `Avengers `,
            image: "https://pbs.twimg.com/media/FY-BpW9XwAIXIui.jpg",
          },
        ],
      });
    }, 6000);
  }
  render() {
    return (
      <Container fluid="md">
        <Row>
          <Col>
            <Layout>
              <CarouselComponent />
              <Row xs={1} md={2} className="g-4">
                {this.state.datas.map((data: DatasType) => (
                  <CardComponent
                    key={data.id}
                    title={data.title}
                    image={data.image}
                  />
                ))}
              </Row>
              {/* <h1>Favorites</h1>
              <Row xs={1} md={2} className="g-4">
                {this.state.datas.map((data: DatasType) => (
                  <CardComponent
                    key={data.id}
                    title={data.title}
                    image={data.image}
                  />
                ))}
              </Row> */}
              <Container fluid="md">
                <Footer />
              </Container>
            </Layout>
          </Col>
        </Row>
      </Container>
    );
  }
}
