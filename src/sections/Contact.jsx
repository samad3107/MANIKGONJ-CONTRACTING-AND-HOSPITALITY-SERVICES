import { Mail, MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        <div className="contact-heading">
          <p className="section-eyebrow">GET IN TOUCH</p>

          <h2>
            Ready to restore
            <br />
            your <em>marble?</em>
          </h2>

          <p>
            Contact Manikgonj Contracting and Hospitality Services today for marble polishing and restoration services
            in Qatar.
          </p>
        </div>

        <div className="contact-grid">

          <a
            href="https://wa.me/97470779475"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-whatsapp"
          >
            <MessageCircle size={25} strokeWidth={1.5} />

            <div>
              <span>WHATSAPP</span>
              <strong>+974 7077 9475</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          <a href="tel:+97430666258" className="contact-card">
            <Phone size={25} strokeWidth={1.5} />

            <div>
              <span>PHONE</span>
              <strong>+974 3066 6258</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          <a
            href="mailto:info.qa.mid1980@gmail.com"
            className="contact-card"
          >
            <Mail size={25} strokeWidth={1.5} />

            <div>
              <span>EMAIL</span>
              <strong>info.qa.mid1980@gmail.com</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=25.27535862063022,51.52071067670433"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <MapPin size={25} strokeWidth={1.5} />

            <div>
              <span>LOCATION</span>
              <strong>Rawdat Al Khail, Doha</strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

        </div>

        <div className="contact-address">
          <span>MANIKGONJ CONTRACTING AND HOSPITALITY SERVICES ADDRESS</span>

          <p>
            Zone 24 · Street 220 · B Ring Road · Building 185
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;