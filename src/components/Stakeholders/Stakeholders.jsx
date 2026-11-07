import managersImg from "../../assets/stakeholder-managers.jpg";
import residentsImg from "../../assets/stakeholder-residents.jpg";
import securityImg from "../../assets/stakeholder-security.jpg";
import "./Stakeholders.css";

const STAKEHOLDERS = [
  {
    title: "Estate Managers",
    text: "Automate manual processes, cut down on fraud, and run a tighter ship.",
    image: managersImg,
  },
  {
    title: "Residents",
    text: "Enjoy hassle-free payments, visitor approvals, and real-time estate updates.",
    image: residentsImg,
  },
  {
    title: "Security Teams",
    text: "Get full logs of every guest, vendor, and emergency activity.",
    image: securityImg,
  },
];

export default function Stakeholders() {
  return (
    <section id="stakeholders" className="stakeholders section">
      <div className="container">
        <h2 className="section-title">A Smart Platform for All Stakeholders</h2>

        <div className="stakeholders__grid">
          {STAKEHOLDERS.map((item) => (
            <article key={item.title} className="stakeholder-card">
              <img
                className="stakeholder-card__image"
                src={item.image}
                alt={item.title}
              />

              {/* Blurred strip behind the text */}
              <div className="stakeholder-card__blur" aria-hidden="true" />

              <div className="stakeholder-card__content">
                <h3 className="stakeholder-card__title">{item.title}</h3>
                <p className="stakeholder-card__text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}