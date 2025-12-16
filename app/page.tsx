const features = [
  {
    title: 'Adaptive Feeds',
    description:
      'Dynamic galleries that reorganize in real-time based on attention signals, collaboration history, and your creative intent.',
    icon: '🧠',
    accent: 'from-neon-cyan/50 to-prism-yellow/40'
  },
  {
    title: 'Secure Face-ID Vaults',
    description:
      'Neon biometric encryption keeps identity-protected albums locked to collaborators you trust without sacrificing speed.',
    icon: '🔒',
    accent: 'from-neon-pink/50 to-white/10'
  },
  {
    title: 'Signal-Ready API',
    description:
      'Plug your creative stack into Prism’s REST and realtime APIs with blazing-fast media transformations and insights.',
    icon: '⚡',
    accent: 'from-white/10 to-neon-cyan/40'
  }
];

const stats = [
  { label: 'Latency', value: '42 ms', detail: 'Edge-rendered AI annotations globally' },
  { label: 'Retention', value: '96%', detail: 'Creators stay after the first project' },
  { label: 'Security', value: '256-bit', detail: 'Face-ID + post-quantum ready pipeline' }
];

const pipeline = [
  {
    label: '1',
    title: 'Ingest',
    copy: 'Stream RAW or HEIC assets with zero-loss fidelity. Auto-normalize color, depth, and metadata in-flight.',
    color: 'cyan'
  },
  {
    label: '2',
    title: 'Perception',
    copy: 'Multimodal vision transformers map identity, emotion, and objects to actionable graph nodes.',
    color: 'yellow'
  },
  {
    label: '3',
    title: 'Activation',
    copy: 'Route signals into smart albums, team notifications, and realtime co-editing loops instantly.',
    color: 'pink'
  }
];

