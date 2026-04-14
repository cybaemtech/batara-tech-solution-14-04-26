import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Shield, Award, Eye, Users, Mail, ArrowRight,
  Car, Plane, Activity, Zap, Package, Truck,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const verticals = [
  { name: "Automotive Engineering",  years: 20, suffix: "+", icon: Car,      desc: "OEM, Tier-1 & Tier-2 product design to production" },
  { name: "Aerospace & Space",        years: 10, suffix: "+", icon: Plane,    desc: "Space-grade simulation & structural precision design" },
  { name: "Medical & Healthcare",     years: 10, suffix: "+", icon: Activity, desc: "Compliance-first medical device engineering" },
  { name: "Electro Mechanical",       years: 8,  suffix: "+", icon: Zap,      desc: "PCB integration & electromechanical assemblies" },
  { name: "Consumer Products",        years: null, suffix: "", icon: Package,  desc: "Mass-market innovation & design execution" },
  { name: "Heavy Machinery",          years: null, suffix: "", icon: Truck,    desc: "Structural, hydraulic & mechanical design" },
];

const standards = [
  {
    icon: Award,
    title: "Uncompromising Quality",
    desc: "We are an ISO Certified organization that delivers multiple concept designs and rigorous quality processes.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    desc: "We provide timely reports, transparent bottleneck identification, and actionable proposed solutions.",
  },
  {
    icon: Users,
    title: "Elite Talent",
    desc: "We staff highly professional engineers and designers, and provide comprehensive staffing solutions and training.",
  },
];

