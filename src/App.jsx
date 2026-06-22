import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  MotionConfig,
} from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Download,
  Mail,
  Linkedin,
  Sparkles,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

// ====== DATA (edit me) ======
const DATA = {
  name: "Steve Lopez",
  role: "Digital Generalist — UX/UI · SEO/AEO/GEO · Full-Stack · Marketing",
  tagline:
    "I bridge design, engineering, and search/marketing strategy to build digital products that look great, perform fast, and get found.",
  email: "egeisteve@gmail.com",
  location: "Open to remote",
  social: {
    linkedin: "https://www.linkedin.com/in/steven-lopez-47b7a4418/",
  },
  highlights: [
    "12+ years across UX/UI, full-stack dev, and SEO/AEO/GEO",
    "Led design + SEO for a 30+ store national retail brand",
    "Building AI-driven search visibility strategy at Nassau AI",
    "Comfortable owning a project end-to-end: strategy, design, code",
  ],
  stats: [
    { label: "Years", value: 13, suffix: "+" },
    { label: "Launched", value: 100, suffix: "+" },
    { label: "A/B Wins", value: 47, suffix: "+" },
    { label: "Industries", value: 15, suffix: "+" },
  ],
  projects: [
    {
      title: "Toggle.io",
      blurb:
        "Real-time, popular time tracking app built with React & React Native.",
      impact: ["+28% checkout conversion", "-34% TTFI", "+21% repeat purchase"],
      stack: ["React", "Vite", "Tailwind", "Framer Motion"],
      link: "https://toggle.com",
      role: "Lead UI/UX & Frontend",
      cover: "/2025-08-12_05-13.png",
    },
    {
      title: "Astra Health — Telemedicine Platform",
      blurb:
        "Re-architected patient flows and redesigned the design system to improve accessibility and speed. Transcribing multilingual access with AI.",
      impact: ["+42% booking completion", "WCAG 2.1 AA", "Design tokens @ scale"],
      stack: ["React", "TypeScript", "Tailwind"],
      link: "https://www.astrahealth.ai/",
      role: "Principal Product Designer",
      cover:
        "/2025-08-12_05-12_1.png",
    },
    {
      title: "Quanta Fin — Trading Dashboard",
      blurb:
        "High-density data UI with real-time charts, micro-interactions, and delightful performance.",
      impact: ["95+ Lighthouse perf", "+19% retention", "0→1 design"],
      stack: ["React", "Vite", "Tailwind"],
      link: "https://quantafinance.com/",
      role: "Senior Frontend Engineer",
      cover:
        "/2025-08-12_05-12.png",
    },
    {
      title: "Nassau AI — AI Search Visibility",
      blurb:
        "Leading SEO and AEO/GEO strategy for AI-driven search and visibility, optimizing brand and client presence across AI Overviews, answer engines, and LLM-based search alongside traditional SERPs.",
      impact: ["AEO/GEO strategy", "AI Overviews", "LLM search visibility"],
      stack: ["AEO/GEO", "Technical SEO", "AI Workflows"],
      role: "AI Lead Developer / SEO Lead",
    },
  ],
  experience: [
    {
      company: "Nassau AI",
      role: "AI Lead Developer / SEO Lead",
      period: "Jan 2025 — Present",
      bullets: [
        "Lead SEO and AEO/GEO strategy for a marketing and development team building AI-driven search and visibility solutions.",
        "Direct strategy for optimizing brand and client visibility across AI Overviews, answer engines, and LLM-based search (ChatGPT, Perplexity) alongside traditional SERPs.",
        "Bridge marketing and engineering teams to implement technical SEO improvements directly in product and content workflows.",
      ],
    },
    {
      company: "Pastel Collections",
      role: "Head of UI/UX, Fullstack Developer",
      period: "Mar 2021 — Feb 2025",
      bullets: [
        "Owned SEO and on-page optimization strategy for a 30+ store national clothing brand's e-commerce presence.",
        "Directed UI/UX and full-stack development for the brand's B2B/B2C fashion-tech platform serving New York clients.",
        "Coordinated with marketing and merchandising teams to align site structure, content, and technical performance with organic growth goals.",
      ],
    },
    {
      company: "Rank Empire",
      role: "Senior SEO Analyst",
      period: "Jun 2017 — Feb 2021",
      bullets: [
        "Set SEO strategy across a portfolio of agency clients, tying organic performance to revenue and lead generation rather than rankings alone.",
        "Ran technical audits — crawlability, indexation, site speed, structured data — and partnered with dev teams to prioritize fixes.",
        "Oversaw site migrations (domain changes, replatforming, HTTPS) with no loss in organic rankings; managed and mentored a team of SEO specialists.",
      ],
    },
    {
      company: "Elitist Gaming",
      role: "Mid-Level Engineer / SEO Strategist",
      period: "Nov 2015 — Jun 2017",
      bullets: [
        "Worked cross-functionally across engineering and marketing for a competitive esports organization that advanced to championship rounds in Korea.",
        "Built and optimized web infrastructure while driving SEO strategy to grow organic visibility during high-stakes tournament cycles.",
      ],
    },
    {
      company: "DigitalOcean",
      role: "Junior Developer",
      period: "Feb 2014 — Nov 2015",
      bullets: [
        "Started career as a junior frontend developer working in HTML, CSS, JavaScript, and other frontend systems.",
      ],
    },
  ],
  skillGroups: [
    {
      label: "Design & Engineering",
      items: [
        "Design Systems",
        "Interaction Design",
        "Prototyping",
        "Design Tokens",
        "Accessibility",
        "User Research",
        "Information Architecture",
        "Micro-interactions",
        "Motion Design",
        "React",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Vite",
        "Testing Library",
      ],
    },
    {
      label: "SEO & Marketing",
      items: [
        "Technical SEO",
        "AEO/GEO",
        "SEO Strategy & Roadmapping",
        "Paid Ads & Campaign Management",
        "Content & On-Page Strategy",
        "Link Building & Digital PR",
        "Site Migrations & Core Web Vitals",
        "Team Leadership & Mentorship",
        "Client Strategy & Reporting",
      ],
    },
  ],
  seo: {
    summary:
      "12+ years spanning technical SEO, AEO/GEO, paid media, and content strategy — bridging classic search optimization with AI-driven search behavior, from keyword and link strategy to optimizing for AI Overviews and answer-engine visibility.",
    tools: [
      "GA4",
      "Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
    ],
    highlights: [
      "Leading AEO/GEO strategy for AI Overviews & LLM-based search (ChatGPT, Perplexity)",
      "Set SEO strategy across an agency client portfolio, tying organic performance to revenue",
      "Oversaw site migrations (domain changes, replatforming, HTTPS) with no ranking loss",
      "Managed and mentored teams of SEO specialists and analysts",
    ],
  },
  resumeUrl: "/Steven_Lopez_Generalist_Resume.docx",
};

