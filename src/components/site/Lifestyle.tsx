import { motion } from "framer-motion";
import l1 from "@/assets/lifestyle-1.jpg";
import l2 from "@/assets/lifestyle-2.jpg";
import l3 from "@/assets/lifestyle-3.jpg";

const shots = [
  { img: l1, label: "At home", caption: "Warm evenings, quietly lit.", offset: "translate-y-0" },
  { img: l2, label: "Events", caption: "From intimate dinners to grand celebrations.", offset: "translate-y-12" },
  { img: l3, label: "Spaces", caption: "Sculptural objects that finish a room.", offset: "translate-y-0" },
];

export function Lifestyle() {
  return (
    <section className="py-32 bg-background">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-32">
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-medium mb-6">
              In the Wild
            </p>
            <h2 className="text-5xl sm:text-7xl leading-[0.9] tracking-tighter text-white font-display">
              Made in our <br />
              <span className="text-primary italic font-light">facility</span>. <br />
              Lived with everywhere.
            </h2>
            <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-md font-light">
              Our products transition from the precision of the factory floor to the intimacy of your home, creating atmosphere and emotion.
            </p>
          </div>

          <div className="lg:col-span-7 grid md:grid-cols-2 gap-8">
            {shots.map((s, i) => (
              <motion.figure
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 ${s.offset}`}
              >
                <div className={`aspect-[4/5] overflow-hidden ${i === 1 ? 'aspect-[3/4]' : ''}`}>
                  <img
                    src={s.img}
                    alt={s.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-8 text-white">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">{s.label}</p>
                  <p className="font-display text-2xl">{s.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
