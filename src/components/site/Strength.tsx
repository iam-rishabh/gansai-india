import { motion } from "framer-motion";
import { Counter } from "./Counter";
import facility from "@/assets/facility.jpg";
import { Gauge, Layers, ShieldCheck, Truck } from "lucide-react";

const stats = [
  { value: 100000, suffix: "+", label: "items shipped", icon: Truck, size: "small" },
  { value: 10000, suffix: "+", label: "Sq ft facility", icon: Layers, size: "large" },
  { value: 100, suffix: "%", label: "QC tested batches", icon: ShieldCheck, size: "small" },
  { value: 30, suffix: "+", label: "Tonnes / month", icon: Gauge, size: "medium" },
];

export function Strength() {
  return (
    <section id="strength" className="relative py-32 bg-background overflow-hidden">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Header: Asymmetric Positioning */}
          <div className="lg:col-span-5 sticky top-32">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium mb-6">
              Infrastructure & Scale
            </p>
            <h2 className="text-5xl sm:text-7xl leading-[0.9] tracking-tighter text-white font-display">
              Engineered for <br />
              <span className="text-primary italic font-light">scale</span>. <br />
              Crafted with care.
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-md font-light">
              A modern, shared facility purpose-built for consistency at volume,
              without compromising the artisanal soul of every product that leaves our floor.
            </p>
          </div>

          {/* The Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-4 grid-rows-3 gap-4 h-full">

            {/* Large Feature Cell: Facility Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-4 row-span-2 relative rounded-3xl overflow-hidden group border border-white/10"
            >
              <img
                src={facility}
                alt="Gansai India candle manufacturing facility"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Location: Gujarat, India</p>
                <p className="font-display text-3xl text-white">Smart Manufacturing Hub</p>
              </div>
            </motion.div>

            {/* Metric Cells - Varying Sizes */}
            {stats.filter(s => s.size === 'medium').map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="col-span-2 row-span-1 rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-default group"
              >
                <div className="flex justify-between items-start">
                  <s.icon className="h-5 w-5 text-primary" />
                  <span className="text-[10px] uppercase tracking-widest text-white/30">Metric</span>
                </div>
                <div className="mt-4 font-display text-5xl text-white group-hover:text-primary transition-colors">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.label}</p>
              </motion.div>
            ))}

            {stats.filter(s => s.size === 'small').map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i+1) * 0.1 }}
                className="col-span-1 row-span-1 rounded-3xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all cursor-default group"
              >
                <s.icon className="h-4 w-4 text-primary mb-4" />
                <div className="font-display text-2xl text-white group-hover:text-primary transition-colors">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-tighter text-white/50 leading-tight">{s.label}</p>
              </motion.div>
            ))}

            {/* Small spacer or extra metric for layout balance */}
            <div className="col-span-1 row-span-1 rounded-3xl bg-primary/10 border border-primary/20 p-6 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
