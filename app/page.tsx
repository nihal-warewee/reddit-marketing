import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Whyus from "@/components/Whyus";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Whyus />
      <Pricing />
    </main>
  );
}
