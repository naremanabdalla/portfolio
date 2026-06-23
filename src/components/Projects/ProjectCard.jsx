export default function ProjectCard({ icon, iconBg, title, description, stack, github, demo }) {
  const tagStyles = [
    'bg-sky-950 text-sky-300 border border-sky-700',
    'bg-teal-950 text-teal-300 border border-teal-700',
    'bg-coral-950 text-coral-300 border border-coral-700',
    'bg-green-950 text-green-300 border border-green-700',
  ];

  return (
    <article className="bg-card border border-borderMuted rounded-lg p-6 flex flex-col gap-3 transition-all hover:border-sky-400 hover:-translate-y-1">
      <div className="w-10 h-10 rounded-md flex items-center justify-center text-xl" style={{ background: iconBg }}>
        {icon}
      </div>

      <h3 className="font-bold text-base text-offwhite">{title}</h3>
      <p className="text-muted text-[0.85rem] leading-[1.6] flex-1">{description}</p>

      <div className="flex flex-wrap gap-1">
        {stack.map((tech, i) => (
          <span key={tech} className={`px-2.5 py-0.5 rounded text-[0.72rem] ${tagStyles[i % tagStyles.length]}`}>
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-1">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] text-sky-300 border-b border-transparent transition-colors hover:border-sky-300">
            GitHub ↗
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-[0.8rem] text-sky-300 border-b border-transparent transition-colors hover:border-sky-300">
            Live Demo ↗
          </a>
        )}
      </div>
    </article>
  );
}
