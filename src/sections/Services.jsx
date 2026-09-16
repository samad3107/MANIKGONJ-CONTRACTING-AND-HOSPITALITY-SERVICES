import {
  Sparkles,
  Layers3,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    number: "01",
    image: "/images/service-polishing.jpg",
    title: "Marble Polishing",
    description:
      "Restore the shine and natural beauty of marble surfaces with a professional polished finish.",
  },
  {
    number: "02",
    image: "/images/service-floor.jpg",
    title: "Floor Restoration",
    description:
      "Refresh worn and dull marble floors and bring back a clean, refined appearance.",
  },
  {
    number: "03",
    image: "/images/service-steps.jpg",
    title: "Step Restoration",
    description:
      "Improve the appearance of marble stairs and steps affected by wear, stains and aging.",
  },
  {
    number: "04",
    image: "/images/service-surface.jpg",
    title: "Surface Care",
    description:
      "Professional care for marble surfaces to help maintain their finish and appearance.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">

        <div className="section-heading">
          <div>
            <p className="section-eyebrow">WHAT WE DO</p>

            <h2>
              Professional care
              <br />
              for <em>beautiful</em> surfaces.
            </h2>
          </div>

          <p className="section-intro">
            From polishing to restoration, Manikgonj Contracting and Hospitality Services helps transform tired marble
            surfaces into clean, smooth and beautiful finishes.
          </p>
        </div>

        <div className="services-grid">
            {services.map((service) => (
                <article className="service-card" key={service.number}>
                    <div className="service-image">
                        <img src={service.image} alt={service.title} />
                    </div>

                    <div className="service-content">
                        <div className="service-top">
                            <span>{service.number}</span>
                            <span>↗</span>
                        </div>

                        <h3>{service.title}</h3>

                        <p>{service.description}</p>
                    </div>
                </article>
            ))}
        </div>

      </div>
    </section>
  );
}

export default Services;