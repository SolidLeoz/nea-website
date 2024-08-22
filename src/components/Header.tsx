"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">Nea</Link>
          
          {/* Menu per schermi grandi */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">Chi siamo</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800">Servizi</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">Contatti</Link>
          </div>

          {/* Burger menu per schermi piccoli */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <Link href="/" className="block py-2 text-gray-600 hover:text-gray-800">Home</Link>
            <Link href="/about" className="block py-2 text-gray-600 hover:text-gray-800">Chi siamo</Link>
            <Link href="/services" className="block py-2 text-gray-600 hover:text-gray-800">Servizi</Link>
            <Link href="/portfolio" className="block py-2 text-gray-600 hover:text-gray-800">Portfolio</Link>
            <Link href="/contact" className="block py-2 text-gray-600 hover:text-gray-800">Contatti</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;