const services = [
  {
    number: "01",
    image: "/images/service-polishing.jpg",
    key: "marblePolishing",
  },
  {
    number: "02",
    image: "/images/service-floor.jpg",
    key: "floorRestoration",
  },
  {
    number: "03",
    image: "/images/service-steps.jpg",
    key: "stepRestoration",
  },
  {
    number: "04",
    image: "/images/service-surface.jpg",
    key: "surfaceCare",
  },
];

function Services({ t }) {
  return (
    <section className="services-section" id="services">
      <div className="section-container">

        {/* Section Heading */}
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              {t.services.eyebrow}
            </p>

            <h2
              dangerouslySetInnerHTML={{
                __html: t.services.title,
              }}
            />
          </div>

          <p className="section-intro">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => {
            const serviceContent = t.services[service.key];

            return (
              <article
                className="service-card"
                key={service.number}
              >
                {/* Image */}
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={serviceContent.title}
                  />
                </div>

                {/* Content */}
                <div className="service-content">

                  <div className="service-top">
                    <span>{service.number}</span>
                    <span>↗</span>
                  </div>

                  <h3>
                    {serviceContent.title}
                  </h3>

                  <p>
                    {serviceContent.description}
                  </p>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;