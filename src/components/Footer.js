import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.title}</p>
        <span>Quality through automation.</span>
      </div>
      <nav aria-label="Footer links">
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
          <AiFillGithub aria-hidden="true" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
          <AiFillLinkedin aria-hidden="true" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email Mohd Nazim Rasalat">
          <AiOutlineMail aria-hidden="true" />
        </a>
      </nav>
      <small>© 2026 Mohd Nazim Rasalat</small>
    </footer>
  );
}

export default Footer;
