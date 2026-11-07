import { useState } from "react";
import logo from "../../assets/logocomtroval.png";
import "./Navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleLinkClick = (label) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => handleLinkClick("Home")}>
          <img src={logo} alt="Comtrova" />
        </a>

        <nav
          id="navbar-menu"
          className={`navbar__menu ${open ? "navbar__menu--open" : ""}`}
          aria-label="Main navigation"
        >
          <ul className="navbar__links">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar__link ${active === link.label ? "navbar__link--active" : ""}`}
                  onClick={() => handleLinkClick(link.label)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary navbar__cta">
            Contact sales
          </a>
        </nav>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="navbar-menu"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}