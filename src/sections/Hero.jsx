import { ArrowRight, MessageCircle } from "lucide-react";
import marbleHero from "../assets/hero-marble.jpg";
function Hero() {
  return (
    <section className="hero" id="home">
      <img
        src={marbleHero}
        alt="Professional marble polishing by Manikgonj Contracting and Hospitality Services"
        className="hero-image"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">MARBLE POLISHING & RESTORATION</p>

        <h1>
          Bring Your Marble
          <br />
          Back to <em>Life.</em>
        </h1>

        <p className="hero-description">
          Professional marble polishing and restoration services in Qatar,
          delivering a clean, refined and high-gloss finish.
        </p>

        <div className="hero-buttons">
          <a href="#work" className="hero-primary">
            Explore Our Work
            <ArrowRight size={18} />
          </a>

          <a href="https://wa.me/97470779475" className="hero-secondary">
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
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