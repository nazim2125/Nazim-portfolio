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
  ["TEST", "Manual Testing / UI Automation"],
  ["VALIDATE", "API Testing / Database Validation"],
  ["AUTOMATE", "Selenium / Playwright / TestNG"],
  ["DELIVER", "Jenkins / GitHub Actions"],
  ["IMPROVE", "Reports / Defects"],
];

const ciCdFlows = [
  ["GitHub Push", "GitHub Actions", "Playwright Tests", "Test Results"],
  ["Deployment", "Jenkins", "Selenium Regression", "Test Results"],
];

const apiFlow = ["Request", "Response", "Status Code", "Validation", "Validation"];

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
  const steps = [
    "Manual Testing",
    "Test Design",
    "UI Automation",
    "API Testing",
    "Database Validation",
    "CI/CD",
    "Quality Release",
  ];

  return (
    <div
      className="automation-card reveal"
      aria-label="QA testing and automation pipeline"
    >
      <div className="automation-card-header">
        <span>QA Testing & Automation</span>
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
           Making Software Reliable,{" "}
           <span className="hero-highlight">From First Test to Final Release.</span>
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
          title="Quality Engineering Across Manual Testing & Automation"
          text="I work on enterprise applications where understanding the user journey, business rules, and failure scenarios is just as important as building reliable test coverage."
        />
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              My QA experience spans E-Retail, IT Service Management, and Healthcare Recruitment, covering manual testing, UI automation, API testing, database validation, and end-to-end workflows. I use Selenium WebDriver with Java and Playwright with TypeScript for repeatable UI coverage, while REST Assured, Postman, and SQL help validate APIs and backend data.
            </p>
            <p>
              My testing approach covers functional, regression, smoke, sanity, cross-browser, API, database, and performance testing. I also integrate automation with Jenkins and GitHub Actions to support repeatable execution and faster feedback throughout the release cycle.
            </p>
            <p>
              I use manual testing to explore behavior, challenge business scenarios, and uncover edge cases, then automate stable and repeatable workflows where it improves coverage and feedback. This allows me to balance hands-on QA analysis with maintainable automation and support more confident releases.
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
          title="QA Engineering & Technology Stack"
          text="From manual test design and exploratory testing to automation, API validation, database checks, and CI/CD execution."
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
          eyebrow="QA Stack"
          title="My QA Workflow"
          text="From understanding requirements and designing test scenarios to automation, API/database validation, CI/CD execution, and defect feedback."
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
          title="QA Engineering Experience"
          text="2+ years of hands-on experience combining manual testing, UI automation, API validation, database testing, and CI/CD across enterprise applications."
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
            <div className="metric-row">
              {experience.domain.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
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
          title="How I Approach Quality"
          text="From understanding the requirement to validating the release, I combine manual testing, automation, API and database checks to find issues early and provide reliable release feedback."
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
          <SectionHeading eyebrow="CI/CD" title="Automation That Runs With the Delivery Pipeline" />
          <div className="flow-columns">
            {ciCdFlows.map((flow) => (
              <div className="flow-card" key={flow[0]}>
                {flow.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            ))}
          </div>
          <p>I integrate automated tests into CI/CD workflows so regression checks run consistently and provide feedback before release.</p>
        </div>
        <div className="split-card reveal">
          <SectionHeading eyebrow="API" title="API Testing Dashboard" />
          <div className="api-dashboard">
            {apiFlow.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <PillList items={["REST Assured", "Postman", "SQL", "JSON Validation"]} />
          <br></br>
          <p >I integrate automated tests into CI/CD workflows so regression checks run consistently and provide feedback before release.</p>
        </div>
        
      </section>

      <section className="section-shell split-section">
        <div className="split-card reveal">
          <SectionHeading eyebrow="Database" title="Tracing Data From UI to Database" />
          <div className="layer-chain">
            <span><AiOutlineCode aria-hidden="true" /> UI</span>
            <span><AiOutlineApi aria-hidden="true" /> API</span>
            <span><AiOutlineDatabase aria-hidden="true" /> Database</span>
          </div>
          <p>I verify that data remains consistent across the application layers by comparing UI behavior, API responses, and persisted database records.</p>
          <pre aria-label="Demo SQL query"><code>{`SELECT order_id, status, updated_at
           FROM orders
           WHERE customer_id = 'DEMO_CUSTOMER_001';`}</code></pre>
        </div>
        <div className="split-card reveal">
          <SectionHeading eyebrow="Performance" title="Performance Testing With JMeter" />
          <div className="performance-grid">
            {["Load Testing", "Stress Testing", "Response Time", "Concurrent Users", "Bottleneck Identification"].map((item) => (
              <span key={item}><BsSpeedometer2 aria-hidden="true" /> {item}</span>
            ))}
          </div>
          <p>For the Healthcare Recruitment Platform, I used JMeter to evaluate ticket-submission endpoints under load and stress conditions, focusing on response times, concurrent users, and potential bottlenecks.</p>
        </div>
      </section>

      <section className="section-shell split-section">
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
        <div className="split-card reveal">
          <SectionHeading eyebrow="AI-Assisted Testing" title="Using AI to Support QA, Not Replace It" />
          <PillList items={["Test idea generation", "Edge-case identification", "Test data generation", "Failure-log analysis", "Debugging assistance"]} />
          <br></br>
          <p>I use AI-assisted tools selectively to speed up test analysis and preparation — while keeping test design, validation, defect decisions, and release judgment engineer-led.</p>
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
