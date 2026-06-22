import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section__label">Projects</p>
      <h2 className="section__title">Things I've built</h2>

      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
