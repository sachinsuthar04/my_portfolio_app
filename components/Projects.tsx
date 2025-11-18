
import Image from 'next/image';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="h2">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <article key={p.title} className="card overflow-hidden">
              {p.image && (
                <div className="relative aspect-[16/9] w-full">
                  <Image src={p.image} alt={p.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                </div>
              )}
              <div className="p-5 grid gap-3">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-fg/80">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => <span className="chip" key={t}>{t}</span>)}
                </div>
                {p.link && (
                  <a href={p.link} className="badge justify-center hover:border-brand" target="_blank">
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
