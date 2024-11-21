import styles from './Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
        <p>&copy; 2024 Pizza Uncle Antonio</p>
        <ul className={styles.footerLinks}>
        <li><a href="https://t.me/PizzeriaAntonio" target="_blank" rel="noopener noreferrer">Telegram</a></li>
          <li><a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          <li><a href="mailto:Pizzeria_Antonio@gmail.com" target="_blank" rel="noopener noreferrer">Email: Pizzeria_Antonio@gmail.com</a></li>
        </ul>
      </div>
        </footer>
    )
}
export default Footer;