const testimonials = [
  {
    name: 'Kai Mendes',
    role: 'Head of Creative Ops, HoloForge',
    quote:
      'Prism feels like a neural extension for our studio. Every drop instantly becomes a shared, searchable memory.'
  },
  {
    name: 'Mina Sol',
    role: 'Director of Visual R&D, NovoLab',
    quote:
      'We shipped three campaigns faster by letting Prism triage our footage, flag hero moments, and surface compliance alerts.'
  }
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="noise" />
      <div className="grid-overlay" />
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 sm:px-10">
        <div className="hero-glow absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-zinc-400 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-prism-yellow shadow-glow" />
            Live Beta Access
          </div>
          <h1 className="mt-8 text-4xl font-semibold tracking-tightest sm:text-6xl md:text-7xl">
            Prism syncs the way<br className="hidden sm:block" /> your team sees reality.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-zinc-400 sm:text-xl">
            An intelligent AI photo-sharing platform engineered for creators, producers, and future-facing teams who demand
            crystal-clear collaboration without friction.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="rounded-full border border-transparent bg-prism-yellow px-8 py-3 text-sm font-semibold text-black transition hover:shadow-glow"
            >
              Activate Early Access
            </a>
            <a
              href="#pipeline"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              Watch the Signal Loop
            </a>
          </div>
        </div>
        <div className="mt-20 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card-sheen p-6 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{stat.label}</p>
              <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
              <p className="mt-3 text-sm text-zinc-400">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-semibold tracking-tightest sm:text-4xl">Pixel streams that think with you.</h2>
            <p className="text-base text-zinc-400 sm:text-lg">
              Prism orchestrates every asset through adaptive AI so your team can zero in on the signal. Amplify your
              visuals with semantic surfacing, real-time sync, and privacy-first control layers built for modern creative
              operations.
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-sm text-neon-pink">
                <span className="blur-ring flex h-10 w-10 items-center justify-center rounded-full border border-neon-pink/60 bg-neon-pink/10 text-base font-semibold text-neon-pink">
                  ID
                </span>
                <p className="font-semibold tracking-tightest text-white">Neon Face ID mesh</p>
              </div>
              <p className="mt-4 text-sm text-zinc-400">
                Zero-trust verified identities keep every share authentic. Prism triangulates biometric signals, then wraps
                them in neon-secure encryption to keep collaborators aligned and assets untouchable.
              </p>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="card-sheen group p-8">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${feature.accent} text-lg`}> 
                  <span>{feature.icon}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-base text-zinc-400">{feature.description}</p>
                <div className="mt-6 inline-flex items-center text-sm font-semibold text-prism-yellow/90 transition group-hover:text-prism-yellow">
                  Explore capability
                  <svg
                    className="ml-2 h-3 w-3"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2V8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline" className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">Signal Pipeline</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tightest">From lens to living system in under a heartbeat.</h2>
            </div>
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10"
            >
              Download the Architecture Map
            </a>
          </div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pipeline.map((stage) => (
              <div key={stage.title} className="card-sheen p-7">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white`}
                  style={{
                    boxShadow:
                      stage.color === 'cyan'
                        ? '0 0 30px rgba(74, 242, 234, 0.5)'
                        : stage.color === 'yellow'
                        ? '0 0 30px rgba(243, 230, 143, 0.4)'
                        : '0 0 30px rgba(239, 169, 182, 0.45)',
                    background:
                      stage.color === 'cyan'
                        ? 'rgba(74, 242, 234, 0.12)'
                        : stage.color === 'yellow'
                        ? 'rgba(243, 230, 143, 0.12)'
                        : 'rgba(239, 169, 182, 0.12)',
                    borderColor:
                      stage.color === 'cyan'
                        ? 'rgba(74, 242, 234, 0.5)'
                        : stage.color === 'yellow'
                        ? 'rgba(243, 230, 143, 0.5)'
                        : 'rgba(239, 169, 182, 0.5)'
                  }}
                >
                  {stage.label}
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{stage.title}</h3>
                <p className="mt-4 text-base text-zinc-400">{stage.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] to-transparent p-12 backdrop-blur-xl lg:flex-row">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">Realtime Canvas</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tightest">Collaborate like your ideas are already synced.</h2>
            <p className="mt-6 text-base text-zinc-400">
              Layer annotations, audio reactions, and AI-suggested edits while Prism mirrors changes across every surface in
              milliseconds. The future of creative alignment is multi-sensory and always-on.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 px-4 py-2">Realtime voice-sync</span>
              <span className="rounded-full border border-white/10 px-4 py-2">Custom signal automations</span>
              <span className="rounded-full border border-white/10 px-4 py-2">SDKs for every stack</span>
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <div className="card-sheen relative flex w-full max-w-sm flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-2xl bg-white/5" />
                  <div>
                    <p className="text-sm font-semibold text-white">Live Session · Prism Lab</p>
                    <p className="text-xs text-zinc-500">Synced 3 collaborators</p>
                  </div>
                </div>
                <span className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan">AI-Coach</span>
              </div>
              <div className="grid gap-3 rounded-2xl bg-white/5 p-4">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-500">
                  <span>Signal feed</span>
                  <span>00:42</span>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-white">+ Neon Face ID verified <span className="text-neon-pink">@mina.sol</span></p>
                  <p className="text-zinc-400">AI surfaced 3 hero frames for Campaign // Vanta</p>
                  <p className="text-zinc-400">Compliance status: Clear · 0 flagged subjects</p>
                </div>
              </div>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-prism-yellow px-4 py-2 text-sm font-semibold text-black">
                Inject into Storyboard
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">Trusted Holography</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tightest">Teams building the future already share through Prism.</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="card-sheen p-8 text-left">
              <p className="text-lg text-white/90">“{testimonial.quote}”</p>
              <div className="mt-6 text-sm text-zinc-400">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 px-6 pb-24 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] px-10 py-14 text-center backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">Join the Signal</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tightest">Spin up your first intelligent gallery.</h2>
          <p className="mt-4 max-w-2xl text-base text-zinc-400">
            Secure early operator status and unlock face-mesh vaults, zero-touch exports, and signal intelligence that keeps
            your visuals alive across every dimension.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded-full border border-transparent bg-prism-yellow px-8 py-3 text-sm font-semibold text-black transition hover:shadow-glow"
            >
              Request Operator Invite
            </a>
            <a
              href="#"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/10"
            >
              View API Blueprints
            </a>
          </div>
        </div>
        <footer className="mx-auto mt-20 flex max-w-6xl flex-col gap-6 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-semibold tracking-[0.4em] text-zinc-400">PRISM</span>
          <div className="flex flex-wrap gap-6 text-zinc-600">
            <a href="#">Product</a>
            <a href="#">Security</a>
            <a href="#">Developers</a>
            <a href="#">Careers</a>
            <a href="#">Legal</a>
          </div>
          <span className="text-zinc-600">© {new Date().getFullYear()} Prism Labs. All neural rights reserved.</span>
        </footer>
      </section>
    </main>
  );
}
