import { ArrowUpRight } from "lucide-react";

function BeforeAfter({ t }) {
  return (
    <section className="before-after-section" id="work">
      <div className="section-container">

        {/* Heading */}
        <div className="before-after-heading">
          <div>
            <p className="section-eyebrow">
              {t.beforeAfter.eyebrow}
            </p>

            <h2
              dangerouslySetInnerHTML={{
                __html: t.beforeAfter.title,
              }}
            />
          </div>

          <p>
            {t.beforeAfter.description}
          </p>
        </div>

        {/* Comparison */}
        <div className="comparison">

          {/* Before */}
          <div className="comparison-card">
            <img
              src="/images/before-marble.jpg"
              alt={t.beforeAfter.before}
            />

            <div className="comparison-label">
              <span>01</span>
              <strong>
                {t.beforeAfter.before}
              </strong>
            </div>
          </div>

          {/* After */}
          <div className="comparison-card">
            <img
              src="/images/after-marble.jpg"
              alt={t.beforeAfter.after}
            />

            <div className="comparison-label">
              <span>02</span>
              <strong>
                {t.beforeAfter.after}
              </strong>
            </div>
          </div>

        </div>

        {/* Gallery Link */}
        <div className="work-link">
          <a href="#gallery">
            {t.beforeAfter.link}
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;