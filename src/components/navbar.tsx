'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    // Check if there's a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on localStorage or system preference
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  // Update theme when isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-auto md:h-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
              ShamsiBlogs
            </Link>
          </div>

          {/* for Desktop  */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              Blog
            </Link>
          </div>

          {/* Right div */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400">
              Login
            </Link>
            <Link
              href="/signup"
              className="   text-gray-800 dark:text-gray-800 px-4 py-2 rounded-md "
            >
              Sign Up
            </Link>
            {/** dark and light mode */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </button>
          </div>

          {/* for Mobile  */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-gray-200" />
              ) : (
                <Moon className="h-5 w-5 text-gray-800" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-gray-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Blog
            </Link>
            <Link
              href="/login"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-3 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
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