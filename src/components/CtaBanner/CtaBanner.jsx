import ctaImg from "../../assets/cta-building.jpg";
import "./CtaBanner.css";

export default function CtaBanner() {
  return (
    <section id="demo" className="cta section">
      <div className="container">
        <div className="cta__box">
          <img className="cta__image" src={ctaImg} alt="" />

          <div className="cta__card">
            <h2 className="cta__title">Ready to Take Control of Your Estate?</h2>
            <p className="cta__text">
              Join dozens of modern estates improving safety, transparency, and
              convenience with our platform.
            </p>
            <a href="#contact" className="btn btn-primary cta__button">
              Book a Free Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}