import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import BeforeAfter from "./sections/BeforeAfter";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Gallery />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;