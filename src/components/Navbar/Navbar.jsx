const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-charcoal border-b border-borderMuted shadow-[0_1px_20px_rgba(0,0,0,0.25)]">
      <div className="container flex justify-between items-center py-5">
        <span className="font-bold text-[1.1rem] tracking-[0.5px] text-offwhite">Nareman.dev</span>
        <ul className="flex gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="text-offwhite text-[0.85rem] transition-colors hover:text-teal-300">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
