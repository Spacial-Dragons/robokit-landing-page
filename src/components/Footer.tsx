import { Logo, SpacialDragonsLogo } from "@/components/";

export const Footer = () => {
  return (
    <div className="px-5 border-t border-t-border w-full h-60">
      <div className="mx-auto max-w-7xl size-full flex flex-col items-center justify-center gap-2.5">
        <div className="flex gap-2.5 items-center">
          <Logo />

          <span className="text-3xl font-thin">/</span>

          <SpacialDragonsLogo />
        </div>

        <div className="text-sm text-white/50">
          © {new Date().getFullYear()} Spacial Dragons
        </div>
      </div>
    </div>
  );
};
