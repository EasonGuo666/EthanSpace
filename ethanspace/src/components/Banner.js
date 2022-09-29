import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Banner.css";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my space</span> */}
            <h1>{"Hi there! I'm Yixuan,"}</h1>
            <h1>{"a full stack developer."}</h1>
            <p>nihao</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
