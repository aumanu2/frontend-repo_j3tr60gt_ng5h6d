import { useEffect, useState, useMemo } from 'react';
import Hero from './components/Hero.jsx';
import AboutExperience from './components/AboutExperience.jsx';
import ProjectsSkills from './components/ProjectsSkills.jsx';
import AchievementsContact from './components/AchievementsContact.jsx';

export default function App() {
  const [dark, setDark] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [dark]);

  const sections = useMemo(() => [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ], []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0b10] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-cyan-500/10 to-blue-600/20 animate-pulse" />
        <div className="relative z-10 w-72">
          <div className="text-center mb-4 text-sm tracking-widest text-cyan-300">Booting up portfolio AI...</div>
          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 animate-[loadbar_1.2s_ease-in-out_infinite]" />
          </div>
        </div>
        <style>
          {`@keyframes loadbar { 0%{width:0%} 50%{width:80%} 100%{width:100%} }`}
        </style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0b10] text-white selection:bg-cyan-500/30 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-cyan-300 hover:text-cyan-200 transition">DD</a>
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-sm text-white/70 hover:text-white transition-colors">{s.label}</a>
            ))}
          </nav>
          <button
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
            {dark ? 'Dark' : 'Light'}
          </button>
        </div>
      </header>

      <main id="home">
        <Hero />
        <AboutExperience />
        <ProjectsSkills />
        <AchievementsContact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Dhruv Dhankher — Built with React + Tailwind</p>
      </footer>
    </div>
  );
}
