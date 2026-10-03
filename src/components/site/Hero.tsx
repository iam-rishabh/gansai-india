import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-candles.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 bg-background">
      <div className="container-page relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Marcus-style Minimal Intro */}
          <p className="text-[11px] uppercase tracking-[0.4em] text-white/40 font-medium mb-8">
            Premium Manufacturing & Distribution
          </p>

          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl leading-[0.9] tracking-tighter text-white text-balance mb-8">
            Designing <br />
            <span className="text-primary italic font-light">Illumination</span> <br />
            at Scale.
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mb-12">
            We build state-of-the-art candle manufacturing systems that simplify production and scale quality across India.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#products"
              className="group relative inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-4 text-sm font-bold transition-all hover:bg-primary hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-8 py-4 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              Let's Collaborate
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background: Abstract, subtle, low-contrast imagery as a backdrop texture */}
      <div className="absolute inset-0 -z-10 opacity-20 grayscale">
        <img
          src={heroImg}
          alt="Texture"
          className="h-full w-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>
    </section>
  );
}
