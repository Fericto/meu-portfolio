//components
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";

//styles (css)
import './App.css';

function App() {

  return (
    <>
      <Header />
      <main>
        <About />
        <Contact />
        <Projects />
        <ProjectCard />
      </main>
      <Footer />
    </>
  )
}

export default App
