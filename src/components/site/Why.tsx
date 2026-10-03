import { motion } from "framer-motion";
import { Award, Boxes, Leaf, Sparkles, Truck, Wallet, Workflow, Globe2 } from "lucide-react";

const items = [
  { icon: Award, t: "Consistent Quality", d: "Every batch QC-tested for burn time, scent throw and finish." },
  { icon: Boxes, t: "Massive Scale", d: "30 tonnes monthly with reliable lead times you can plan around." },
  { icon: Wallet, t: "Competitive Pricing", d: "Direct-from-factory pricing for wholesalers and exporters." },
  { icon: Workflow, t: "Custom Formulations", d: "Private-label, fragrance blends and bespoke molds." },
  { icon: Leaf, t: "Eco-conscious Options", d: "Soy, beeswax and recyclable packaging programs." },
  { icon: Truck, t: "Fast Turnaround", d: "Streamlined production keeps your shelves stocked." },
  { icon: Globe2, t: "Pan-India & Global", d: "Domestic distribution and export-ready documentation." },
  { icon: Sparkles, t: "Innovation Lab", d: "New formats, scents and finishes developed continuously." },
];

export function Why() {
  return (
    <section id="why" className="py-32 bg-background">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium mb-6">
              The Gansai Edge
            </p>
            <h2 className="text-5xl sm:text-7xl leading-[0.9] tracking-tighter text-white font-display">
              Reliability of <br />
              <span className="text-primary italic font-light">scale</span>, <br />
              soul of a craft house.
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-md font-light">
              We bridge the gap between artisanal precision and industrial capacity,
              ensuring that every tonne produced carries the same soul as a single handmade candle.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {items.map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute -right-4 -bottom-4 h-24 w-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10">
                  <span className="inline-grid place-items-center h-10 w-10 rounded-lg bg-white/10 text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-medium text-white group-hover:text-primary transition-colors duration-500">{b.t}</h3>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed font-light">{b.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
