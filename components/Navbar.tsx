
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl">
      <div className="bg-white border-2 border-[#3E3A4B] px-10 h-14 flex items-center justify-between shadow-[4px_4px_0px_#3E3A4B]">
        <div className="flex items-center gap-3">
          <a href="#about" className="heading-serif font-black text-2xl tracking-tighter text-[#3E3A4B] italic hover:text-[#5C6BC0] transition-colors">T. Mai</a>
        </div>
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#skills" className="mono text-[11px] font-black text-[#3E3A4B] uppercase tracking-widest hover:text-[#5C6BC0] transition-colors">Stack</a>
          <a href="#experience" className="mono text-[11px] font-black text-[#3E3A4B] uppercase tracking-widest hover:text-[#5C6BC0] transition-colors">Log</a>
          <a href="#education" className="mono text-[11px] font-black text-[#3E3A4B] uppercase tracking-widest hover:text-[#5C6BC0] transition-colors">Edu</a>
          <a href="#contact" className="mono text-[11px] font-black text-[#3E3A4B] uppercase tracking-widest hover:text-[#5C6BC0] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
