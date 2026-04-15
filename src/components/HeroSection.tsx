import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    const el = document.getElementById("our-services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen pt-[76px] overflow-hidden bg-[#060c1a] z-[1]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/clip2.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#060c1a]/45 z-[1] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 72% 55% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(214 72% 55% / 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(214_72%_65%/0.5)] to-transparent pointer-events-none z-[4]"
        style={{ animation: "scan-line 5s ease-in-out infinite" }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/80 via-[#060c1a]/50 to-transparent pointer-events-none z-[4]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#060c1a]/40 via-transparent to-transparent pointer-events-none z-[4]" />

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center min-h-[calc(100vh-76px)] px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-6 h-px bg-[hsl(214_72%_60%)] shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.15em] uppercase text-[hsl(214_72%_75%)]">
              Engineering Excellence for Tier-1, Tier-2 &amp; OEMs
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-display font-bold text-[28px] sm:text-[40px] md:text-[52px] lg:text-[clamp(40px,5vw,68px)] leading-[1.03] tracking-tight text-white mb-5"
          >
            YOU DEFINE
            <br />
            THE FRICTION;
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1,
                delay: 0.75,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-[hsl(214_72%_65%)] inline-block"
            >
              WE ENGINEER
              <br />
              THE FLOW!
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="text-[13px] sm:text-[15px] leading-[1.75] text-white/70 max-w-lg mb-8 border-l-2 border-[hsl(214_72%_50%/0.7)] pl-4"
          >
            From raw problem to realized product: We{" "}
            <strong className="text-white/90 font-medium">
              design the solution
            </strong>
            , deliver the result, and anchor the support. Your{" "}
            <strong className="text-white/90 font-medium">
              End-to-End Engineering Ecosystem.
            </strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="flex flex-wrap gap-3 items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[hsl(214_72%_37%)] text-white text-sm font-semibold tracking-wide rounded-lg hover:bg-[hsl(214_72%_44%)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_hsl(214_72%_37%/0.55)] transition-all relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <span className="relative">Discuss Your Problem Statement</span>
              <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-white/20 text-white/75 text-sm font-medium rounded-lg hover:border-white/40 hover:text-white transition-all"
            >
              <ChevronDown className="w-4 h-4" />
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating badge — bottom right */}
      <div
        className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-2 px-4 py-3 bg-white/5 border border-[hsl(214_72%_50%/0.4)] rounded-lg backdrop-blur-md"
        style={{ animation: "badge-float 4s ease-in-out infinite" }}
      >
        <div
          className="w-2 h-2 rounded-full bg-[hsl(214_72%_65%)] shadow-[0_0_10px_hsl(214_72%_65%)]"
          style={{ animation: "dot-pulse 2s ease-in-out infinite" }}
        />
        <span className="font-mono text-[10px] tracking-[0.12em] text-[hsl(214_72%_75%)] uppercase">
          Concept to Production in Action
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
