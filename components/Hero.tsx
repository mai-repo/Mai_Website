
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-56 pb-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20 items-center">
          <div className="z-10 animate-in">
            <header className="mb-8">
              <div className="mb-6">
                <span className="mono text-[11px] font-bold tracking-[0.25em] text-[#6366F1] uppercase">
                  Founding Frontend Engineer
                </span>
              </div>
              <h1 className="heading-serif text-7xl md:text-[100px] font-bold tracking-tighter text-[#0F172A] leading-[0.85] mb-8 italic">
                Thanh <br /> Mai.
              </h1>
            </header>

            <p className="text-xl md:text-2xl text-[#0F172A] leading-snug mb-10 font-medium tracking-tight max-w-xl">
              Mission-driven engineer building intuitive, accessible web and mobile products from 0 to 1.
            </p>

            <div className="max-w-lg text-[#64748B] text-lg leading-relaxed mb-12">
              Expertise in React and React Native (Expo), shipping production-ready features across iOS and Android in high-stakes startup environments.
            </div>

            <div className="flex flex-wrap items-center gap-10">
              <a href="https://www.linkedin.com/in/mai-th2024/" target="_blank" rel="noopener noreferrer"
                className="mono text-[13px] font-black uppercase tracking-widest px-8 py-4 bg-[#5C6BC0] text-white border-2 border-[#322F3D] shadow-[6px_6px_0px_#322F3D] hover:translate-y-[-2px] transition-transform text-center">
                LinkedIn Profile
              </a>
              <div className="flex gap-10">
                <a href="mailto:ttmai@my.loyno.edu" className="mono text-[13px] font-black uppercase tracking-widest border-b-2 border-[#5C6BC0] hover:text-[#5C6BC0] transition-all py-2">Email</a>
                <a href="https://github.com/mai-repo" target="_blank" className="mono text-[13px] font-black uppercase tracking-widest border-b-2 border-[#CBB4D4] hover:text-[#CBB4D4] transition-all py-2">GitHub</a>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* The "Postcard" frame for the portrait */}
            <div className="postcard-paper deckled-postcard p-6 transform rotate-3 group-hover:rotate-0 transition-all duration-700 border-2 border-[#322F3D]/10 shadow-2xl">
              {/* Added a professional mesh gradient background for the transparent PNG */}
              <div className="overflow-hidden border-2 border-[#322F3D]/10 relative aspect-[4/5] bg-[#f8fafc]">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_50%,_#5C6BC0_0%,_transparent_70%)]"></div>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_100%_0%,_#CBB4D4_0%,_transparent_50%)]"></div>

                <img
                  src="/assets/Mai.png"
                  alt="Thanh Mai"
                  className="w-full h-full object-cover relative z-10 brightness-[1.02] contrast-[1.05]"
                />
              </div>
              <div className="mt-8 text-center border-t border-dashed border-[#322F3D]/10 pt-6">
                <span className="mono text-[12px] font-black uppercase tracking-[0.3em] text-[#322F3D]/40 italic">BROOKLYN // NY</span>
              </div>
            </div>

            {/* Background offset card */}
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#A8C8E4]/40 -z-10 border-2 border-[#322F3D]/10 rotate-[-2deg]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
