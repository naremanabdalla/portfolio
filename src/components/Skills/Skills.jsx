import { useState } from 'react';
import { skillCategories } from '../../data/portfolioData';
import styles from './Skills.module.css';

const FILTERS = ['all', 'frontend', 'backend', 'tools'];

const TAG_VARIANT = {
  purple: styles.tagPurple,
  teal:   styles.tagTeal,
  green:  styles.tagGreen,
  amber:  styles.tagAmber,
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
      <div className={styles.tabs} role="tablist">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            role="tab"
            aria-selected={active === filter}
            className={`${styles.tab} ${active === filter ? styles.tabActive : ''}`}
            onClick={() => setActive(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className={styles.grid}>
        {visible.map((cat) => (
          <div key={cat.title} className={styles.card}>
            <p className={styles.cardTitle}>
              {cat.icon} {cat.title}
            </p>
            <div className={styles.tags}>
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className={`${styles.tag} ${TAG_VARIANT[cat.variant]}`}
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
