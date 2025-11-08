import { Mail, Phone, Trophy, Star, Quote, Rocket } from 'lucide-react';

export default function AchievementsContact() {
  return (
    <section id="achievements" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-xl font-semibold">Achievements</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { title: 'DocMate Healthcare Hackathon Winner', desc: 'Built an AI triage and scheduling assistant that reduced wait times by 30%.', icon: Trophy },
            { title: 'GSoC Selection', desc: 'Open-source contributions to AI tooling and developer workflows.', icon: Star },
            { title: 'HackVega Finalist (<1% of 32K)', desc: 'Ranked among the top teams for a production-grade GenAI product.', icon: Rocket },
          ].map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/40 to-cyan-400/40">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-white/80 mt-1">{desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 items-start" id="contact">
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <form className="mt-4 space-y-3">
              <input required name="name" placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-cyan-400/60" />
              <input required type="email" name="email" placeholder="Your email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-cyan-400/60" />
              <textarea required name="message" rows={4} placeholder="Tell me about your project" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-2 outline-none focus:border-cyan-400/60" />
              <button type="submit" className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-5 py-2 font-medium">Send</button>
            </form>
            <div className="mt-4 text-sm text-white/80 space-y-1">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91-8178031325</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> dhruvdhankher1@gmail.com</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h4 className="font-semibold flex items-center gap-2"><Quote className="h-4 w-4" /> Testimonials</h4>
            <div className="mt-3 text-white/80 text-sm">
              <p>“Dhruv blends research rigor with shipping velocity. His systems scale and his UX shines.”</p>
              <p className="mt-2">“Owns problems end-to-end — from data to devops.”</p>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-r from-purple-600/20 to-cyan-500/20 p-8 text-center">
          <div className="text-2xl font-semibold mb-2">Let's Build Something</div>
          <p className="text-white/80">I love working on challenging ML systems, GenAI products, and full‑stack platforms.</p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-semibold">Blog</div>
            <p className="text-sm text-white/80 mt-1">Coming soon — insights on ML systems, GenAI, and engineering.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-semibold">Analytics</div>
            <p className="text-sm text-white/80 mt-1">Ready for integration — plug your provider to start measuring.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-semibold">SEO</div>
            <p className="text-sm text-white/80 mt-1">Metadata, semantic structure, performance best practices included.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
