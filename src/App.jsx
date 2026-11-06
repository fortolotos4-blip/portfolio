import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Documentation from "./components/Documentation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Documentation />
      <Contact />
    </>
  );
}

export default App;