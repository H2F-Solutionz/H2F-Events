import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Packages', path: '/packages' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Book Now', path: '/book-now' },
    { name: 'Custom Package', path: '/create-custom' }
  ];

  return (
    <footer className="bg-black relative">
      <div className="w-full h-full z-20 text-primary-white py-20 md:px-10 px-4 flex md:flex-row flex-col gap-10 justify-between">
        
        {/* Brand & Address Column */}
        <div className="w-fit h-full space-y-8">
          <Link to="/">
            <img className="object-contain w-[300px]" src="/media/newlogo.png" alt="H2F Events Logo" />
          </Link>
          <div>
            <span className="text-primary-white/70 px-4 md:text-lg font-normal block">
              42 Temple Road, Nallur, Jaffna,
            </span>
            <span className="text-primary-white/70 px-4 md:text-lg font-normal block">
              Northern Province, Sri Lanka
            </span>
          </div>
          <div className="flex space-x-5 capitalize md:text-lg font-normal px-4 text-primary-white/70">
            <Link className="w-fit h-fit hover:text-white transition-colors" to="/privacy-policy">Privacy Policy</Link>
            <Link className="w-fit h-fit hover:text-white transition-colors" to="/terms-of-service">Terms of Service</Link>
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="w-fit space-y-6">
          <p className="md:text-xl uppercase text-primary-white/70 font-bold">Quick Links</p>
          <div className="flex flex-col w-full md:text-lg text-sm uppercase gap-2 text-primary-white">
            {links.map((link) => (
              <Link
                key={link.path}
                className="font-bold w-fit hover:text-secondary-blue transition-colors"
                to={link.path}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
