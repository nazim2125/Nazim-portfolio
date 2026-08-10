import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! 👋🏻
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name">
                  {" "}
                  Mohd Nazim Rasalat
                </strong>
              </h1>

              <div
                style={{
                  padding: 50,
                  textAlign: "left",
                }}
              >
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="SDET QA Automation Engineer"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row
          style={{
            paddingTop: "50px",
            paddingBottom: "80px",
          }}
        >
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>

            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              {/* GitHub */}
              <li className="social-icons">
                <a
                  href="https://github.com/nazim2125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub profile"
                >
                  <AiFillGithub />
                </a>
              </li>

              {/* LinkedIn */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nazim21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LinkedIn profile"
                >
                  <AiFillLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;