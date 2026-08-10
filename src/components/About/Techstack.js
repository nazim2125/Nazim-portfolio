import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiSelenium,
  SiPlaywright,
  SiJavascript,
  SiTypescript,
  SiPostman,
  SiJenkins,
  SiGithubactions,
  SiApachemaven,
  SiCucumber,
  SiDocker,
  SiGit,
  SiPython,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Selenium */}
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
        <div className="tech-icons-text">Selenium</div>
      </Col>

      {/* Playwright */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPlaywright />
        <div className="tech-icons-text">Playwright</div>
      </Col>

      {/* Java */}
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
        <div className="tech-icons-text">Java</div>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      {/* TypeScript */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <div className="tech-icons-text">TypeScript</div>
      </Col>

      {/* REST Assured */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icon-text-large">API</div>
        <div className="tech-icons-text">REST Assured</div>
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* SQL */}
      <Col xs={4} md={2} className="tech-icons">
        <div className="tech-icons-text">SQL</div>
      </Col>

      {/* Cucumber */}
      <Col xs={4} md={2} className="tech-icons">
        <SiCucumber />
        <div className="tech-icons-text">Cucumber BDD</div>
      </Col>

      {/* Maven */}
      <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        <div className="tech-icons-text">Maven</div>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      {/* GitHub Actions */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <div className="tech-icons-text">GitHub Actions</div>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <div className="tech-icons-text">Git</div>
      </Col>

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
    </Row>
  );
}

export default Techstack;