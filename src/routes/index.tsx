import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Strength } from "@/components/site/Strength";
import { Products } from "@/components/site/Products";
import { Why } from "@/components/site/Why";
import { Lifestyle } from "@/components/site/Lifestyle";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gansai India — Premium Candle Manufacturer in Gujarat" },
      {
        name: "description",
        content:
          "Large-scale candle manufacturer in Gujarat, India. 500 T/month capacity across a 50,000+ sq ft facility. Premium candles, raw materials, fragrances & DIY kits.",
      },
      { property: "og:title", content: "Gansai India — Premium Candle Manufacturer" },
      {
        property: "og:description",
        content:
          "Premium candles, waxes, wicks, fragrances and DIY kits from India's modern candle manufacturer.",
      },
    ],
    // 👇 ADD THIS LINKS ARRAY HERE TO LOAD THE GOOGLE FONT
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Medula+One&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Strength />
        <Products />
        <Why />
        <Lifestyle />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}