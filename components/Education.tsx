
import { education } from '@/data/education';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="h2">Education</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((s, idx) => (
            <div key={idx} className="card p-5">
              <h3 className="font-semibold">{s.name}</h3>
              <div className="text-fg/80">{s.program}</div>
              <div className="text-sm text-fg/60">{s.period}</div>
              {s.notes?.length ? (
                <ul className="mt-2 list-disc pl-5 text-fg/80 space-y-1">
                  {s.notes.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
