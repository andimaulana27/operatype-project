// src/components/Footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          
          {/* Kolom 1: Logo & Copyright */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-semibold text-gray-800">
              operatype.co
            </Link>
            <p className="text-gray-500">
              Crafting beautiful script fonts with passion and precision.
            </p>
            <p className="text-gray-400 text-xs pt-4">
              © 2025 operatype.co. All Rights Reserved.
            </p>
          </div>

          {/* Kolom 2: Sitemap */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 mb-3">Sitemap</h4>
            <Link href="/fonts" className="block text-gray-600 hover:text-orange-500">All Fonts</Link>
            <Link href="/about" className="block text-gray-600 hover:text-orange-500">About</Link>
            <Link href="/license" className="block text-gray-600 hover:text-orange-500">License</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-orange-500">Contact</Link>
            <Link href="/terms" className="block text-gray-600 hover:text-orange-500">Terms of Service</Link>
            <Link href="/privacy" className="block text-gray-600 hover:text-orange-500">Privacy Policy</Link>
          </div>

          {/* Kolom 3: Connect */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 mb-3">Connect</h4>
            <a href="#" className="block text-gray-600 hover:text-orange-500">Instagram</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500">Behance</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500">Dribbble</a>
            <a href="#" className="block text-gray-600 hover:text-orange-500">Pinterest</a>
          </div>

          {/* Kolom 4: Newsletter */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 mb-3">Join Our Newsletter</h4>
            <p className="text-gray-500">Get updates on new fonts, special offers, and freebies.</p>
            <div className="flex mt-2">
              <input type="email" placeholder="Enter your email" className="border p-2 w-full rounded-l-md" />
              <button className="bg-orange-500 text-white p-2 rounded-r-md">Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;