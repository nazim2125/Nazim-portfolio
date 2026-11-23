import React from "react";
import { profile } from "../data/portfolioData";

function Footer() {
  return (
    <footer className="footer">
      <small>© 2026 {profile.name}</small>
      <a href="#main-content">Back to top</a>
    </footer>
  );
}

export default Footer;
