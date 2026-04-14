import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Cpu, Settings, Bot, Layers, ShieldCheck,
  PackageCheck, Wrench, ScanLine, ClipboardCheck, Sparkles, CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fd = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

const video = {
  src: "/clip.mp4",
  title: "In-House VMC Machining Process",
  label: "Manufacturing",
  description:
    "Watch our state-of-the-art Vertical Machining Centres (VMC) in action. High-precision mould cavities are machined from raw steel blocks to micron-level tolerances — every pass controlled, every dimension verified. This is the foundation of quality at Batara Techno Solutions.",
  tags: ["VMC Machining", "In-House", "High Precision"],
};

const TechnicalGallery = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen text-foreground" style={{ background: "hsl(220, 14%, 93%)", position: "relative", zIndex: 1 }}>
      <Navbar />

      <main className="pt-[68px]">
        {/* Hero */}
        <section className="relative py-14 md:py-20 px-4 sm:px-6 md:px-16" style={{ background: "hsl(220, 14%, 93%)" }}>
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              {...fd(0)}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">
                Technical Gallery
              </span>
              <div className="w-8 h-0.5 bg-primary" />
            </motion.div>
            <motion.h1
              {...fd(0.1)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              ENGINEERING IN
              <br />
              <span className="text-primary">MOTION</span>
            </motion.h1>
            <motion.p
              {...fd(0.2)}
              className="text-silver text-[15px] md:text-base leading-relaxed max-w-2xl mx-auto"
            >
              See our capabilities in action — from raw steel to precision
              tooling. Each video captures a stage of our engineering process,
              giving you a transparent view of how Batara Techno Solutions
              delivers excellence.
            </motion.p>
          </div>
        </section>

        <div className="w-full h-px bg-border" />

        {/* Featured Video */}
        <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12" style={{ background: "hsl(220, 14%, 93%)" }}>
          <div className="max-w-5xl mx-auto">

            {/* Video Player */}
            <motion.div
              {...fd(0)}
              className="w-full rounded-2xl overflow-hidden border border-border bg-card shadow-[0_8px_60px_hsl(var(--primary)/0.10)] aspect-video"
            >
              <video
                src={video.src}
                controls
                className="w-full h-full object-cover"
                title={video.title}
              />
            </motion.div>

            {/* ── Section Header ── */}
            <motion.div {...fd(0.15)} className="mt-10 text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-primary">
                  Advanced Manufacturing
                </span>
                <div className="w-8 h-0.5 bg-primary" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                ADVANCED MANUFACTURING &<br className="hidden md:block" /> PRECISION ENGINEERING
              </h2>
              <p className="text-silver text-[15px] leading-relaxed max-w-2xl mx-auto mb-2">
                Experience our cutting-edge manufacturing capabilities powered by advanced CNC and VMC machining
                technology. Our facility is designed to deliver precision, efficiency, and consistency across every
                stage of production.
              </p>
              <p className="text-silver text-[14px] leading-relaxed max-w-2xl mx-auto border-l-2 border-primary/30 pl-4 text-left mt-4">
                From raw material processing to final component assembly, we utilise automated systems and intelligent
                workflows to ensure superior quality and performance.
              </p>
            </motion.div>

            {/* ── Key Capabilities ── */}
            <motion.div {...fd(0.2)} className="mb-10">
              <h3 className="font-display font-bold text-foreground text-xl mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full inline-block" />
                Key Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Cpu,          title: "High-Precision CNC & VMC Machining",    desc: "Micron-level tolerances achieved on every component using state-of-the-art CNC and VMC centres." },
                  { icon: Settings,     title: "Fully Automated Production Systems",    desc: "Intelligent automation across our production floor ensures repeatability and zero-compromise quality." },
                  { icon: Bot,          title: "Robotic Handling & Assembly",           desc: "Robotic cells handle and assemble components with consistent precision, reducing human error." },
                  { icon: Layers,       title: "Complex Component Manufacturing",       desc: "Multi-axis machining capability for intricate geometries and high-complexity engineering parts." },
                  { icon: ShieldCheck,  title: "Consistent Quality, Minimal Error",     desc: "Rigorous in-process controls and statistical monitoring deliver repeatable, defect-free output." },
                  { icon: PackageCheck, title: "End-to-End Production Readiness",       desc: "From raw stock to finished, inspection-passed components — fully production-line ready." },
                ].map((cap, i) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.07 }}
                    className="group p-5 rounded-xl border border-border bg-white hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors shrink-0">
                        <cap.icon className="w-4 h-4 text-primary" />
                      </span>
                      <h4 className="font-semibold text-foreground text-[13.5px] leading-tight">{cap.title}</h4>
                    </div>
                    <p className="text-silver text-[13px] leading-relaxed">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Our Process ── */}
            <motion.div {...fd(0.25)} className="mb-10">
              <h3 className="font-display font-bold text-foreground text-xl mb-6 flex items-center gap-2">
                <span className="w-1 h-5 bg-primary rounded-full inline-block" />
                Our Process
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Wrench,         step: "01", title: "Material Preparation & Setup",               desc: "Raw materials are verified, staged, and configured for precision machining operations." },
                  { icon: Cpu,            step: "02", title: "Precision Machining Using Advanced Tools",   desc: "CNC and VMC centres execute multi-pass programs to achieve exact dimensional targets." },
                  { icon: Bot,            step: "03", title: "Automated Handling & Processing",            desc: "Robotic transfer systems manage part movement between stages without manual intervention." },
                  { icon: ScanLine,       step: "04", title: "Multi-Stage Inspection & Quality Control",  desc: "In-process CMM and optical inspection validates every critical dimension at each stage." },
                  { icon: ClipboardCheck, step: "05", title: "Final Finishing & Ready-to-Use Components", desc: "Surface treatment, marking, and packaging completed to delivery-ready standard." },
                ].map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-white hover:border-primary/25 transition-colors group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <step.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-[10px] tracking-widest text-primary font-semibold">{step.step}</span>
                        <h4 className="font-semibold text-foreground text-[14px]">{step.title}</h4>
                      </div>
                      <p className="text-silver text-[13px] leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Why This Matters ── */}
            <motion.div {...fd(0.3)}>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-7 md:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-5 h-5 text-primary shrink-0" />
                  <h3 className="font-display font-bold text-foreground text-xl">Why This Matters</h3>
                </div>
                <p className="text-silver text-[15px] leading-relaxed mb-6 max-w-3xl">
                  Our integrated manufacturing approach reduces errors, increases efficiency, and ensures every
                  component meets exact specifications. This results in faster delivery, better durability,
                  and unmatched precision.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Faster Delivery",       desc: "Streamlined automation compresses lead times without sacrificing quality." },
                    { label: "Better Durability",     desc: "Precision-machined parts perform reliably in the most demanding environments." },
                    { label: "Unmatched Precision",   desc: "Every component exits our facility verified to exact engineering specifications." },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg border border-primary/15 bg-white/60">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm">{item.label}</p>
                        <p className="text-silver text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-accent py-14 md:py-20 px-4 sm:px-6 md:px-16">
          <motion.div {...fd(0)} className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-white/40" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/60">
                Get In Touch
              </span>
              <div className="w-8 h-0.5 bg-white/40" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              READY TO START YOUR PROJECT?
            </h2>
            <p className="text-white/65 text-[15px] leading-relaxed mb-8">
              Let our engineering team review your requirements and propose a
              solution. From concept to delivery — we handle it all.
            </p>
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white rounded text-accent text-sm font-semibold tracking-wide hover:bg-white/90 hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] transition-all"
            >
              Request a Prototype
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TechnicalGallery;
