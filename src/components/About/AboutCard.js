import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
  Hi everyone! I’m{" "}
  <strong className="purple">Mohd Nazim Rasalat</strong>.
  <br />
  <br />

  I’m a{" "}
  <strong className="purple">SDET / QA Automation Engineer</strong>{" "}
  with 2+ years of experience in software testing and test automation.
  <br />
  <br />

  I specialize in{" "}
  <strong className="purple">
    UI, API, End-to-End, Regression, and Database Testing
  </strong>
  . My core experience includes{" "}
  <strong className="purple">
    Playwright, Selenium WebDriver, Java, JavaScript, TypeScript,
    REST Assured, Postman, and SQL
  </strong>
  .
  <br />
  <br />

  I enjoy building{" "}
  <strong className="purple">
    scalable and maintainable test automation frameworks
  </strong>{" "}
  using Page Object Model, TestNG, and Cucumber BDD, while integrating
  automated tests into CI/CD pipelines.
  <br />
  <br />

  I’m passionate about finding defects early, improving test coverage,
  and helping teams deliver{" "}
  <strong className="purple">reliable, high-quality software</strong>.
</p>
          <footer className="blockquote-footer">Nazim</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
