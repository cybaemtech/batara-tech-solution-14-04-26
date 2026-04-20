import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PenTool,
  Layers,
  Play,
  Cpu,
  Package,
  Briefcase,
  ArrowRight,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Engineering Design & Analysis",
    desc: "CAD modelling, FEA, CFD — precision from concept to validated blueprint.",
    href: "/solutions",
    accent: "hsl(214 72% 37%)",
    span: "md:col-span-2",
  },
  {
    icon: Layers,
    title: "Manufacturing Engineering",
    desc: "BIW, Mould Design, Sheet Metal — shop-floor-ready solutions.",
    href: "/mould-design",
    accent: "hsl(220 58% 22%)",
    span: "",
  },
  {
    icon: Play,
    title: "Technical Animation & Publication",
    desc: "Factory simulations and exploded-view animations that close the gap between design and production.",
    href: "/solutions",
    accent: "hsl(214 72% 45%)",
    span: "",
  },
  {
    icon: Cpu,
    title: "Electronics Manufacturing",
    desc: "PCB design and electromechanical component integration for end-to-end product builds.",
    href: "/solutions",
    accent: "hsl(220 58% 28%)",
    span: "",
  },
  {
    icon: Zap,
    title: "Integrated Project Delivery",
    desc: "Single-point ownership from ideation through production support — no handoff gaps.",
    href: "/solutions",
    accent: "hsl(214 72% 37%)",
    span: "",
  },
  {
    icon: Package,
    title: "Project Portfolio",
    desc: "See real-world projects across Automotive, Aerospace, Medical and more.",
    href: "/mould-design",
    accent: "hsl(220 58% 22%)",
    span: "",
  },
  {
    icon: Briefcase,
    title: "Technical Gallery",
    desc: "Explore our library of designs, animations and engineering deliverables.",
    href: "/technical-gallery",
    accent: "hsl(214 72% 50%)",
    span: "md:col-span-2",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HomeServicesGrid = () => {
  return (
    <section id="services" className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="section-title text-foreground">
              END-TO-END ENGINEERING,<br className="hidden sm:block" /> ACROSS EVERY DISCIPLINE
            </h2>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={svc.span}
            >
              <Link
                to={svc.href}
                className="group relative flex flex-col h-full min-h-[180px] bg-card border border-border rounded-xl p-6 overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_hsl(214_72%_37%/0.12)] transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, ${svc.accent}18, transparent 65%)`,
                  }}
                />

                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4 shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${svc.accent}18`,
                    border: `1px solid ${svc.accent}40`,
                  }}
                >
                  <svc.icon className="w-5 h-5" style={{ color: svc.accent }} />
                </div>

                <h3 className="font-display font-bold text-foreground text-lg mb-2 leading-snug relative">
                  {svc.title}
                </h3>
                <p className="text-silver text-sm leading-relaxed flex-1 relative">{svc.desc}</p>

                <div className="flex items-center gap-1.5 mt-4 text-[13px] font-medium text-primary opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 relative">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Industry tags strip */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 pt-8 border-t border-border"
        >
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-silver mb-4">Industries We Serve</p>
          <div className="flex flex-wrap gap-2">
            {["Automotive", "Aerospace", "Industrial Machinery", "Industrial Automation", "Electro Mechanical", "Heavy Machinery", "Medical Devices"].map((ind) => (
              <span
                key={ind}
                className="px-3 py-1.5 border border-border rounded-full text-[12px] text-white font-medium hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesGrid;
