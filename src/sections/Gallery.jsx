import { ArrowUpRight } from "lucide-react";

// Import images directly from src/assets
import afterMarble from "../assets/after-marble.jpg";
import heroMarble from "../assets/hero-marble.jpg";
import marbelpolish1 from "../assets/marbelpolish1.jpeg";
import marbelpolish2 from "../assets/marbelpolish2.jpeg";
import marbelpolish3 from "../assets/marbelpolish3.jpeg";
import outsideForsa from "../assets/outside-forsa.jpeg";
import stairsAfter from "../assets/stairsafter.jpeg";
import stairsBefore from "../assets/stairsbefore.jpeg";

const galleryImages = [
  {
    src: marbelpolish1,
    title: "Marble Polishing",
  },
  {
    src: marbelpolish2,
    title: "Floor Restoration",
  },
  {
    src: marbelpolish3,
    title: "Polished Finish",
  },
  {
    src: afterMarble,
    title: "After Restoration",
  },
  {
    src: stairsBefore,
    title: "Stairs Before",
  },
  {
    src: stairsAfter,
    title: "Stairs After",
  },
  {
    src: outsideForsa,
    title: "Exterior Work",
  },
  {
    src: heroMarble,
    title: "Gloss Finish",
  },
];

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-container">

        <div className="gallery-heading">
          <div>
            <p 
              className="section-eyebrow"
              style={{
                fontSize: "1.1rem",
                fontWeight: 800,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                WebkitFontSmoothing: "antialiased"
              }}
            >
              SELECTED WORK
            </p>

            <h2
              style={{
                fontSize: "3.5rem",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                WebkitFontSmoothing: "antialiased"
              }}
            >
              A finish that
              <br />
              <em style={{ fontWeight: 800 }}>speaks for itself.</em>
            </h2>
          </div>

          <p
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              lineHeight: 1.5,
              WebkitFontSmoothing: "antialiased"
            }}
          >
            A selection of marble polishing and restoration work completed
            by Manikgonj Contracting and Hospitality Services.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article
              className={`gallery-item gallery-item-${index + 1}`}
              key={index}
            >
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.title} loading="lazy" />

                <div className="gallery-overlay">
                  <span style={{ fontSize: "1.25rem", fontWeight: 800 }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight size={24} strokeWidth={2.5} />
                </div>
              </div>

              <p
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  marginTop: "0.75rem",
                  WebkitFontSmoothing: "antialiased"
                }}
              >
                {image.title}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;