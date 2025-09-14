import styles from "./Styles/About.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MinhaFoto from "../assets/minha-foto.jpg";

function About() {
  return (
    <>
      <section id="about">
        <h2>Sobre Mim</h2>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutMe}>
            <div className={styles.aboutMeImage}>
              <img src={MinhaFoto} alt="Minha Foto" />
            </div>
          </div>
          <div className={styles.aboutContent}>
            <p>
              Desenvolvedor Full-Stack com experiência na criação de interfaces
              de usuário dinâmicas e responsivas utilizando HTML, CSS,
              JavaScript e React. Bons conhecimento em desenvolvimento backend e
              bancos de dados, com proficiência em SQL e Beekeeper. Possuo
              também um diferencial em montagem e manutenção de computadores, o
              que me confere uma compreensão da arquitetura de software e
              hardware. Tenho um perfil proativo, gosto de trabalhar em equipe
              e sou focado em entregar resultados de alta qualidade.
            </p>
            <a href="../../curriculo.pdf" className="button" download>
              Baixar Currículo
            </a>
            <div className={styles.socials}>
              <a
                href="https://www.linkedin.com/in/felipe-feitosa-576089277"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Fericto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
