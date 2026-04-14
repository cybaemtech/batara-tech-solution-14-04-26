import { motion } from "framer-motion";
import { Lightbulb, Ruler, BarChart3, Cpu, Factory } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    label: "Concept Design",
    desc: "Ideation phase with multiple design concepts tailored to your requirements.",
  },
  {
    icon: Ruler,
    label: "Detailed Design",
    desc: "Precision engineering with CAD modeling, tolerancing and DFM analysis.",
  },
  { icon: BarChart3, label: "Analysis", desc: "FEA, CFD and structural simulations to validate performance." },
  { icon: Cpu, label: "Prototype", desc: "Rapid prototyping and iterative testing to perfect the product." },
  {
    icon: Factory,
    label: "Production Support",
    desc: "Full manufacturing support with quality assurance and timely delivery.",
  },
];

const EcosystemSection = () => {
  return (
    <section id="process" className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-accent-orange-2">
              Our Process
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="section-title text-foreground mb-4">
            END-TO-END <br /> ENGINEERING ECOSYSTEM
          </h2>
          <p className="text-silver max-w-xl mx-auto text-[15px] leading-relaxed">
            FINAL DESIGNED PRODUCT = MANUFACTURED PRODUCT. <br /> Our rigorous process ensures zero disconnect between
            design and production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-lg p-6 h-full hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-accent-orange-2" />
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent mb-2">
                  Step {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{step.label}</h3>
                <p className="text-silver text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 text-silver text-lg">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
