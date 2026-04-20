import { motion } from "framer-motion";
import { ArrowRight, Car, Plane, Cog, Cpu, Zap, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Automotive",
    description: "Vehicle module design, bus, coach & trailer engineering",
    icon: Car,
    bg: "/Automotive.avif",
    accent: "hsl(220 58% 22%)",
    href: "/industries#automotive",
  },
  {
    name: "Aerospace",
    description: "Stress analysis, EBOM-to-MBOM & manufacturing readiness",
    icon: Plane,
    bg: "/Aerospace.avif",
    accent: "hsl(214 72% 37%)",
    href: "/industries#aerospace",
  },
  {
    name: "Industrial Machinery",
    description: "Custom equipment & tooling for complex industrial verticals",
    icon: Cog,
    bg: "/Industrial-Machinery.avif",
    accent: "hsl(214 72% 45%)",
    href: "/industries#industrial-machinery",
  },
  {
    name: "Industrial Automation",
    description:
      "PLC solutions, brownfield revamps & smart factory integration",
    icon: Cpu,
    bg: "/Industrial-Automation.avif",
    accent: "hsl(220 58% 30%)",
    href: "/industries#industrial-automation",
  },
  {
    name: "Electro-Mechanical",
    description: "Integrated systems bridging structural & electronic control",
    icon: Zap,
    bg: "/Electro-Mechanical.avif",
    accent: "hsl(214 72% 40%)",
    href: "/industries#electro-mechanical",
  },
  {
    name: "Heavy Machinery",
    description:
      "Structural design for off-highway & skid-mounted plant assets",
    icon: Truck,
    bg: "/Heavy-Machinery.avif",
    accent: "hsl(220 58% 22%)",
    href: "/industries#heavy-machinery",
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative z-[1] pt-12 md:pt-16 pb-16 md:pb-24 px-4 sm:px-8 md:px-16 bg-accent text-primary-foreground"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-primary" />
            <span className="section-label text-primary">Sectors We Serve</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="section-title text-primary-foreground">
              INDUSTRIES WE SERVE
            </h2>
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-white text-sm font-semibold hover:gap-3 transition-all shrink-0"
            >
              All industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <Link
                to={ind.href}
                className="group relative flex flex-col justify-end min-h-[160px] sm:min-h-[180px] lg:min-h-[190px] rounded-xl overflow-hidden border border-white/10 hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${ind.bg})` }}
                />

                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/15" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to top, ${ind.accent}cc, ${ind.accent}20 55%, transparent)`,
                  }}
                />

                {/* Icon top-right */}
                <div
                  className="absolute top-3 right-3 w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${ind.accent}33`,
                    border: `1px solid ${ind.accent}60`,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <ind.icon className="w-4 h-4 text-white" />
                </div>

                {/* Text content */}
                <div className="relative z-10 p-3 sm:p-4">
                  <h3 className="font-display font-bold text-white text-sm sm:text-base lg:text-[15px] leading-tight mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-white/50 leading-snug line-clamp-2">
                    {ind.description}
                  </p>
                  <div className="flex items-center gap-1.5 mt-3 text-[12px] font-semibold text-white/50 group-hover:text-white opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
