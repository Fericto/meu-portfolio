import styles from "./Styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={`container ${styles.headerContainer}`}>
          <h5>Olá, eu sou</h5>
          <h1>Seu Nome</h1>
          <h5 className={styles.textLight}>Desenvolvedor Full-Stack</h5>
          <div className={styles.cta}>
            <a href="/curriculo.pdf" className="button" download>
              Baixar Currículo
            </a>
            <a href="#contact" className="button-secondary">
              Vamos Conversar
            </a>
          </div>
          <nav className={styles.nav}>
            <a href="#about">Sobre</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
