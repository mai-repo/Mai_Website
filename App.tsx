
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import GitHubStats from './components/GitHubStats';
import Education from './components/Education';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-[#A8C8E4] flex items-center justify-center p-4 cursor-pointer overflow-hidden"
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/exclusive-paper.png')] pointer-events-none"></div>

        <div className="relative group perspective-1000 float-paper w-full max-w-[700px]">
          {/* Postcard Rear (Initial View) */}
          <div className="postcard-paper deckled-postcard p-8 md:p-12 transform transition-all duration-1000 group-hover:rotate-y-[-10deg] border-2 border-[#322F3D]/20 flex flex-col md:flex-row gap-8 min-h-[400px]">

            {/* Postcard Left: Message Area */}
            <div className="flex-1 flex flex-col justify-center text-left">
              <div className="mb-6 opacity-40">
                <div className="stamp-mark inline-block text-[10px] border-[#322F3D]">Special Delivery</div>
              </div>
              <h1 className="heading-serif text-7xl md:text-9xl font-black italic text-[#322F3D] leading-none mb-4 tracking-tighter">
                Mai.
              </h1>
              <p className="heading-serif text-xl italic text-[#322F3D]/60 mb-8">
                Your Favorite Founding <br/>
                Frontend Engineer
              </p>
              <div className="mt-auto">
                <div className="inline-block border-2 border-[#322F3D] px-6 py-2 bg-[#5C6BC0] shadow-[4px_4px_0px_#322F3D] transform group-hover:-translate-y-1 transition-transform">
                   <span className="mono text-[12px] font-black uppercase text-white tracking-widest">Enter Website</span>
                </div>
              </div>
            </div>

            {/* Postcard Center: Vertical Divider */}
            <div className="hidden md:block w-px bg-[#322F3D]/10 h-3/4 self-center"></div>

            {/* Postcard Right: Stamp & Address */}
            <div className="flex-1 flex flex-col py-4">
              <div className="self-end mb-12">
                 <div className="w-20 h-24 border-2 border-dashed border-[#322F3D]/30 p-1 relative flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                    <div className="text-3xl">🗽</div>
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#CBB4D4]/30 rounded-full border border-[#322F3D]/10 flex items-center justify-center rotate-12">
                       <span className="mono text-[6px] font-bold text-center leading-none">NY<br/>2025</span>
                    </div>
                 </div>
              </div>

              <div className="space-y-4">
                <div className="address-line flex items-end pb-1"><span className="mono text-[10px] uppercase opacity-40 italic">To: Anyone</span></div>
                <div className="address-line flex items-end pb-1"><span className="mono text-[10px] uppercase opacity-40 italic">At: The Future</span></div>
                <div className="address-line flex items-end pb-1"><span className="mono text-[10px] uppercase opacity-40 italic">Via: Brooklyn, NY</span></div>
              </div>
            </div>

            {/* Texture Grime Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>
          </div>

          {/* Physical shadows/depth */}
          <div className="absolute -z-10 top-4 left-4 w-full h-full bg-[#322F3D]/10 blur-xl rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col animate-in">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <GitHubStats />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
