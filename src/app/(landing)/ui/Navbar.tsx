import { Logo } from "@/components/Logo";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-background/80 z-20 w-full flex h-16 px-6 items-center border-b border-b-border backdrop-blur-[5px] saturate-150">
      <div className="max-w-7xl mx-auto w-full px-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
    </div>
  );
};
