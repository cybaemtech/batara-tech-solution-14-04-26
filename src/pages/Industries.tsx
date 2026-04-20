import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Plane, Car, Cog, Cpu, Zap, Truck,
  ArrowRight, CheckCircle2, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55 },
};

const industries = [
  {
    id: "automotive",
    icon: Car,
    label: "Automotive",
    tagline: "Module Design & Vehicle Engineering Across All Segments",
    summary:
      "From passenger cars to heavy-duty buses, coaches, and specialist trailers, we deliver comprehensive design and development of vehicle modules and components. Using FTA within CAD, we elevate product accuracy before any part reaches the assembly line — resulting in market-leading quality outcomes.",
    points: [
      "Complete vehicle module design and development",
      "Bus, coach, trailer and truck engineering",
      "Formal Technical Assessment (FTA) in CAD",
      "New module development for market differentiation",
      "Design accuracy and quality validation pre-assembly",
    ],
    image: "/Automotive.avif",
    accent: "from-slate-700/10 to-blue-900/5",
    tag: "OEM & Tier-2 Supply Chain",
  },
  {
    id: "aerospace",
    icon: Plane,
    label: "Aerospace",
    tagline: "High-Precision Engineering for Flight-Critical Systems",
    summary:
      "We support aerospace manufacturers in navigating the most demanding engineering environments — from structural integrity validation to seamless EBOM-to-MBOM transitions. Our work helps reduce production backlogs and ensures full regulatory compliance across every stage of the design-to-production cycle.",
    points: [
      "Detailed stress analysis for structural integrity assurance",
      "EBOM to MBOM transition management",
      "Design-to-production cycle optimisation",
      "Regulatory compliance across aerospace standards",
      "Manufacturing readiness for aircraft components and major assemblies",
    ],
    image: "/Aerospace.avif",
    accent: "from-blue-700/10 to-slate-800/5",
    tag: "Tier-1 & OEM Ready",
  },
  {
    id: "industrial-machinery",
    icon: Cog,
    label: "Industrial Machinery",
    tagline: "Purpose-Built Equipment for Complex Industrial Environments",
    summary:
      "Industrial machinery demands deep domain expertise and precision engineering tailored to each vertical. We design complex equipment and custom tooling that solves intricate operational challenges, drives measurable efficiency gains, and handles the distinct nuances of diverse industrial segments.",
    points: [
      "Complex equipment design for specialist industries",
      "Custom tooling and jig development",
      "Vertical-specific engineering solutions",
      "Operational efficiency improvement through design",
      "Multi-industry domain expertise",
    ],
    image: "/Industrial-Machinery.avif",
    accent: "from-blue-800/10 to-slate-900/5",
    tag: "Heavy Industry & OEM",
  },
  {
    id: "industrial-automation",
    icon: Cpu,
    label: "Industrial Automation",
    tagline: "Modernising Production Through Smart Digital Integration",
    summary:
      "We help manufacturers modernise legacy production environments and unlock the full ROI of smart technology. From PLC solution development to brownfield plant revamps, our engineers integrate digital tools that optimise energy systems, HVAC, safety monitoring and overall facility management.",
    points: [
      "PLC solution development for electronics and monitoring",
      "Brownfield plant revamp and modernisation",
      "Energy, HVAC and safety system integration",
      "Digital tool implementation for ROI improvement",
      "Industrial IoT architecture and control design",
    ],
    image: "/Industrial-Automation.avif",
    accent: "from-slate-600/10 to-blue-800/5",
    tag: "Smart Factory & Industry 4.0",
  },
  {
    id: "electro-mechanical",
    icon: Zap,
    label: "Electro-Mechanical",
    tagline: "Integrated Systems at the Intersection of Mechanics and Electronics",
    summary:
      "Electro-mechanical engineering requires simultaneous mastery of structural design and sophisticated electronic control. We develop monitoring systems and specialised electronics hardware that bridge this gap — delivering integrated solutions that require both physical precision and advanced programming to perform reliably in the field.",
    points: [
      "Integrated electro-mechanical system design",
      "Monitoring system development and hardware engineering",
      "Structural design for electronic control assemblies",
      "Electronics hardware specification and prototyping",
      "Programming and control logic development",
    ],
    image: "/Electro-Mechanical.avif",
    accent: "from-blue-600/10 to-slate-800/5",
    tag: "Electronics & Control Systems",
  },
  {
    id: "heavy-machinery",
    icon: Truck,
    label: "Heavy Machinery",
    tagline: "Structural Engineering for the Most Demanding Operating Conditions",
    summary:
      "Off-highway and construction environments demand machinery that is structurally uncompromising. We deliver high-quality structural layouts for massive equipment, navigating complex timelines and resource constraints without sacrificing integrity. Our capabilities extend to skid-mounted plant design and other heavy, modular industrial assets.",
    points: [
      "Structural design for off-highway and construction equipment",
      "Skid-mounted plant and modular asset design",
      "Complex project timeline management",
      "High-load structural analysis and validation",
      "Heavy equipment detailed engineering and documentation",
    ],
    image: "/Heavy-Machinery.avif",
    accent: "from-slate-700/10 to-blue-900/5",
    tag: "Off-Highway & Construction",
  },
];

