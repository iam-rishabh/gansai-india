import { Flame, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logoD.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 pt-20 pb-10">
      <div className="container-page">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2 max-w-md">
            <div className="flex items-center gap-3 group">
  <img
    src={logo}           // same logo variable used in header
    alt="Gansai India"
    width={48}
    height={48}
    className="h-10 w-10 object-contain"
  />
  <span className="font-brand text-3xl leading-none tracking-wide text-white">
    GANSAI INDIA
  </span>
</div>
            <p className="mt-5 text-sm leading-relaxed text-background/65">
              A modern candle manufacturing company based in Gujarat, India.
              Premium candles, colors, and more delivered at scale,
              crafted with care.
            </p>
            {/* <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center h-9 w-9 rounded-full border border-background/15 hover:bg-primary hover:border-primary hover:text-primary-foreground transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["Home", "#home"],
                ["Manufacturing", "#strength"],
                ["Products", "#products"],
                ["Why Us", "#why"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-primary transition">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-background/50">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>Plot 280, Ward 10/A, Gurukul Area, Gandhidham Gujarat (370201) </li>
              <li>GSTIN: 24AOPPD6842Q1ZB</li>
              <li><a href="mailto:gansai.india@gmail.com" className="hover:text-primary">gansai.india@gmail.com</a></li>
              <li><a href="tel:+91 9677464967" className="hover:text-primary">+91 9677464967</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Gansai India. All rights reserved.</p>
          <p>Made in Gujarat · Shipped worldwide</p>
        </div>
      </div>
    </footer>
  );
}
