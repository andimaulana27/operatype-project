// src/app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext"; // 1. Import AuthProvider

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
      <body 
        className={`${poppins.className} bg-[#f9f9f9]`}
        suppressHydrationWarning={true}
      >
        {/* 2. Bungkus semua provider di sini */}
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
