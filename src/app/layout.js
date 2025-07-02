// src/app/layout.js

import { Poppins } from "next/font/google"; // 1. Impor Poppins
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// 2. Konfigurasi font Poppins dengan weight yang kita butuhkan
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500"], // 300 untuk Light, 500 untuk Medium
});

export const metadata = {
  title: "Operatype.co - Premium Script Fonts",
  description: "A marketplace for high-quality, handcrafted fonts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Terapkan class font ke body */}
      <body className={`${poppins.className} bg-[#f9f9f9]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}