const executives = [
  {
    name: "Sacheen",
    image: "/executives/icon-vipin.png",
    email: "sacheen@bataratechnosolutions.com",
    desc: "Sacheen drives the visual and operational proof of our capabilities. Dedicated to showcasing real-world manufacturing achievements, he ensures that our engineering solutions—from space simulation models to advanced food processing designs—are clearly communicated and validated through tangible deliverables, technical animations, and verified client testimonials.",
  },
  {
    name: "Dileesh",
    image: "/executives/icon-vipin.png",
    email: "dileesh@bataratechnosolutions.com",
    desc: "As a core pillar of our executive team, Dileesh champions our End-to-End (E-2-E) solution ecosystem. He ensures seamless integration across our horizontal services—including Product Design, Manufacturing, Analysis, and Production Support—guaranteeing that every project transitions flawlessly from the detailed design phase to a fully realized prototype and final product.",
  },
  {
    name: "Vipin Kalathil",
    image: "/executives/icon-vipin.png",
    email: "vipin@bataratechnosolutions.com",
    desc: "Vipin oversees the rigorous standards that define Batara Techno Solutions. He ensures that our deep expertise across verticals like Automotive, Aerospace, and Medical is applied precisely to our manufacturing capabilities, including Sheet Metal Design, Plastic Moulding, Casting, and Tool Designing. His focus is on maintaining our ISO-certified quality, ensuring milestone achievements, and delivering on-time results.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function CountUp({ target, duration = 1.8, suffix = "" }: { target: number; duration?: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const AboutUs = () => {
  const navigate = useNavigate();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative z-[1] pt-28 md:pt-36 pb-20 md:pb-28 px-4 sm:px-8 md:px-16 overflow-hidden"
        style={{
          backgroundImage: "url('/about-hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      >
        {/* Dark gradient overlays — top fade from navbar, overall dark tint */}
        <div className="absolute inset-0 bg-[#060c1a]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060c1a]/60 via-transparent to-[#060c1a]/80 pointer-events-none" />
        {/* Subtle vignette sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c1a]/50 via-transparent to-[#060c1a]/50 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">About Us</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              ENGINEERING REALITY,<br className="hidden sm:block" /> TOGETHER.
            </h1>
            <p className="text-white/65 text-[15px] leading-relaxed max-w-2xl mx-auto mb-5">
              At Batara Techno Solutions, we do not just conceptualize; we manufacture. Built specifically for the demands of OEMs, Tier-1, and Tier-2 organizations, we bridge the critical gap between theoretical design and shop-floor reality.
            </p>
            <p className="text-white/65 text-[15px] leading-relaxed max-w-2xl mx-auto mb-9">
              Our foundation is built on a single, uncompromising promise: By partnering with premier electronics and mechanical organizations, we operate as a complete{" "}
              <Link to="/#services" className="text-primary underline underline-offset-4 hover:text-accent-orange-2 transition-colors">
                End-to-End (E-2-E) Solution Ecosystem
              </Link>
              —taking your problem statement from the ideation phase through to final production support.
            </p>
            <div className="inline-block border border-primary/50 bg-primary/10 backdrop-blur-sm rounded-lg px-7 py-3.5">
              <span className="font-display font-bold text-white text-lg tracking-wide">
                FINAL DESIGNED PRODUCT = MANUFACTURED PRODUCT
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Industry Pedigree ── */}
      <section className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground overflow-hidden">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 72% 60% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(214 72% 60% / 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        {/* Glowing radial behind header */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[260px] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, hsl(214 72% 42% / 0.12) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative">

          {/* Section header */}
          <motion.div {...fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">Industry Pedigree</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground mb-4">
              DECADES OF BATTLE-TESTED EXPERIENCE
            </h2>
            <p className="text-primary-foreground/50 text-[15px] max-w-lg mx-auto leading-relaxed">
              Built across the most demanding engineering sectors — our pedigree is measured in delivered results, not years alone.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {verticals.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className="group relative rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.04] hover:bg-primary-foreground/[0.08] hover:border-primary/40 transition-all duration-300 p-6 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/70 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon + number row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "hsl(214 72% 50% / 0.12)",
                      border: "1px solid hsl(214 72% 55% / 0.25)",
                    }}
                  >
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>

                  {v.years !== null ? (
                    <div className="text-right">
                      <div className="font-display font-bold text-3xl text-primary leading-none">
                        <CountUp target={v.years} suffix={v.suffix} />
                      </div>
                      <div className="font-mono text-[10px] text-primary-foreground/40 tracking-[0.18em] uppercase mt-0.5">
                        Years
                      </div>
                    </div>
                  ) : (
                    <div className="text-right">
                      <div className="font-mono text-[10px] text-accent-orange-2 tracking-[0.18em] uppercase border border-accent-orange-2/30 rounded px-2 py-1">
                        Domain
                      </div>
                    </div>
                  )}
                </div>

                {/* Name + desc */}
                <div>
                  <h3 className="font-display font-bold text-primary-foreground text-[15px] mb-1.5 leading-snug">
                    {v.name}
                  </h3>
                  <p className="text-primary-foreground/45 text-[13px] leading-relaxed">
                    {v.desc}
                  </p>
                </div>

                {/* Bottom separator line */}
                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Summary stat bar */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.5 }}
            className="mt-10 grid grid-cols-3 gap-px bg-primary-foreground/10 rounded-xl overflow-hidden"
          >
            {[
              { value: 20, suffix: "+", label: "Years in Automotive" },
              { value: 6,  suffix: "",  label: "Engineering Sectors" },
              { value: 10, suffix: "+", label: "Years in Aerospace" },
            ].map((stat) => (
              <div key={stat.label} className="bg-accent flex flex-col items-center justify-center py-5 px-4 text-center">
                <div className="font-display font-bold text-2xl text-primary leading-none mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
                </div>
                <div className="font-mono text-[11px] text-primary-foreground/40 tracking-[0.14em] uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* The Batara Standard */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">The Batara Standard</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-foreground">PROTECTING YOUR INVESTMENT</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standards.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-primary">Executive Leadership</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h2 className="section-title text-primary-foreground">DRIVEN BY PRECISION & TRANSPARENCY</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {executives.map((exec, i) => (
              <motion.div
                key={exec.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className="bg-accent/60 border border-primary-foreground/10 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-full border-2 border-primary/40 shrink-0 shadow-[0_0_20px_hsl(var(--primary)/0.2)] overflow-hidden">
                    <img src={exec.image} alt={exec.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-primary-foreground text-lg">{exec.name}</h3>
                    <p className="font-mono text-[11px] text-primary tracking-wider uppercase">Executive Head</p>
                  </div>
                </div>
                <a href={`mailto:${exec.email}`} className="flex items-center gap-2 text-accent-orange-2 text-xs font-mono mb-4 hover:underline">
                  <Mail className="w-3.5 h-3.5" />
                  {exec.email}
                </a>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{exec.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-16">
            <button
              onClick={handleContactClick}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary rounded-lg text-primary-foreground font-display font-bold text-[15px] tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
            >
              <Shield className="w-4 h-4" />
              See How Our Executives Engineer Reality
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
