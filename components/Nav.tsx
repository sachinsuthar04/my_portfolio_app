
'use client';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#blog', label: 'Blog' }
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-bg/70 border-b border-border">
      <div className="container h-14 flex items-center justify-between">
        <div className="font-semibold">Sachin</div>
        <div className="hidden sm:flex gap-5 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-fg/80 hover:text-fg">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
