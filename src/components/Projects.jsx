import { projects } from "../projectsData";
import ProjectCard from "./ProjectCard.jsx";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Meus Projetos:</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            liveUrl={project.liveUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
