import React, { useState } from "react";
import resumePdf from "../../Assets/Mohd Nazim Rasalat QA Automation Engineer CV.pdf";
import {
  experience,
  principles,
  profile,
  projects,
  skillGroups,
  stats,
  testingExpertise,
  workflowSteps,
  personalProjects,
} from "../../data/portfolioData";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineApi,
  AiOutlineCheckCircle,
  AiOutlineCloudServer,
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineDownload,
  AiOutlineMail,
  AiOutlineRocket,
  AiOutlineSafety,
} from "react-icons/ai";
import {
  SiSelenium,
  SiPlaywright,
  SiOpenjdk,
  SiTypescript,
  SiPostman,
  SiMysql,
  SiTestinglibrary
} from "react-icons/si";
import { BsSpeedometer2 } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const stackNodes = [
  ["PLAN", "Requirements / Test Scenarios"],
  ["BUILD", "Selenium / Playwright"],
  ["EXECUTE", "TestNG / Cucumber"],
  ["VERIFY", "REST Assured / SQL"],
  ["DELIVER", "Jenkins / GitHub Actions"],
  ["IMPROVE", "Reports / Defects"],
];

const ciCdFlows = [
  ["GitHub Push", "GitHub Actions", "Playwright Tests", "Test Results"],
  ["Deployment", "Jenkins", "Selenium Regression", "Test Results"],
];

