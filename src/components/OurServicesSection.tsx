import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Compass, Factory, GitBranch, Film, CircuitBoard } from "lucide-react";
import { Link } from "react-router-dom";

const AUTOPLAY_DELAY = 4500;

const services = [
  {
    id: "engineering-design",
    label: "Engineering Design & Analysis",
    icon: Compass,
    href: "/services#engineering-design",
    headline: "Precision Engineering, From Concept to Reality",
    description:
      "We deliver end-to-end engineering design — from concept sketches to fully validated detailed drawings. Our team leverages advanced CAD platforms and simulation tools to ensure every component meets exact tolerances and industry standards.",
    features: [
      "CAD Design (CATIA, NX, SolidWorks)",
      "FEA & Structural Simulation",
      "Tolerance & GD&T Analysis",
      "Design for Manufacturability (DFM)",
    ],
    image: "/svc-engineering-design.png",
  },
  {
    id: "manufacturing-engineering",
    label: "Manufacturing Engineering – BIW, Mould & Sheet Metal",
    icon: Factory,
    href: "/services#manufacturing-engineering",
    headline: "Manufacturing Intelligence Built Into Every Tool",
    description:
      "Specialised manufacturing engineering for Body-in-White (BIW) fixturing, injection mould design, and precision sheet metal components — minimising lead times and maximising first-time-right outcomes.",
    features: [
      "BIW Fixture & Jig Design",
      "Injection Mould Flow Analysis",
      "Sheet Metal DFM & Unfolding",
      "Tooling & Die Design",
    ],
    image: "/svc-manufacturing-engineering.png",
  },
  {
    id: "integrated-project",
    label: "Integrated Project Delivery",
    icon: GitBranch,
    href: "/services#integrated-project-delivery",
    headline: "One Team. One Commitment. On Time.",
    description:
      "We manage the full project lifecycle — from engineering brief to final delivery — co-ordinating multi-disciplinary teams with precision. Milestones are met, risks mitigated early, and quality never compromised.",
    features: [
      "End-to-End Project Planning",
      "Cross-functional Team Coordination",
      "Risk Identification & Mitigation",
      "Milestone Tracking & Reporting",
    ],
    image: "/svc-integrated-project.png",
  },
  {
    id: "technical-animation",
    label: "Technical Animation & Publication",
    icon: Film,
    href: "/services#technical-animation",
    headline: "Complex Engineering, Made Crystal Clear",
    description:
      "We transform intricate engineering assemblies into high-fidelity 3D animations, exploded views, and interactive technical publications — making complex concepts instantly understandable.",
    features: [
      "3D Product & Assembly Animation",
      "Exploded View Illustrations",
      "Interactive Technical Manuals",
      "Work Instructions & SOPs",
    ],
    image: "/svc-technical-animation.png",
  },
  {
    id: "electronics-pcb",
    label: "Electronics Manufacturing (PCB & Electromechanical)",
    icon: CircuitBoard,
    href: "/services#electronics-manufacturing",
    headline: "Smart Electronics for Demanding Applications",
    description:
      "From schematic to finished board — precision PCBs and electromechanical assemblies for industrial automation and embedded systems, optimised for EMC compliance and thermal performance.",
    features: [
      "PCB Design & Layout (Altium, KiCad)",
      "Schematic & Netlist Design",
      "EMC & Thermal Analysis",
      "PCBA Testing & Validation",
    ],
    image: "/svc-electronics-pcb.png",
  },
];

const OurServicesSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number, dir = 1) => {
    setDirection(dir);
    setActive(index);
    setProgress(0);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % services.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next, active]);

  useEffect(() => {
    if (paused) return;
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTOPLAY_DELAY / 50), 100));
    }, 50);
    return () => { if (progressRef.current) clearInterval(progressRef.current); };
  }, [active, paused]);

  const current = services[active];

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
  };

  return (
    <section
      id="our-services"
      className="relative z-[1] bg-background pb-16 md:pb-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-12 md:pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">What We Do</span>
            </div>
            <h2 className="section-title text-foreground">OUR SERVICES</h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Prev / Next */}
            <button
              onClick={() => { prev(); setPaused(false); }}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-foreground/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => { next(); setPaused(false); }}
              className="w-9 h-9 rounded-full flex items-center justify-center border border-border text-foreground/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all ml-1"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Full-width slide panel */}
      <div className="border-t border-border overflow-hidden relative">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_520px] min-h-[420px] lg:min-h-[460px]"
          >
            {/* Text content */}
            <div className="px-6 sm:px-10 md:px-16 py-10 lg:py-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <current.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="w-px h-7 bg-border" />
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-primary/60 font-medium">
                  Service {active + 1} of {services.length}
                </span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-snug mb-4">
                {current.headline}
              </h3>

              <p className="text-sm text-silver leading-relaxed mb-5">
                {current.description}
              </p>

              <ul className="flex flex-col gap-2.5 mb-6">
                {current.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px] text-foreground/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to={current.href}
                className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:gap-3 transition-all group w-fit"
              >
                Explore this service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Image — fills full grid cell height */}
            <div className="relative min-h-[260px] lg:min-h-0 overflow-hidden">
              <img
                src={current.image}
                alt={current.label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:hidden" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-16 mt-5">
        <div className="flex items-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => { goTo(i, i > active ? 1 : -1); setPaused(false); }}
              className="relative flex items-center"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  i === active ? "w-7 h-2 bg-primary" : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
              {/* Progress fill on active dot */}
              {i === active && !paused && (
                <span
                  className="absolute left-0 top-0 h-2 rounded-full bg-white/40 transition-none"
                  style={{ width: `${(progress / 100) * 28}px` }}
                />
              )}
            </button>
          ))}
        </div>
        <Link
          to="/services"
          className="sm:hidden inline-flex items-center gap-1.5 text-primary text-sm font-semibold"
        >
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mt-6" />
    </section>
  );
};

export default OurServicesSection;
