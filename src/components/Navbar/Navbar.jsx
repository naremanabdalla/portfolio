import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState(typeof window !== 'undefined' ? window.location.hash || '#about' : '#about');

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#about');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#111113] border-b border-borderMuted shadow-[0_1px_10px_rgba(0,0,0,0.18)]">
      <div className="container flex justify-between items-center py-5">
        <span className="font-bold text-[1.1rem] tracking-[0.5px] text-offwhite">Nareman.dev</span>
        <ul className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-[0.85rem] transition-colors ${
                  activeHash === href ? 'text-teal-500' : 'text-offwhite hover:text-teal-300'
                }`}
                aria-current={activeHash === href ? 'page' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
