import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eswar Ajay | Product Innovation Portfolio",
  description: "Product Strategy Leader bridging data analytics and technical execution. 15% yield increase, 40% water reduction - quantified impact through user-centric product thinking.",
  keywords: ["Product Management", "Product Strategy", "Data Analytics", "System Design", "Product Innovation", "Eswar Ajay"],
  authors: [{ name: "Eswar Ajay" }],
  openGraph: {
    title: "Eswar Ajay | Product Innovation Portfolio",
    description: "Data-driven Product Strategist with proven impact: 15% yield increase, 40% water reduction through user-centric product thinking.",
    url: "https://portfolio-a30h9nrvn-eswar-geddams-projects.vercel.app",
    siteName: "Eswar Ajay Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eswar Ajay - Product Innovation Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eswar Ajay | Product Innovation",
    description: "Bridging strategy and execution with quantified impact",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${plusJakarta.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
