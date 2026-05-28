
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="h2">Professional Experience</h2>
        <div className="grid gap-4">
          {experience.map((r, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <h3 className="font-semibold text-base sm:text-lg">{r.title} — {r.company}</h3>
                <span className="text-sm text-fg/70 font-medium shrink-0">{r.period}</span>
              </div>
              {r.location && <div className="text-xs sm:text-sm text-fg/60 mt-1 sm:mt-0">{r.location}</div>}
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm sm:text-base text-fg/85">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
