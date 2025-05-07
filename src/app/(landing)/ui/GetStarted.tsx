import { Button } from "@/components";
import Link from "next/link";

export const GetStarted = () => {
  return (
    <div className="text-center space-y-4 px-5 h-60 flex justify-center items-center flex-col">
      <h2 className="text-4xl md:text-5xl font-bold">
        Meet RoboKit for visionOS
      </h2>

      <p className="text-lg text-muted-foreground">
        Spatial robot control made simple with RoboKit for visionOS.
      </p>

      <Link href="/docs">
        <Button>Start Building</Button>
      </Link>
    </div>
  );
};
