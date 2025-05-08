import { Footer, Navbar, ThemeToggler } from "@/components";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />

      <div className="min-h-svh">{children}</div>

      <div className="pt-20">
        <Footer />
      </div>

      <div className="fixed bottom-5 w-full">
        <div className="max-w-7xl mx-auto w-full flex justify-end px-5">
          <ThemeToggler />
        </div>
      </div>
    </div>
  );
}
