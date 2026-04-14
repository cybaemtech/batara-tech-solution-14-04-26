import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  Lightbulb,
  Ruler,
  BarChart3,
  Cpu,
  Factory,
  Wrench,
  Box,
  Flame,
  Settings,
  Shield,
  FileCheck,
  Eye,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import infogramImg from "@/assets/batara-infogram.jpeg";

const clip1Video = "";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ecosystemSteps = [
  {
    icon: Lightbulb,
    label: "Concept Design",
    desc: "Defining the architecture of your solution during the ideation phase.",
  },
  {
    icon: Ruler,
    label: "Detailed Design",
    desc: "Engineering the precise mechanics with CAD modeling and DFM analysis.",
  },
  { icon: BarChart3, label: "Analysis", desc: "Simulating the design for total operational integrity via FEA & CFD." },
  {
    icon: Cpu,
    label: "Prototype",
    desc: "Realizing the digital model into a physical blueprint through rapid prototyping.",
  },
  {
    icon: Factory,
    label: "Production Support",
    desc: "Guiding your manufacturing teams to scale the prototype into full output.",
  },
];

const capabilities = [
  {
    icon: Wrench,
    title: "Sheet Metal Design",
    desc: "Precision sheet metal solutions from concept to production with advanced tooling and DFM optimization.",
  },
  {
    icon: Box,
    title: "Plastic Mould Design",
    desc: "Complex injection moulding design with multi-cavity tooling and complete process simulation.",
  },
  {
    icon: Flame,
    title: "Casting Solutions",
    desc: "Investment, sand, and die casting design with complete metallurgical analysis.",
  },
  {
    icon: Settings,
    title: "Tool Designing",
    desc: "Press tools, jigs, fixtures and progressive dies engineered for manufacturing excellence.",
  },
];

const standards = [
  {
    icon: Shield,
    title: "Elite Engineering Support",
    desc: "Highly professional engineers and designers, alongside comprehensive staffing solutions and training.",
  },
  {
    icon: FileCheck,
    title: "Uncompromising Quality",
    desc: "ISO Certified operations featuring rigorous quality processes and delivery of multiple concept designs.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "Timely reports and complete transparency with bottlenecks, always accompanied by proposed, actionable solutions.",
  },
  {
    icon: Clock,
    title: "Predictable Execution",
    desc: "On-time delivery driven by strict milestone achievements and clear timelines.",
  },
];

const proofPoints = [
  {
    title: "Flawless Replication",
    desc: "The automation, physics, and timing you see in our digital projections are exactly replicated by operational tools on the live floor.",
  },
  {
    title: "Proven Complexities",
    desc: "From complete Food Processing design lifecycles, to Space simulation models, to Battery switching infrastructure.",
  },
  {
    title: "Factory-Level Simulation",
    desc: "We simulate the entire operational automation at the factory level before a single piece of material is formed.",
  },
];

const STEP_DURATION = 2000;

