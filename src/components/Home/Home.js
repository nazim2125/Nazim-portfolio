import React, { useRef } from "react";
import GlassCard from "../GlassCard";
import useGlassReveal from "./useGlassReveal";
import resumePdf from "../../Assets/Mohd Nazim Rasalat QA Automation Engineer CV.pdf";
import {
  experience,
  profile,
  projects,
  skillGroups,
  stats,
  personalProjects,
} from "../../data/portfolioData";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineApi,
  AiOutlineCheckCircle,
  AiOutlineCode,
  AiOutlineDatabase,
  AiOutlineDownload,
  AiOutlineMail,
} from "react-icons/ai";
import { FiArrowDownRight, FiChevronDown, FiExternalLink, FiMapPin, FiPhone } from "react-icons/fi";

function SectionHeading({ title, id }) {
  return (
    <div className="section-heading">
      <h2 id={id}>{title}</h2>
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

function CoverageSummary() {
  return (
    <GlassCard as="aside" className="coverage-summary" aria-labelledby="coverage-heading">
      <header className="coverage-header">
        <AiOutlineCheckCircle aria-hidden="true" />
        <h2 id="coverage-heading">Test coverage</h2>
      </header>
      <dl className="coverage-metrics">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <ul className="coverage-layers">
        <li><AiOutlineCode aria-hidden="true" /><strong>Browser workflows</strong><span>Cross-browser checks</span></li>
        <li><AiOutlineApi aria-hidden="true" /><strong>REST APIs</strong><span>Positive and negative cases</span></li>
        <li><AiOutlineDatabase aria-hidden="true" /><strong>Database records</strong><span>Data consistency checks</span></li>
      </ul>
    </GlassCard>
  );
}

function ProjectCard({ project, revealOrder }) {
  return (
    <GlassCard as="article" className="premium-project-card" revealOrder={revealOrder}>
      <header className="project-card-header">
        <span>{project.domain}</span>
        <h3>{project.name}</h3>
      </header>
      <p className="project-highlight">
        <AiOutlineCheckCircle aria-hidden="true" />
        {project.highlight}
      </p>
      <div className="project-actions">
        <details className="project-details">
          <summary>Testing details <FiChevronDown aria-hidden="true" /></summary>
          <ul className="achievement-list compact">
            {project.details.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </details>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            <AiFillGithub aria-hidden="true" /> GitHub <FiExternalLink aria-hidden="true" />
          </a>
        )}
      </div>
    </GlassCard>
  );
}

function Home() {
  const page = useRef(null);
  useGlassReveal(page);

  return (
    <main ref={page} className="portfolio-page" id="main-content" tabIndex={-1}>
      <section className="hero-section section-shell" id="home">
        <GlassCard className="hero-copy" id="about">
          <p className="hero-role">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects">
              View projects <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="secondary-btn" href={resumePdf} download>
              <AiOutlineDownload aria-hidden="true" />
              Download resume
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" />
            Open to QA Automation and SDET roles
          </p>
        </GlassCard>

        <CoverageSummary />
      </section>

      <section className="section-shell featured-projects" id="projects" aria-labelledby="projects-heading">
        <SectionHeading title="Enterprise QA projects" id="projects-heading" />
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.name} project={project} revealOrder={index % 2} />)}
        </div>
      </section>

      <section className="section-shell" id="personal-projects">
        <SectionHeading title="Personal automation projects" />
        <div className="project-grid">
          {personalProjects.map((project, index) => <ProjectCard key={project.name} project={project} revealOrder={index} />)}
        </div>
      </section>

      <section className="section-shell" id="experience">
        <SectionHeading title="Work experience" />
        <div className="timeline">
          {experience.map(({ company, role, location, duration, highlights }, index) => (
            <GlassCard as="article" className="timeline-card" key={company} revealOrder={index}>
              <div className="timeline-heading">
                <div>
                  <h3>{role}</h3>
                  <p>{company}{location && ` • ${location}`}</p>
                </div>
                <span>{duration}</span>
              </div>
              <ul className="achievement-list">
                {highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-shell" id="skills">
        <SectionHeading title="Skills and tools" id="testing" />
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <GlassCard as="article" className="skill-card" key={group.title} revealOrder={index % 2}>
              <h3>{group.title}</h3>
              <PillList items={group.items} />
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="section-shell" id="contact">
        <GlassCard className="contact-card" revealOrder={0}>
          <h2>Get in touch</h2>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>
              <AiOutlineMail aria-hidden="true" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/ /g, "")}`}>
              <FiPhone aria-hidden="true" /> {profile.phone}
            </a>
            <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
          </div>
          <div className="hero-actions">
            <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin aria-hidden="true" /> LinkedIn
            </a>
            <a className="secondary-btn" href={profile.github} target="_blank" rel="noopener noreferrer">
              <AiFillGithub aria-hidden="true" /> GitHub
            </a>
          </div>
        </GlassCard>
      </section>
    </main>
  );
}

export default Home;
