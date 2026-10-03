import { Flame, Instagram, Linkedin, Facebook } from "lucide-react";
import logo from "@/assets/logoD.png";

export function Footer() {
  return (
    <>
      <footer className="relative overflow-hidden bg-foreground text-background/80 pt-20 pb-10">
        <div className="absolute -bottom-12 -right-12 select-none pointer-events-none opacity-[0.03] dark:opacity-[0.05] rotate-[-12deg]">
          <span className="text-[12rem] font-brand font-bold leading-none tracking-tighter text-background">
            GANSAI
          </span>
        </div>
        <div className="container-page relative z-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2 max-w-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 group">
                  <img
                    src={logo}
                    alt="Gansai India"
                    width={64}
                    height={64}
                    className="h-12 w-12 md:h-16 md:w-16 object-contain"
                  />
                  <span className="font-brand text-4xl md:text-6xl lg:text-7xl leading-none tracking-tighter text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                    GANSAI INDIA
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <p className="text-lg md:text-xl leading-relaxed text-background/60 max-w-md font-medium">
                    Empowering Innovation &amp; Excellence across India.
                    <span className="block text-sm mt-2 text-background/40 font-normal">
                      A modern candle manufacturing company based in Gujarat, delivering premium quality at scale.
                    </span>
                  </p>
                  <div className="flex gap-3">
                    {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="grid place-items-center h-10 w-10 rounded-full border border-background/15 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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

      {/* Modern logo overlay covering half the viewport at the bottom */}
      <div className="fixed inset-x-0 bottom-0 h-1/2 pointer-events-none opacity-10">
        <img
          src={logo}
          alt="Gansai logo"
          className="h-full w-auto object-contain"
        />
      </div>
    </>
  );
}
