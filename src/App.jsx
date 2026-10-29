import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ChartCandlestick,
  Check,
  Cloud,
  Copy,
  HeartPulse,
  Linkedin,
  Mail,
  ShoppingBag,
  Sparkles,
  Timer,
  TrendingUp,
} from "lucide-react";

// ====== DATA (edit me) ======
const DATA = {
  name: "Steve Lopez",
  specialties: "SEO/GEO · UX/UI · Frontend · Full-Stack · AI Engineer",
  hello: "Hello, I'm Steve.",
  intro:
    "I build AI-powered products and make them findable — 12+ years across search, frontend engineering and AI workflows.",
  availability: "Open to AI engineering & frontend roles",
  email: "egeisteve@gmail.com",
  linkedin: "https://www.linkedin.com/in/steven-lopez-47b7a4418/",
  // Each project can take an optional `logo` ("/logo-name.svg" in /public): it replaces the
  // icon on its card and the name in the hero's "Worked with" strip. Add `markOnly: true`
  // when the logo is a symbol without the company name, so the name still shows.
  lanes: {
    marketing: {
      short: "Marketing",
      projects: [
        {
          title: "Nassau AI",
          icon: Sparkles,
          logo: "/logo-nassau-ai.svg",
          markOnly: true,
          role: "AI Lead Developer / SEO Lead",
          period: "Jan 2025 – Present",
          subtitle: "AI Search Visibility",
          blurb:
            "Leading visibility strategy across AI Overviews, ChatGPT, Perplexity and classic SERPs for a marketing & dev team.",
          // placeholder metric — replace with a real one
          metric: { value: 3, suffix: "×", label: "AI answer-engine citations" },
          tags: ["AEO/GEO", "AI Overviews", "Technical SEO"],
        },
        {
          title: "Pastel Collections",
          icon: ShoppingBag,
          logo: "/logo-pastel.png",
          role: "Head of UI/UX, Full-Stack Developer",
          period: "Mar 2021 – Feb 2025",
          subtitle: "National Retail E-Commerce",
          blurb:
            "Led UI/UX and full-stack development for a 30+ store national clothing brand — owning the platform end-to-end, including SEO and on-page strategy.",
          // placeholder metric — replace with a real one
          metric: { value: 180, prefix: "+", suffix: "%", label: "organic revenue growth" },
          tags: ["E-Commerce SEO", "Content Strategy", "Core Web Vitals"],
        },
        {
          title: "Rank Empire",
          icon: TrendingUp,
          logo: "/logo-rank-empire.svg",
          markOnly: true,
          role: "Senior SEO Analyst",
          period: "Jun 2017 – Feb 2021",
          subtitle: "SEO Agency",
          blurb:
            "Set strategy across an agency client portfolio; oversaw domain, HTTPS and replatform migrations with zero ranking loss.",
          metric: { value: 549, prefix: "+", suffix: "%", label: "growth in ranking keywords" },
          tags: ["SEO Strategy", "Site Migrations", "Team Leadership"],
        },
      ],
    },
    dev: {
      short: "Developer",
      projects: [
        {
          title: "Toggle.io",
          icon: Timer,
          logo: "/logo-toggle.png",
          role: "Lead UI/UX & Frontend Developer",
          period: "Contract",
          subtitle: "Real-Time Time Tracking",
          blurb:
            "Popular time tracking app built with React & React Native — lead UI/UX and frontend.",
          metric: { value: 3, label: "platforms from one codebase — web, iOS and Android" },
          cover: "/2025-08-12_05-13.png",
          link: "https://toggle.com",
          tags: ["React", "React Native", "Framer Motion"],
        },
        {
          title: "Astra Health",
          icon: HeartPulse,
          logo: "/logo-astra-health.svg",
          role: "Senior Frontend Developer",
          period: "Contract",
          subtitle: "Telemedicine Platform",
          blurb:
            "Re-architected patient flows and the design system for accessibility and speed.",
          metric: { value: "AA", label: "WCAG 2.1 accessibility" },
          cover: "/2025-08-12_05-12_1.png",
          link: "https://www.astrahealth.ai/",
          tags: ["React", "TypeScript", "Design Tokens"],
        },
        {
          title: "Quanta Fin",
          icon: ChartCandlestick,
          role: "Senior Frontend Developer",
          period: "Contract",
          subtitle: "Fintech Dashboard",
          blurb:
            "High-density real-time data UI with micro-interactions.",
          metric: { value: 95, suffix: "+", label: "Lighthouse performance score" },
          cover: "/2025-08-12_05-12.png",
          link: "https://quantafinance.com/",
          tags: ["React", "Vite", "Tailwind"],
        },
        {
          title: "DigitalOcean",
          icon: Cloud,
          logo: "/logo-digitalocean.svg",
          markOnly: true,
          role: "Junior Developer",
          period: "Feb 2014 – Nov 2015",
          subtitle: "Cloud Infrastructure",
          blurb:
            "Where I started — hand-coding frontend in HTML, CSS and JavaScript, the foundation for everything since.",
          link: "https://www.digitalocean.com/",
          tags: ["HTML", "CSS", "JavaScript"],
        },
      ],
    },
  },
  // Products I built myself — shown first, as big panels. Drop each logo into /public and match `logo`.
  // `cover` can be a /public path or a full URL.
  built: [
    {
      name: "Vibey",
      kind: "Desktop IDE for AI coding agents",
      logo: "/logo-vibeyy.svg",
      cover: "https://stlabs07.github.io/vibey/assets/shots/hero.webp",
      blurb:
        "My own IDE for vibe coding, built from scratch in Rust, GTK4 and VTE. It's a VS Code-shaped window made for terminal AI agents (Claude Code, Codex, Gemini, aider). Every project gets its own file tree, tabs, git status and terminals, and Vibey notifies you when an agent finishes or needs your input. It uses VS Code's themes, icons and syntax colors and starts in 0.3 s.",
      metric: { value: 97, suffix: " MB", label: "with 3 projects and 6 terminals open — VS Code uses 547 MB with one" },
      tags: ["Rust", "GTK4", "AI Agents", "Desktop App"],
      links: [
        { label: "Website", url: "https://stlabs07.github.io/vibey/" },
        { label: "Code on GitHub", url: "https://github.com/STLabs07/vibey" },
      ],
    },
    {
      name: "Elitist Gaming",
      kind: "Gaming marketplace",
      logo: "/logo-elitist-gaming.svg",
      cover: "/shot-elitist-gaming.webp",
      blurb:
        "A gaming marketplace where buyers compare verified World of Warcraft: Forever boosting sellers on price, rating and delivery time, covering leveling, dungeons, raids and PvP. Payment is held until the buyer confirms the work is done, so buyers can trust sellers they've never met. Elitist Gaming began as the competitive esports organization where I was an engineer and SEO strategist (2015–2017); I later built its marketplace.",
      metric: { value: "5,000", suffix: "+", label: "users on the marketplace" },
      tags: ["Next.js", "React", "Marketplace", "Payments"],
      links: [{ label: "Website", url: "https://elitistgaming.com/" }],
    },
  ],
};

