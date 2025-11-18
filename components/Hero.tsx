
import { profile } from '@/data/profile';

export default function Hero() {
  return (
    <header className="section pt-16 sm:pt-20">
      <div className="container grid gap-6 text-center sm:text-left">
        <div className="grid gap-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{profile.name}</h1>
          <p className="text-base sm:text-lg text-fg/85">{profile.title}</p>
          <p className="mx-auto sm:mx-0 max-w-2xl text-sm sm:text-base text-fg/70">{profile.tagline}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
          {profile.badges.map(b => (
            <span key={b} className="badge">{b}</span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          {profile.socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" className="badge hover:border-brand">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
