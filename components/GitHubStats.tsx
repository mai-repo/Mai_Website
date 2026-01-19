import React from 'react';

const GitHubStats: React.FC = () => {
  return (
    <section id="github" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <header className="mb-16 text-left">
          <div className="stamp-mark inline-block text-[10px] mb-4">Code Activity</div>
          <h2 className="heading-serif text-5xl font-black italic text-[#322F3D]">Open Source Footprint.</h2>
        </header>

        <div className="postcard-paper deckled-postcard p-8 md:p-12 border border-[#322F3D]/5">
          <div className="flex flex-col gap-10">
            {/* Contribution Stats Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#322F3D]/10 pb-6">
              <div>
                <h3 className="heading-serif text-3xl font-black text-[#322F3D]">2,613 contributions</h3>
                <p className="mono text-[11px] uppercase tracking-widest text-[#322F3D]/50 font-bold">in the last year</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="inline-flex gap-2 p-1 bg-white border border-[#322F3D]/10 rounded-sm">
                  {[2026, 2025, 2024].map((year) => (
                    <span key={year} className={`px-4 py-1 mono text-[10px] font-black cursor-default ${year === 2026 ? 'bg-[#5C6BC0] text-white shadow-sm' : 'text-[#322F3D]/40'}`}>
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12">
              {/* Left Column: Visual Mock of Grid and Repos */}
              <div className="space-y-8">
                <div className="relative group overflow-hidden border border-[#322F3D]/10 p-4 bg-white/50">
                   <div className="flex items-center justify-between mb-4">
                      <span className="mono text-[10px] font-black opacity-30 uppercase tracking-tighter">Contribution Heatmap</span>
                      <div className="flex gap-1">
                         {[1,2,3,4,5].map(i => <div key={i} className="w-2.5 h-2.5 bg-[#5C6BC0]" style={{ opacity: i*0.2 }}></div>)}
                      </div>
                   </div>
                   {/* Simplified visual representation of the provided heatmap image */}
                   <div className="grid grid-cols-12 gap-1 h-32">
                      {Array.from({length: 48}).map((_, i) => (
                        <div key={i} className={`rounded-sm bg-[#5C6BC0]`} style={{ opacity: Math.random() }}></div>
                      ))}
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="flex items-center gap-4 border-l-4 border-[#5C6BC0] pl-6 py-2">
                      <div className="w-10 h-10 bg-white border border-[#322F3D]/10 flex items-center justify-center text-lg">📁</div>
                      <div>
                        <p className="mono text-[12px] font-black text-[#322F3D]">CommitTeam/comitai-monorepo</p>
                        <p className="mono text-[9px] uppercase opacity-40 font-bold">Core Contributor</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 border-l-4 border-[#CBB4D4] pl-6 py-2">
                      <div className="w-10 h-10 bg-white border border-[#322F3D]/10 flex items-center justify-center text-lg">⚡</div>
                      <div>
                        <p className="mono text-[12px] font-black text-[#322F3D]">mai-repo/Mai-Code-Challenge</p>
                        <p className="mono text-[9px] uppercase opacity-40 font-bold">Personal Lead</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Right Column: Activity Breakdown inspired by the radar chart */}
              <div className="bg-[#5C6BC0]/5 border border-[#5C6BC0]/10 p-8 flex flex-col justify-center relative">
                 <div className="absolute top-4 right-4 opacity-10 rotate-12">
                    <div className="stamp-mark text-4xl">SYSTEM OK</div>
                 </div>
                 
                 <h4 className="mono text-[11px] font-black uppercase tracking-[0.3em] mb-10 border-b border-[#322F3D]/10 pb-2">Activity Overview</h4>
                 
                 <div className="space-y-6">
                    <div className="flex justify-between items-end">
                       <span className="heading-serif text-xl font-black italic">Commits</span>
                       <span className="mono text-2xl font-black text-[#5C6BC0]">92%</span>
                    </div>
                    <div className="w-full h-2 bg-white border border-[#322F3D]/5">
                       <div className="h-full bg-[#5C6BC0]" style={{ width: '92%' }}></div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4">
                       <div>
                          <p className="mono text-[9px] uppercase opacity-40 mb-1">Reviews</p>
                          <p className="heading-serif text-lg font-black italic text-[#322F3D]">2%</p>
                       </div>
                       <div>
                          <p className="mono text-[9px] uppercase opacity-40 mb-1">Issues</p>
                          <p className="heading-serif text-lg font-black italic text-[#322F3D]">2%</p>
                       </div>
                       <div>
                          <p className="mono text-[9px] uppercase opacity-40 mb-1">Pull Requests</p>
                          <p className="heading-serif text-lg font-black italic text-[#322F3D]">4%</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 text-center pt-8 border-t border-dashed border-[#322F3D]/10">
                    <a href="https://github.com/mai-repo" target="_blank" className="mono text-[11px] font-black uppercase tracking-widest text-[#5C6BC0] hover:underline">
                       View Full Commit History →
                    </a>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;