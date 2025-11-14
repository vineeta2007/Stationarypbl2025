import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-8 h-8" />
            <span className="text-2xl font-bold">StationeryHub</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-yellow-300 transition font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-yellow-300 transition font-medium">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-300 transition font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-yellow-300 transition font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-yellow-300 transition font-medium">
              Contact
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col space-y-3 pb-2">
            <button onClick={() => scrollToSection('home')} className="hover:text-yellow-300 transition text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-yellow-300 transition text-left">
              Products
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-300 transition text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-yellow-300 transition text-left">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-yellow-300 transition text-left">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
