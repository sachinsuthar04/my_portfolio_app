
import { posts } from '@/data/blog';

export default function Blog() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="h2">Blog Posts</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(p => (
            <article key={p.title} className="card p-5 grid gap-3">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-fg/80">{p.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech?.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
              <a href={p.link} className="badge w-fit hover:border-brand" target="_blank">Read More</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
