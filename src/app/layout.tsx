import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header"
import Footer from "@/shared/Footer"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});



export const metadata: Metadata = {
  title: "TrFliX",
  description: "TRX Films",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-slate-900 text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
