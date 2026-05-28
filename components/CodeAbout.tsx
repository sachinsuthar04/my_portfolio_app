'use client';

import { useState } from 'react';

export default function CodeAbout() {
  const [activeTab, setActiveTab] = useState('about-me.js');

  const files = [
    { name: 'about-me.js', icon: 'JS', color: 'text-yellow-400' },
    { name: 'skills.json', icon: '{}', color: 'text-cyan-400' },
    { name: 'experience.md', icon: 'MD', color: 'text-indigo-400' }
  ];

  const codeSnippets: Record<string, string> = {
    'about-me.js': `// === Hello World! I'm Sachin Suthar ===

class MobileAppDeveloper {
  constructor() {
    this.role = "Tech Lead / Senior Mobile Developer";
    this.experience = "10+ years in Mobile & IT";
{{ ... }}
  }

  achievements() {
    return [
      "Led Flutter teams improving release efficiency by 30%",
      "Reduced bugs by 25% via comprehensive testing",
      "Cut dev time by 20% using structured reusable libraries"
    ];
  }

  missionStatement() {
    return "Crafting high-quality, scalable, user-focused mobile products.";
  }
}

const Sachin = new MobileAppDeveloper();
console.log("Top Achievements:", Sachin.achievements());
console.log("Mission Statement:", Sachin.missionStatement());`,
    'skills.json': `{
  "languages": ["Dart", "Kotlin", "Java", "TypeScript", "SQL"],
  "frameworks": ["Flutter 3", "Android SDK", "Clean Architecture"],
  "libraries": ["BLoC", "Riverpod", "Provider", "GetX", "RxJava"],
  "databases": ["SQLite", "Room", "Hive", "Realm", "PostgreSQL"],
  "ci_cd_tools": ["Fastlane", "Git", "Bitbucket", "GitHub Actions", "Jira"],
  "expertises": [
    "Cross-Platform App Architecture",
    "Team Leadership & Agile Scrum",
    "Performance Optimization & Jank Elimination"
  ]
}`,
    'experience.md': `# Professional Experience Timeline

## Tech Lead — Senior Mobile Developer
- **Focus**: Driving mobile excellence with Flutter 3 and Native Android.
- **Leadership**: Mentoring engineers, defining architectures, and setting CI/CD pipelines.
- **Results**:
  - Boosted development velocity by 20% with shared components.
  - Eliminated UI shader jank by migrating pipelines to Impeller engine.
  - Structured reusable component UI libraries shared across internal applications.`
  };

  const activeCodeLines = codeSnippets[activeTab].trim().split('\n');

  return (
    <section id="about" className="section relative">
      <div className="container">
        <h2 className="h2 text-center sm:text-left mb-8">About Me</h2>

        {/* High-Fidelity VS Code Editor Mockup */}
        <div className="card p-0 overflow-hidden border-border bg-[#050811] shadow-[0_30px_70px_rgba(0,0,0,0.6)] flex flex-col rounded-xl">
          {/* OS Titlebar */}
          <div className="bg-[#0b0e14] px-4 py-3 flex items-center justify-between border-b border-border/80">
            {/* Window Dots */}
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-xs text-fg/50 font-mono hidden sm:block">
              sachin-suthar-portfolio — Visual Studio Code
            </div>
            <div className="w-12 h-2" /> {/* Spacing helper */}
          </div>

          {/* IDE Core Window Container */}
          <div className="flex flex-grow min-h-[50vh] max-h-[60vh]">
            {/* VS Code Side Sidebar (Icon column + Directory explorer on desktop) */}
            <div className="hidden md:flex bg-[#070a10] border-r border-border/50 text-xs font-mono select-none">
              {/* Vertical Icon Menu */}
              <div className="w-12 bg-[#090c13] flex flex-col items-center gap-5 pt-4 text-fg/45 border-r border-border/40">
                <span className="text-fg hover:text-brand cursor-pointer">📄</span>
                <span className="hover:text-brand cursor-pointer">🔍</span>
                <span className="hover:text-brand cursor-pointer">🌿</span>
                <span className="hover:text-brand cursor-pointer">🛠️</span>
                <span className="hover:text-brand cursor-pointer">⚙️</span>
              </div>

              {/* Directory Explorer Pane */}
              <div className="w-48 p-4 flex flex-col gap-3">
                <div className="font-bold text-fg/60 text-[10px] tracking-widest uppercase">Explorer</div>
                <div className="flex flex-col gap-1">
                  <div className="text-fg/80 font-bold">📁 SACHIN-PORTFOLIO</div>
                  <div className="pl-3 flex flex-col gap-1">
                    {files.map(f => (
                      <button
                        key={f.name}
                        onClick={() => setActiveTab(f.name)}
                        className={`flex items-center gap-1.5 py-1 px-1.5 rounded transition-colors text-left w-full ${
                          activeTab === f.name ? 'bg-brand/10 text-brand font-semibold' : 'text-fg/70 hover:bg-card/40'
                        }`}
                      >
                        <span className={`text-[10px] font-bold ${f.color}`}>{f.icon === '{}' ? '{ }' : f.icon}</span>
                        <span>{f.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Editor Workspace Panel */}
            <div className="flex flex-col flex-grow bg-[#050811] overflow-hidden">
              {/* Tab Bar Container (Scrollable on mobile) */}
              <div className="bg-[#080b12] border-b border-border/50 flex overflow-x-auto scrollbar-none select-none">
                {files.map(f => (
                  <button
                    key={f.name}
                    onClick={() => setActiveTab(f.name)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-mono transition-colors border-r border-border/40 text-left min-w-[120px] ${
                      activeTab === f.name
                        ? 'bg-[#050811] text-brand border-t-[2px] border-t-brand font-semibold'
                        : 'text-fg/60 hover:bg-[#070a10] hover:text-fg'
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${f.color}`}>{f.icon === '{}' ? '{ }' : f.icon}</span>
                    <span>{f.name}</span>
                  </button>
                ))}
              </div>

              {/* Dynamic Line-Numbered Workspace */}
              <div className="flex flex-grow font-mono text-sm leading-6 overflow-auto py-4 bg-[#050811]">
                {/* Dynamically Numbered Sidebar */}
                <div className="select-none text-right pr-4 text-fg/20 border-r border-border/40 pl-4 bg-[#050811] shrink-0 w-12">
                  {activeCodeLines.map((_, i) => (
                    <div key={i}>{i + 1}</div>
                  ))}
                </div>

                {/* Editor Content Area */}
                <pre className="pl-4 flex-grow text-fg/80 overflow-x-auto whitespace-pre">
                  <code>
                    {activeCodeLines.map((line, i) => (
                      <div key={i} className="hover:bg-brand/5 px-2 rounded-sm transition-colors w-full min-h-[1.5rem]">
                        {line || ' '}
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* IDE Bottom Status Bar */}
          <div className="bg-[#0b0e14] px-4 py-1.5 flex items-center justify-between border-t border-border/80 text-[10px] font-mono text-fg/50 select-none">
            {/* Status Left */}
            <div className="flex items-center gap-4">
              <span className="bg-brand/20 text-brand px-1.5 py-0.5 rounded font-bold">master</span>
              <div className="flex items-center gap-1">
                <span>⚠ 0</span>
                <span>🛈 0</span>
              </div>
            </div>
            {/* Status Right */}
            <div className="flex items-center gap-4">
              <span>Ln {activeCodeLines.length}, Col 1</span>
              <span>Spaces: 2</span>
              <span>UTF-8</span>
              <span className="text-brand">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
