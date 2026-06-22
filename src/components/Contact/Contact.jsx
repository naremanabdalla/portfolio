import { personalInfo } from '../../data/portfolioData';
import styles from './Contact.module.css';

const CONTACT_LINKS = [
  { label: 'Email',    icon: '📧', href: `mailto:${personalInfo.email}`,   display: personalInfo.email },
  { label: 'LinkedIn', icon: '💼', href: personalInfo.linkedin,              display: 'LinkedIn' },
  { label: 'GitHub',   icon: '🐙', href: personalInfo.github,               display: 'GitHub' },
  { label: 'Phone',    icon: '📞', href: `tel:${personalInfo.phone}`,       display: personalInfo.phone },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section__label">Contact</p>
      <h2 className="section__title">Let's work together</h2>

      <div className={styles.wrapper}>
        <p className={styles.intro}>
          Whether you have a job opportunity, a project idea, or just want to say
          hi — my inbox is always open.
        </p>

        <div className={styles.links}>
          {CONTACT_LINKS.map(({ label, icon, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={styles.link}
              aria-label={label}
            >
              <span aria-hidden="true">{icon}</span>
              {display}
            </a>
          ))}
        </div>

        <p className={styles.location}>
          Based in {personalInfo.location} · Open to remote opportunities
        </p>
      </div>
    </section>
  );
}
