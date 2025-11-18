
import { skills } from '@/data/skills';

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-5">
      <h3 className="mb-3 font-semibold">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(i => (
          <span key={i} className="chip">{i}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="h2">Technical Skills</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Group title="Languages" items={skills.languages} />
          <Group title="Frameworks" items={skills.frameworks} />
          <Group title="Mobile" items={skills.mobile} />
  
        </div>
      </div>
    </section>
  );
}
