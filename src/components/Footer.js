import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="footer-copywright">
          <h3>Designed and Developed by Mohd Nazim Rasalat</h3>
          <p>Copyright © {year} Mohd Nazim Rasalat</p>
        </Col>

        <Col md={12} className="footer-copywright">
          <a
            href="https://github.com/nazim2125"
            style={{ color: "white", marginRight: "20px" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <AiFillGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/nazim21/"
            style={{ color: "white" }}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <AiFillLinkedin size={30} />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;