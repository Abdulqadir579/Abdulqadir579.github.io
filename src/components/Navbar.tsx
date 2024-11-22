import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-emerald-400"
          >
            Abdul Qadir
          </motion.span>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <motion.a
                href="/Abdul-Qadir-Resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
              >
                Resume
              </motion.a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
            <a
              href="/Abdul-Qadir-Resume.pdf"
              download
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05 }}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
  >
    {children}
  </motion.a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
  >
    {children}
  </a>
);