// ====== Lane tokens: accent colors per lane ======
const MODES = {
  marketing: {
    accent: "#FF5C1F",
    accentSoft: "rgba(255,92,31,0.12)",
    glowA: "rgba(255,92,31,0.35)",
  },
  dev: {
    accent: "#3450FF",
    accentSoft: "rgba(52,80,255,0.1)",
    glowA: "rgba(52,80,255,0.32)",
  },
};

const asset = (p) =>
  /^https?:/.test(p) ? p : import.meta.env.BASE_URL + p.replace(/^\//, "");

const EASE = [0.22, 1, 0.36, 1];

// ====== Atmosphere: bright ambient glow, a blend of both lanes ======
const Atmosphere = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{ x: [0, 40, 0], y: [0, 24, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -top-40 right-[-10%] h-[42rem] w-[42rem] rounded-full blur-3xl"
      style={{ background: `radial-gradient(circle at center, ${MODES.marketing.glowA}, transparent 70%)` }}
    />
    <motion.div
      animate={{ x: [0, -32, 0], y: [0, -20, 0] }}
      transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-[-15%] left-[-8%] h-[38rem] w-[38rem] rounded-full blur-3xl"
      style={{ background: `radial-gradient(circle at center, ${MODES.dev.glowA}, transparent 70%)` }}
    />

    <div className="absolute inset-0 opacity-[0.4] [background-image:radial-gradient(rgba(18,20,43,0.07)_1px,transparent_1px)] [background-size:26px_26px]" />
  </div>
);

// ====== Header: name · specialties · work · email ======
const Header = () => (
  <header className="fixed inset-x-0 top-0 z-40 border-b border-[#12142b]/8 bg-[#f4f5fb]/75 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
      <a href="#top" className="flex items-baseline gap-3">
        <span className="font-display whitespace-nowrap text-lg font-semibold tracking-tight text-[#12142b]">
          {DATA.name}
        </span>
        <span className="hidden text-xs font-medium tracking-wide text-[#12142b]/55 lg:inline">
          {DATA.specialties}
        </span>
      </a>
      <div className="flex items-center gap-1 sm:gap-2">
        <a
          href="#work"
          className="rounded-full px-3 py-2 text-sm font-medium text-[#12142b]/75 transition hover:bg-[#12142b]/5 hover:text-[#12142b]"
        >
          Work
        </a>
        <a
          href="#contact"
          className="rounded-full px-3 py-2 text-sm font-medium text-[#12142b]/75 transition hover:bg-[#12142b]/5 hover:text-[#12142b]"
        >
          Contact
        </a>
        <a
          href={`mailto:${DATA.email}`}
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-[#6251d9] px-4 py-2 text-sm font-medium text-white transition hover:opacity-85"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{DATA.email}</span>
          <span className="sm:hidden">Email</span>
        </a>
      </div>
    </nav>
  </header>
);

// ====== Hero: "Hello, I'm Steve." ======
const Hero = () => {
  const words = DATA.hello.split(" ");
  return (
    <section id="top" className="relative flex min-h-svh flex-col px-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#12142b]/50"
        >
          {DATA.specialties}
        </motion.p>
        <h1 className="font-display text-[clamp(3rem,10vw,7.5rem)] leading-[0.95] font-semibold tracking-tight text-[#12142b]">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: "0.6em", rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.9, ease: EASE }}
              className={
                "mr-[0.25em] inline-block " +
                (i === words.length - 1
                  ? "bg-gradient-to-r from-[#FF5C1F] via-[#FF3D8A] to-[#3450FF] bg-clip-text text-transparent"
                  : "")
              }
            >
              {w}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[#12142b]/70 sm:text-xl"
        >
          {DATA.intro}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-[#6251d9] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-85"
          >
            See my work <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#12142b]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#12142b] transition hover:bg-white"
          >
            <Mail className="h-4 w-4" /> Get in touch
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 inline-flex items-center gap-2.5 text-sm font-medium text-[#12142b]/70"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          {DATA.availability}
        </motion.p>
      </div>
      {/* Worked-with strip: company names as wordmarks until real logos are in /public */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: EASE }}
        className="mx-auto w-full max-w-6xl border-t border-[#12142b]/8 pt-6 pb-10"
      >
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12142b]/40">
          Worked with
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          {Object.values(DATA.lanes)
            .flatMap((l) => l.projects)
            .map((p) => (
              p.logo ? (
                <span key={p.title} className="inline-flex items-center gap-2.5 opacity-50 grayscale">
                  <img
                    src={asset(p.logo)}
                    alt={p.markOnly ? "" : p.title}
                    className={p.markOnly ? "h-7 w-auto" : "h-6 w-auto sm:h-7"}
                  />
                  {p.markOnly && (
                    <span className="font-display text-lg font-semibold tracking-tight text-[#12142b] sm:text-xl">
                      {p.title}
                    </span>
                  )}
                </span>
              ) : (
                <span
                  key={p.title}
                  className="font-display text-lg font-semibold tracking-tight text-[#12142b]/35 sm:text-xl"
                >
                  {p.title}
                </span>
              )
            ))}
        </div>
      </motion.div>
    </section>
  );
};

// ====== Logo: renders nothing if the file isn't in /public yet (the name still shows) ======
const Logo = ({ src }) => {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={asset(src)}
      alt=""
      onError={() => setFailed(true)}
      className="h-12 w-auto max-w-[4rem] object-contain"
    />
  );
};

// ====== Featured panel: products I built, image side alternating ======
const FeaturedPanel = ({ p, i }) => {
  const m = MODES.dev;
  const flip = i % 2 === 1;
  return (
    <motion.article
      initial={{ opacity: 0, y: 48, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      className="overflow-hidden rounded-[2.5rem] border border-[#12142b]/8 bg-white shadow-[0_30px_80px_-40px_rgba(18,20,43,0.3)]"
    >
      <div className={`grid items-stretch lg:grid-cols-2 ${flip ? "lg:[direction:rtl]" : ""}`}>
        <div className="p-8 sm:p-12 lg:[direction:ltr]">
          <div className="text-sm font-semibold" style={{ color: m.accent }}>
            {p.kind}
          </div>
          <div className="mt-3 flex items-center gap-4">
            <Logo src={p.logo} />
            <h3 className="font-display text-3xl font-semibold tracking-tight text-[#12142b] sm:text-4xl">
              {p.name}
            </h3>
          </div>
          <p className="mt-5 text-base leading-relaxed text-[#12142b]/70">{p.blurb}</p>
          {p.metric && (
            <div className="mt-6">
              <div
                className="font-display text-[clamp(2.25rem,4vw,3.25rem)] leading-none font-semibold tracking-tight"
                style={{ color: m.accent }}
              >
                {p.metric.prefix}
                {p.metric.value}
                {p.metric.suffix}
              </div>
              <div className="mt-1.5 text-sm font-medium text-[#12142b]/60">{p.metric.label}</div>
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-3 py-1.5 text-xs font-medium"
                style={{ background: m.accentSoft, color: m.accent }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {p.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold underline-offset-4 hover:underline"
                style={{ color: m.accent }}
              >
                {l.label} <ArrowUpRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative min-h-[16rem] overflow-hidden bg-[#12142b]/5 lg:[direction:ltr]">
          <img
            src={asset(p.cover)}
            alt={`${p.name} screenshot`}
            className="absolute inset-0 h-full w-full object-cover object-left-top"
          />
        </div>
      </div>
    </motion.article>
  );
};

// ====== Role card: compact, same shape for every lane ======
const RoleCard = ({ p, lane, i }) => {
  const m = MODES[lane];
  const Icon = p.icon;
  const Card = p.link ? motion.a : motion.div;
  return (
    <Card
      {...(p.link && { href: p.link, target: "_blank", rel: "noreferrer", whileHover: { y: -6 } })}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: EASE }}
      className="group flex flex-col rounded-[2rem] border border-[#12142b]/8 bg-white p-7 shadow-[0_20px_60px_-30px_rgba(18,20,43,0.25)]"
    >
      <div className="flex items-start justify-between gap-3">
        {p.logo && !p.markOnly ? (
          <img
            src={asset(p.logo)}
            alt=""
            className="h-12 w-auto max-w-[9rem] object-contain object-left"
          />
        ) : (
          <span
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl"
            style={{ background: m.accentSoft, color: m.accent }}
          >
            {p.logo ? (
              <img src={asset(p.logo)} alt="" className="h-8 w-8 object-contain" />
            ) : (
              <Icon className="h-6 w-6" />
            )}
          </span>
        )}
        <div className="flex items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: m.accentSoft, color: m.accent }}
          >
            {DATA.lanes[lane].short}
          </span>
          {p.link && (
            <ArrowUpRight className="h-4 w-4 text-[#12142b]/35 transition group-hover:text-[#12142b]" />
          )}
        </div>
      </div>
      <h3 className="font-display mt-5 text-2xl font-semibold tracking-tight text-[#12142b]">
        {p.title}
      </h3>
      <div className="mt-1.5 text-sm font-semibold text-[#12142b]/80">{p.role}</div>
      <div className="mt-0.5 text-sm text-[#12142b]/50">
        {p.period} · {p.subtitle}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#12142b]/70">{p.blurb}</p>
      {p.metric && (
        <div className="mt-5 flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold" style={{ color: m.accent }}>
            {p.metric.prefix}
            {p.metric.value}
            {p.metric.suffix}
          </span>
          <span className="text-sm text-[#12142b]/60">{p.metric.label}</span>
        </div>
      )}
      <div className="mt-auto pt-6 text-xs font-medium text-[#12142b]/45">{p.tags.join(" · ")}</div>
    </Card>
  );
};

// ====== Group heading: title with a rule running to the edge ======
const GroupHeading = ({ className, children }) => (
  <div className={`flex items-center gap-5 ${className}`}>
    <h3 className="font-display shrink-0 text-2xl font-semibold tracking-tight text-[#12142b] sm:text-3xl">
      {children}
    </h3>
    <div className="h-px flex-1 bg-[#12142b]/12" />
  </div>
);

// ====== Showcase: my own products as big panels, past roles as a grid ======
const Showcase = () => {
  const roles = Object.entries(DATA.lanes).flatMap(([lane, l]) =>
    l.projects.map((p) => ({ p, lane }))
  );
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight text-[#12142b]"
      >
        Selected work.
      </motion.h2>
      <GroupHeading className="mt-12">Products I built</GroupHeading>
      <div className="mt-8 grid gap-8">
        {DATA.built.map((p, i) => (
          <FeaturedPanel key={p.name} p={p} i={i} />
        ))}
      </div>
      <GroupHeading className="mt-24">Where I've worked</GroupHeading>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {roles.map(({ p, lane }, i) => (
          <RoleCard key={p.title} p={p} lane={lane} i={i} />
        ))}
      </div>
    </section>
  );
};

// ====== Contact ======
const Contact = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-28 text-center sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#12142b]/50">
          Get in touch
        </div>
        <h2 className="font-display mt-4 text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.02] font-semibold tracking-tight text-[#12142b]">
          Let's make something
          <br />
          <span className="bg-gradient-to-r from-[#FF5C1F] via-[#FF3D8A] to-[#3450FF] bg-clip-text text-transparent">
            worth finding.
          </span>
        </h2>
        <a
          href={`mailto:${DATA.email}`}
          className="font-display mt-10 inline-block break-all text-[clamp(1.25rem,4vw,2.75rem)] font-medium tracking-tight text-[#12142b] underline decoration-[#12142b]/20 decoration-2 underline-offset-8 transition hover:decoration-[#FF5C1F]"
        >
          {DATA.email}
        </a>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full bg-[#6251d9] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-85"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy email"}
          </button>
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#12142b]/15 bg-white/60 px-6 py-3.5 text-sm font-semibold text-[#12142b] transition hover:bg-white"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen font-sans text-[#12142b]">
        <Atmosphere />
        <Header />
        <Hero />
        <Showcase />
        <Contact />
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-[#12142b]/50">
          © {new Date().getFullYear()} {DATA.name} · {DATA.specialties}
        </footer>
      </div>
    </MotionConfig>
  );
}
