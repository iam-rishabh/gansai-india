import { motion } from "framer-motion";

const quotes = [
  {
    q: "Their consistency at volume is unmatched — we've scaled three SKUs into 400+ retail doors without a single quality complaint.",
    a: "Procurement Lead, Lifestyle Retailer",
  },
  {
    q: "From custom fragrance to private label packaging, the Gansai team treats our brand like their own.",
    a: "Founder, D2C Home Brand",
  },
  {
    q: "Fast turnarounds and export-ready documentation made our Middle East launch effortless.",
    a: "Director, Exporter",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-foreground text-background">
      <div className="container-page">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Trusted by</p>
        <h2 className="mt-4 text-4xl sm:text-5xl text-background text-balance max-w-3xl">
          Retailers, exporters and creators who build with us.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-3xl p-8 border border-background/10 bg-background/[0.04] backdrop-blur"
            >
              <p className="text-background/90 text-lg leading-relaxed font-display">
                “{q.q}”
              </p>
              <footer className="mt-6 text-xs uppercase tracking-[0.2em] text-background/60">
                — {q.a}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-6 opacity-60">
          {["Lumière", "Hearth&Co", "Sereno", "Maison Glow", "Ember+Oak"].map((b) => (
            <div
              key={b}
              className="font-display text-xl text-center text-background/70 border border-background/10 rounded-xl py-4"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
