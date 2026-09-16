import type { Metadata } from "next";
import { Silkscreen, Space_Grotesk } from "next/font/google";
import "./globals.css";


const silkscreen = Silkscreen({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-silkscreen" });
const grotesk = Space_Grotesk({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "RaveDex",
  description: "A dex of the DJs you've seen live.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${silkscreen.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}