import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Batara Techno Solutions transformed our concept into a production-ready product in record time. Their E2E approach eliminated the typical design-manufacturing disconnect.",
    name: "Engineering Director",
    company: "Tier-1 Automotive OEM",
  },
  {
    quote:
      "The transparency in their process — from milestone tracking to bottleneck reporting — gave us complete confidence. ISO-certified quality delivered on time, every time.",
    name: "VP of Product Development",
    company: "Aerospace & Defense Client",
  },
  {
    quote:
      "What sets them apart is their ability to deliver multiple concept designs and iterate rapidly. The final manufactured product matched the design specifications perfectly.",
    name: "Head of Manufacturing",
    company: "Medical Devices Company",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative z-[1] py-16 md:py-24 px-4 sm:px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-accent-orange-2">
              Testimonials
            </span>
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="section-title text-foreground">WHAT OUR CLIENTS SAY</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-silver text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <div className="font-display font-bold text-foreground text-sm">{t.name}</div>
                <div className="font-mono text-[10px] text-accent tracking-wider uppercase mt-1">{t.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
