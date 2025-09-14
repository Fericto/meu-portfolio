import styles from './Styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.footerLogo}>Felipe Feitosa</a>
      <div className={styles.footerCopyright}>
        <small>&copy; 2025 Felipe Feitosa. Todos os direitos reservados.</small>
      </div>
    </footer>
  );
}
export default Footer;