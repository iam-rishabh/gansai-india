import { motion } from "framer-motion";
import { Award, Boxes, Leaf, Sparkles, Truck, Wallet, Workflow, Globe2 } from "lucide-react";

const items = [
  { icon: Award, t: "Consistent Quality", d: "Every batch QC-tested for burn time, scent throw and finish." },
  { icon: Boxes, t: "Massive Scale", d: "500 tonnes monthly with reliable lead times you can plan around." },
  { icon: Wallet, t: "Competitive Pricing", d: "Direct-from-factory pricing for wholesalers and exporters." },
  { icon: Workflow, t: "Custom Formulations", d: "Private-label, fragrance blends and bespoke molds." },
  { icon: Leaf, t: "Eco-conscious Options", d: "Soy, beeswax and recyclable packaging programs." },
  { icon: Truck, t: "Fast Turnaround", d: "Streamlined production keeps your shelves stocked." },
  { icon: Globe2, t: "Pan-India & Global", d: "Domestic distribution and export-ready documentation." },
  { icon: Sparkles, t: "Innovation Lab", d: "New formats, scents and finishes developed continuously." },
];

export function Why() {
  return (
    <section id="why" className="py-28 bg-secondary/40">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Why Gansai India</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            The reliability of scale, the soul of a craft house.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {items.map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="bg-background p-7 hover:bg-card transition-colors group"
            >
              <span className="inline-grid place-items-center h-11 w-11 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <b.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium font-sans tracking-tight">{b.t}</h3>
              <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
