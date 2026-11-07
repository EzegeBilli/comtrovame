import accessImg from "../../assets/feature1.jpg";
import billsImg from "../../assets/feature2.jpg";
import eventsImg from "../../assets/feature3.jpg";
import alertsImg from "../../assets/feature4.jpg";
import chatImg from "../../assets/feature5.jpg";
import logsImg from "../../assets/feature6.jpg";
import "./Features.css";

const FEATURES = [
  {
    title: "Access Control & Visitor Management",
    text: "Grant or deny access remotely. Track guest entries with time-stamped records.",
    image: accessImg,
  },
  {
    title: "Utility Bill Payments",
    text: "Let residents pay for electricity, water, and gas seamlessly via integrated vending.",
    image: billsImg,
  },
  {
    title: "Event Calendar",
    text: "Keep your community informed about estate meetings, maintenance, and celebrations.",
    image: eventsImg,
  },
  {
    title: "Emergency Alerts & Notices",
    text: "Send out urgent alerts and estate-wide notices in real time.",
    image: alertsImg,
  },
  {
    title: "Resident Communication",
    text: "Allow residents to message each other and receive key updates from the estate office.",
    image: chatImg,
  },
  {
    title: "Vendor & Delivery Logs",
    text: "Track every delivery and vendor movement with proper check-ins and access logs.",
    image: logsImg,
  },
];

export default function Features() {
  return (
    <section id="features" className="features section">
      <div className="container features__inner">
        <h2 className="section-title">Everything Your Estate Needs, in One Place</h2>

        <div className="features__grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-card__media">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="feature-card__body">
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}