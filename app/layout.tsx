import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NICHE — Industry-Verified Feedback For Builders",
  description: "Get structured feedback on your app or product from verified professionals in your target industry. Real reviews from real site managers, nurses, engineers and teachers.",
  keywords: ["product feedback", "industry reviews", "verified professionals", "builders", "startups", "beta testing"],
  authors: [{ name: "NICHE" }],
  openGraph: {
    title: "NICHE — Industry-Verified Feedback For Builders",
    description: "Get structured feedback on your app or product from verified professionals in your target industry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plusJakarta.variable} ${dmSans.variable} font-body antialiased`}>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
