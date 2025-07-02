import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // PASTIKAN INI AKTIF

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Operatype.co - Premium Script Fonts",
  description: "A marketplace for high-quality, handcrafted fonts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* PASTIKAN INI JUGA AKTIF */}
      </body>
    </html>
  );
}