import { useMemo, useState } from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';

const allProjects = [
  {
    title: 'AutoML Platform',
    stack: ['React', 'FastAPI', 'DAG', 'Drag&Drop'],
    type: 'Full-Stack',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Autonomous GenAI Agent',
    stack: ['LangChain', 'Tools', 'Memory'],
    type: 'GenAI',
    img: 'https://images.unsplash.com/photo-1706469305177-5ce26b5bd0a4?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
  {
    title: 'Multi-Model AI Suite',
    stack: ['Transformers', 'RAG', 'Torch'],
    type: 'ML/AI',
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    github: '#',
    demo: '#',
  },
];

function ProjectCard({ p }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition will-change-transform">
      <div className="relative">
        <img src={p.img} alt={p.title} className="h-40 w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">{p.title}</h4>
          <div className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200">{p.type}</div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.stack.map((t) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-white/70">{t}</span>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <a href={p.github} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"><Github className="h-4 w-4" /> Code</a>
          <a href={p.demo} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"><ExternalLink className="h-4 w-4" /> Demo</a>
        </div>
      </div>
    </div>
  );
}

function Radar() {
  return (
    <div className="relative grid place-items-center h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
      <svg viewBox="0 0 200 200" className="w-72 h-72">
        <g opacity="0.25" stroke="white">
          {[1,2,3,4].map((i) => (
            <polygon key={i} fill="none" points="100,40 160,80 140,160 60,160 40,80" />
          ))}
        </g>
        <polygon fill="url(#grad)" stroke="rgba(34,211,238,0.6)" points="100,50 150,90 130,150 70,150 50,90" />
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#a78bfa66" />
            <stop offset="100%" stopColor="#22d3ee66" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute -top-3 left-3 text-xs text-white/70">AI/ML</div>
      <div className="absolute -top-3 right-3 text-xs text-white/70">GenAI</div>
      <div className="absolute bottom-3 left-8 text-xs text-white/70">Full-Stack</div>
      <div className="absolute bottom-3 right-8 text-xs text-white/70">DevOps</div>
    </div>
  );
}

export default function ProjectsSkills() {
  const filters = ['All', 'Full-Stack', 'ML/AI', 'GenAI'];
  const [active, setActive] = useState('All');
  const projects = useMemo(() => {
    if (active === 'All') return allProjects;
    return allProjects.filter((p) => p.type === active);
  }, [active]);

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Projects</h3>
          <div className="flex items-center gap-2 text-xs">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`px-3 py-1 rounded-full border ${active===f? 'border-cyan-400/60 bg-cyan-500/10 text-cyan-200':'border-white/10 bg-white/5 text-white/70'} transition`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="[perspective:1000px]">
              <div className="[transform:rotateX(0deg)_rotateY(0deg)] group hover:[transform:rotateX(2deg)_rotateY(-3deg)] transition-transform duration-300">
                <ProjectCard p={p} />
              </div>
            </div>
          ))}
        </div>

        <div id="skills" className="mt-16 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-3">Skills Matrix</h3>
            <Radar />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="font-semibold flex items-center gap-2"><Layers className="h-4 w-4" /> Proficiency</h4>
            <div className="mt-4 space-y-3">
              {[['PyTorch',90],['LangChain',85],['Transformers',88],['React',86],['FastAPI',84],['Docker',80],['Kubernetes',72]].map(([s,v]) => (
                <div key={s}>
                  <div className="flex justify-between text-sm"><span>{s}</span><span className="text-white/70">{v}%</span></div>
                  <div className="h-2 mt-1 rounded bg-white/10 overflow-hidden">
                    <div className="h-full w-0 bg-gradient-to-r from-purple-500 to-cyan-400 animate-[grow_1.2s_ease-out_forwards]" style={{ ['--tw-progress'] : v + '%' }} />
                  </div>
                </div>
              ))}
            </div>
            <style>
              {`@keyframes grow { from { width: 0 } to { width: var(--tw-progress) } }`}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
}
