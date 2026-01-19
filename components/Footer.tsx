
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 text-center text-[#3E3A4B]/60">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="h-px w-32 bg-[#3E3A4B]/20 mx-auto"></div>
        
        <p className="mono text-[10px] font-black uppercase tracking-[0.4em]">
          Production No. {new Date().getFullYear()} // Brooklyn Expedition
        </p>
        
        <div className="flex justify-center items-center gap-6">
           <div className="w-4 h-4 rounded-full bg-[#5C6BC0] opacity-80"></div>
           <div className="w-4 h-4 rounded-full bg-[#CBB4D4] opacity-80"></div>
           <div className="w-4 h-4 rounded-full bg-[#A8C8E4] opacity-80"></div>
        </div>
        
        <p className="mono text-[9px] uppercase tracking-[0.5em] italic opacity-40">
          All rights reserved to the journey
        </p>
      </div>
    </footer>
  );
};

export default Footer;