const apiFlow = ["REST API", "Request", "Response", "Status Code", "Schema Validation", "Database Validation"];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function PillList({ items }) {
  return (
    <div className="pill-list">
      {items.map((item) => (
        <span className="pill" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}
const techIcons = {
  Selenium: SiSelenium,
  Playwright: SiPlaywright,
  Java: SiOpenjdk,
  TypeScript: SiTypescript,
  TestNG: SiTestinglibrary,
  "REST Assured": AiOutlineApi,
  Postman: SiPostman,
  SQL: SiMysql,
};
const TechStack = ({ items }) => (
  <div className="tech-stack">
    {items.map((tech) => {
      const Icon = techIcons[tech];

      return (
        <span className="tech-pill" key={tech}>
          {Icon && <Icon className="tech-icon" />}
          <span>{tech}</span>
        </span>
      );
    })}
  </div>
);

function AutomationVisual() {
  const steps = ["Test Case", "UI Automation", "API Validation", "Database Validation", "CI/CD Pipeline", "Quality Release"];

  return (
    <div className="automation-card reveal" aria-label="Automation pipeline">
      <div className="automation-card-header">
        <span>Automation Pipeline</span>
        <AiOutlineRocket aria-hidden="true" />
      </div>
      <div className="pipeline">
        {steps.map((step, index) => (
          <div className="pipeline-step" key={step}>
            <span>{step}</span>
            {index < steps.length - 1 && <i aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const [activeTest, setActiveTest] = useState(testingExpertise[0]);

  return (
    <main className="portfolio-page">
      <section className="hero-section section-shell" id="home">
        <div className="hero-copy reveal">
          <span className="status-badge">SDET | QA AUTOMATION ENGINEER</span>
          <h1>
           Building Reliable Software Through{" "}
           <span className="hero-highlight">Quality Engineering.</span>
           </h1>
          <p className="hero-summary">{profile.summary}</p>
          <TechStack items={profile.stack} />
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              <AiOutlineCheckCircle aria-hidden="true" />
              View My Work
            </a>
            <a className="secondary-btn" href={resumePdf} download>
              <AiOutlineDownload aria-hidden="true" />
              Download Resume
            </a>
          </div>
          <div className="hero-links" aria-label="Professional profiles">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub aria-hidden="true" />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin aria-hidden="true" />
              LinkedIn
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" />
            Open to QA Automation / SDET Opportunities
          </p>
        </div>

        <AutomationVisual />
      </section>

      <section className="about-panel section-shell" id="about">
        <SectionHeading
          eyebrow="About"
          title="Quality Engineering With a Manual + Automation Mindset"
          text="I work across UI automation, API testing, database validation, functional testing, regression coverage, cross-browser checks, CI/CD execution, and performance testing for enterprise web applications."
        />
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              Quality Engineering With a Manual + Automation Mindset
              My QA experience spans E-Retail, IT Service Management, and Healthcare Recruitment domains, where I design automation that gives teams faster regression feedback without losing sight of real user and business behavior.
            </p>
            <p>
              I combine manual testing fundamentals with automation using Selenium WebDriver, Java, Playwright, TypeScript, REST Assured, Postman, and SQL — covering regression, cross-browser, CI/CD execution, and performance testing.
            </p>
            <p>
              I believe effective QA is not about choosing manual or automation—it is about choosing the right testing approach for the problem. My goal is to combine manual testing expertise with reliable automation to improve product quality, accelerate feedback, and give teams confidence to release.
            </p>
          </div>
          <div className="stats-grid reveal">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="skills">
        <SectionHeading
          eyebrow="Skills"
          title="QA & Automation Technology Stack"
          text="From test cases to automation, API validation, database checks, and CI/CD - focused on reliable software quality."
        />
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-card-top">
                <AiOutlineSafety aria-hidden="true" />
                <h3>{group.title}</h3>
              </div>
              <p>{group.description}</p>
              <PillList items={group.items} />
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell stack-section">
        <SectionHeading
          eyebrow="Automation Stack"
          title="My Automation Stack"
          text="From test design to continuous integration, connecting UI automation, API validation, database checks, and test reporting."
        />
        <div className="stack-map reveal">
          {stackNodes.map(([title, detail], index) => (
            <div className="stack-node" key={title}>
              <span>{title}</span>
              <strong>{detail}</strong>
              {index < stackNodes.length - 1 && <i aria-hidden="true" />}
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell" id="experience">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise QA Automation Experience"
          text="Building and maintaining reliable UI, API, and database test automation with CI/CD integration for faster regression testing and release validation."
        />
        <article className="timeline-card reveal">
          <div className="timeline-marker" aria-hidden="true" />
          <div className="timeline-content">
            <div className="timeline-heading">
              <div>
                <h3>{experience.role}</h3>
                <p>{experience.company} • {experience.location}</p>
              </div>
              <span>{experience.duration}</span>
            </div>
            <div className="metric-row">
              {experience.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
            <ul className="achievement-list">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <PillList items={experience.tools} />
          </div>
        </article>
      </section>

        {/* =========================
    PROFESSIONAL PROJECTS
========================= */}

<section className="section-shell" id="projects">
  <SectionHeading
    eyebrow="Professional Projects"
    title="Enterprise QA Projects"
    text="Real-world testing experience across UI automation, API validation, database testing, CI/CD, and performance testing."
  />

  <div className="project-grid">
    {projects.map((project) => (
      <article
        className="premium-project-card reveal"
        key={project.name}
      >
        <div className="project-card-header">
          <span>{project.domain}</span>
          <h3>{project.name}</h3>
          <p>{project.role}</p>
        </div>

        <div className="module-strip">
          {project.modules.map((module) => (
            <span key={module}>{module}</span>
          ))}
        </div>

        <p className="project-approach">
          {project.approach}
        </p>

        <ul className="achievement-list compact">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <PillList items={project.stack} />
      </article>
    ))}
  </div>
</section>


{/* =========================
    PERSONAL PROJECTS
========================= */}

<section className="section-shell" id="personal-projects">
  <SectionHeading
    eyebrow="Personal Projects"
    title="Projects I Build Outside of Work"
    text="Independent projects where I apply automation, API testing, software development, and modern engineering practices."
  />

  <div className="project-grid">
    {personalProjects.map((project) => (
      <article
        className="premium-project-card reveal"
        key={project.name}
      >
        <div className="project-card-header">
          <span>{project.domain}</span>
          <h3>{project.name}</h3>
          <p>{project.role}</p>
        </div>

        <div className="module-strip">
          {project.modules.map((module) => (
            <span key={module}>{module}</span>
          ))}
        </div>

        <p className="project-approach">
          {project.approach}
        </p>

        <ul className="achievement-list compact">
          {project.achievements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <PillList items={project.stack} />

        {/* GitHub Button */}
        {project.github && (
          <div className="hero-links" aria-label="Professional profiles">
            <a
              href={project.github}
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} on GitHub`}
            >
              <AiFillGithub
                className="github-icon"
                aria-hidden="true"
              />
              <span>GitHub</span>
            </a>
          </div>
        )}
      </article>
    ))}
  </div>
</section>

      <section className="section-shell" id="testing">
        <SectionHeading
          eyebrow="Testing Expertise"
          title="What I Test"
          text="Select a testing area to see how I approach it across practical release workflows."
        />
        <div className="expertise-layout reveal">
          <div className="expertise-tabs" role="tablist" aria-label="Testing expertise">
            {testingExpertise.map((item) => (
              <button
                className={activeTest.title === item.title ? "active" : ""}
                key={item.title}
                type="button"
                onClick={() => setActiveTest(item)}
                role="tab"
                aria-selected={activeTest.title === item.title}
              >
                {item.title}
              </button>
            ))}
          </div>
          <article className="expertise-detail">
            <AiOutlineCheckCircle aria-hidden="true" />
            <h3>{activeTest.title}</h3>
            <p>{activeTest.text}</p>
          </article>
        </div>
      </section>

      <section className="section-shell workflow-section">
        <SectionHeading
          eyebrow="Workflow"
          title="Quality Engineering Workflow"
          text="A practical route from requirement review to release validation, with automation placed where it improves confidence and feedback speed."
        />
        <div className="workflow-track reveal">
          {workflowSteps.map((step, index) => (
            <div className="workflow-step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell split-section">
        <div className="split-card reveal">
          <SectionHeading eyebrow="CI/CD" title="Automation in CI/CD" />
          <div className="flow-columns">
            {ciCdFlows.map((flow) => (
              <div className="flow-card" key={flow[0]}>
                {flow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            ))}
          </div>
          <p>GitHub Actions and Jenkins help run automated checks, regression testing, and continuous validation as part of delivery workflows.</p>
        </div>
        <div className="split-card reveal">
          <SectionHeading eyebrow="API" title="API Testing Dashboard" />
          <div className="api-dashboard">
            {apiFlow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <PillList items={["REST Assured", "Postman", "SQL", "JSON Schema Validation"]} />
        </div>
      </section>

      <section className="section-shell split-section">
        <div className="split-card reveal">
          <SectionHeading eyebrow="Database" title="UI to API to Database Validation" />
          <div className="layer-chain">
            <span><AiOutlineCode aria-hidden="true" /> UI</span>
            <span><AiOutlineApi aria-hidden="true" /> API</span>
            <span><AiOutlineDatabase aria-hidden="true" /> Database</span>
          </div>
          <p>I validate backend data using SQL and compare consistency across the UI, API responses, and persisted database state.</p>
          <pre aria-label="Demo SQL query"><code>{`SELECT order_id, status, updated_at
FROM orders
WHERE customer_id = 'DEMO_CUSTOMER_001';`}</code></pre>
        </div>
        <div className="split-card reveal">
          <SectionHeading eyebrow="Performance" title="Performance Testing" />
          <div className="performance-grid">
            {["Load Testing", "Stress Testing", "Response Time", "Concurrent Users", "Bottleneck Identification"].map((item) => (
              <span key={item}><BsSpeedometer2 aria-hidden="true" /> {item}</span>
            ))}
          </div>
          <p>Used JMeter on the IT Help Desk Portal project for load and stress testing around ticket-submission endpoints.</p>
        </div>
      </section>

      <section className="section-shell split-section">
        <div className="split-card reveal">
          <SectionHeading eyebrow="AI-Assisted Testing" title="Responsible AI Support for QA" />
          <PillList items={["Test idea generation", "Edge-case identification", "Test data generation", "Failure-log analysis", "Debugging assistance"]} />
          <p>AI-assisted tools support test thinking and analysis, while QA decisions, validation, and release judgment remain engineer-led.</p>
        </div>
        <div className="split-card reveal">
          <SectionHeading eyebrow="Principles" title="My QA Engineering Principles" />
          <div className="principle-list">
            {principles.map(([number, title, text]) => (
              <article key={title}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell contact-band" id="contact">
        <div className="cta-card reveal">
          <div>
            <span className="eyebrow">GitHub</span>
            <h2>Explore My Automation Work</h2>
            <p>View public automation repositories and project work on GitHub.</p>
          </div>
          <a className="secondary-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub aria-hidden="true" />
            GitHub Profile
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>

        <div className="cta-card reveal">
          <div>
            <span className="eyebrow">LinkedIn</span>
            <h2>Let's Connect</h2>
            <p>Interested in QA Automation, SDET and Software Quality Engineering opportunities.</p>
          </div>
          <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin aria-hidden="true" />
            View LinkedIn Profile
            <FiExternalLink aria-hidden="true" />
          </a>
        </div>

        <div className="cta-card resume-cta reveal">
          <div>
            <span className="eyebrow">Resume</span>
            <h2>Want the Full Story?</h2>
            <p>Download my resume to explore my experience, projects, automation frameworks and technical skills.</p>
          </div>
          <a className="primary-btn" href={resumePdf} download>
            <AiOutlineDownload aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <div className="contact-card reveal">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let's Build Better Software</h2>
            <p>Open to QA Automation Engineer, SDET and Software Testing opportunities.</p>
          </div>
          <div className="contact-details">
            <span><AiOutlineMail aria-hidden="true" /> {profile.email}</span>
            <span><AiOutlineCloudServer aria-hidden="true" /> {profile.location}</span>
          </div>
          <div className="hero-actions">
            <a className="primary-btn" href={`mailto:${profile.email}`}>
              <AiOutlineMail aria-hidden="true" />
              Email Me
            </a>
            <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a className="secondary-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      <a className="sticky-resume" href={resumePdf} download aria-label="Download resume">
        <AiOutlineDownload aria-hidden="true" />
        Resume
      </a>
    </main>
  );
}

export default Home;
