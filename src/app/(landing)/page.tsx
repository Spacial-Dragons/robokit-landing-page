import { Features, GetStarted, Hero, MadeEasy, PoweredBy } from "./ui";

export default function Home() {
  return (
    <div className="space-y-20 font-space">
      <Hero />

      <Features />

      <MadeEasy />

      <PoweredBy />

      <GetStarted />
    </div>
  );
}
