import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a <b className="purple">SDET / QA Automation Engineer</b>{" "}
              with 2+ years of experience in software testing, specializing
              in building reliable and scalable automation solutions for
              web applications.
              <br />
              <br />

              I have hands-on experience with{" "}
              <i>
                <b className="purple">
                  Selenium WebDriver, Playwright, Java, JavaScript,
                  TypeScript, REST Assured, Postman, and SQL
                </b>
              </i>
              , with a strong focus on UI, API, end-to-end, regression, and
              database testing.
              <br />
              <br />

              I enjoy designing{" "}
              <i>
                <b className="purple">
                  reusable test automation frameworks
                </b>
              </i>{" "}
              using Page Object Model, TestNG, Cucumber BDD, and modern
              automation practices to improve test coverage and reduce
              regression testing time.
              <br />
              <br />

              My key areas of interest include{" "}
              <i>
                <b className="purple">
                  Test Automation, API Testing, UI Testing, CI/CD, and
                  Quality Engineering
                </b>
              </i>
              . I also work with tools such as{" "}
              <b className="purple">Jenkins, GitHub Actions, Git, Docker,</b>{" "}
              and JIRA to integrate testing into Agile development workflows.
              <br />
              <br />

              I’m passionate about finding defects early, improving software
              quality, and building automation that makes testing{" "}
              <b className="purple">faster, reliable, and maintainable.</b>
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="SDET QA Automation Engineer"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;