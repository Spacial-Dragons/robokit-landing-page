import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components";

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
      url: "https://www.linkedin.com/in/alelekime/",
    },
    {
      name: "Bruna Martins de Oliveira",
      url: "https://www.linkedin.com/in/broona-martinso/",
    },
    {
      name: "Edgar Vergara",
      url: "https://www.linkedin.com/in/vergaraaa/",
    },
    {
      name: "Mariia Chemerys",
      url: "https://www.linkedin.com/in/mariia-chemerys-2301091a7/",
    },
    {
      name: "Matvei Novoselov",
      url: "https://www.linkedin.com/in/matt-novoselov/",
    },
    {
      name: "Sofia Diniz Melo Santos",
      url: "https://www.linkedin.com/in/sofiadiniz/",
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
          <div className="min-h-svh">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
