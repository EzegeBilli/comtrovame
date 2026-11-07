import adminImg from "../../assets/admin-dashboard.jpg";
import "./AdminSection.css";

const POINTS = [
  "Upload and manage documents in the Resource Centre",
  "Monitor guest/vendor entries and security logs",
  "View reports on resident activity, payments, and alerts",
  "Manage residents and approve new registrations",
  "Send notices and emergency alerts to all residents",
  "Track estate payments, dues, and donations",
];

function CheckIcon() {
  return (
    <svg
      className="admin__check"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M7 12.5l3.2 3.2L17 9"
        fill="none"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AdminSection() {
  return (
    <section id="admin" className="admin section">
      <div className="container">
        <h2 className="section-title">For Estate Admins &amp; Property Owners</h2>

        <p className="admin__subtitle">
          Take full control of your estate operations with tools designed to
          simplify management.
        </p>

        <div className="admin__layout">
          <div className="admin__content">
            <ul className="admin__list">
              {POINTS.map((point) => (
                <li key={point} className="admin__item">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn btn-primary admin__cta">
              Contact sales
            </a>
          </div>

          <img
            className="admin__image"
            src={adminImg}
            alt="Comtrova admin dashboard"
          />
        </div>
      </div>
    </section>
  );
}