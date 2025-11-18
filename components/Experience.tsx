
import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="h2">Professional Experience</h2>
        <div className="grid gap-4">
          {experience.map((r, idx) => (
            <div key={idx} className="card p-5">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-semibold">{r.title} — {r.company}</h3>
                <span className="text-sm text-fg/70">{r.period}</span>
              </div>
              {r.location && <div className="text-sm text-fg/60">{r.location}</div>}
              <ul className="mt-3 list-disc pl-5 space-y-1 text-fg/85">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
