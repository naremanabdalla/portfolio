import { personalInfo, stats } from '../../data/portfolioData';
import styles from './Hero.module.css';

export default function Hero() {
  const { name, tagline, subtitle, available } = personalInfo;

  return (
    <section className={styles.hero}>
      {available && (
        <span className={styles.badge}>
          <span className={styles.dot} />
          Available for opportunities
        </span>
      )}

      <h1 className={styles.title}>
        Hi, I'm <span className={styles.highlight}>{name}</span>
        <br />— Frontend Engineer
      </h1>

      <p className={styles.subtitle}>
        {tagline} {subtitle}
      </p>

      <div className={styles.buttons}>
        <a href="#contact" className={styles.btnPrimary}>Get in Touch</a>
        <a href="#projects" className={styles.btnGhost}>View Projects</a>
      </div>

      <div className={styles.stats}>
        {stats.map(({ number, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statNumber}>{number}</span>
            <span className={styles.statLabel}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
