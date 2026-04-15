import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Layers,
  Activity,
  ArrowRight,
  Shield,
  CheckCircle2,
  FlaskConical,
  Gauge,
  Hammer,
  LayoutGrid,
  Cpu,
  Settings,
  ChevronRight,
  Zap,
  RefreshCw,
  Target,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Slide 1 — Project Running Process
import processFlowImg from "@/assets/endtoend-process.png";
// Slide 2 — DFM
import dfmImg from "@/assets/ppt/image3.png";
// Slide 3 — Grill Mesh
import grillMovingHalfImg from "@/assets/ppt/image4.png";
import grillFixedHalfImg from "@/assets/ppt/image5.png";
import grillTopViewImg from "@/assets/ppt/image8.png";
import grillAssemblyImg from "@/assets/ppt/image6.png";
import grillPartModelImg from "@/assets/ppt/image7.png";
// Slide 4 — Mould Base & Assembly
import mouldBaseImg from "@/assets/ppt/image9.png";
import mouldAssemblyImg from "@/assets/ppt/image10.png";
import mouldPhysicalImg from "@/assets/ppt/image11.jpg";
import mouldPhysical2Img from "@/assets/ppt/image12.jpg";
// Slide 5 — Motor Housing
import motorHousingImg1 from "@/assets/ppt/image13.jpg";
import motorHousingImg2 from "@/assets/ppt/image14.jpg";
// Slide 6 — Moldflow
import moldflowServicesImg from "@/assets/ppt/image17.png";
import moldflowResultsImg from "@/assets/ppt/image15.png";
import moldflowCoolingImg from "@/assets/ppt/image16.png";
import moldflowGasAssistImg from "@/assets/ppt/image18.png";
import moldflow2KImg from "@/assets/ppt/image19.png";
// Slide 7 — VMC Machines
import haasImg from "@/assets/ppt/image20.jpg";
import feelerImg from "@/assets/ppt/image21.jpg";
// Slide 8 — Press Tool
import pressToolAssemblyImg from "@/assets/ppt/image40.png";
// Slide 9 — Transfer Die
import transferDie1Img from "@/assets/ppt/image41.jpg";
import transferDie2Img from "@/assets/ppt/image47.jpg";
import transferDie3Img from "@/assets/ppt/image42.jpg";
import transferDie4Img from "@/assets/ppt/image43.jpg";
import transferDie5Img from "@/assets/ppt/image44.jpg";
import transferDie6Img from "@/assets/ppt/image45.jpg";
import transferDie7Img from "@/assets/ppt/image46.jpg";
// Slide 10 — Plate Type Dies
import plateDie1Img from "@/assets/ppt/image53.jpg";
import plateDie2Img from "@/assets/ppt/image55.jpg";
import plateDie3Img from "@/assets/ppt/image48.jpg";
import plateDie4Img from "@/assets/ppt/image49.jpg";
import plateDie5Img from "@/assets/ppt/image50.png";
import plateDie6Img from "@/assets/ppt/image51.jpg";
import plateDie7Img from "@/assets/ppt/image52.jpg";
import plateDiePhysical1Img from "@/assets/ppt/image54.jpg";
import plateDiePhysical2Img from "@/assets/ppt/image56.jpg";
import plateDiePhysical3Img from "@/assets/ppt/image57.jpg";
import plateDiePhysical4Img from "@/assets/ppt/image58.jpg";
// Slide 11 — Trial Press
import trialPressImg from "@/assets/ppt/image60.jpg";
import trialPressActionImg from "@/assets/ppt/image61.jpg";
import trialPress3Img from "@/assets/ppt/image62.jpg";

