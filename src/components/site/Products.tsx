import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import candles from "@/assets/product-candles.jpg";
import materials from "@/assets/product-materials.jpg";
import diy from "@/assets/product-diy.jpg";

const items = [
  {
    img: candles,
    eyebrow: "01 — Finished candles",
    title: "Premium Candles",
    desc: "Pillar, votive, tealight, container, scented, decorative, soy and beeswax — produced to exacting standards.",
    tags: ["Pillar", "Votive", "Tealight", "Soy", "Beeswax", "Scented"],
    cta: "Browse the catalogue",
  },
  {
    img: materials,
    eyebrow: "02 — Raw materials",
    title: "Colors, Wax & Supplies",
    desc: "Cosmetic-grade dyes, pigments, paraffin & soy wax, cotton wicks, fragrance oils, molds and accessories.",
    tags: ["Wax", "Wicks", "Fragrances", "Dyes", "Molds"],
    cta: "Request samples",
  },
  {
    img: diy,
    eyebrow: "03 — Make at home",
    title: "DIY Candle Kits",
    desc: "Thoughtfully assembled kits from beginner to professional, packaged for gifting and retail-ready shelves.",
    tags: ["Beginner", "Pro", "Gift sets"],
    cta: "Shop kits",
  },
];

export function Products() {
  return (
    <section id="products" className="py-28">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Signature offering</p>
            <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
              Three pillars. One uncompromising standard.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium inline-flex items-center gap-1.5 text-foreground/80 hover:text-primary transition-colors"
          >
            Request a full catalogue <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute top-5 left-5 text-background text-xs uppercase tracking-[0.2em] opacity-90">
                  {p.eyebrow}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                  <h3 className="font-display text-3xl">{p.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-foreground/70 text-[15px] leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary group/btn"
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
