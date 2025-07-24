import React from 'react';
import { motion } from 'framer-motion';
import About from './about';
import Contact from './contact';

function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id='home' className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Decorative Gradient Glow Background */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-teal-400/20 to-green-500/10 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-br from-purple-400/20 to-blue-500/10 rounded-full blur-2xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-2xl backdrop-blur-xl bg-white/5 border border-teal-400/20 rounded-2xl p-10 shadow-lg"
      >
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
          Hi, I'm Malik Arslan
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A passionate Frontend Developer crafting smooth and aesthetic web experiences.
        </p>

        {/* Buttons */}
        <div className="space-x-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="relative inline-block px-6 py-3 rounded-lg font-medium text-white 
              bg-gradient-to-r from-teal-500 to-green-500
              overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 ease-out group-active:w-full"></span>
            <span className="relative z-10">View Projects</span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="relative inline-block px-6 py-3 rounded-lg font-medium text-white 
              bg-gradient-to-r from-green-500 to-teal-500
              overflow-hidden group hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 w-0 bg-white opacity-20 transition-all duration-300 ease-out group-active:w-full"></span>
            <span className="relative z-10">Contact Me</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
