import styles from "./Styles/ProjectCard.module.css";

function ProjectCard({ project }) {
  // SOLUÇÃO: Se a prop 'project' não for recebida, o componente não renderiza nada.
  // Isto previne o erro "cannot read properties of undefined".
  if (!project) {
    return null;
  }

  return (
    <article className={styles.projectItem}>
      <div className={styles.projectItemImage}>
        <img src={project.image} alt={project.title} />
      </div>
      <h3>{project.title}</h3>
      <p className={styles.projectDescription}>{project.description}</p>
      <div className={styles.projectTags}>
        {project.tags?.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.projectItemCta}>
        <a
          href={project.sourceUrl}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={project.liveUrl}
          className="button-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Online
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;

