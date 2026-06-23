import { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';

const FILTERS = ['all', 'frontend', 'backend', 'tools'];

const VARIANT_CLASSES = {
  purple: 'bg-sky-950 text-sky-300 border border-sky-700',
  teal: 'bg-teal-950 text-teal-300 border border-teal-700',
  green: 'bg-green-950 text-green-300 border border-green-700',
  amber: 'bg-coral-950 text-coral-300 border border-coral-700',
};

export default function Skills() {
  const [active, setActive] = useState('all');

  const visible = skillCategories.filter(
    (cat) => active === 'all' || cat.id === active
  );

  return (
    <section id="skills" className="section">
      <p className="section__label">Technical Skills</p>
      <h2 className="section__title">What I work with</h2>

      {/* Filter tabs */}
      <div className="flex gap-2 flex-wrap mb-6" role="tablist">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={active === filter}
            className={`px-4 py-2 rounded-sm text-[0.83rem] transition-all border ${
              active === filter
                ? 'bg-teal-500 border-teal-500 text-charcoal'
                : 'bg-transparent border-borderMuted text-muted hover:border-sky-400 hover:text-sky-300'
            }`}
            onClick={() => setActive(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visible.map((cat) => (
          <div key={cat.title} className="bg-card border border-borderMuted rounded-lg p-5">
            <p className="text-xs uppercase tracking-[1px] text-sky-300 mb-4 font-semibold">
              {cat.icon} {cat.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1 rounded-sm text-[0.78rem] font-medium ${VARIANT_CLASSES[cat.variant]}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
