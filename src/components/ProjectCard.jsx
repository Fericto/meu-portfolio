import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, image, liveUrl, sourceUrl }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={"thumbnail do projeto ${title}"} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.cardLinks}>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Ver Projeto
        </a>
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary"
        >
          Código-Fonte
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