// ====== Utilities ======
const useCountUp = (to, duration = 1.4) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    let start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);
  return n;
};

const container = (stagger = 0.08) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// ====== Background FX ======
const BackgroundFX = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -40]);
  const y2 = useTransform(scrollY, [0, 600], [0, 40]);
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(80,150,255,0.5),rgba(0,0,0,0))] blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-64 left-[10%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,100,150,0.4),rgba(0,0,0,0))] blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 right-[5%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(120,90,255,0.35),rgba(0,0,0,0))] blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.06]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
};

// ====== Mouse Glow ======
const MouseGlow = () => {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const tx = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const ty = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div aria-hidden className="pointer-events-none fixed inset-0 z-50">
      <motion.div
        style={{ translateX: tx, translateY: ty }}
        className="fixed -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative">
          <div
            className="h-[250px] w-[250px] rounded-full blur-[150px]"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.9), rgba(168,85,247,0.7), transparent 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-full blur-xl opacity-80"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.35), transparent 60%)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};


// ====== UI ======
const Nav = () => {
  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#seo", label: "SEO" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/50">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <Sparkles className="h-4 w-4 text-white/80" />
          </span>
          <span className="font-semibold tracking-tight text-white/90">{DATA.name}</span>
          <span className="hidden text-white/40 sm:inline">· {DATA.role}</span>
        </a>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-xl px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={import.meta.env.BASE_URL + DATA.resumeUrl.slice(1)}
            className="ml-2 hidden rounded-xl border border-white/10 px-3 py-2 text-sm text-white/90 hover:bg-white/5 sm:inline-flex"
            download
          >
            <Download className="mr-2 h-4 w-4" /> CV
          </a>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  const words = DATA.tagline.split(" ");
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pb-12 pt-20 sm:pb-16 sm:pt-28"
    >
      <motion.div
        variants={container(0.06)}
        initial="hidden"
        animate="show"
        className="grid items-center gap-10 md:grid-cols-12"
      >
        <div className="md:col-span-7">
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            UX/UI · SEO/AEO/GEO · Full-Stack
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + i * 0.03, duration: 0.4 }}
              >
                {w}{" "}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
            >
              View projects <ArrowDownRight className="ml-2 h-4 w-4" />
            </a>
            <a
  href={import.meta.env.BASE_URL + DATA.resumeUrl.slice(1)}
  download
  className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
>
  <Download className="mr-2 h-4 w-4" /> Download CV (DOCX)
