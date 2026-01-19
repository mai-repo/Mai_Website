
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-40 px-6 relative overflow-hidden">
      {/* Cinematic Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[rgba(62,58,75,0.05)]"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="postcard-paper deckled-postcard p-8 md:p-12 rotate-1 hover:rotate-0 transition-transform duration-700 border border-[#322F3D]/10">
          
          {/* Postcard Stamp Area */}
          <div className="absolute top-8 right-8 w-20 h-24 border-2 border-dashed border-[#322F3D]/30 flex flex-col items-center justify-center p-2 text-center opacity-60">
            <span className="mono text-[8px] font-black leading-tight uppercase">Air Mail<br/>Postage<br/>Required</span>
            <span className="text-2xl mt-1">🗽</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side: The "Message" */}
            <div className="space-y-6">
              <span className="mono text-[10px] font-bold uppercase tracking-[0.4em] opacity-40 italic">The Postscript</span>
              
              <h2 className="heading-serif text-5xl md:text-6xl font-black italic text-[#322F3D] leading-none">
                Let’s talk.
              </h2>
              
              <p className="text-lg text-[#322F3D]/70 font-medium italic leading-relaxed">
                Founding engineering is a journey. <br/>
                Based in Brooklyn, NY. <br/>
                Ready for the next big build.
              </p>

              <div className="pt-4">
                <a 
                  href="mailto:ttmai@my.loyno.edu" 
                  className="heading-serif text-2xl font-black border-b-2 border-[#322F3D] hover:text-[#5C6BC0] hover:border-[#5C6BC0] transition-all pb-1 text-[#322F3D] inline-block"
                >
                  ttmai@my.loyno.edu
                </a>
              </div>
            </div>

            {/* Right Side: The "Address" */}
            <div className="md:border-l md:border-[#322F3D]/10 md:pl-12 space-y-8 pt-8 md:pt-16">
              <div className="space-y-4">
                <div className="border-b border-[#322F3D]/10 pb-2">
                  <a 
                    href="https://www.linkedin.com/in/mai-th2024/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mono text-[13px] font-black uppercase tracking-widest text-[#322F3D] hover:text-[#5C6BC0] flex items-center gap-3"
                  >
                    <span className="text-[#5C6BC0]">→</span> LinkedIn
                  </a>
                </div>
                <div className="border-b border-[#322F3D]/10 pb-2">
                  <a 
                    href="https://github.com/mai-repo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mono text-[13px] font-black uppercase tracking-widest text-[#322F3D] hover:text-[#5C6BC0] flex items-center gap-3"
                  >
                    <span className="text-[#5C6BC0]">→</span> GitHub
                  </a>
                </div>
              </div>

              <div className="pt-4">
                 <div className="mono text-[9px] font-bold uppercase tracking-widest opacity-30 italic">Location</div>
                 <div className="heading-serif text-xl font-black italic text-[#322F3D]">Brooklyn, NY</div>
              </div>
            </div>
          </div>
          
          {/* Texture on the card */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
