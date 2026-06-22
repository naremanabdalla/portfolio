import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Designed & coded with ♥ — Nareman Abdallah © {new Date().getFullYear()}</p>
    </footer>
  );
}
