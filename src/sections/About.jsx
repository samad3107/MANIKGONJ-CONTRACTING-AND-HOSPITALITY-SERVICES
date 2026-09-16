import { ArrowUpRight } from "lucide-react";

function About({ t }) {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">

          {/* Section Number */}
          <div className="about-number">
            <span>03</span>

            <span>
              {t.about.eyebrow}
            </span>
          </div>

          {/* About Content */}
          <div className="about-content">

            <p className="section-eyebrow">
              {t.about.eyebrow}
            </p>

            <h2
              dangerouslySetInnerHTML={{
                __html: t.about.title,
              }}
            />

            <p className="about-text">
              {t.about.description}
            </p>

            <a
              href="#contact"
              className="about-link"
            >
              {t.about.button}

              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;