import styles from "./Styles/Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <div className={`container ${styles.contactContainer}`}>
        <div className={styles.contactOptions}>
          <article className={styles.contactOption}>
            <MdOutlineEmail className={styles.contactOptionIcon} />
            <h4>Email</h4>
            <h5>feliscfw@gmail.com</h5>
            <a
              href="mailto:feliscfw@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Enviar Mensagem
            </a>
          </article>
          <article className={styles.contactOption}>
            <FaLinkedin className={styles.contactOptionIcon} />
            <h4>LinkedIn</h4>
            <h5>Felipe Feitosa</h5>
            <a
              href="https://www.linkedin.com/in/felipe-feitosa-576089277"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Perfil
            </a>
          </article>
          <article className={styles.contactOption}>
            <FaWhatsapp className={styles.contactOptionIcon} />
            <h4>WhatsApp</h4>
            <h5>+55 (17) 99782-1978</h5>
            <a
              href="https://api.whatsapp.com/send?phone=17997821978"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no Zap
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
export default Contact;
