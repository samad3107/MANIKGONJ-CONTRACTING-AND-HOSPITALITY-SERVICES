import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

function Navbar({ t, language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const switchLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
        aria-label="Manikgonj"
      >
        MANIKGONJ
      </a>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={closeMenu}>
          {t.nav.home}
        </a>

        <a href="#services" onClick={closeMenu}>
          {t.nav.services}
        </a>

        <a href="#work" onClick={closeMenu}>
          {t.nav.work}
        </a>

        <a href="#about" onClick={closeMenu}>
          {t.nav.about}
        </a>

        <a href="#contact" onClick={closeMenu}>
          {t.nav.contact}
        </a>
      </nav>

      {/* Right Side */}
      <div className="navbar-actions">
        {/* Language Switch */}
        <button
          className="language-switch"
          onClick={switchLanguage}
          aria-label={
            language === "ar"
              ? "Switch to English"
              : "التبديل إلى العربية"
          }
        >
          {language === "ar" ? "EN" : "العربية"}
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/97470779475"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          <MessageCircle size={15} />
          <span>{t.nav.whatsapp}</span>
        </a>

        {/* Mobile Menu */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;