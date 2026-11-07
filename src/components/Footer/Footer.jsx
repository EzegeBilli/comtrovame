import "./Footer.css";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Frequently asked questions", href: "#faq" },
];

// Replace the "#" links with your real social media pages
const SOCIALS = [
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__about">
          <h3 className="footer__heading">About Comtrova</h3>
          <p className="footer__text">
            This is a modern estate management solution designed to simplify
            operations for residential estates. From managing guest access,
            utility payments, and emergency alerts to enabling communication
            between residents and admins — everything is centralized in one
            secure, user-friendly platform.
          </p>

          <ul className="footer__socials">
            {SOCIALS.map((social) => (
              <li key={social.label}>
                <a href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="footer__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact us</h3>
          <ul className="footer__list">
            <li>
              <a href="mailto:info@comtrovaadmin.com" className="footer__link footer__contact">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                info@comtrovaadmin.com
              </a>
            </li>
            <li>
              <a href="tel:+234808712812" className="footer__link footer__contact">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                </svg>
                +234808712812
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}