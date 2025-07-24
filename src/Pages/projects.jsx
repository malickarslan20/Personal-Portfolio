import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    title: 'E-Commerce App',
    image: '/E-commerece.jpg', // Add this image to your public folder
    description: 'A full-stack e-commerce platform with shopping cart, product management, and Stripe payment integration.',
    tags: ['React', 'Firebase', 'Stripe', 'Tailwind'],
    live: 'https://your-ecommerce-live-link.com',
    github: 'https://github.com/malickarslan20/E-commerence',
  },
  {
    title: 'Car Rental Website',
    image: '/car-rental.jpg', // Add this image to your public folder
    description: 'A responsive car rental system with booking, user dashboard, and admin control using Appwrite.',
    tags: ['React', 'Appwrite', 'Tailwind', 'Framer Motion'],
    live: 'https://your-car-rental-live-link.com',
    github: 'https://github.com/malickarslan20/Car-Rental-',
  },
  {
    title: 'Cincobyte Portfolio',
    image: '/cincobyte.jpg', // Add this image to your public folder
    description: 'A modern animated developer portfolio using Framer Motion and AOS for smooth user experience.',
    tags: ['React', 'Framer Motion', 'AOS', 'Tailwind'],
    live: 'https://cincobyte.com',
    github: 'https://github.com/malickarslan20/cincobyte-portfolio',
  },
];

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='projects' className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 overflow-hidden">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400"
      >
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-teal-600/20 text-teal-300 px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white rounded-lg text-sm hover:opacity-90"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg text-sm hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
