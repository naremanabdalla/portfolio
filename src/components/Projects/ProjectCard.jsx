import styles from './ProjectCard.module.css';

export default function ProjectCard({ icon, iconBg, title, description, stack, github, demo }) {
  return (
    <article className={styles.card}>
      <div className={styles.icon} style={{ background: iconBg }}>
        {icon}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.stack}>
        {stack.map((tech) => (
          <span key={tech} className={styles.tech}>{tech}</span>
        ))}
      </div>

      <div className={styles.links}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub ↗
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
