import bannerImg from "../../assets/access.jpg";
import "./AccessAnywhere.css";

export default function AccessAnywhere() {
  return (
    <section id="access" className="access section">
      <div className="container access__inner">
        <h2 className="section-title">Access Anytime, Anywhere</h2>

        <p className="access__subtitle">
          Whether you're in the control room or on the go, our platform works
          perfectly across devices — desktop, tablet, and mobile.
        </p>

        <img
          className="access__image"
          src={bannerImg}
          alt="Comtrova dashboard on desktop and mobile"
        />
      </div>
    </section>
  );
}