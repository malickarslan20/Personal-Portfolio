import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const sections = ['home', 'about', 'projects', 'contact'];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navItemClasses = (section) =>
    activeSection === section
      ? 'text-blue-400 font-semibold'
      : 'hover:text-blue-400 transition';

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/90 backdrop-blur-md text-white shadow-md scroll-smooth">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-wide text-white">
          Malik.dev
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={navItemClasses(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="md:hidden px-4 pb-4 pt-2 flex flex-col space-y-4">
    {sections.map((section) => (
      <a
        key={section}
        href={`#${section}`}
        onClick={toggleMenu}
        className={`${navItemClasses(section)} py-2 px-2 rounded-md`}
      >
        {section.charAt(0).toUpperCase() + section.slice(1)}
      </a>
    ))}
  </div>
)}

    </nav>
  );
}

export default Navbar;