/* ─────────────────── helpers ─────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};
const fd = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d },
});

/* ─────────────────── static data ─────────────────── */
const grillMeshSpecs = [
  { label: "Part Name", value: "Grille Mesh" },
  { label: "Material", value: "ABS" },
  { label: "Shrink", value: "0.55%" },
  { label: "Press", value: "3,300 T" },
  { label: "Weight", value: "47 / 300 Lbs." },
];
const motorHousingSpecs = [
  { label: "Material", value: "PA66 + 30GF" },
  { label: "Cavity", value: "2 Cavity" },
  { label: "Mold Size", value: "550 × 617 × 900 mm" },
  { label: "Mold Weight", value: "1,312 kg" },
];
const feelerSpecs = [
  { no: "1", desc: "Travel", value: "1020 × 520 × 505 mm" },
  { no: "2", desc: "Table Size", value: "1300 × 550 mm" },
  { no: "3", desc: "Carrying Capacity", value: "1,200 Kgs" },
  { no: "4", desc: "T-Slot Width", value: "16 mm" },
  { no: "5", desc: "Tool Type", value: "BT-50" },
  { no: "6", desc: "Spindle Speed", value: "12,000 rpm" },
  { no: "7", desc: "Max. Feed", value: "25,000 /min" },
  { no: "8", desc: "Spindle Motor", value: "30 HP" },
  { no: "9", desc: "Tool Changer", value: "30 + 1" },
  { no: "10", desc: "Air Pressure", value: "6.9 Bar" },
  { no: "11", desc: "Controller", value: "HAAS" },
  { no: "12", desc: "Coolant Tank", value: "208 Ltrs" },
];
const haasSpecs = [
  { no: "1", desc: "Travel", value: "1016 × 660 × 685 mm" },
  { no: "2", desc: "Table Size", value: "1321 × 584 mm" },
  { no: "3", desc: "Carrying Capacity", value: "1,800 Kgs" },
  { no: "4", desc: "T-Slot Width", value: "18 mm" },
  { no: "5", desc: "Tool Type", value: "BT-40" },
  { no: "6", desc: "Spindle Speed", value: "7,500 rpm" },
  { no: "7", desc: "Max. Feed", value: "48,000 /min" },
  { no: "8", desc: "Spindle Motor", value: "28 HP" },
  { no: "9", desc: "Tool Changer", value: "30 + 1" },
  { no: "10", desc: "Air Pressure", value: "6 Bar" },
  { no: "11", desc: "Controller", value: "Mazatrol" },
  { no: "12", desc: "Coolant Tank", value: "250 Ltrs" },
];
const trialPresses = [
  { capacity: "160 Ton", type: "Power Press with Cushion", bedSize: "600 × 600 mm", stroke: "300 mm", dieHeight: null },
  { capacity: "100 Ton", type: "Mechanical Press", bedSize: "1,150 × 680 mm", stroke: "200 mm", dieHeight: "360 mm" },
  { capacity: "80 Ton", type: "Hydraulic Press with Cushion", bedSize: "750 × 600 mm", stroke: "100 mm", dieHeight: null },
];
const moldflowServices = [
  "Best Gate Location Analysis", "Molding Window Analysis", "Flow Analysis",
  "Cool Analysis", "Shrinkage Analysis", "Warpage Analysis",
  "Core Deflection Analysis", "Over Molding Analysis", "Thin Wall Molding",
];
const moldflowAdvanced = [
  "Gas Assisted Injection Molding", "Injection Compression Molding",
  "Microcellular Injection Molding (MuCell)", "Compression Molding",
];
const moldflowStages = ["Part Design Phase", "Tool Design Phase", "Production Phase"];
const closingPoints = [
  { icon: Layers, title: "Domain Expertise", desc: "Decades of battle-tested experience across automotive, aerospace, and industrial sectors." },
  { icon: FlaskConical, title: "Niche Projects Showcase", desc: "Proven track record on complex, high-tolerance tooling that most vendors cannot execute." },
  { icon: Cpu, title: "In-House Technical Expertise", desc: "Fully equipped VMC machining centres and in-house trial press bays eliminate external dependency." },
  { icon: Gauge, title: "Best Cost Option", desc: "Competitive pricing without compromise — engineering efficiency drives our cost structure." },
  { icon: Shield, title: "Reliable Quality & Delivery", desc: "ISO-certified processes with strict milestone tracking and on-time delivery commitment." },
];

/* ─────────────────── tiny sub-components ─────────────────── */
const Label = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-0.5 bg-accent-orange-2" />
    <span className="section-label text-accent-orange-2">{text}</span>
    <div className="w-8 h-0.5 bg-accent-orange-2" />
  </div>
);
const LabelLight = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="w-8 h-0.5 bg-primary" />
    <span className="section-label text-primary">{text}</span>
    <div className="w-8 h-0.5 bg-primary" />
  </div>
);
const SubHead = ({ label, color = "orange" }: { label: string; color?: "orange" | "blue" }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className={`w-1 h-7 rounded-full ${color === "orange" ? "bg-accent-orange-2" : "bg-primary"}`} />
    <h3 className="font-display font-bold text-foreground text-lg">{label}</h3>
  </div>
);
const SubHeadLight = ({ label, color = "orange" }: { label: string; color?: "orange" | "blue" }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className={`w-1 h-7 rounded-full ${color === "orange" ? "bg-accent-orange-2" : "bg-primary"}`} />
    <h3 className="font-display font-bold text-primary-foreground text-lg">{label}</h3>
  </div>
);

