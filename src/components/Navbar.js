import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import resumePdf from "../Assets/Mohd Nazim Rasalat QA Automation Engineer CV.pdf";
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import { profile } from "../data/portfolioData";

const navLinks = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["testing", "Testing Expertise"],
  ["contact", "Contact"],
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);

      const sections = navLinks.map(([id]) => document.getElementById(id)).filter(Boolean);
      let current = sections[0];
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          current = section;
        }
      });

      if (current) {
        setActiveSection(current.id);
      }
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="lg"
      className={navColour ? "site-nav sticky" : "site-nav"}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-mark" onClick={closeMenu}>
          Nazim.<span className="hero-highlight">dev</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span />
          <span />
          <span />
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            {navLinks.map(([id, label]) => (
              <Nav.Item key={id}>
                <Nav.Link
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={closeMenu}
                >
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <div className="nav-actions">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <AiFillGithub aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <AiFillLinkedin aria-hidden="true" />
            </a>
            <a className="resume-nav-btn" href={resumePdf} download>
              <AiOutlineDownload aria-hidden="true" />
              Resume
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <BsSun aria-hidden="true" /> : <BsMoon aria-hidden="true" />}
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
