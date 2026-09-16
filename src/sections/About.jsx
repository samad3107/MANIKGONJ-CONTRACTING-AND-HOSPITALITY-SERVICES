import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">

          <div className="about-number">
            <span>03</span>
            <span>ABOUT Manikgonj Contracting and Hospitality Services</span>
          </div>

          <div className="about-content">
            <p className="section-eyebrow">ABOUT Manikgonj Contracting and Hospitality Services</p>

            <h2>
              We make marble
              <br />
              look <em>beautiful again.</em>
            </h2>

            <p className="about-text">
              Manikgonj Contracting and Hospitality Services provides professional marble polishing and restoration
              services in Qatar. Our focus is simple — improve the appearance
              of marble surfaces and deliver a clean, smooth and polished
              finish.
            </p>

            <a href="#contact" className="about-link">
              Talk to QNAS
              <ArrowUpRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;