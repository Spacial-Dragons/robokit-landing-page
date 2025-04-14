import { Features } from "./ui/Features";
import { Hero } from "./ui/Hero";

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />

      <Features />
    </div>
  );
}
