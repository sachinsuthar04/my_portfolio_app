import Image from 'next/image';
import { projects } from '@/data/projects';

// High-fidelity CSS/Tailwind Mobile Mockup Frame
function MobileMockup({ src, title }: { src?: string; title: string }) {
  return (
    <div className="relative mx-auto w-[240px] sm:w-[260px] h-[480px] sm:h-[520px] bg-[#080d1a] border-[8px] border-[#1e293b] rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-500 hover:border-brand/40 group shrink-0">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#1e293b] rounded-b-xl z-20" />
      
      {/* Speaker Bar */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#0f172a] rounded z-20" />
      
      {/* Status Bar */}
      <div className="absolute top-1.5 left-0 right-0 px-6 flex justify-between text-[8px] text-fg/40 font-mono select-none z-10 font-bold">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <span>📶</span>
          <span>🔋</span>
        </div>
      </div>
      
      {/* Screen Frame Content */}
      <div className="relative w-full h-full pt-5 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 240px, 260px"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-card to-bg flex items-center justify-center p-4">
            <span className="text-xs text-muted text-center font-mono">Mockup Screen</span>
          </div>
        )}
      </div>

      {/* Gloss Refraction Highlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none z-20" />
      
      {/* Dynamic glow side border */}
      <div className="absolute inset-0 border border-transparent rounded-[32px] group-hover:border-brand/35 transition-all duration-500 z-30" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section relative">
      <div className="container">
        <h2 className="h2 text-center sm:text-left mb-12">Projects</h2>
        
        {/* Bento Alternating Layout */}
        <div className="flex flex-col gap-12 sm:gap-16">
          {projects.map((p, idx) => (
            <article 
              key={p.title} 
              className={`flex flex-col ${
                idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center bg-[#060913]/90 border border-border/40 p-6 sm:p-10 rounded-3xl hover:border-brand/20 transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm`}
            >
              {/* Left Column: Mobile Mockup Screen */}
              <div className="w-full lg:w-1/2 flex justify-center shrink-0">
                <MobileMockup src={p.image} title={p.title} />
              </div>
              
              {/* Right Column: Case Copy Details */}
              <div className="w-full lg:w-1/2 flex flex-col gap-4">
                <span className="text-xs font-semibold text-brand tracking-widest uppercase">Featured Case Study</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-fg leading-none">{p.title}</h3>
                <p className="text-sm sm:text-base text-fg/75 whitespace-pre-line leading-relaxed">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tech.map(t => <span className="chip bg-[#0a0d1a]" key={t}>{t}</span>)}
                </div>
                {p.link && (
                  <a 
                    href={p.link} 
                    className="badge w-fit justify-center hover:border-brand mt-4 hover:bg-brand/5 transition-all duration-300 font-semibold px-4 py-1.5 flex items-center group" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.link.includes('play.google.com') ? (
                      <>
                        <svg className="w-4 h-4 mr-2 text-brand group-hover:text-fg transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3 5.27v13.46c0 .82.89 1.33 1.6 0.92l11.64-6.73a1.07 1.07 0 0 0 0-1.84L4.6 4.35C3.89 3.94 3 4.45 3 5.27z" />
                        </svg>
                        Get it on Play Store &rarr;
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2 text-brand group-hover:text-fg transition-colors" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        Explore Repository &rarr;
                      </>
                    )}
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