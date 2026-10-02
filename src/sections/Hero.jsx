import { ArrowRight, MessageCircle } from "lucide-react";
import marbleHero from "../assets/hero-marble.jpg";

function Hero({ t }) {
  return (
    <section className="hero" id="home">
      {/* Hero Image */}
      <img
        src={marbleHero}
        alt="Professional marble polishing by Manikgonj Contracting and Hospitality Services"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          {t.hero.eyebrow}
        </p>

        <h1
          dangerouslySetInnerHTML={{
            __html: t.hero.title,
          }}
        />

        <p className="hero-description">
          {t.hero.description}
        </p>

        <div className="hero-buttons">
          <a href="#work" className="hero-primary">
            {t.hero.primaryButton}
            <ArrowRight size={18} />
          </a>

          <a
            href="https://wa.me/97470779475"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-secondary"
          >
            <MessageCircle size={18} />
            {t.nav.whatsapp}
          </a>

          <span className="hero-cr-badge">
            CR NO: 215131
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>DOHA · QATAR</span>

        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;