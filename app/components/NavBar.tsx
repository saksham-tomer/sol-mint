import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

/**
 * @author saksham-tomer
 * @name Navbar element
 * @copyright Copyrighted by mr. Ramot (c)
 * @returns Navbar component
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white font-mono rounded-xl shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-orange-500">
            MINT-SOL
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Marketplace
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-orange-400 transition-colors"
              >
                Services <ChevronDown size={20} className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-gray-800 rounded-md shadow-xl z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-400 transition-colors"
                  >
                    NFT Valuation
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-400 transition-colors"
                  >
                    Instant Liquidity
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-orange-400 transition-colors"
                  >
                    Portfolio Analysis
                  </a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-orange-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Connect Wallet
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-orange-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-orange-400 transition-colors"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-orange-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-orange-400 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-orange-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="px-4 py-3">
            <a
              href="#"
              className="block bg-orange-500 text-center text-white px-4 py-2 rounded-md text-base font-medium hover:bg-orange-600 transition-colors"
            >
              Connect Wallet
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
