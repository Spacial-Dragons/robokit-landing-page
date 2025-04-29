import { Footer, Navbar } from "./ui/";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />

      {children}

      <div className="pt-20">
        <Footer />
      </div>
    </div>
  );
}
