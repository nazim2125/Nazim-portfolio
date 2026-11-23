import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import resumePdf from "../Assets/Mohd Nazim Rasalat QA Automation Engineer CV.pdf";
import { AiOutlineCheck, AiOutlineDownload } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { profile } from "../data/portfolioData";

const navLinks = [
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["contact", "Contact"],
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const { pathname } = useLocation();
  const homePrefix = pathname === "/resume" ? "/" : "";
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const scrollHandler = () => {
      const sections = navLinks.map(([id]) => document.getElementById(id)).filter(Boolean);
      let current;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= 120) {
          current = section;
        }
      });

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      setActiveSection((atBottom ? sections[sections.length - 1] : current)?.id);
    };

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [pathname]);

  const closeMenu = () => updateExpanded(false);

  return (
    <Navbar
      expanded={expand}
      onToggle={updateExpanded}
      fixed="top"
      expand="lg"
      className="site-nav"
    >
      <Container>
        <Navbar.Brand href={`${homePrefix}#home`} className="brand-mark" onClick={closeMenu}>
          <AiOutlineCheck aria-hidden="true" />
          {profile.shortName} Rasalat
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-expanded={expand}
          label="Toggle navigation"
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
                  href={`${homePrefix}#${id}`}
                  aria-current={activeSection === id ? "location" : undefined}
                  className={activeSection === id ? "active" : ""}
                  onClick={closeMenu}
                >
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <div className="nav-actions">
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
