import { motion } from "framer-motion";
import {
  Compass, Factory, GitBranch, Film, CircuitBoard,
  CheckCircle2, ArrowRight, Cpu, Layers, Zap, Shield,
  Settings, Wrench, FileText, BarChart3, Box, BookOpen,
  Truck, Star, Award, Clock, ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ─── Section: Engineering Design & Analysis ─── */
const designCapabilities = [
  {
    icon: Compass,
    title: "Comprehensive Structural Engineering",
    desc: "Structural design and development of complex modules for heavy machinery and transportation sectors.",
  },
  {
    icon: BarChart3,
    title: "Precision Stress Analysis",
    desc: "High-quality, timely analysis to verify product integrity under real-world operational demands.",
  },
  {
    icon: Settings,
    title: "Quality-Focused CAD Workflows",
    desc: "Advanced Formal Technical Assessment (FTA) within CAD environments for downstream manufacturing readiness.",
  },
  {
    icon: Layers,
    title: "EBOM to MBOM Transition",
    desc: "Critical transformation from Engineering to Manufacturing Bill of Materials, reducing backlogs and ensuring readiness.",
  },
  {
    icon: Wrench,
    title: "Operational Optimization",
    desc: "Engineering focused on operability, maintainability, and constructability — practical to build and maintain.",
  },
  {
    icon: Zap,
    title: "Agile Project Delivery",
    desc: "Responsive delivery accommodating last-minute modifications to meet project goals with precision.",
  },
];

const designWhyUs = [
  { label: "Scalable Capacity", desc: "Full-spectrum extension of your engineering team." },
  { label: "Measurable Efficiency", desc: "Significant gains in operational efficiency and cost optimization." },
  { label: "Technical Precision", desc: "Continuous upskilling for high-stakes industrial projects." },
];

/* ─── Section: Manufacturing Engineering ─── */
const mfgServices = [
  {
    icon: Truck,
    label: "Body in White (BIW)",
    title: "Structural Integrity & Assembly Readiness",
    points: [
      "Robust frame and assembly design for automotive and heavy machinery.",
      "Transition optimization from design to shop floor.",
      "Advanced CAD and FTA for accurate, production-ready designs.",
    ],
  },
  {
    icon: Box,
    label: "Advanced Tooling & Mould",
    title: "Precision Tooling & Mould Development",
    points: [
      "Deep domain knowledge for intricate mould design challenges.",
      "Lifecycle support from tooling concept to aftermarket maintenance.",
      "Engineering for measurable production speed and output gains.",
    ],
  },
  {
    icon: Wrench,
    label: "Sheet Metal",
    title: "Sheet Metal Design & Fabrication",
    points: [
      "EBOM to MBOM transformation — production-line-ready components.",
      "Extensive material knowledge to reduce risks and review cycles.",
      "Agile modifications to accommodate last-minute design feedback.",
    ],
  },
];

/* ─── Section: Integrated Project Delivery ─── */
const ipdKeyPoints = [
  {
    icon: Star,
    title: "Total Life Cycle Management",
    desc: "From initial design and systems engineering to large-scale production and long-term aftermarket support.",
  },
  {
    icon: Cpu,
    title: "Multidisciplinary Expertise",
    desc: "Electronics, mechanical engineering, and additive manufacturing (3D printing) unified under one workflow.",
  },
  {
    icon: BarChart3,
    title: "Financial & Operational Optimization",
    desc: "Reduce total cost of ownership through value-added improvements and streamlined procurement.",
  },
  {
    icon: Zap,
    title: "Advanced Technology Integration",
    desc: "Industry 4.0-connected facilities with supply chain technologies for predictable delivery and quality.",
  },
  {
    icon: Shield,
    title: "Rigorous Standards",
    desc: "Strict methodological standards ensuring every product adheres to safety, dependability, and performance benchmarks.",
  },
  {
    icon: Clock,
    title: "Faster Concept-to-Market",
    desc: "Specifically designed to accelerate transitions from concept to market while keeping complexity cost-effective.",
  },
];

/* ─── Section: Technical Animation ─── */
const techAnimPoints = [
  {
    icon: BookOpen,
    title: "Comprehensive Technical Authoring",
    desc: "Operator manuals, maintenance guides, and illustrated parts catalogues — precise and easy to follow.",
  },
  {
    icon: Film,
    title: "Dynamic Visuals & 3D Animation",
    desc: "3D visualizations and animations that simplify assembly sequences, maintenance procedures, and training modules.",
  },
  {
    icon: Award,
    title: "Aftermarket Lifecycle Solutions",
    desc: "End-to-end aftermarket support ensuring service teams and customers can operate and maintain equipment effectively.",
  },
  {
    icon: Zap,
    title: "Modernized Publishing Workflows",
    desc: "Agile methodologies delivering high-quality content with speed, even amid last-minute engineering changes.",
  },
  {
    icon: Shield,
    title: "Quality-First Execution",
    desc: "Rigorous checks to meet industry standards — technical accuracy and clarity that reduce field errors.",
  },
];

/* ─── Section: Electronics Manufacturing ─── */
const emCapabilities = [
  { icon: CircuitBoard, title: "PCBA Production", desc: "Printed Circuit Board Assemblies built to exacting specifications across diverse sectors." },
  { icon: Layers, title: "Cable Assemblies", desc: "Complex cable assembly solutions tailored for safety-critical and high-performance applications." },
  { icon: Box, title: "Box-Build Solutions", desc: "Full box-build services transforming technical designs into finished, certified products." },
  { icon: Shield, title: "Conformal Coating & Potting", desc: "Advanced protective techniques for demanding environments where failure is not an option." },
  { icon: Cpu, title: "Industry 4.0 Facilities", desc: "Modern supply chain technologies ensuring predictable delivery schedules and continuous quality improvements." },
  { icon: Star, title: "High-Mix Low-Volume", desc: "Specialized expertise for low-to-medium volume projects involving complex electronic components." },
];

/* ─── Sub-components ─── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4 justify-center">
      <div className="w-8 h-0.5 bg-primary" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">{children}</span>
      <div className="w-8 h-0.5 bg-primary" />
    </div>
  );
}

function WhyCard({ label, desc }: { label: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg border border-primary/15 bg-primary/5 hover:border-primary/30 transition-colors">
      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
      <div>
        <p className="font-semibold text-foreground text-sm">{label}</p>
        <p className="text-silver text-xs mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ─── SVG Illustrations ─── */

function DesignIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="dGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect x="20" y="40" width="120" height="80" rx="6" stroke="hsl(214 72% 50%/0.6)" strokeWidth="1.5" fill="hsl(214 72% 50%/0.04)" />
      <line x1="20" y1="80" x2="140" y2="80" stroke="hsl(214 72% 50%/0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="80" y1="40" x2="80" y2="120" stroke="hsl(214 72% 50%/0.3)" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="80" cy="80" r="18" stroke="hsl(214 72% 60%)" strokeWidth="1.5" fill="hsl(214 72% 50%/0.1)" />
      <circle cx="80" cy="80" r="4" fill="hsl(214 72% 65%)" />
      {/* Pulsing compass ring */}
      <circle cx="80" cy="80" r="18" stroke="hsl(214 72% 70%)" strokeWidth="1.5" fill="none">
        <animate attributeName="r" values="18;28;18" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0;0.55" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <rect x="170" y="30" width="130" height="100" rx="6" stroke="hsl(214 72% 42%/0.4)" strokeWidth="1" fill="none" />
      <line x1="190" y1="55" x2="280" y2="55" stroke="hsl(214 72% 50%/0.4)" strokeWidth="1" />
      <line x1="190" y1="70" x2="260" y2="70" stroke="hsl(214 72% 50%/0.3)" strokeWidth="1" />
      <line x1="190" y1="85" x2="270" y2="85" stroke="hsl(214 72% 50%/0.3)" strokeWidth="1" />
      <line x1="190" y1="100" x2="250" y2="100" stroke="hsl(214 72% 50%/0.25)" strokeWidth="1" />
      <path d="M 60 160 L 120 190 L 180 155 L 240 170 L 300 150" stroke="hsl(214 72% 55%)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="60" cy="160" r="3" fill="hsl(214 72% 65%)" />
      <circle cx="120" cy="190" r="3" fill="hsl(214 72% 65%)" />
      <circle cx="180" cy="155" r="3" fill="hsl(214 72% 65%)" />
      <circle cx="240" cy="170" r="3" fill="hsl(214 72% 65%)" />
      <circle cx="300" cy="150" r="3" fill="hsl(214 72% 65%)" />
      {/* Ball traveling along graph line */}
      <circle r="5" fill="hsl(214 72% 85%)" filter="url(#dGlow)">
        <animateMotion dur="4s" repeatCount="indefinite" path="M 60 160 L 120 190 L 180 155 L 240 170 L 300 150" />
      </circle>
      <text x="20" y="220" fill="hsl(214 72% 55%/0.5)" fontSize="8" fontFamily="monospace">STRESS ANALYSIS — FTA VERIFIED</text>
    </svg>
  );
}

function ManufacturingIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="mGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* BIW frame outline — white/silver on blue bg */}
      <path d="M 30 130 L 60 90 L 120 80 L 200 80 L 260 90 L 290 130 L 290 170 L 30 170 Z" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
      <path d="M 60 90 L 60 130" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <path d="M 200 80 L 200 130" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      <path d="M 30 130 L 290 130" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
      {/* Wheel 1 with rotating spokes */}
      <circle cx="70" cy="170" r="18" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="rgba(255,255,255,0.07)" />
      <circle cx="70" cy="170" r="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
      <line x1="70" y1="152" x2="70" y2="188" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2">
        <animateTransform attributeName="transform" type="rotate" from="0 70 170" to="360 70 170" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="52" y1="170" x2="88" y2="170" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2">
        <animateTransform attributeName="transform" type="rotate" from="0 70 170" to="360 70 170" dur="4s" repeatCount="indefinite" />
      </line>
      {/* Wheel 2 with rotating spokes */}
      <circle cx="250" cy="170" r="18" stroke="rgba(255,255,255,0.65)" strokeWidth="1.5" fill="rgba(255,255,255,0.07)" />
      <circle cx="250" cy="170" r="8" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="none" />
      <line x1="250" y1="152" x2="250" y2="188" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2">
        <animateTransform attributeName="transform" type="rotate" from="0 250 170" to="360 250 170" dur="4s" repeatCount="indefinite" />
      </line>
      <line x1="232" y1="170" x2="268" y2="170" stroke="rgba(255,255,255,0.55)" strokeWidth="1.2">
        <animateTransform attributeName="transform" type="rotate" from="0 250 170" to="360 250 170" dur="4s" repeatCount="indefinite" />
      </line>
      {/* Grid / mould pattern */}
      <rect x="110" y="30" width="100" height="40" rx="3" stroke="rgba(255,255,255,0.35)" strokeWidth="1" fill="rgba(255,255,255,0.06)" />
      <line x1="143" y1="30" x2="143" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="177" y1="30" x2="177" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="110" y1="50" x2="210" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Shine ball along BIW body outline */}
      <circle r="5" fill="white" filter="url(#mGlow)" opacity="0.9">
        <animateMotion dur="5s" repeatCount="indefinite" path="M 30 130 L 60 90 L 120 80 L 200 80 L 260 90 L 290 130" />
      </circle>
      <text x="30" y="218" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">BIW · MOULD · SHEET METAL</text>
    </svg>
  );
}

function IntegratedIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="hsl(214 72% 55%)" />
        </marker>
        <filter id="iGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Lifecycle pipeline */}
      {[0,1,2,3,4].map((i) => (
        <g key={i}>
          <rect x={20 + i * 58} y="90" width="44" height="44" rx="6" stroke="hsl(214 72% 50%/0.55)" strokeWidth="1.5" fill="hsl(214 72% 50%/0.07)" />
          {i < 4 && <line x1={64 + i * 58} y1="112" x2={78 + i * 58} y2="112" stroke="hsl(214 72% 55%)" strokeWidth="1.5" markerEnd="url(#arr)" />}
        </g>
      ))}
      {["D","M","V","I","C"].map((lbl, i) => (
        <text key={lbl} x={37 + i * 58} y="118" fill="hsl(214 72% 75%)" fontSize="14" fontWeight="bold" fontFamily="monospace">{lbl}</text>
      ))}
      {["Design","Mfg","Valid","Intg","Cert"].map((lbl, i) => (
        <text key={lbl} x={22 + i * 58} y="152" fill="hsl(214 72% 55%/0.55)" fontSize="7" fontFamily="monospace">{lbl}</text>
      ))}
      <path d="M 20 175 Q 160 155 300 175" stroke="hsl(214 72% 50%/0.3)" strokeWidth="1" strokeDasharray="4 3" fill="none" />
      {/* Glowing ball traversing pipeline boxes */}
      <circle r="7" fill="hsl(214 72% 80%)" filter="url(#iGlow)" opacity="0.9">
        <animateMotion dur="5s" repeatCount="indefinite" calcMode="linear"
          path="M 42 112 L 100 112 L 158 112 L 216 112 L 274 112" />
        <animate attributeName="opacity" values="0.9;0.6;0.9" dur="5s" repeatCount="indefinite" />
      </circle>
      <text x="30" y="215" fill="hsl(214 72% 55%/0.5)" fontSize="8" fontFamily="monospace">END-TO-END LIFECYCLE MANAGEMENT</text>
    </svg>
  );
}

function AnimationIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="aGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Film strip — white/silver on blue bg */}
      <rect x="20" y="50" width="280" height="100" rx="4" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" fill="rgba(255,255,255,0.04)" />
      {[0,1,2,3,4,5,6].map(i => (
        <rect key={i} x={30 + i * 38} y="60" width="28" height="80" rx="3" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill={i === 3 ? "rgba(255,255,255,0.12)" : "none"} />
      ))}
      {/* Play button with pulsing glow */}
      <polygon points="148,90 148,120 172,105" fill="white" filter="url(#aGlow)">
        <animate attributeName="opacity" values="0.8;1;0.8" dur="1.8s" repeatCount="indefinite" />
      </polygon>
      {/* Outer play glow pulse ring */}
      <circle cx="160" cy="105" r="20" stroke="rgba(255,255,255,0.6)" strokeWidth="1" fill="none">
        <animate attributeName="r" values="20;32;20" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="1.8s" repeatCount="indefinite" />
      </circle>
      {/* Film holes */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <circle key={`t${i}`} cx={28 + i * 28} cy="48" r="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      ))}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <circle key={`b${i}`} cx={28 + i * 28} cy="152" r="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      ))}
      {/* Moving scan line across film strip */}
      <line y1="52" y2="148" stroke="white" strokeWidth="1.5">
        <animate attributeName="x1" values="25;295;25" dur="3s" repeatCount="indefinite" />
        <animate attributeName="x2" values="25;295;25" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.55;0.04;0.55" dur="3s" repeatCount="indefinite" />
      </line>
      {/* Document icon */}
      <rect x="55" y="170" width="50" height="40" rx="3" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" />
      <line x1="63" y1="182" x2="97" y2="182" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <line x1="63" y1="191" x2="97" y2="191" stroke="rgba(255,255,255,0.22)" strokeWidth="1" />
      <line x1="63" y1="200" x2="85" y2="200" stroke="rgba(255,255,255,0.16)" strokeWidth="1" />
      <text x="30" y="225" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">3D ANIMATION · TECHNICAL MANUALS</text>
    </svg>
  );
}

