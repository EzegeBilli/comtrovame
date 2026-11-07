import heroMockup from "../../assets/hero.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Modern Estate <br />
          Living Simplified
        </h1>

        <p className="hero__subtitle">
          Take control of access, utilities, security, and communication — all
          from one powerful platform.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn btn-primary">
            Get started
          </a>
          <a href="#contact" className="btn btn-outline">
            Request a Demo
          </a>
        </div>

        <img
          className="hero__image"
          src={heroMockup}
          alt="Comtrova dashboard on desktop and mobile"
        />
      </div>
    </section>
  );
}