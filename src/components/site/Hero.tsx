import { motion } from "framer-motion";
import { ArrowRight, MapPin, ShieldCheck, Factory } from "lucide-react";
import heroImg from "@/assets/hero-candles.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium candle glowing in warm light"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Ambient glow */}
      <div className="absolute -z-10 top-1/3 right-[15%] h-[28rem] w-[28rem] glow-ember flame-flicker rounded-full blur-2xl" />
      <div className="absolute -z-10 bottom-1/4 left-[10%] h-72 w-72 glow-ember float-slow rounded-full blur-3xl opacity-60" />

      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-foreground/70">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Premium Candle Producers · Gujarat, India
          </div>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Illuminating <em className="not-italic text-primary">excellence</em>,
            crafted at scale.
          </h1>

          <p className="mt-6 text-lg text-foreground/75 max-w-xl text-balance">
            Premium candles and complete candle-making supplies from cumulative
            State of the Art manufacturing facilities producing 500 tonnes per month for partners
            across India.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
            >
              Explore Our Collection <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card/60 backdrop-blur px-7 py-3.5 text-sm font-medium hover:border-foreground/40 transition-all"
            >
              Get Wholesale Quote
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-foreground/70">
            <Badge icon={<Factory className="h-4 w-4" />} text="500 T / month capacity" />
            <Badge icon={<MapPin className="h-4 w-4" />} text="Made in Gujarat, India" />
            <Badge icon={<ShieldCheck className="h-4 w-4" />} text="ISO-grade quality" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-primary">{icon}</span>
      {text}
    </span>
  );
}
