import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import {
  Lightbulb,
  Puzzle,
  Code,
  Users,
  Github,
  GitBranch,
  Database,
  Server,
  Figma,
  Atom, // ✅ Use Atom as a placeholder for React
} from 'lucide-react';

const features = [
  {
    title: 'Creativity',
    desc: 'Innovative thinker delivering unique and impactful solutions.',
    icon: <Lightbulb className="w-6 h-6 text-gradient" />,
  },
  {
    title: 'Problem Solving',
    desc: 'Analytical approach to resolving complex challenges efficiently.',
    icon: <Puzzle className="w-6 h-6 text-gradient" />,
  },
  {
    title: 'Clean Code',
    desc: 'Writing maintainable, readable, and scalable code structures.',
    icon: <Code className="w-6 h-6 text-gradient" />,
  },
  {
    title: 'Teamwork',
    desc: 'Collaborative mindset with strong communication skills.',
    icon: <Users className="w-6 h-6 text-gradient" />,
  },
];

const skills = [
  { name: 'React', icon: <Atom /> }, // ✅ Replaced ReactIcon with Atom
  { name: 'Git', icon: <GitBranch /> },
  { name: 'GitHub', icon: <Github /> },
  { name: 'MongoDB', icon: <Database /> },
  { name: 'Node.js', icon: <Server /> },
  { name: 'Figma', icon: <Figma /> },
];

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id='about' className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16 overflow-hidden">
      {/* ABOUT TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I'm <span className="text-teal-400 font-semibold">Malik Arslan</span>, a passionate <span className="text-teal-400 font-semibold">MERN Stack Developer</span> 
          transforming ideas into functional and visually engaging web apps.
        </p>

        <p className="text-gray-300 leading-relaxed">
          I push the boundaries of what's possible — combining <span className="text-teal-400 font-semibold">innovative design</span> with
          <span className="text-teal-400 font-semibold"> problem solving</span>. Whether it's pixel-perfect design or seamless UX, I focus relentlessly on delivering quality.
        </p>

        <h3 className="text-xl mt-8 font-semibold text-teal-400">
          So, how about creating something extraordinary together?
        </h3>
      </motion.div>

      {/* FEATURES */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-green-700/30 to-teal-700/30 border border-teal-400/20 backdrop-blur-md shadow-lg hover:scale-[1.02] transition-transform"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-3 bg-white/10 rounded-full">
              {item.icon}
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

     {/* SKILLS SECTION */}
<div className="mt-20 max-w-5xl mx-auto text-center">
  <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400 mb-10">
    My Skills
  </h2>

  <div className="relative flex flex-wrap justify-center gap-10">
    {skills.map((skill, index) => (
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: [-20, 20, -20], opacity: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: index * 0.2,
        }}
        viewport={{ once: false }}
        className="flex flex-col items-center justify-center w-24"
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 text-white text-sm shadow-lg hover:scale-110 transition-transform cursor-pointer">
          <div className="text-xl text-gradient">{skill.icon}</div>
        </div>
        <span className="mt-2 text-sm text-white font-medium">{skill.name}</span>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  );
}

export default About;
