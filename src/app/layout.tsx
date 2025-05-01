import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider, ThemeToggler } from "@/components";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "RoboKit",
    template: "%s | RoboKit",
  },
  description: "",
  twitter: {
    card: "summary_large_image",
  },
  keywords: ["ios", "visionOS", "apple vision pro", "robot"],
  authors: [
    {
      name: "Alessandra Souza da Silva",
      url: "",
    },
    {
      name: "Bruna Martins de Oliveira",
      url: "",
    },
    {
      name: "Edgar Vergara",
      url: "https://www.linkedin.com/in/vergaraaa/",
    },
    {
      name: "Mariia Chemerys",
      url: "",
    },
    {
      name: "Matvei Novoselov",
      url: "",
    },
    {
      name: "Sofia Diniz Melo Santos",
      url: "",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}

          <div className="fixed bottom-5 w-full">
            <div className="max-w-7xl mx-auto w-full flex justify-end px-5">
              <ThemeToggler />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
