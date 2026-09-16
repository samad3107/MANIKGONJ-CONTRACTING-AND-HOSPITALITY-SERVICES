import { ArrowUpRight } from "lucide-react";

// Existing images — paths kept exactly the same
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
    key: "marblePolishing",
  },
  {
    src: marbelpolish2,
    key: "floorRestoration",
  },
  {
    src: marbelpolish3,
    key: "polishedFinish",
  },
  {
    src: afterMarble,
    key: "afterRestoration",
  },
  {
    src: stairsBefore,
    key: "stairsBefore",
  },
  {
    src: stairsAfter,
    key: "stairsAfter",
  },
  {
    src: outsideForsa,
    key: "exteriorWork",
  },
  {
    src: heroMarble,
    key: "glossFinish",
  },
];

function Gallery({ t }) {
  return (
    <section className="gallery-section" id="gallery">
      <div className="section-container">

        <div className="gallery-heading">
          <div>
            <p className="section-eyebrow">
              {t.gallery.eyebrow}
            </p>

            <h2
              dangerouslySetInnerHTML={{
                __html: t.gallery.title,
              }}
            />
          </div>

          <p>
            {t.gallery.description}
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <article
              className={`gallery-item gallery-item-${index + 1}`}
              key={image.key}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={image.src}
                  alt={t.gallery.images[image.key]}
                  loading="lazy"
                />

                <div className="gallery-overlay">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <ArrowUpRight
                    size={24}
                    strokeWidth={2.5}
                  />
                </div>
              </div>

              <p className="gallery-item-title">
                {t.gallery.images[image.key]}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;