import React from "react";
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

              <strong dir="ltr">
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

              <strong dir="ltr">
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

        {/* Footer Credits */}
        <footer style={{ borderTop: '1px solid var(--border-color, #e5e7eb)', padding: '2rem 1rem', color: 'var(--text-muted, #6b7280)', fontSize: '0.85rem', marginTop: '3rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              <span>Made by <strong style={{ color: '#ffffff' }}>@Xenosys Qatar</strong></span>
              <span>•</span>
              <a
                href="https://xenosysweb.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-gold, #d97706)', textDecoration: 'none', fontWeight: '600' }}
              >
                Xenosysweb.com
              </a>
              <span>•</span>
              <a
                href="https://wa.me/97470643918"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-emerald, #059669)', textDecoration: 'none', fontWeight: '600' }}
              >
                WhatsApp 7064 3918
              </a>
            </div>
          </div>
        </footer>

      </div>
    </section>
  );
}

export default Contact;