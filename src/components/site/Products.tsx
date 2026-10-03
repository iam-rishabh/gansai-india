import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import candles from "@/assets/product-candles.jpg";
import materials from "@/assets/product-materials.jpg";
import diy from "@/assets/product-diy.jpg";

// Updated data structure without eyebrow/size, using category labels
const items = [
  {
    img: candles,
    category: "MANUFACTURING",
    title: "Premium Candles",
    desc: "Pillar, votive, tealight, container, scented, decorative, soy and beeswax — produced to exacting standards for global distribution.",
    tags: ["Pillar", "Votive", "Tealight", "Soy", "Beeswax", "Scented"],
    cta: "Explore Collection",
  },
  {
    img: materials,
    category: "SUPPLY CHAIN",
    title: "Colors, Wax & Supplies",
    desc: "Cosmetic‑grade dyes, pigments, paraffin & soy wax, cotton wicks, fragrance oils, molds and accessories for professional makers.",
    tags: ["Wax", "Wicks", "Fragrances", "Dyes", "Molds"],
    cta: "Request Samples",
  },
  {
    img: diy,
    category: "RETAIL",
    title: "DIY Candle Kits",
    desc: "Thoughtfully assembled kits from beginner to professional, packaged for gifting and retail‑ready shelves.",
    tags: ["Beginner", "Pro", "Gift sets"],
    cta: "Shop Kits",
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-background">
      <div className="container-page">
        {/* Header block – mirrors the editorial style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium mb-6">
              Featured Capabilities
            </p>
            <h2 className="text-5xl sm:text-7xl leading-[0.9] tracking-tighter text-white font-display">
              Precision at <br />
              <span className="text-primary italic font-light">Industrial</span> Scale.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest font-medium inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
          >
            Request Full Catalogue{' '}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Item list – asymmetric two‑column layout per item */}
        <div className="flex flex-col gap-24">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group grid md:grid-cols-12 gap-12 items-center"
            >
              {/* Left side – textual info */}
              <div className="md:col-span-5 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-mono text-primary font-bold">0{i + 1}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">{p.category}</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-display text-white tracking-tighter mb-6 group-hover:text-primary transition-colors duration-500">
                  {p.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed font-light mb-8 max-w-md">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 text-white/40">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white group/btn"
                >
                  {p.cta}{' '}
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                </a>
              </div>

              {/* Right side – high‑impact visual */}
              <div className="md:col-span-7 order-1 md:order-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 group-hover:border-primary/30 transition-colors duration-500">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
