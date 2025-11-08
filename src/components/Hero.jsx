import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    const text = 'Dhruv Dhankher';
    let i = 0;
    el.textContent = '';
    const int = setInterval(() => {
      el.textContent = text.slice(0, i + 1);
      i++;
      if (i >= text.length) clearInterval(int);
    }, 70);
    return () => clearInterval(int);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[92vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(76,0,255,0.25),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(0,255,255,0.18),transparent_40%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-32 md:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 backdrop-blur px-3 py-1 text-xs text-white/70">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Open to exciting AI/ML roles & research collaborations
        </div>

        <h1 ref={titleRef} className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-purple-300 via-cyan-200 to-blue-300" />

        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl">
          AI/ML Engineer | Full-Stack Developer | GenAI Specialist
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button onClick={() => scrollTo('projects')} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2.5 text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-cyan-500/30 transition">
            View Projects
            <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <a href="/Dhruv_Dhankher_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-sm">
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <div className="ml-2 flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com/DhruvDhankher" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_#22d3ee77] transition">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/dhruv-dhankher/" target="_blank" rel="noreferrer" className="p-2 rounded-full border border-white/10 hover:bg-white/10 hover:shadow-[0_0_20px_#a855f777] transition">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center text-xs text-white/70">
          {['1000+ concurrent requests handled','67% accuracy improvement','30% wait time reduction'].map((s) => (
            <div key={s} className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 backdrop-blur">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
