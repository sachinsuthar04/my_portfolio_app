
import { skills } from '@/data/skills';

const platformIcons: Record<string, string> = {
  'Android': '🤖',
  'iOS': '',
  'Web': '🌐',
  'Desktop (macOS / Windows)': '🖥️',
  'Cross-Platform': '🔀',
};

function Group({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-5">
      <h3 className="mb-3 font-semibold text-fg">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map(i => (
          <span key={i} className="chip">{i}</span>
        ))}
      </div>
    </div>
  );
}

function PlatformsGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card p-5 border-brand/20 bg-gradient-to-br from-card to-[#0a0f1e]">
      <h3 className="mb-4 font-semibold text-brand">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {items.map(item => (
          <div
            key={item}
            className="flex items-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2 text-xs font-semibold text-fg hover:border-brand/50 hover:bg-brand/10 transition-all duration-200"
          >
            {platformIcons[item] && (
              <span className="text-base leading-none">{platformIcons[item]}</span>
            )}
            <span>{item}</span>
          </div>
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

        {/* Platforms — full-width featured row */}
        <div className="mb-5">
          <PlatformsGroup title="📱 Platforms — Android · iOS · Web · Desktop" items={skills.platforms} />
        </div>

        {/* Remaining skill groups */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Group title="Languages" items={skills.languages} />
          <Group title="Frameworks & Architecture" items={skills.frameworks} />
          <Group title="Mobile Development" items={skills.mobile} />
          <Group title="Tools & Platforms" items={skills.tools} />
        </div>
      </div>
    </section>
  );
}
