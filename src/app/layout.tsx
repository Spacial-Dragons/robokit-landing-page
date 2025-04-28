import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
