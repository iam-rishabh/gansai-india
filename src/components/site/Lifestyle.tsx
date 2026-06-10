import { motion } from "framer-motion";
import l1 from "@/assets/lifestyle-1.jpg";
import l2 from "@/assets/lifestyle-2.jpg";
import l3 from "@/assets/lifestyle-3.jpg";

const shots = [
  { img: l1, label: "At home", caption: "Warm evenings, quietly lit." },
  { img: l2, label: "Events", caption: "From intimate dinners to grand celebrations." },
  { img: l3, label: "Spaces", caption: "Sculptural objects that finish a room." },
];

export function Lifestyle() {
  return (
    <section className="py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">In the wild</p>
          <h2 className="mt-4 text-4xl sm:text-5xl text-balance">
            Made in our facility. Lived with everywhere.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <motion.figure
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent text-background">
                <p className="text-xs uppercase tracking-[0.2em] opacity-80">{s.label}</p>
                <p className="font-display text-xl mt-1">{s.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
