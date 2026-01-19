
import React from 'react';

const Experience: React.FC = () => {
  const journey = [
    {
      role: "Founding Frontend Engineer",
      org: "Como",
      year: "MAY 2025 — PRESENT",
      color: "#5C6BC0",
      textColor: "text-white",
      bullets: [
        "Shipped a cross-platform mobile app using React Native + Expo, supporting iOS + Android releases with EAS and TestFlight workflows.",
        "Implemented secure auth (login/signup/refresh + token storage) using Redux and SecureStore to maintain reliable session state.",
        "Built a short-form feed experience and integrated core APIs focusing on scalable data fetching and infinite patterns.",
        "Owned mobile performance + stability improvements (reducing unnecessary calls, removing unused packages) with attention to memory.",
        "Integrated live video streaming using Agora (broadcaster/audience flows) and real-time syncing via sockets.",
        "Implemented key platform integrations like deep linking and health permissions gating (HealthKit/HealthConnect)."
      ]
    },
    {
      role: "Junior Dev",
      org: "Techtonica",
      year: "JULY 2024 — MAY 2025",
      color: "#CBB4D4",
      textColor: "text-[#322F3D]",
      bullets: [
        "Edited open-source curriculum for clarity and accessibility; created/maintained a project wiki documenting best practices.",
        "Implemented solutions in both front-end (JavaScript) and back-end (Python) to drive project progress and meet sprint goals.",
        "Worked across time zones with global teams using Jira, Git, and VS Code.",
        "Contributed to two major full-stack applications (VietChef, Mai Code Challenge) and consistently delivered sprint goals."
      ]
    },
    {
      role: "Outreach and Engagement Specialist",
      org: "Lime Connect",
      year: "MAR 2022 — JULY 2023",
      color: "#A8C8E4",
      textColor: "text-[#322F3D]",
      bullets: [
        "Conducted targeted outreach to over 150 student groups and 200+ career/disability offices to identify diverse talent.",
        "Reviewed over 150 Scholarship applications, selecting top candidates and establishing a seamless applicant-to-member pipeline."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-28">
          <div className="stamp-mark inline-block text-[10px] mb-4">Official Career Log</div>
          <h2 className="heading-serif text-6xl md:text-7xl font-black italic text-[#322F3D]">Relevant Experience.</h2>
        </header>
        
        <div className="space-y-24">
          {journey.map((step, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-12 items-start relative group">
              <aside className="lg:w-1/4">
                <div className={`postcard-paper px-6 py-2 inline-block transform -rotate-3 font-black mono text-[12px] tracking-widest border border-[#322F3D]/10 shadow-lg ${step.textColor}`} style={{ backgroundColor: step.color }}>
                  {step.year}
                </div>
              </aside>
              <div className="lg:w-3/4 postcard-paper deckled-postcard p-12 relative border border-[#322F3D]/5">
                <div className="absolute top-8 right-12 opacity-5 scale-150 rotate-12">
                   <div className="stamp-mark text-6xl">VERIFIED</div>
                </div>
                
                <h3 className="heading-serif text-4xl font-black mb-3 italic tracking-tight">{step.role}</h3>
                <p className="mono text-[13px] font-black uppercase tracking-[0.4em] text-[#322F3D]/60 mb-10">{step.org}</p>
                <ul className="space-y-6">
                  {step.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-xl leading-relaxed relative pl-10 font-medium italic text-[#322F3D]/80">
                      <span className="absolute left-0 top-3 w-4 h-px bg-[#322F3D]/30"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
