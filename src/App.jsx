import "./styles/globals.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CV  from "./components/CV";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function scrollTo(id) {
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
}

export default function App() {
  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About scrollTo={scrollTo} />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <CV />
      <Contact />
      <Footer />
    </>
  );
}
