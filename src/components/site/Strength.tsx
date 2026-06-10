import { motion } from "framer-motion";
import { Counter } from "./Counter";
import facility from "@/assets/facility.jpg";
import { Gauge, Layers, ShieldCheck, Truck } from "lucide-react";

const stats = [
  { value: 100000, suffix: "+", label: "items shipped", icon: Truck },
  { value: 50000, suffix: "+", label: "Sq ft facility", icon: Layers },
  { value: 100, suffix: "%", label: "QC tested batches", icon: ShieldCheck },
  { value: 500, suffix: "+", label: "Tonnes / month", icon: Gauge }
  ,
];

export function Strength() {
  return (
    <section id="strength" className="relative py-28 bg-secondary/50">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Manufacturing strength</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            Engineered for scale. <em className="not-italic text-primary">Crafted</em> with care.
          </h2>
          <p className="mt-5 text-foreground/70 text-lg">
            A modern, shared facility purpose-built for consistency at volume, 
            without compromising the artisanal soul of every product that leaves
            our floor.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
          >
            <img
              src={facility}
              alt="Gansai India candle manufacturing facility"
              className="w-full h-[28rem] object-cover"
              loading="lazy"
              width={1600}
              height={1000}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-background">
              <p className="text-xs uppercase tracking-widest opacity-80">Gujarat, India</p>
              <p className="font-display text-2xl">Shared smart manufacturing</p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 hover:-translate-y-1 transition-all"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-4 font-display text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-sm text-foreground/65">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
