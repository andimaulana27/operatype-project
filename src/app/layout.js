// src/app/layout.js

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"], 
});

export const metadata = {
  title: "Operatype.co - Premium Script Fonts",
  description: "A marketplace for high-quality, handcrafted fonts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* PERBAIKAN DI SINI:
        Tambahkan `suppressHydrationWarning` ke tag body 
      */}
      <body 
        className={`${poppins.className} bg-[#f9f9f9]`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}