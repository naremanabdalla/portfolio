import { personalInfo } from '../../data/portfolioData';

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

      <div className="bg-card border border-borderMuted rounded-lg p-8 flex flex-col items-center gap-6 text-center">
        <p className="text-offwhite max-w-[480px] text-[0.95rem]">
          Whether you have a job opportunity, a project idea, or just want to say
          hi — my inbox is always open.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          {CONTACT_LINKS.map(({ label, icon, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-5 py-2.5 border border-borderMuted rounded-sm text-offwhite text-[0.88rem] transition-colors hover:border-sky-400 hover:text-sky-300"
              aria-label={label}
            >
              <span aria-hidden="true">{icon}</span>
              {display}
            </a>
          ))}
        </div>

        <p className="text-muted text-[0.8rem]">
          Based in {personalInfo.location} · Open to remote opportunities
        </p>
      </div>
    </section>
  );
}
