import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_hbtes78',
        'template_epid4p8',
        form.current,
        'Xm9zWCgzexnuTEj2y'
      )
      .then(
        (result) => {
          setIsSending(false);
          setShowThankYou(true);
          toast.success('Message sent successfully!');
          form.current.reset();
          setTimeout(() => setShowThankYou(false), 5000);
        },
        (error) => {
          setIsSending(false);
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black px-6 py-16 text-white relative overflow-hidden"
    >
      <ToastContainer />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-teal-400/20 to-green-400/10 rounded-full top-[-200px] left-[-100px] blur-2xl z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-400">
          Contact Me
        </h2>

        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-green-400 font-semibold"
          >
            ✅ Thank you! Your message has been received.
          </motion.div>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="backdrop-blur-lg bg-white/5 border border-teal-400/40 rounded-2xl p-6 md:p-10 space-y-4 shadow-md"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <textarea
            name="message"
            placeholder="Your Message Here..."
            rows="5"
            required
            className="w-full px-4 py-3 bg-transparent border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          ></textarea>

          <motion.button
            type="submit"
            disabled={isSending}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
            className={`w-full border border-teal-400 text-white py-2 rounded-md relative overflow-hidden transition ${
              isSending ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSending ? (
              <span className="flex justify-center items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-teal-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span>Sending...</span>
              </span>
            ) : (
              <span className="relative z-10">Send</span>
            )}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 opacity-10"
              initial={{ width: '0%' }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            />
          </motion.button>
        </form>

        <div className="pt-8 text-sm text-gray-300 space-y-2">
          <h4 className="font-semibold text-white text-lg">Let's Connect</h4>
          <p>
            Feel free to reach out to discuss collaborations, freelance work, or just to say hi!
            I'm always open to new ideas and creative discussions.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center space-x-6 pt-4"
        >
          {[
            { icon: <FaGithub />, link: 'https://github.com/malickarslan20' },
            { icon: <FaLinkedin />, link: 'https://linkedin.com/in/malik-arslan-52a27627b' },
            { icon: <FaTwitter />, link: 'https://twitter.com/yourusername' },
            { icon: <FaEnvelope />, link: 'mailto:malikarslan4999@gmail.com' },
          ].map(({ icon, link }, idx) => (
            <a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <div className="text-white transition-transform transform group-hover:scale-125 duration-300">
                <span
                  className="inline-block text-2xl"
                  style={{
                    background: 'linear-gradient(to right, #14b8a6, #22c55e)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {icon}
                </span>
                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-40 transition duration-500 blur-xl bg-gradient-to-r from-teal-400 to-green-400 z-[-1]" />
              </div>
            </a>
          ))}
        </motion.div>

        <div className="border-t border-gray-700 pt-4 text-sm text-teal-400">
          © 2025 Malik Arslan. All Rights Reserved.
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
