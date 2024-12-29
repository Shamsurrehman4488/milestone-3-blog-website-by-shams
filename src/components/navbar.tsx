'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-white h-auto md:h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              ShamsiBlogs
            </Link>
          </div>

          {/* for Desktop  */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-800 hover:text-gray-600">
              Blog
            </Link>
          </div>

          {/* Right div */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-gray-600">
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Sign Up
            </Link>
            <button
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5" />
            </button>
          </div>

          {/* for Mobile  */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile klye */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;