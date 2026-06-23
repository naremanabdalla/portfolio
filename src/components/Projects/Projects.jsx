import { projects } from '../../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section__label">Projects</p>
      <h2 className="section__title">Things I've built</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