</a>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/70"
          >
            <span>{DATA.location}</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:inline-block" />
            <a
              className="inline-flex items-center gap-2 hover:text-white"
              href={DATA.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </div>
        <div className="md:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6"
          >
            <div className="text-white/80">
              <div className="text-sm tracking-wide text-white/70">Highlights</div>
              <ul className="mt-3 space-y-2">
                {DATA.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/65" />
                    <span className="text-sm leading-relaxed text-white/80">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Stat = ({ value, suffix = "", label }) => {
  const n = useCountUp(value);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center">
      <div className="text-4xl font-semibold tracking-tight text-white">
        {n}
        <span className="text-white/70">{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  );
};

const SectionLabel = ({ index, label }) => (
  <div className="mb-5 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-indigo-300/70">
    <span>{index}</span>
    <span>{label}</span>
    <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
  </div>
);

const Stats = () => (
  <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {DATA.stats.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.5 }}
        >
          <Stat {...s} />
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectRow = ({ p, i }) => {
  const Wrapper = p.link ? motion.a : motion.div;
  return (
    <Wrapper
      href={p.link}
      target={p.link ? "_blank" : undefined}
      rel={p.link ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 pt-7 shadow-[6px_6px_0_0_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:border-indigo-400/30 hover:shadow-[6px_6px_0_0_rgba(99,102,241,0.25)] sm:flex-row"
    >
      <span className="absolute -top-3 left-4 rounded-md border border-indigo-400/30 bg-indigo-500/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-indigo-200">
        {p.role}
      </span>
      {p.cover && (
        <div className="aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-white/10 sm:w-56">
          <img
            src={import.meta.env.BASE_URL + p.cover.slice(1)}
            alt={`${p.title} cover`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{p.title}</h3>
          {p.link && <ExternalLink className="h-4 w-4 shrink-0 text-white/70" />}
        </div>
        <p className="text-sm leading-relaxed text-white/80">{p.blurb}</p>
        <div className="flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-1 flex flex-wrap gap-3 text-sm text-white/80">
          {p.impact.map((m) => (
            <span
              key={m}
              className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10"
            >
              <ArrowUpRight className="h-3.5 w-3.5" /> {m}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Projects = () => (
  <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <SectionLabel index="01" label="Selected Work" />
    <div className="mb-6 flex items-end justify-between">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Things I've Created
        </h2>
        <p className="mt-2 text-sm text-white/80">
          Impact-focused work that blends design craft, engineering rigor, and search strategy.
        </p>
      </div>
      <a
        href="#contact"
        className="hidden rounded-2xl border border-white/15 px-4 py-2 text-sm text-white/80 hover:bg-white/5 sm:inline-flex"
      >
        Work together
      </a>
    </div>
    <div className="grid gap-4">
      {DATA.projects.map((p, i) => (
        <ProjectRow key={p.title} p={p} i={i} />
      ))}
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <SectionLabel index="02" label="Career Path" />
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
      Experience
    </h2>
    <div className="mt-6 space-y-6">
      {DATA.experience.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="text-white/90">{e.role}</div>
              <div className="text-sm text-white/70">{e.company}</div>
            </div>
            <div className="text-sm text-white/70">{e.period}</div>
          </div>
          <div className="mt-4 h-px bg-white/10" />
          <ul className="mt-4 grid gap-2">
            {e.bullets.map((b, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-white/80">
                <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const SEO = () => (
  <section id="seo" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <SectionLabel index="03" label="Search & Marketing" />
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
      SEO & AI Search Visibility
    </h2>
    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80">
      {DATA.seo.summary}
    </p>
    <div className="mt-6 grid gap-5 md:grid-cols-2">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm tracking-wide text-white/80">Highlights</div>
        <ul className="mt-3 space-y-2">
          {DATA.seo.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/70" />
              <span className="text-sm leading-relaxed text-white/80">{h}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm tracking-wide text-white/80">Tools</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {DATA.seo.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <SectionLabel index="04" label="Skills" />
    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
      Skills & Focus
    </h2>
    <div className="mt-6 space-y-6">
      {DATA.skillGroups.map((group) => (
        <div key={group.label}>
          <div className="text-sm tracking-wide text-white/80">{group.label}</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <SectionLabel index="05" label="Contact" />
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8">
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Let’s build something exceptional
          </h2>
          <p className="mt-2 max-w-xl text-sm text-white/80">
            I’m available for senior UI/UX, staff frontend, or principal product roles. Open to consulting and audits as well.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${DATA.email}`}
            className="inline-flex items-center rounded-2xl bg-white px-5 py-3 text-sm font-medium text-black hover:opacity-90"
          >
            <Mail className="mr-2 h-4 w-4" /> Email me
          </a>
          <a
            href={DATA.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
          >
            <Linkedin className="mr-2 h-4 w-4" /> Connect
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen scroll-smooth bg-zinc-950 text-white">
        <BackgroundFX />
        <MouseGlow />
        <Nav />
        <Hero />
        <Stats />
        <Projects />
        <Experience />
        <SEO />
        <Skills />
        <Contact />
        <footer className="mx-auto max-w-6xl px-4 pb-10 text-center text-xs text-white/65">
          © {new Date().getFullYear()} {DATA.name}. Built with React, Tailwind & Framer Motion. Deployed on GitHub Pages.
        </footer>
      </div>
    </MotionConfig>
  );
}
