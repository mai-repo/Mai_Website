
import React from 'react';

const Education: React.FC = () => {
  const edu = [
    { title: "Techtonica", sub: "Software Bootcamp", year: "2024" },
    { title: "Central European University", sub: "Master of Arts, Philosophy", year: "2021" },
    { title: "Loyola University New Orleans", sub: "Bachelor of Arts, Philosophy", year: "2018" }
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16">
          <div className="stamp-mark inline-block text-[10px] mb-4">Laurels</div>
          <h2 className="heading-serif text-5xl font-black italic text-[#322F3D]">Education & Awards.</h2>
        </header>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            {edu.map((item, i) => (
              <div key={i} className="postcard-paper deckled-postcard p-8 flex items-center justify-between group border border-[#322F3D]/5">
                <div className="pr-4">
                  <h4 className="heading-serif text-2xl font-black text-[#322F3D] italic">{item.title}</h4>
                  <p className="mono text-[11px] uppercase font-bold text-[#322F3D]/50 tracking-widest">{item.sub}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="mono text-[11px] font-black px-3 py-1 bg-[#A8C8E4]/40 border border-[#322F3D]/10 shadow-sm">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="postcard-paper deckled-postcard p-10 relative overflow-hidden border border-[#322F3D]/5">
            <h3 className="mono text-[11px] font-black text-[#322F3D] uppercase tracking-[0.4em] mb-10 border-b border-[#322F3D]/10 pb-4">Key Distinctions</h3>
            
            <ul className="space-y-8">
              <li className="relative pl-6">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#4A90E2] border border-[#322F3D]/20"></div>
                <span className="block font-bold text-xl text-[#322F3D]">Fulbright Scholarship</span>
                <span className="mono text-[10px] uppercase tracking-widest text-[#322F3D]/50 italic">Fulbright Commission in Belgium (2018)</span>
              </li>
              <li className="relative pl-6">
                <div className="absolute left-0 top-1 w-2.5 h-2.5 rounded-full bg-[#CBB4D4] border border-[#322F3D]/20"></div>
                <span className="block font-bold text-xl text-[#322F3D]">PIKSI Boston-Alain Locke Fellow</span>
                <span className="mono text-[10px] uppercase tracking-widest text-[#322F3D]/50 italic">Massachusetts Institute of Technology (2017)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
