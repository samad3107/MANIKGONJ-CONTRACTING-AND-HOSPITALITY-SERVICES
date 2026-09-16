import {
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

function Contact({ t }) {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">

        {/* Contact Heading */}
        <div className="contact-heading">
          <p className="section-eyebrow">
            {t.contact.eyebrow}
          </p>

          <h2
            dangerouslySetInnerHTML={{
              __html: t.contact.title,
            }}
          />

          <p>
            {t.contact.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-grid">

          {/* WhatsApp */}
          <a
            href="https://wa.me/97470779475"
            target="_blank"
            rel="noreferrer"
            className="contact-card contact-whatsapp"
          >
            <MessageCircle
              size={25}
              strokeWidth={1.5}
            />

            <div>
              <span>
                {t.contact.whatsapp}
              </span>

              <strong>
                +974 7077 9475
              </strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          {/* Phone */}
          <a
            href="tel:+97430666258"
            className="contact-card"
          >
            <Phone
              size={25}
              strokeWidth={1.5}
            />

            <div>
              <span>
                {t.contact.phone}
              </span>

              <strong>
                +974 3066 6258
              </strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          {/* Email */}
          <a
            href="mailto:info.qa.mid1980@gmail.com"
            className="contact-card"
          >
            <Mail
              size={25}
              strokeWidth={1.5}
            />

            <div>
              <span>
                {t.contact.email}
              </span>

              <strong>
                info.qa.mid1980@gmail.com
              </strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=25.27535862063022,51.52071067670433"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <MapPin
              size={25}
              strokeWidth={1.5}
            />

            <div>
              <span>
                {t.contact.address}
              </span>

              <strong>
                Rawdat Al Khail, Doha
              </strong>
            </div>

            <ArrowUpRight size={20} />
          </a>

        </div>

        {/* Full Address */}
        <div className="contact-address">
          <span>
            {t.contact.address}
          </span>

          <p>
            {t.contact.addressText}
          </p>
        </div>

      </div>
    </section>
  );
}

export default Contact;