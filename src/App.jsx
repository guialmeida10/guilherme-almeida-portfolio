import GalaxyBackground from "./components/GalaxyBackground";
import Header from "./components/Header";
import Home from "./pages/Home"; // O conteúdo da Home que refatoramos
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <GalaxyBackground />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}