import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />

      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the projects I have worked on across web,
          API, and test automation.
        </p>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
          }}
        >
          {/* Project 1 */}
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="E-Retail Inventory Management System"
              description="Worked as a QA Automation Engineer on an enterprise e-commerce inventory management system. Automated 90+ Selenium WebDriver test cases across Inventory, Orders, User Management, and Shipment modules using Java, TestNG, Maven, Page Object Model, and Cucumber BDD. Validated inventory and order APIs using Postman, verified backend data using SQL, and performed Smoke, Regression, Functional, and Cross-Browser testing across Chrome, Firefox, and Edge. Integrated automated test execution with Jenkins."
            />
          </Col>

          {/* Project 2 */}
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Find Us Here - IT Help Desk Portal"
              description="Worked as a QA Automation Engineer on an IT service management portal. Built a hybrid Selenium WebDriver framework combining data-driven testing and Page Object Model using Java, TestNG, Maven, Cucumber BDD, and Apache POI. Automated 70+ REST Assured API scenarios covering CRUD, validation, and negative test cases. Also performed JMeter Load and Stress testing and integrated regression execution through Jenkins CI/CD."
            />
          </Col>

          {/* Project 3 */}
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="StaffDNA - Healthcare Recruitment Platform"
              description="Worked as a QA Automation Engineer on a healthcare recruitment platform. Automated 90+ Playwright test cases using TypeScript and Page Object Model covering healthcare recruitment workflows. Performed Smoke, Regression, Sanity, Functional, API, and Cross-Browser testing. Validated REST APIs using Postman, verified backend data with SQL, and configured GitHub Actions to execute Playwright automation suites automatically on every push."
            />
          </Col>

          {/* Personal Project */}
          <Col md={6} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Playwright E-Commerce Automation"
              description="Built an end-to-end Playwright automation framework for an e-commerce application using JavaScript. Automated critical user journeys including registration, login, product search, product selection, cart management, checkout, order workflows, and account management. Implemented reusable Page Object Model components and structured test suites for functional, smoke, regression, and end-to-end testing. Added cross-browser testing with screenshots, videos, and trace capture for failed tests to simplify debugging and improve test reliability."
              ghLink="https://github.com/nazim2125/playwrightEcommerceTests"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
