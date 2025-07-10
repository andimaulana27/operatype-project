// src/app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"], 
});

export const metadata = {
  title: "Operatype.co - Premium Script Fonts",
  description: "A marketplace for high-quality, handcrafted fonts.",
};

// Ini adalah layout root yang SANGAT MINIMAL
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
        className={`${poppins.className} bg-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}