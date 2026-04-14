import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  display: string;
  numericValue: number | null;
  suffix: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    display: "20+",
    numericValue: 20,
    suffix: "+",
    label: "Years of Excellence",
    sublabel: "Industry expertise since 2004",
  },
  {
    display: "ISO",
    numericValue: null,
    suffix: "",
    label: "Certified Quality",
    sublabel: "International standards assured",
  },
  {
    display: "100%",
    numericValue: 100,
    suffix: "%",
    label: "On-Time Delivery",
    sublabel: "Zero-compromise commitment",
  },
];

const useCountUp = (target: number, duration = 1400, start = false) => {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!start) return;
    setCount(0);
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
};

const AnimatedNumber = ({
  item,
  animate,
  index,
}: {
  item: StatItem;
  animate: boolean;
  index: number;
}) => {
  const count = useCountUp(item.numericValue ?? 0, 1400 + index * 150, animate);

  if (item.numericValue === null) {
    return (
      <span className="font-display text-3xl font-black tracking-tight text-foreground leading-none">
        {item.display}
      </span>
    );
  }

  return (
    <span className="font-display text-4xl font-black tracking-tight text-foreground leading-none">
      {count}
      {item.suffix}
    </span>
  );
};

const TrustBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div
      ref={ref}
      className="relative z-[1] bg-steel border-t border-b border-border overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-accent" />

      <motion.div
        className="relative flex flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex-1 min-w-[180px] group relative flex items-center gap-4 px-8 py-5 border-r border-foreground/5 hover:bg-foreground/[0.03] transition-colors duration-300"
          >
            {/* Left accent bar */}
            <div className="w-[3px] h-8 rounded-full bg-gradient-to-b from-primary to-primary/30 shrink-0" />

            <div>
              <AnimatedNumber item={item} animate={isInView} index={index} />
              <div className="font-display text-[11px] font-semibold text-foreground/80 tracking-wide mt-[3px]">
                {item.label}
              </div>
              <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-primary/80 mt-0.5">
                {item.sublabel}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustBar;
