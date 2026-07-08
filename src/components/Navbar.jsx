import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Book Now', path: '/book-now' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-black py-2 px-8 fixed top-0 w-full hidden md:flex justify-between items-center z-40 border-b border-white/10">
        <Link className="w-fit h-fit flex-shrink-0" to="/">
          <img
            alt="H2F Events Logo"
            loading="lazy"
            width="200"
            className="w-[200px] h-auto"
            src="/media/newlogo.png"
          />
        </Link>
        <div className="flex justify-center items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.path}
              className={`text-sm font-ostrovsky uppercase font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'text-secondary-blue border-b-2 border-secondary-blue pb-0.5'
                  : 'text-white hover:text-secondary-blue'
              }`}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          <Link
            className="bg-secondary-blue px-4 py-1.5 rounded-md text-white uppercase font-semibold text-sm font-ostrovsky hover:bg-secondary-blue/80 transition-colors"
            to="/create-custom"
          >
            Custom Package
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="flex items-center justify-between md:hidden py-2 px-3 z-40 fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-white/10">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-fit text-white px-1 relative z-50 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="6" width="24" height="2" fill="currentColor"></rect>
              <rect y="13" width="24" height="2" fill="currentColor"></rect>
              <rect y="20" width="24" height="2" fill="currentColor"></rect>
            </svg>
          )}
        </button>
        <Link to="/">
          <img alt="H2F Events Logo" loading="lazy" width="150" className="w-[130px] h-auto" src="/media/newlogo.png" />
        </Link>
        <div className="w-[26px] h-[26px] opacity-0"></div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black z-30 flex flex-col justify-center items-center space-y-5 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="mb-4">
            <img alt="H2F Events Logo" className="w-[180px] h-auto" src="/media/newlogo.png" />
          </Link>
          {links.map((link) => (
            <Link
              key={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-ostrovsky uppercase font-semibold transition-colors ${
                location.pathname === link.path ? 'text-secondary-blue' : 'text-white hover:text-secondary-blue'
              }`}
              to={link.path}
            >
              {link.name}
            </Link>
          ))}
          <Link
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-secondary-blue px-6 py-2 rounded-md text-white uppercase font-semibold text-base font-ostrovsky hover:bg-secondary-blue/80 transition-colors"
            to="/create-custom"
          >
            Custom Package
          </Link>
        </div>
      )}
    </>
  );
}
