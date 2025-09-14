import { projects } from "../projectsData.js";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./Styles/Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Meus Projetos:</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;