function ElectronicsIllustration() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-full opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="eGlow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* PCB board */}
      <rect x="30" y="40" width="260" height="160" rx="6" stroke="hsl(152 50% 45%/0.6)" strokeWidth="2" fill="hsl(152 50% 15%/0.15)" />
      {/* Traces */}
      <path d="M 60 80 L 100 80 L 100 120 L 140 120" stroke="hsl(152 50% 55%/0.5)" strokeWidth="1.5" fill="none" />
      <path d="M 180 120 L 220 120 L 220 80 L 260 80" stroke="hsl(152 50% 55%/0.5)" strokeWidth="1.5" fill="none" />
      <path d="M 60 160 L 160 160 L 160 140 L 260 140" stroke="hsl(152 50% 55%/0.4)" strokeWidth="1" fill="none" />
      {/* MCU chip */}
      <rect x="130" y="100" width="60" height="40" rx="3" stroke="hsl(214 72% 55%/0.7)" strokeWidth="1.5" fill="hsl(214 72% 30%/0.3)" />
      <text x="147" y="124" fill="hsl(214 72% 75%)" fontSize="9" fontWeight="bold" fontFamily="monospace">MCU</text>
      {/* MCU chip pulsing glow */}
      <rect x="130" y="100" width="60" height="40" rx="3" stroke="hsl(214 72% 70%)" strokeWidth="1.5" fill="none" filter="url(#eGlow)">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </rect>
      {/* Capacitors */}
      {[0,1,2].map(i => (
        <rect key={i} x={60 + i * 30} y="55" width="12" height="16" rx="2" stroke="hsl(214 72% 50%/0.5)" strokeWidth="1" fill="hsl(214 72% 40%/0.2)" />
      ))}
      {/* Via holes */}
      {[80, 140, 200, 260].map(x => (
        <circle key={x} cx={x} cy="155" r="3" stroke="hsl(214 72% 60%/0.4)" strokeWidth="1" fill="hsl(214 72% 30%/0.3)" />
      ))}
      {/* Signal dot along top trace */}
      <circle r="4" fill="hsl(152 50% 72%)" filter="url(#eGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" path="M 60 80 L 100 80 L 100 120 L 140 120" />
      </circle>
      {/* Signal dot along right trace */}
      <circle r="3.5" fill="hsl(214 72% 78%)" filter="url(#eGlow)">
        <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s" path="M 180 120 L 220 120 L 220 80 L 260 80" />
      </circle>
      <text x="30" y="218" fill="hsl(152 50% 45%/0.6)" fontSize="8" fontFamily="monospace">PCB ASSEMBLY · ELECTRONICS MFG</text>
    </svg>
  );
}

