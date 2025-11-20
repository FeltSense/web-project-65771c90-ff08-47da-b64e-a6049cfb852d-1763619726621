import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Ignite Fitness - Elevate Your Health",
  description: "Ignite your potential with personalized fitness plans, expert coaching, and a supportive community. Achieve your health and wellness goals today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="bg-gray-950 text-gray-200 antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}