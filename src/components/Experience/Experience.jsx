import { experiences } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="section__label">Experience & Education</p>
      <h2 className="section__title">My journey so far</h2>

      <ol className="relative pl-6 border-l-2 border-borderMuted list-none">
        {experiences.map((item, index) => (
          <li key={item.role} className="relative mb-9 pl-5 last:mb-0">
            <span className="absolute left-[-1.8rem] top-1.5 w-2.5 h-2.5 rounded-full bg-teal-500 border-2 border-charcoal" aria-hidden="true" />
            <time className="block text-[0.78rem] text-teal-300 tracking-[0.5px] mb-1">{item.date}</time>
            <h3 className="font-bold text-base mb-0.5 text-offwhite">{item.role}</h3>
            <p className="text-muted text-[0.88rem] mb-3">{item.company}</p>
            <ul className="text-muted text-[0.88rem] flex flex-col gap-1 list-none">
              {item.bullets.map((b) => (
                <li key={b}><span className="text-coral-400">→ </span>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