/* ─── Main Component ─── */
const ServicesPage = () => {
  const location = useLocation();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 120);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 px-4 sm:px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-[1]">
          <motion.div {...fadeUp}>
            <SectionLabel>Our Services</SectionLabel>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              END-TO-END ENGINEERING<br className="hidden md:block" /> SOLUTIONS
            </h1>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed mb-10">
              From structural design and manufacturing engineering to electronics assembly and technical
              documentation — we provide a complete engineering ecosystem engineered for precision, speed, and scale.
            </p>
            {/* Quick jump nav */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Engineering Design", href: "#engineering-design", icon: Compass },
                { label: "Manufacturing", href: "#manufacturing-engineering", icon: Factory },
                { label: "Integrated Delivery", href: "#integrated-project-delivery", icon: GitBranch },
                { label: "Animation & Docs", href: "#technical-animation", icon: Film },
                { label: "Electronics", href: "#electronics-manufacturing", icon: CircuitBoard },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-silver text-[13px] font-medium hover:border-primary/40 hover:text-foreground transition-all bg-card/50"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                  <ChevronRight className="w-3 h-3 opacity-50" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          1. Engineering Design & Analysis
      ══════════════════════════════════════════ */}
      <section
        id="engineering-design"
        className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
            <motion.div {...fadeUp} className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Compass className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 01</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                ENGINEERING DESIGN<br />& ANALYSIS
              </h2>
              <p className="text-silver text-[15px] leading-relaxed mb-4 max-w-xl">
                Our approach drives design-led transformations that modernize workflows and accelerate the entire
                product lifecycle. We combine deep domain knowledge with cutting-edge tools — from concept development
                through to aftermarket support.
              </p>
              <p className="text-silver text-[14px] leading-relaxed max-w-xl border-l-2 border-primary/30 pl-4">
                Every design is precision-engineered for structural integrity, manufacturing readiness,
                and long-term operational reliability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px] h-[240px] rounded-xl border border-primary/15 bg-card/50 p-4 overflow-hidden"
            >
              <DesignIllustration />
            </motion.div>
          </div>

          {/* Capabilities grid */}
          <motion.div {...fadeUp} className="mb-10">
            <h3 className="font-display font-bold text-foreground text-xl mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Core Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {designCapabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  {...stagger(i * 0.07)}
                  className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/3 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <cap.icon className="w-4 h-4 text-primary" />
                    </span>
                    <h4 className="font-semibold text-foreground text-[14px] leading-tight">{cap.title}</h4>
                  </div>
                  <p className="text-silver text-[13px] leading-relaxed">{cap.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why us */}
          <motion.div {...stagger(0.2)}>
            <h3 className="font-display font-bold text-foreground text-xl mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Why Choose Our Engineering Services?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {designWhyUs.map((item) => (
                <WhyCard key={item.label} label={item.label} desc={item.desc} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. Manufacturing Engineering
      ══════════════════════════════════════════ */}
      <section
        id="manufacturing-engineering"
        className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-accent scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center mb-16">
            <motion.div {...fadeUp} className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Factory className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 02</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                MANUFACTURING<br />ENGINEERING
                <span className="block text-xl mt-1 text-primary font-semibold">BIW · Mould · Sheet Metal</span>
              </h2>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-4 max-w-xl">
                We provide end-to-end manufacturing engineering support that bridges the gap between initial design and
                final production — modernizing workflows and accelerating the manufacturing lifecycle.
              </p>
              <p className="text-primary-foreground/70 text-[14px] leading-relaxed max-w-xl border-l-2 border-primary/40 pl-4">
                Every component is engineered for downstream readiness — from a single sheet metal part to a full BIW assembly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px] h-[240px] rounded-xl border border-primary/15 bg-background/30 p-4 overflow-hidden"
            >
              <ManufacturingIllustration />
            </motion.div>
          </div>

          {/* 3 Service blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {mfgServices.map((svc, i) => (
              <motion.div
                key={svc.label}
                {...stagger(i * 0.1)}
                className="p-6 rounded-xl border border-primary-foreground/10 bg-background/20 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <svc.icon className="w-5 h-5 text-primary" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{svc.label}</p>
                    <h4 className="font-display font-bold text-primary-foreground text-[15px] leading-tight">{svc.title}</h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-primary-foreground/65 text-[13px] leading-relaxed">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Why us */}
          <motion.div {...stagger(0.2)}>
            <h3 className="font-display font-bold text-primary-foreground text-xl mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Why Partner With Our Manufacturing Team?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Manufacturing Readiness", desc: "Designs fully optimized for the actual manufacturing environment." },
                { label: "Scalable Engineering Capacity", desc: "Full-spectrum extension of your internal team for high-volume backlogs." },
                { label: "Quality-First Approach", desc: "Every component meets the highest precision standards." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg border border-primary-foreground/10 bg-background/15 hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm">{item.label}</p>
                    <p className="text-primary-foreground/60 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. Integrated Project Delivery
      ══════════════════════════════════════════ */}
      <section
        id="integrated-project-delivery"
        className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
            <motion.div {...fadeUp} className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <GitBranch className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 03</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                INTEGRATED PROJECT<br />DELIVERY
              </h2>
              <p className="text-silver text-[15px] leading-relaxed mb-4 max-w-xl">
                A holistic strategy centered on maintaining full responsibility for a product throughout its entire
                existence — bridging the gap between initial idea and a finished, certified product by managing every
                phase from design to certification.
              </p>
              <p className="text-silver text-[14px] leading-relaxed max-w-xl border-l-2 border-primary/30 pl-4">
                This unified method accelerates concept-to-market transitions while keeping even the most complex
                products cost-effective and reliable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px] h-[240px] rounded-xl border border-primary/15 bg-card/50 p-4 overflow-hidden"
            >
              <IntegratedIllustration />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ipdKeyPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                {...stagger(i * 0.08)}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/3 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <pt.icon className="w-4 h-4 text-primary" />
                  </span>
                  <h4 className="font-semibold text-foreground text-[14px] leading-tight">{pt.title}</h4>
                </div>
                <p className="text-silver text-[13px] leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          4. Technical Animation & Publication
      ══════════════════════════════════════════ */}
      <section
        id="technical-animation"
        className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 bg-accent scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-20 items-center mb-16">
            <motion.div {...fadeUp} className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Film className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 04</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                TECHNICAL ANIMATION<br />& PUBLICATION
              </h2>
              <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-4 max-w-xl">
                In today's complex industrial landscape, clear and accurate communication is vital. We transform
                intricate engineering data into high-value, accessible content that supports the entire product and
                plant lifecycle — from initial design through to aftermarket support.
              </p>
              <p className="text-primary-foreground/70 text-[14px] leading-relaxed max-w-xl border-l-2 border-primary/40 pl-4">
                Technical accuracy and clarity that reduce field errors and enhance end-user satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px] h-[240px] rounded-xl border border-primary/15 bg-background/30 p-4 overflow-hidden"
            >
              <AnimationIllustration />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {techAnimPoints.map((pt, i) => (
              <motion.div
                key={pt.title}
                {...stagger(i * 0.08)}
                className="p-5 rounded-xl border border-primary-foreground/10 bg-background/20 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <pt.icon className="w-4 h-4 text-primary" />
                  </span>
                  <h4 className="font-semibold text-primary-foreground text-[14px] leading-tight">{pt.title}</h4>
                </div>
                <p className="text-primary-foreground/65 text-[13px] leading-relaxed">{pt.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner benefits */}
          <motion.div {...stagger(0.2)}>
            <h3 className="font-display font-bold text-primary-foreground text-xl mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full inline-block" />
              Why Partner With Us?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Domain Expertise", desc: "Nuanced understanding of various industry segments to solve complex challenges." },
                { label: "Scalable Capacity", desc: "A seamless extension of your internal team, scaling documentation efforts quickly." },
                { label: "Measurable Impact", desc: "Improved technical clarity drives operational efficiency and end-user satisfaction." },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-4 rounded-lg border border-primary-foreground/10 bg-background/15 hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-primary-foreground text-sm">{item.label}</p>
                    <p className="text-primary-foreground/60 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5. Electronics Manufacturing
      ══════════════════════════════════════════ */}
      <section
        id="electronics-manufacturing"
        className="relative py-20 md:py-28 px-4 sm:px-8 md:px-16 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-16">
            <motion.div {...fadeUp} className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <CircuitBoard className="w-4 h-4 text-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">Service 05</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                ELECTRONICS MANUFACTURING
                <span className="block text-xl mt-1 text-primary font-semibold">PCB & Electromechanical</span>
              </h2>
              <p className="text-silver text-[15px] leading-relaxed mb-4 max-w-xl">
                Our electronics manufacturing services leverage deep domain knowledge to construct and assemble
                sophisticated electronic systems across various sectors — helping partners accelerate time-to-market
                while remaining cost-effective with the highest quality standards.
              </p>
              <p className="text-silver text-[14px] leading-relaxed max-w-xl border-l-2 border-primary/30 pl-4">
                Every system built to reduce your total cost of ownership while meeting robust benchmarks for
                reliability and safety.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0 w-full max-w-[340px] lg:max-w-[380px] h-[240px] rounded-xl border border-emerald-500/20 bg-card/50 p-4 overflow-hidden"
            >
              <ElectronicsIllustration />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {emCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                {...stagger(i * 0.08)}
                className="group p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/3 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <cap.icon className="w-4 h-4 text-primary" />
                  </span>
                  <h4 className="font-semibold text-foreground text-[14px] leading-tight">{cap.title}</h4>
                </div>
                <p className="text-silver text-[13px] leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Highlight stat bar */}
          <motion.div
            {...stagger(0.3)}
            className="p-6 rounded-xl border border-primary/20 bg-primary/5"
          >
            <p className="text-center text-silver text-[14px] leading-relaxed max-w-2xl mx-auto">
              Specialized expertise for{" "}
              <span className="text-foreground font-semibold">low-to-medium volume, high-mix</span> complex electronic
              components — housed within{" "}
              <span className="text-foreground font-semibold">Industry 4.0-linked facilities</span> utilizing modern
              supply chain technologies for predictable delivery and continuous quality improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-16 md:py-20 px-4 sm:px-8 md:px-16 bg-accent">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <SectionLabel>Get Started</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              READY TO ENGINEER YOUR SOLUTION?
            </h2>
            <p className="text-primary-foreground/70 text-[15px] mb-8 max-w-xl mx-auto leading-relaxed">
              Tell us your challenge and our engineering team will define the precise solution — from concept to production.
            </p>
            <a
              href="https://wa.me/918105111599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary rounded text-primary-foreground text-[14px] font-semibold tracking-wide hover:brightness-110 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(214_72%_37%/0.35)] transition-all"
            >
              Discuss Your Requirement
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
