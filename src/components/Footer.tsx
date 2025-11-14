import { ShoppingBag, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="w-8 h-8" />
              <span className="text-2xl font-bold">StationeryHub</span>
            </div>
            <p className="text-white/90">
              Your go-to destination for awesome stationery that makes studying fun!
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-yellow-300 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-yellow-300 transition">
                  Products
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-yellow-300 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-yellow-300 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-white/90">
              <li>Pens & Markers</li>
              <li>Notebooks</li>
              <li>Highlighters</li>
              <li>Art Supplies</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
            <p className="text-white/90 mb-4">Follow us for the latest products and special offers!</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-300 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/90">
          <p>&copy; 2024 StationeryHub. All rights reserved. Made with love for creative teens!</p>
        </div>
      </div>
    </footer>
  );
}
