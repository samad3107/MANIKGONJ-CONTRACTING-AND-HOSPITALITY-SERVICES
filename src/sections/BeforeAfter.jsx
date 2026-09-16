import { ArrowUpRight } from "lucide-react";

function BeforeAfter() {
  return (
    <section className="before-after-section" id="work">
      <div className="section-container">

        <div className="before-after-heading">
          <div>
            <p className="section-eyebrow">OUR WORK</p>

            <h2>
              From worn
              <br />
              to <em>refined.</em>
            </h2>
          </div>

          <p>
            See the difference professional marble polishing and restoration
            can make.
          </p>
        </div>

        <div className="comparison">

          <div className="comparison-card">
            <img
              src="/images/before-marble.jpg"
              alt="Marble surface before restoration"
            />

            <div className="comparison-label">
              <span>01</span>
              <strong>BEFORE</strong>
            </div>
          </div>

          <div className="comparison-card">
            <img
              src="/images/after-marble.jpg"
              alt="Marble surface after polishing"
            />

            <div className="comparison-label">
              <span>02</span>
              <strong>AFTER</strong>
            </div>
          </div>

        </div>

        <div className="work-link">
          <a href="#gallery">
            View more of our work
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

export default BeforeAfter;