import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-label="Get a quote"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-4 pr-5 py-3 text-sm font-medium shadow-2xl shadow-primary/40 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      } hover:-translate-y-1`}
    >
      <span className="relative grid place-items-center h-7 w-7 rounded-full bg-primary-foreground/15">
        <MessageCircle className="h-4 w-4" />
        <span className="absolute inset-0 rounded-full bg-primary-foreground/30 animate-ping" />
      </span>
      Get a Quote
    </a>
  );
}
