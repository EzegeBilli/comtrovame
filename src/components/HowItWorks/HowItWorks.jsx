import buildingImg from "../../assets/building.jpg";
import "./HowItWorks.css";

const STEPS = [
  {
    number: "01",
    title: "Onboard Your Estate",
    text: "Register your estate and configure blocks, units, and residents.",
  },
  {
    number: "02",
    title: "Add Admins and Residents",
    text: "Give your team access to manage the system and invite residents via secure links.",
  },
  {
    number: "03",
    title: "Manage Everything Easily",
    text: "Get full visibility and control through a single web or mobile dashboard.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="how">
      <div className="container how__inner">
        <h2 className="section-title">How it works</h2>

        <ol className="how__steps">
          {STEPS.map((step) => (
            <li key={step.number} className="how__step">
              <span className="how__number">{step.number}</span>
              <h3 className="how__step-title">{step.title}</h3>
              <p className="how__step-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <img
        className="how__image"
        src={buildingImg}
        alt="Modern residential estate building"
      />
    </section>
  );
}