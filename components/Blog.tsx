
import { posts } from '@/data/blog';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="h2">Blog Posts</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <article key={p.title} className="card p-5 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300">
              <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
              <p className="text-sm sm:text-base text-fg/80 leading-relaxed flex-grow">{p.blurb}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {p.tech?.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
              <a href={p.link} className="badge w-fit hover:border-brand mt-2 transition-colors duration-200" target="_blank">
                Read More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
