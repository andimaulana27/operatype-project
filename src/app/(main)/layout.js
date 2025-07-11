// src/app/(main)/layout.js
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9f9]">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
