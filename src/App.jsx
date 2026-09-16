import { useState } from "react";
import translations from "./translations";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import BeforeAfter from "./sections/BeforeAfter";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  // Arabic is the default language
  const [language, setLanguage] = useState("ar");

  // Get translations for the selected language
  const t = translations[language];

  // Check whether Arabic is currently active
  const isArabic = language === "ar";

  return (
    <div
      className={`app ${isArabic ? "rtl" : "ltr"}`}
      dir={isArabic ? "rtl" : "ltr"}
      lang={language}
    >
      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        <Hero t={t} />

        <Services t={t} />

        <BeforeAfter t={t} />

        <Gallery t={t} />

        <About t={t} />

        <Contact t={t} />
      </main>
    </div>
  );
}

export default App;