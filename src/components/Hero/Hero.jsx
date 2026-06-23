import { personalInfo, stats } from '../../data/portfolioData';

const STAT_COLORS = ['text-teal-400', 'text-sky-300', 'text-coral-300', 'text-green-400'];

export default function Hero() {
  const { name, tagline, subtitle, available } = personalInfo;

  return (
    <section className="py-12 flex flex-col gap-6">
      {available && (
        <span className="inline-flex items-center gap-2 bg-card border border-teal-700 px-4 py-1.5 rounded-full text-[0.8rem] text-offwhite w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" style={{ animation: 'blink 1.5s infinite' }} />
          Available for opportunities
        </span>
      )}

      <h1 className="text-5xl md:text-6xl font-bold leading-tight -tracking-[0.5px]">
        Hi, I'm <span className="text-teal-400">{name}</span>
        <br />— Frontend Engineer
      </h1>

      <p className="text-muted text-lg max-w-[560px]">
        {tagline} {subtitle}
      </p>

      <div className="flex gap-4 flex-wrap mt-2">
        <a href="#contact" className="px-6 py-3 bg-teal-500 text-charcoal rounded-sm text-[0.9rem] font-semibold transition-colors hover:bg-teal-600">Get in Touch</a>
        <a href="#projects" className="px-6 py-3 bg-card text-offwhite border border-borderMuted rounded-sm text-[0.9rem] font-semibold transition-colors hover:border-sky-400 hover:text-sky-300">View Projects</a>
      </div>

      <div className="flex gap-8 flex-wrap mt-2 pt-6 border-t border-borderMuted">
        {stats.map(({ number, label }, index) => (
          <div key={label} className="flex flex-col">
            <span className={`text-[1.6rem] font-bold ${STAT_COLORS[index % STAT_COLORS.length]}`}>{number}</span>
            <span className="text-[0.78rem] text-muted uppercase tracking-[0.5px]">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
