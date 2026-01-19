
import React from 'react';

const Skills: React.FC = () => {
  const tools = [
    { name: "Languages", items: ["JavaScript", "Python", "SQL", "HTML", "CSS", "Tailwind CSS", "SQLite"], icon: "🖋️", color: "#5C6BC0" },
    { name: "Front-End", items: ["React", "Svelte", "SvelteKit", "Bootstrap", "Flowbite", "Next.js", "React Native", "Expo"], icon: "🧱", color: "#CBB4D4" },
    { name: "Back-End", items: ["Express", "Node.js", "Firebase", "Auth0"], icon: "☁️", color: "#A8C8E4" },
    { name: "Cloud & APIs", items: ["AWS S3", "OpenAI GPT", "Google Vision API", "NewsAPI", "Weather API", "Google OAuth", "Vercel", "Render"], icon: "🔗", color: "#5C6BC0" },
    { name: "Tools", items: ["VS Code", "Agile workflow", "API integration", "Supabase"], icon: "⚙️", color: "#CBB4D4" },
    { name: "Testing", items: ["React", "Jest", "Unittest (Python)", "Playwright", "TestFlight", "Xcode"], icon: "🛡️", color: "#A8C8E4" }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-20">
          <div className="stamp-mark inline-block text-[10px] mb-4">Technical Proficiency</div>
          <h2 className="heading-serif text-5xl md:text-6xl font-black italic text-[#322F3D]">Skills & Stack.</h2>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tools.map((tool, i) => (
            <div key={i} className="postcard-paper deckled-postcard p-0 flex flex-col group relative overflow-hidden min-h-[340px] border border-[#322F3D]/5">
              <div className="flex justify-between items-start p-6">
                <div 
                  className="w-12 h-14 border-2 border-dashed border-[#322F3D]/20 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `${tool.color}33` }}
                >
                   <span className="text-xl">{tool.icon}</span>
                </div>
                <div className="text-right">
                   <span className="mono text-[8px] font-black uppercase opacity-20 block">Category</span>
                   <span className="mono text-[10px] font-black text-[#322F3D] uppercase tracking-tighter">{tool.name}</span>
                </div>
              </div>

              <div className="px-8 pb-10 flex flex-col h-full">
                <h3 className="heading-serif text-3xl font-black mb-6 text-[#322F3D] italic">{tool.name}</h3>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tool.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="mono text-[10px] font-black uppercase tracking-wider px-2 py-1.5 border border-[#322F3D]/10 bg-white/60 text-[#322F3D] group-hover:bg-[#5C6BC0] group-hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
