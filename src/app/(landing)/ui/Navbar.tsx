import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-black/80 z-20 w-full flex h-16 px-6 items-center border-b border-b-white/20 backdrop-blur-sm backdrop-saturate-150">
      <div className="max-w-7xl mx-auto w-full px-5">
        <Link href="/">RoboKit</Link>
      </div>
    </div>
  );
};
