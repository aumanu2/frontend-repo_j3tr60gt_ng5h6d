import { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

function Counter({ to, label }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let current = 0;
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      current = Math.floor(p * to);
      el.textContent = `${current.toLocaleString()}${to >= 1000 ? '+' : ''}`;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [to]);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur text-center">
      <div ref={ref} className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300" />
      <div className="text-xs text-white/70 mt-1">{label}</div>
    </div>
  );
}

export default function AboutExperience() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-square w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-cyan-900/40">
          <div className="absolute inset-0 animate-[float_8s_ease-in-out_infinite]">
            <div className="absolute left-1/4 top-1/4 w-24 h-24 rounded-xl bg-purple-500/40 blur-xl" />
            <div className="absolute right-1/3 bottom-1/4 w-28 h-28 rounded-full bg-cyan-400/40 blur-xl" />
            <div className="absolute left-1/3 bottom-1/3 w-16 h-16 rotate-45 border-2 border-white/20" />
          </div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="h-40 w-40 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl grid place-items-center shadow-inner">
              <Sparkles className="h-10 w-10 text-cyan-300 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold">About</h2>
          <p className="text-white/80 leading-relaxed">
            RVCE student with an 8.93 CGPA, currently juggling 3 concurrent internships. I design scalable ML systems that power real products — from real-time NLP to optimization under constraints. I blend research-grade models with pragmatic engineering to ship fast and reliably.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Counter to={1000} label="Concurrent requests handled" />
            <Counter to={67} label="Accuracy improvement" />
            <Counter to={30} label="Wait time reduction" />
          </div>

          <div className="pt-2">
            <div className="text-sm mb-2 text-white/70">Tech stack</div>
            <div className="flex flex-wrap gap-2">
              {['PyTorch','Transformers','LangChain','React','FastAPI','Docker','Kubernetes','Pinecone'].map((t) => (
                <span key={t} className="px-3 py-1.5 text-xs rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition hover:shadow-[0_0_18px_rgba(56,189,248,0.35)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Timeline />
    </section>
  );
}

function TimelineItem({ title, subtitle, points, logo }) {
  return (
    <div className="relative pl-10 group">
      <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400 shadow-[0_0_0_4px_rgba(255,255,255,0.06)]" />
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 hover:bg-white/10 transition">
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-6 w-6 object-contain rounded" />
          <div>
            <div className="font-semibold">{title}</div>
            <div className="text-xs text-white/70">{subtitle}</div>
          </div>
        </div>
        <div className="mt-3 hidden md:block text-sm text-white/80">
          <ul className="space-y-1.5">
            {points.map((p) => (
              <li key={p} className="leading-relaxed">• {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const items = [
    {
      title: 'GE Healthcare',
      subtitle: 'OR scheduling optimization, ML constraints',
      points: [
        'Formulated constraint-aware models to optimize operating room schedules',
        'Reduced idle time with mixed-integer heuristics and learning-based priors',
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/GE_logo.svg',
    },
    {
      title: 'SpikedAI',
      subtitle: 'Real-time NLP, GraphRAG, 10K+ concurrent sessions',
      points: [
        'Deployed real-time NLP services with streaming and backpressure handling',
        'Built GraphRAG retrieval flows to improve grounding and factuality',
      ],
      logo: 'https://avatars.githubusercontent.com/u/139426?v=4',
    },
    {
      title: 'iExcel',
      subtitle: 'Job matching engine, BERT embeddings, Pinecone',
      points: [
        'Semantic candidate-job matching using BERT and vector search',
        'Latency-optimized pipelines with batching and caching',
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png',
    },
  ];

  return (
    <section id="experience" className="relative max-w-5xl mx-auto px-4 mt-16">
      <h3 className="text-xl font-semibold mb-6">Experience</h3>
      <div className="relative">
        <div className="absolute left-1 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-white/20 to-cyan-500/50" />
        <div className="space-y-5">
          {items.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
