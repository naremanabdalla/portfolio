import { experiences } from '../../data/portfolioData';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section__label">Experience & Education</p>
      <h2 className="section__title">My journey so far</h2>

      <ol className={styles.timeline}>
        {experiences.map((item) => (
          <li key={item.role} className={styles.item}>
            <span className={styles.dot} aria-hidden="true" />
            <time className={styles.date}>{item.date}</time>
            <h3 className={styles.role}>{item.role}</h3>
            <p className={styles.company}>{item.company}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