const Industries = () => {
  return (
    <div
      className="relative min-h-screen text-foreground"
      style={{ backgroundColor: "hsl(220,14%,93%)", isolation: "isolate" }}
    >
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-[76px]"
        style={{ backgroundColor: "#0a1628" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/industries-hero-bg.png')" }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071020]/95 via-[#0a1628]/80 to-[#071020]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 md:px-16 pt-16 pb-14 md:pt-24 md:pb-20">
          <motion.div
            {...fadeUp}
            className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-white/40 mb-6"
          >
            <Link to="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-blue-400">Industries</span>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.55, delay: 0.05 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-blue-400" />
              <span className="section-label text-blue-400">Sectors We Serve</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
              INDUSTRIES WE<br />
              <span className="text-blue-400">POWER FORWARD</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
              From aerospace to heavy machinery, Batara Techno Solutions delivers engineering excellence across the sectors that define modern industry. Our cross-domain expertise enables us to match the precision, pace, and compliance demands of each vertical.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-wrap gap-10 mt-10"
          >
            {[
              { value: "6+", label: "Industry Verticals" },
              { value: "50+", label: "Projects Delivered" },
              { value: "Tier-1", label: "OEM & Supply Chain" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-blue-400">{s.value}</span>
                <span className="text-[11px] uppercase tracking-widest text-white/35 mt-0.5">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="h-px bg-white/10" />
      </section>

      {/* ── Industry Cards ── */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-24"
        style={{ backgroundColor: "hsl(220,14%,93%)" }}
      >
        <div className="flex flex-col gap-10 md:gap-14">
          {industries.map((ind, i) => (
            <motion.article
              key={ind.id}
              id={ind.id}
              {...fadeUp}
              transition={{ duration: 0.55, delay: 0.04 * (i % 3) }}
              className={`scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border shadow-md ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
              style={{ backgroundColor: "hsl(0,0%,99%)" }}
            >
              {/* Image */}
              <div
                className={`relative min-h-[240px] sm:min-h-[300px] lg:min-h-[420px] overflow-hidden ${i % 2 === 1 ? "[direction:ltr]" : ""}`}
              >
                <img
                  src={ind.image}
                  alt={ind.label}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 hidden lg:block ${i % 2 === 1 ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-transparent to-white/30`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/90 backdrop-blur-sm border border-slate-200 text-primary">
                    <ind.icon className="w-3 h-3" />
                    {ind.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 bg-gradient-to-br ${ind.accent} ${i % 2 === 1 ? "[direction:ltr]" : ""}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <ind.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-primary/40 font-medium leading-none mb-0.5">
                      Industry {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-xl font-bold text-foreground leading-tight">{ind.label}</h2>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground leading-snug mb-4">
                  {ind.tagline}
                </h3>

                <p className="text-[13px] sm:text-sm text-silver leading-relaxed mb-5">
                  {ind.summary}
                </p>

                <ul className="flex flex-col gap-2.5 mb-7">
                  {ind.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-[12px] sm:text-[13px] text-foreground/75 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary hover:gap-3 transition-all group w-fit"
                >
                  View related services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: "1px solid hsl(220,14%,84%)", backgroundColor: "hsl(0,0%,99%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-20">
          <motion.div
            {...fadeUp}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
          >
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-0.5 bg-primary" />
                <span className="section-label text-primary">Partner With Us</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-snug mb-3">
                Engineering Your Industry's Next Breakthrough
              </h2>
              <p className="text-sm text-silver leading-relaxed">
                Whether you're a Tier-1 supplier, OEM, or growing manufacturer — our teams are ready to align with your engineering agenda and deliver results that move the needle.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/30 rounded text-primary text-[13px] font-semibold tracking-wide hover:bg-primary/10 hover:border-primary transition-all"
              >
                Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                onClick={() =>
                  setTimeout(() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }), 100)
                }
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary rounded text-primary-foreground text-[13px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(214_72%_37%/0.35)] transition-all"
              >
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