/* ─────────────────── tab definitions ─────────────────── */
const TABS = [
  { id: "process",  icon: Activity,    label: "Project Flow",    sub: "RFQ to After Service" },
  { id: "dfm",      icon: Settings,    label: "DFM Analysis",    sub: "Design for Manufacturability" },
  { id: "grill",    icon: LayoutGrid,  label: "Grill Mesh",      sub: "Mould Design Example 01" },
  { id: "assembly", icon: Layers,      label: "Mould Assembly",  sub: "From CAD to Steel" },
  { id: "motor",    icon: Cpu,         label: "Motor Housing",   sub: "Mould Design Example 02" },
  { id: "moldflow", icon: FlaskConical,label: "Moldflow",        sub: "Simulation & Analysis" },
  { id: "vmc",      icon: Gauge,       label: "VMC Machines",    sub: "In-House Manufacturing" },
  { id: "press",    icon: Hammer,      label: "Press Tools",     sub: "Transfer & Plate Dies" },
  { id: "trial",    icon: Zap,         label: "Trial Press",     sub: "In-House Facility" },
] as const;
type TabId = (typeof TABS)[number]["id"];

/* ─────────────────── tab content panels ─────────────────── */
const TabProcess = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Project Running Process" />
      <h2 className="section-title text-foreground mb-4">DEDICATED PROJECT MANAGEMENT</h2>
      <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed">
        Effective project management is essential for program success. Our dedicated project managers bring
        extensive expertise in the mould industry, ensuring seamless execution and deep technical understanding.
        By maintaining consistent project manager assignments for our partners, we foster strong, long-term
        collaborations and a thorough grasp of program specifications and requirements.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {[
        { icon: Users,    title: "Dedicated Managers", desc: "A single, consistent project manager per program — deep ownership, zero handover friction." },
        { icon: Activity, title: "Seamless Execution",  desc: "Milestone-driven scheduling with real-time progress visibility and proactive bottleneck resolution." },
        { icon: Layers,   title: "Long-Term Partnership", desc: "We invest in understanding your specifications so every subsequent program runs faster and tighter." },
      ].map((item) => (
        <div key={item.title} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <item.icon className="w-5 h-5 text-accent-orange-2" />
          </div>
          <h3 className="font-display font-bold text-foreground text-base mb-2">{item.title}</h3>
          <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
    <div>
      <SubHead label="Complete Program Flow — RFQ to After Service" color="blue" />
      <div className="rounded-xl border border-border overflow-hidden bg-white shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={processFlowImg} alt="Batara End-to-End Molding Process Ecosystem — RFQ to After Service" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        Customer RFQ → Quote → Design → CNC → Machining → EDM → Trial → Shipment → After Service
      </p>
    </div>
  </div>
);

const TabDFM = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="DFM Analysis" />
      <h2 className="section-title text-foreground mb-4">DESIGN FOR MANUFACTURABILITY</h2>
      <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed">
        Before a single cavity is cut, we interrogate every geometry for manufacturability risk. Our DFM
        reports identify draw direction, undercut features, lifter & slider requirements, ejection
        positions, and draft angle issues — eliminating costly rework before tooling begins.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { icon: ChevronRight, title: "Draw Direction",   desc: "Tooling draw direction and customer vehicle co-ordinate analysis with draft angle verification." },
        { icon: Layers,       title: "Undercut Analysis",desc: "Complete identification of lifters and sliders required — lifter and slider counts defined upfront." },
        { icon: Settings,     title: "Ejection Strategy",desc: "Tentative ejection pin positions established; straight lifters and ejector pin counts confirmed." },
        { icon: FlaskConical, title: "Draft Analysis",   desc: "Doghouse lifter clash detection and proposal generation before any steel is cut." },
      ].map((item) => (
        <div key={item.title} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
          <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <item.icon className="w-4 h-4 text-accent-orange-2" />
          </div>
          <h3 className="font-display font-bold text-foreground text-base mb-2">{item.title}</h3>
          <p className="text-silver text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
    <div>
      <SubHead label="DFM Example — Automotive Panel Analysis" />
      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={dfmImg} alt="DFM analysis showing draw direction, undercut features, ejection and draft" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        Draw Direction · Undercut Features (Lifters 13 / Sliders 6) · Ejection Layout · Draft Analysis
      </p>
    </div>
  </div>
);

const TabGrill = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Mould Design Example 01" />
      <h2 className="section-title text-foreground mb-4">GRILL MESH MOULD DESIGN</h2>
      <p className="text-silver max-w-xl mx-auto text-[15px]">
        A complete mould design with full mechanisms — fixed half, moving half, lifter systems,
        and ejection layout — engineered to exact production specification.
      </p>
    </div>
    {/* Specs bar */}
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
      {grillMeshSpecs.map((s) => (
        <div key={s.label} className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors">
          <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-orange-2 mb-1">{s.label}</p>
          <p className="font-display font-bold text-foreground text-lg">{s.value}</p>
        </div>
      ))}
    </div>
    {/* Part + assembly */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="px-4 py-2.5 border-b border-border">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Grill Mesh — Part Model (3D CAD)</p>
        </div>
        <div className="bg-muted/20 p-3">
          <img src={grillPartModelImg} alt="Grill Mesh 3D part CAD" className="w-full h-auto block rounded" />
        </div>
      </div>
      <div className="rounded-xl border border-border overflow-hidden bg-card">
        <div className="px-4 py-2.5 border-b border-border">
          <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">Mould Assembly — Isometric View</p>
        </div>
        <div className="bg-muted/20 p-3">
          <img src={grillAssemblyImg} alt="Grill Mesh complete mould assembly isometric" className="w-full h-auto block rounded" />
        </div>
      </div>
    </div>
    {/* 3-view gallery */}
    <div>
      <SubHead label="Mould Halves — Moving & Fixed" color="blue" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { img: grillMovingHalfImg, cap: "Moving Half — Ejector System" },
          { img: grillFixedHalfImg,  cap: "Fixed Half — Complete Assembly" },
          { img: grillTopViewImg,    cap: "Moving Half — Top View" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <img src={item.img} alt={item.cap} className="w-full h-auto block" />
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {["Fixed Half", "Moving Half", "Complete Mold Mechanisms", "Lifter System", "300 Lbs. Part"].map((t) => (
        <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-accent-orange-2/30 text-accent-orange-2 bg-accent-orange-2/5">{t}</span>
      ))}
    </div>
  </div>
);

const TabAssembly = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Mould Base & Assembly" />
      <h2 className="section-title text-foreground mb-4">FROM CAD TO MACHINED STEEL</h2>
      <p className="text-silver max-w-xl mx-auto text-[15px]">
        Our mould bases are precision-machined in-house and assembled to tight tolerances — every component
        verified before first trial.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {[
        { img: mouldBaseImg,      label: "Mould Base",      caption: "Precision machined mould base — fixed half" },
        { img: mouldAssemblyImg,  label: "Mould Assembly",  caption: "Complete mould assembly with slide rail mechanism" },
        { img: mouldPhysicalImg,  label: "Physical Mould",  caption: "Assembled mould ready for trial press run" },
        { img: mouldPhysical2Img, label: "Machined Halves", caption: "Both halves after precision machining — side-by-side inspection" },
      ].map((item) => (
        <div key={item.label} className="rounded-xl border border-border overflow-hidden bg-card hover:border-primary/30 transition-colors">
          <div className="px-4 py-2.5 border-b border-border">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.label}</p>
          </div>
          <div className="bg-muted/30 p-2">
            <img src={item.img} alt={item.caption} className="w-full h-auto block rounded" />
          </div>
          <div className="px-4 py-3">
            <p className="text-silver text-xs leading-relaxed">{item.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TabMotor = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Mould Design Example 02" />
      <h2 className="section-title text-foreground mb-4">MOTOR HOUSING MOULD</h2>
      <p className="text-silver max-w-xl mx-auto text-[15px]">
        A complex 2-cavity mould in high-glass-fibre PA66+30GF — engineered for structural integrity
        and long-run production stability.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {motorHousingSpecs.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-4 hover:border-primary/30 transition-colors">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-orange-2 mb-1">{s.label}</p>
              <p className="font-display font-bold text-foreground text-lg">{s.value}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["Mould Base", "Mould Assembly", "High Glass Fibre", "Structural Grade", "2-Cavity Tool"].map((t) => (
            <span key={t} className="font-mono text-[10px] tracking-wider uppercase px-3 py-1 rounded border border-accent-orange-2/30 text-accent-orange-2 bg-accent-orange-2/5">{t}</span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          { img: motorHousingImg1, cap: "Assembly View" },
          { img: motorHousingImg2, cap: "Open View" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-3 py-2 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <img src={item.img} alt={item.cap} className="w-full h-auto block" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TabMoldflow = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Simulation" />
      <h2 className="section-title text-foreground mb-4">MOLDFLOW ANALYSIS SUPPORT</h2>
      <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed">
        We simulate plastic flow before steel is cut. Our Moldflow analysis predicts fill imbalances,
        pressure drops, weld line locations, cooling time requirements, and warpage — giving you a
        validated tool design before any hard tooling spend.
      </p>
    </div>
    {/* Services overview */}
    <div>
      <SubHead label="Moldflow Services — Complete Capability Overview" color="blue" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-accent-orange-2" />
            <h4 className="font-display font-bold text-foreground text-base">Moldflow Services</h4>
          </div>
          <ul className="space-y-2">
            {moldflowServices.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-silver">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-orange-2 shrink-0 mt-0.5" />{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-accent-orange-2" />
            <h4 className="font-display font-bold text-foreground text-base">Advanced Simulations</h4>
          </div>
          <ul className="space-y-2">
            {moldflowAdvanced.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm text-silver">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-orange-2 shrink-0 mt-0.5" />{s}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <div className="flex items-center gap-2 mb-3">
              <RefreshCw className="w-4 h-4 text-accent-orange-2" />
              <h4 className="font-display font-bold text-foreground text-base">Service Stages</h4>
            </div>
            <ul className="space-y-2">
              {moldflowStages.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-silver">
                  <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />{s}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl border border-border overflow-hidden bg-white shadow-[0_0_20px_hsl(var(--primary)/0.06)]">
          <img src={moldflowServicesImg} alt="Moldflow services list" className="w-full h-auto block" />
        </div>
      </div>
    </div>
    {/* Results */}
    <div>
      <SubHead label="Flow & Warpage — Multi-Part Case Studies" />
      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={moldflowResultsImg} alt="Moldflow results IP, Front Door, Tail Lamp, Head Lamp" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        IP · Front Door · Tail Lamp Housing · Head Lamp Housing — Flow, Warp & Cool Analysis
      </p>
    </div>
    {/* Cooling */}
    <div>
      <SubHead label="Tool Validation — Cooling Circuit & Cycle Time Prediction" color="blue" />
      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={moldflowCoolingImg} alt="Moldflow cooling and cycle time" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        Cavity Cooling · Core Cooling · Total Cycle: 8s + 15s + 22s + 15s = 60s
      </p>
    </div>
    {/* Gas assist */}
    <div>
      <SubHead label="Advanced — Gas Assisted Injection Molding Analysis" />
      <div className="rounded-xl border border-border overflow-hidden bg-white shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={moldflowGasAssistImg} alt="Gas Assisted Injection Molding fill, volume, gas core" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        Fill Animation · Gas Volume XY Plot · Gas Time · Gas Core Penetration — 33.06%
      </p>
    </div>
    {/* 2K */}
    <div>
      <SubHead label="Advanced — 2K Molding Analysis" color="blue" />
      <div className="rounded-xl border border-border overflow-hidden bg-white shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={moldflow2KImg} alt="2K Molding 1st shot 2nd shot" className="w-full h-auto block" />
      </div>
      <p className="mt-3 text-center font-mono text-[11px] tracking-[0.15em] uppercase text-silver/50">
        2K Molding — 1st Shot & 2nd Shot Part Simulation
      </p>
    </div>
  </div>
);

const MachineTable = ({ rows }: { rows: typeof feelerSpecs }) => (
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-border">
        <th className="px-4 py-2.5 font-mono text-[10px] tracking-wider uppercase text-accent-orange-2 text-left w-8">No.</th>
        <th className="px-4 py-2.5 font-mono text-[10px] tracking-wider uppercase text-accent-orange-2 text-left">Spec</th>
        <th className="px-4 py-2.5 font-mono text-[10px] tracking-wider uppercase text-accent-orange-2 text-right">Value</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row, i) => (
        <tr key={row.no} className={`border-t border-border/50 ${i % 2 === 0 ? "bg-muted/20" : ""}`}>
          <td className="px-4 py-2.5 font-mono text-[11px] text-accent-orange-2">{row.no}</td>
          <td className="px-4 py-2.5 text-silver text-[13px]">{row.desc}</td>
          <td className="px-4 py-2.5 font-display font-semibold text-foreground text-[13px] text-right">{row.value}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const TabVMC = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="In-House Manufacturing" />
      <h2 className="section-title text-foreground mb-4">VMC MACHINE CAPABILITIES</h2>
      <p className="text-silver max-w-2xl mx-auto text-[15px]">
        Our in-house Vertical Machining Centres eliminate third-party dependency for cavity and core
        machining — delivering speed, accuracy, and complete process control.
      </p>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* FEELER */}
      <div>
        <div className="rounded-xl border border-border overflow-hidden mb-4 bg-card flex items-center justify-center p-6 min-h-[220px]">
          <img src={feelerImg} alt="FEELER 40(A) VMC Machine" className="max-h-52 w-auto object-contain" />
        </div>
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="px-6 py-4 border-b border-border flex items-center gap-3">
            <h3 className="font-display font-bold text-foreground text-lg">FEELER 40 (A)</h3>
            <span className="ml-auto font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">VMC Machine</span>
          </div>
          <div className="p-2"><MachineTable rows={feelerSpecs} /></div>
        </div>
      </div>
      {/* HAAS */}
      <div>
        <div className="rounded-xl border border-border overflow-hidden mb-4 bg-card flex items-center justify-center p-6 min-h-[220px]">
          <img src={haasImg} alt="HAAS V3YT VMC Machine" className="max-h-52 w-auto object-contain" />
        </div>
        <div className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="px-6 py-4 border-b border-border flex items-center gap-3">
            <h3 className="font-display font-bold text-foreground text-lg">HAAS V3YT</h3>
            <span className="ml-auto font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">VMC Machine</span>
          </div>
          <div className="p-2"><MachineTable rows={haasSpecs} /></div>
        </div>
      </div>
    </div>
  </div>
);

const TabPress = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Solutions in Action" />
      <h2 className="section-title text-foreground mb-4">PRESS TOOL DESIGN</h2>
      <p className="text-silver max-w-2xl mx-auto text-[15px]">
        From single-stage pierce dies to complete transfer die sequences for automotive body panels —
        our press tool engineering covers the full spectrum of sheet metal forming complexity.
      </p>
    </div>
    {/* Exploded */}
    <div>
      <SubHead label="Complete Press Tool Assembly — Exploded View" color="blue" />
      <div className="rounded-xl border border-border overflow-hidden bg-card flex items-center justify-center p-6 md:p-10 shadow-[0_0_30px_hsl(var(--primary)/0.06)]">
        <img src={pressToolAssemblyImg} alt="Exploded press tool assembly" className="max-h-[380px] w-auto object-contain" />
      </div>
    </div>
    {/* Transfer die */}
    <div>
      <SubHead label="Transfer Die — Automotive Panels" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        {[
          { img: transferDie1Img, cap: "Transfer Die — Top Half" },
          { img: transferDie2Img, cap: "Transfer Die — Full Assembly" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-3 bg-muted/20">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {[
          { img: transferDie3Img, cap: "Transfer Die — Isometric" },
          { img: transferDie4Img, cap: "Transfer Die — Open Top" },
          { img: transferDie5Img, cap: "Forming Die Assembly" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-3 py-2 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-2 bg-muted/20 min-h-[140px] flex items-center justify-center">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {[
          { img: transferDie6Img, cap: "Bending Die — Labelled Assembly" },
          { img: transferDie7Img, cap: "Progressive Transfer Die" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-3 bg-muted/20">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      {/* Stage badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { no: "01", label: "Draw Die",     desc: "Initial forming with controlled material flow." },
          { no: "02", label: "Trim Die",     desc: "Precision trimming to exact part boundaries." },
          { no: "03", label: "Forming Die",  desc: "Complex geometries with tight tolerances." },
          { no: "04", label: "Restrike Die", desc: "Springback correction — dimensional lock-in." },
        ].map((s, i) => (
          <div key={s.label} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors relative">
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2 mb-2">Stage {s.no}</div>
            <h4 className="font-display font-bold text-foreground text-base mb-1">{s.label}</h4>
            <p className="text-silver text-sm">{s.desc}</p>
            {i < 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-5 -translate-y-1/2 w-4 h-4 text-silver/30" />}
          </div>
        ))}
      </div>
    </div>
    {/* Plate dies */}
    <div>
      <SubHead label="Plate Type Dies — Designed & Manufactured" color="blue" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
        {[
          { img: plateDie1Img, cap: "Crash Form Die — Machined" },
          { img: plateDie2Img, cap: "Pierce Die — Open View" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-3 bg-muted/20">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { img: plateDie3Img, cap: "Plate Die — Fixed Half" },
          { img: plateDie4Img, cap: "Die with Feed System" },
          { img: plateDie5Img, cap: "4-Station Plate Die" },
          { img: plateDie6Img, cap: "Die Assembly — Open" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-3 py-2 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.12em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-2 bg-muted/20 min-h-[120px] flex items-center justify-center">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {[
          { img: plateDie7Img,         cap: "Die — Colorful Internal Components" },
          { img: plateDiePhysical1Img, cap: "Physical Plate Die Halves — Machined" },
        ].map((item) => (
          <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
            <div className="px-4 py-2.5 border-b border-border">
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
            </div>
            <div className="p-3 bg-muted/20">
              <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
            </div>
          </div>
        ))}
      </div>
      {/* Shop floor photos */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-5 bg-accent-orange-2 rounded-full" />
          <h4 className="font-display font-bold text-foreground text-base">Shop Floor — Manufactured Dies</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { img: plateDiePhysical2Img, cap: "Press Tool — Assembled Pair" },
            { img: plateDiePhysical3Img, cap: "Die — Top View with Punch Holders" },
            { img: plateDiePhysical4Img, cap: "Die — Assembled with Cam Units" },
          ].map((item) => (
            <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
              <div className="px-4 py-2.5 border-b border-border">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
              </div>
              <div className="p-3 bg-muted/20">
                <img src={item.img} alt={item.cap} className="w-full h-auto block rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Die type badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Pierce Die",    desc: "High-precision hole piercing with engineered clearances." },
          { label: "Crash Form Die",desc: "Rapid flanges and complex bends in a single stroke." },
          { label: "Forming Die",   desc: "Multi-stage forming for complex panel geometries." },
          { label: "Piercing Die",  desc: "Simultaneous multi-hole piercing for high-volume panels." },
        ].map((d) => (
          <div key={d.label} className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
            <Hammer className="w-5 h-5 text-accent-orange-2 mb-3" />
            <h4 className="font-display font-bold text-foreground text-base mb-1">{d.label}</h4>
            <p className="text-silver text-sm">{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TabTrial = () => (
  <div className="space-y-10">
    <div className="text-center">
      <Label text="Trial Press Facility" />
      <h2 className="section-title text-foreground mb-4">IN-HOUSE TRIAL PRESS DETAILS</h2>
      <p className="text-silver max-w-xl mx-auto text-[15px]">
        Tools are trialled on our own press floor before customer handover — ensuring first-hit accuracy
        and reducing your validation cycle.
      </p>
    </div>
    {/* Photos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {[
        { img: trialPressImg,       cap: "Trial Press Machine" },
        { img: trialPressActionImg, cap: "Press Trial — In Action" },
        { img: trialPress3Img,      cap: "80 Ton Hydraulic Press" },
      ].map((item) => (
        <div key={item.cap} className="rounded-xl border border-border overflow-hidden bg-card">
          <div className="px-4 py-2.5 border-b border-border">
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent-orange-2">{item.cap}</p>
          </div>
          <div className="bg-muted/20 flex items-center justify-center p-5 min-h-[260px]">
            <img src={item.img} alt={item.cap} className="max-h-60 w-auto object-contain" />
          </div>
        </div>
      ))}
    </div>
    {/* Spec cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {trialPresses.map((press) => (
        <div key={press.capacity} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
            <Gauge className="w-6 h-6 text-accent-orange-2" />
          </div>
          <div className="font-display font-extrabold text-3xl text-foreground mb-1">{press.capacity}</div>
          <div className="font-mono text-[11px] tracking-wider uppercase text-accent-orange-2 mb-4">{press.type}</div>
          <div className="space-y-2 border-t border-border pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-silver">Bed Size</span>
              <span className="font-semibold text-foreground">{press.bedSize}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-silver">Stroke</span>
              <span className="font-semibold text-foreground">{press.stroke}</span>
            </div>
            {press.dieHeight && (
              <div className="flex justify-between text-sm">
                <span className="text-silver">Die Height</span>
                <span className="font-semibold text-foreground">{press.dieHeight}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─────────────────── content map ─────────────────── */
const CONTENT: Record<TabId, React.ReactNode> = {
  process:  <TabProcess />,
  dfm:      <TabDFM />,
  grill:    <TabGrill />,
  assembly: <TabAssembly />,
  motor:    <TabMotor />,
  moldflow: <TabMoldflow />,
  vmc:      <TabVMC />,
  press:    <TabPress />,
  trial:    <TabTrial />,
};

/* ─────────────────── main page ─────────────────── */
const MouldDesign = () => {
  const [activeTab, setActiveTab] = useState<TabId>("process");
  const navigate = useNavigate();

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

      {/* ── Hero ── */}
      <section className="relative z-[1] pt-28 md:pt-32 pb-16 md:pb-20 px-4 sm:px-8 md:px-16">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-primary" />
              <span className="section-label text-accent-orange-2">Plastic Mould Design</span>
              <div className="w-8 h-0.5 bg-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              PRECISION TOOLING FROM <br className="hidden md:block" /> CONCEPT TO PRODUCTION
            </h1>
            <p className="text-silver max-w-2xl mx-auto text-[15px] leading-relaxed mb-8">
              Our Plastic Mould Design division delivers end-to-end tooling solutions — from DFM analysis and
              complex mould design to in-house VMC machining, Moldflow validation, and full-scale trial press
              runs. Every tool we design performs exactly on your production floor.
            </p>
            <div className="inline-flex items-center gap-3 border border-primary/30 bg-primary/5 rounded-lg px-6 py-3">
              <CheckCircle2 className="w-4 h-4 text-accent-orange-2 shrink-0" />
              <p className="font-display font-bold text-foreground text-base md:text-lg">
                What We Design Digitally is Exactly What You Manufacture Physically
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Tabbed Section ── */}
      <section className="relative z-[1] py-4 pb-24 px-4 md:px-10 lg:px-16 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ── LEFT: tab nav (sticky) ── */}
            <div className="w-full lg:w-72 shrink-0 order-1 lg:order-1">
              <div className="sticky top-24">
                {/* header strip */}
                <div className="bg-accent rounded-t-2xl px-5 py-4 border-b border-primary-foreground/10">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-primary mb-0.5">Navigation</p>
                  <p className="font-display font-bold text-primary-foreground text-base">Mould Design Sections</p>
                </div>
                {/* tab list */}
                <div className="bg-accent rounded-b-2xl overflow-hidden divide-y divide-primary-foreground/8 shadow-[0_8px_32px_hsl(var(--accent)/0.4)]">
                  {TABS.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                          w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 group
                          ${isActive
                            ? "bg-primary/15 border-r-[3px] border-r-accent-orange-2"
                            : "border-r-[3px] border-r-transparent hover:bg-primary-foreground/5 hover:border-r-primary/40"}
                        `}
                      >
                        {/* icon */}
                        <div className={`
                          w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors
                          ${isActive ? "bg-accent-orange-2/20 border border-accent-orange-2/40" : "bg-primary-foreground/5 border border-primary-foreground/10 group-hover:bg-primary-foreground/10"}
                        `}>
                          <tab.icon className={`w-4 h-4 ${isActive ? "text-accent-orange-2" : "text-primary-foreground/50 group-hover:text-primary-foreground/80"}`} />
                        </div>
                        {/* text */}
                        <div className="min-w-0">
                          <p className={`font-display font-bold text-sm leading-tight ${isActive ? "text-primary-foreground" : "text-primary-foreground/60 group-hover:text-primary-foreground/90"}`}>
                            {tab.label}
                          </p>
                          <p className={`font-mono text-[10px] tracking-wide mt-0.5 truncate ${isActive ? "text-primary" : "text-primary-foreground/35 group-hover:text-primary-foreground/55"}`}>
                            {tab.sub}
                          </p>
                        </div>
                        {/* active arrow */}
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-orange-2 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {/* hint text */}
                <p className="text-center font-mono text-[10px] tracking-wider uppercase text-silver/40 mt-4">
                  Click a section to explore
                </p>
              </div>
            </div>

            {/* ── RIGHT: content panel ── */}
            <div className="flex-1 min-w-0 order-2 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-background rounded-2xl border border-border p-6 md:p-10 shadow-[0_2px_40px_hsl(var(--primary)/0.05)]"
                >
                  {CONTENT[activeTab]}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ── Why Batara ── */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12">
            <LabelLight text="Why Batara" />
            <h2 className="section-title text-primary-foreground mb-4">
              THE COMPLETE ADVANTAGE
            </h2>
            <p className="text-primary-foreground/70 max-w-xl mx-auto text-[15px]">
              We would be pleased to present a detailed demonstration. Here is why leading OEMs and Tier-1
              manufacturers choose to partner with us.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {closingPoints.map((point, i) => (
              <motion.div
                key={point.title}
                {...fd(i * 0.08)}
                className="bg-accent/60 border border-primary-foreground/10 rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <point.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <h3 className="font-display font-bold text-primary-foreground text-lg mb-2">{point.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative z-[1] py-14 md:py-20 px-4 sm:px-8 md:px-16">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
          <h2 className="section-title text-foreground mb-4">
            Ready for a Detailed Presentation & Demo?
          </h2>
          <p className="text-silver text-[15px] mb-8">
            Submit your mould design specifications or initiate a project conversation directly with our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleContactClick}
              className="flex items-center gap-2 px-8 py-3 bg-primary rounded text-primary-foreground font-semibold tracking-wide hover:bg-accent-orange-2 hover:-translate-y-px hover:shadow-[0_6px_20px_hsl(0_78%_48%/0.35)] transition-all"
            >
              Request a Presentation
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/918105111599"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 border border-border rounded bg-card text-foreground font-medium tracking-wide hover:bg-muted hover:border-primary/30 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-500">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              WhatsApp Our Engineers
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default MouldDesign;