const Solutions = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ecosystemSteps.length);
    }, STEP_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative z-[1] pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-accent-orange-2">
                Services & Technology
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              WHERE DIGITAL PRECISION <br className="hidden md:block" /> DICTATES FACTORY REALITY
            </h1>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed mb-8">
              We eliminate the costly disconnect between the design room and the manufacturing floor. We are the
              engineering brain behind your operations. Our designs are so precise that the simulations we project are
              the exact automated realities executed on your factory floor.
            </p>
            <div className="inline-block border border-primary/30 bg-primary/5 rounded-lg px-8 py-4">
              <p className="font-display font-bold text-foreground text-lg md:text-xl">
                What We Engineer Digitally is Exactly What You Produce Physically
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Infogram Showcase */}
      <section className="relative z-[1] py-16 px-4 md:px-8">
        <motion.div {...fadeUp} className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="section-label text-accent-orange-2">
              Our E-2-E Solution Ecosystem
            </span>
          </div>
          <div className="relative rounded-xl border border-primary/20 bg-card/50 p-2 md:p-4 shadow-[0_0_60px_hsl(var(--primary)/0.08)]">
            <img
              src={infogramImg}
              alt="Batara Techno Solutions - End-to-End Solution Ecosystem Infogram"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>
      </section>

      {/* Technical Animation & Simulation */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">
                The Heart of Our Engineering
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground mb-4">
              TECHNICAL ANIMATION & SIMULATION
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Before a single piece of material is formed, we build your factory's future in high-fidelity 2D and 3D
              technical animations. We don't just show you a concept; we simulate the entire operational automation at
              the factory level.
            </p>
          </motion.div>

          {/* Animation Video */}
          {clip1Video && (
            <motion.div {...fadeUp} className="mb-16">
              <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden border border-primary-foreground/20 shadow-[0_0_60px_hsl(var(--primary)/0.15)]">
                <video
                  src={clip1Video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          )}

          {/* Proof Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {proofPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-accent/80 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-orange-2 mb-3" />
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{point.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* E-2-E Ecosystem Detailed */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-accent-orange-2">
                Our USP
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground mb-4">
              THE E-2-E SOLUTION ECOSYSTEM
            </h2>
            <p className="text-silver max-w-xl mx-auto text-[15px] leading-relaxed">
              We do not just hand over a CAD file and walk away. We provide a complete End-to-End engineering ecosystem — from first concept to final production.
            </p>
          </motion.div>

          {/* Orbit Animation + Description Panel */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* LEFT — Orbit Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="flex-shrink-0 relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]"
            >
              {/* SVG — rings + dashed spoke lines with glow filter */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 440 440" fill="none">
                <defs>
                  <filter id="ring-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="spoke-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {/* Outer ring */}
                <circle cx="220" cy="220" r="195" stroke="hsl(214 72% 38% / 0.45)" strokeWidth="1.5" filter="url(#ring-glow)" />
                {/* Mid ring */}
                <circle cx="220" cy="220" r="110" stroke="hsl(214 72% 38% / 0.28)" strokeWidth="1" />
                {/* Inner ring */}
                <circle cx="220" cy="220" r="46" stroke="hsl(214 72% 42% / 0.55)" strokeWidth="1.5" filter="url(#ring-glow)" />
                {/* Dashed spokes — center to each node */}
                {[
                  { x2: 220, y2: 25 },
                  { x2: 405, y2: 147 },
                  { x2: 334, y2: 392 },
                  { x2: 106, y2: 392 },
                  { x2: 35, y2: 147 },
                ].map((pt, i) => (
                  <motion.line
                    key={i}
                    x1="220" y1="220"
                    x2={pt.x2} y2={pt.y2}
                    stroke={i === activeStep ? "hsl(214 72% 42% / 0.75)" : "hsl(214 72% 38% / 0.22)"}
                    strokeWidth="1.5"
                    strokeDasharray="5 5"
                    filter={i === activeStep ? "url(#spoke-glow)" : undefined}
                    animate={{ opacity: i === activeStep ? 1 : 0.7 }}
                    transition={{ duration: 0.4 }}
                  />
                ))}
              </svg>

              {/* Slow-spinning outer decoration ring */}
              <div
                className="absolute inset-0 rounded-full border border-[hsl(214_72%_42%/0.3)]"
                style={{ animation: "spin-ring 40s linear infinite" }}
              >
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[hsl(214_72%_45%)] shadow-[0_0_10px_hsl(214_72%_42%/0.8),0_0_20px_hsl(214_72%_42%/0.4)]" />
              </div>

              {/* Center hub */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] rounded-full flex flex-col items-center justify-center gap-0.5"
                style={{
                  background: "radial-gradient(circle, hsl(214 72% 20% / 0.9), hsl(214 72% 8% / 0.95))",
                  border: "2px solid hsl(214 72% 50% / 0.4)",
                  boxShadow: "0 0 30px hsl(214 72% 37% / 0.25), 0 0 60px hsl(214 72% 37% / 0.1), inset 0 0 15px hsl(214 72% 40% / 0.1)",
                  animation: "core-pulse 3s ease-in-out infinite",
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="hsl(214 72% 80%)" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="font-mono text-[8px] font-bold text-[hsl(214_72%_65%)] tracking-[0.15em]">E-2-E</span>
              </div>

              {/* Orbit Nodes — 5 steps at evenly-spaced positions */}
              {ecosystemSteps.map((step, i) => {
                const positions = [
                  { left: "50%",   top: "3%"   },
                  { left: "91.5%", top: "32%"  },
                  { left: "75.5%", top: "88%"  },
                  { left: "24.5%", top: "88%"  },
                  { left: "8.5%",  top: "32%"  },
                ];
                const pos = positions[i];
                const isActive = i === activeStep;
                return (
                  <motion.button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
                    style={{ left: pos.left, top: pos.top }}
                  >
                    <motion.div
                      animate={{
                        borderColor: isActive ? "hsl(214 72% 42%)" : "hsl(214 72% 42% / 0.25)",
                        boxShadow: isActive
                          ? "0 0 16px hsl(214 72% 42% / 0.45), 0 0 32px hsl(214 72% 38% / 0.2), inset 0 0 8px hsl(214 72% 55% / 0.1)"
                          : "0 1px 4px hsl(214 72% 38% / 0.1)",
                        backgroundColor: isActive ? "hsl(214 72% 20%)" : "hsl(214 72% 96%)",
                      }}
                      transition={{ duration: 0.4 }}
                      className="rounded-xl border-2 flex items-center justify-center backdrop-blur-md"
                      style={{ width: "2.8rem", height: "2.8rem" }}
                    >
                      <step.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300"
                        style={{ color: isActive ? "hsl(214 72% 85%)" : "hsl(214 72% 38%)" }}
                      />
                    </motion.div>
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0.5 }}
                      transition={{ duration: 0.4 }}
                      className="font-mono text-[7px] sm:text-[8px] font-semibold tracking-[0.12em] uppercase text-center whitespace-nowrap leading-tight max-w-[72px]"
                      style={{ color: isActive ? "hsl(214 72% 38%)" : "hsl(214 72% 30% / 0.7)" }}
                    >
                      {step.label}
                    </motion.span>
                  </motion.button>
                );
              })}

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[hsl(214_72%_50%/0.35)]" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[hsl(214_72%_50%/0.35)]" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[hsl(214_72%_50%/0.35)]" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[hsl(214_72%_50%/0.35)]" />
            </motion.div>

            {/* RIGHT — Description Panel */}
            <div className="flex-1 min-w-0">
              {/* Step counter */}
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary mb-4">
                Step {String(activeStep + 1).padStart(2, "0")} &nbsp;/&nbsp; {String(ecosystemSteps.length).padStart(2, "0")}
              </div>

              {/* Animated step content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  {/* Active step icon + title */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "hsl(214 72% 95%)",
                        border: "1.5px solid hsl(214 72% 42% / 0.35)",
                        boxShadow: "0 0 16px hsl(214 72% 42% / 0.2), inset 0 0 10px hsl(214 72% 55% / 0.08)",
                      }}
                    >
                      {(() => {
                        const Icon = ecosystemSteps[activeStep].icon;
                        return <Icon className="w-6 h-6" style={{ color: "hsl(214 72% 35%)" }} />;
                      })()}
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight tracking-tight">
                      {ecosystemSteps[activeStep].label.toUpperCase()}
                    </h3>
                  </div>
                  <p className="text-silver text-[15px] leading-relaxed mb-8 max-w-md border-l-2 border-primary/30 pl-4">
                    {ecosystemSteps[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Step selector pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {ecosystemSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-lg border text-[13px] font-medium transition-all duration-300 ${
                      i === activeStep
                        ? "bg-primary/10 border-primary/50 text-primary shadow-[0_0_14px_hsl(214_72%_42%/0.2)]"
                        : "border-border text-silver hover:border-primary/30 hover:text-foreground"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-70">{String(i + 1).padStart(2, "0")}</span>
                    <step.icon className="w-3.5 h-3.5" />
                    <span>{step.label}</span>
                  </button>
                ))}
              </div>

              {/* Auto-progress bar */}
              <div className="h-px bg-border overflow-hidden rounded-full">
                <motion.div
                  key={activeStep}
                  className="h-full bg-primary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">
                Production Support
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground mb-4">
              CORE ENGINEERING CAPABILITIES
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
              We specialize in designing the tools and processes your manufacturing floor relies on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-accent/80 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <cap.icon className="w-5 h-5 text-accent-orange-2" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-foreground text-lg mb-1">{cap.title}</h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Standard */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-accent-orange-2">
                Our Promise
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground mb-4">
              THE BATARA DELIVERY STANDARD
            </h2>
            <p className="text-silver max-w-xl mx-auto text-[15px]">
              Common across all projects — an uncompromising operational framework that protects your investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 mx-auto">
                  <s.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-foreground mb-4">
            Got a Problem No One Else Could Solve? Bring It to Us.
          </h2>
          <p className="text-silver text-[15px] mb-8">
            Whether it's a tough tolerance, a complex assembly, or a full production challenge — drop your problem statement and our engineers will have a plan within 4 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 px-8 py-3 bg-primary rounded text-primary-foreground font-semibold tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
            >
              Submit Your Specifications
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-accent/30 rounded bg-accent/5 text-accent font-medium tracking-wide hover:bg-accent/10 hover:border-accent transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Initiate Project via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
