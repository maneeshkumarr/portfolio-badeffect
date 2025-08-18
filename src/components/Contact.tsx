'use client'

import { motion } from 'framer-motion'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

const Contact = () => (
  <section
    id="contact"
    className="relative py-32 px-6 text-center bg-gradient-to-b from-[#180202] via-[#1a0f0f] to-[#2b0505] overflow-hidden"
  >
    {/* 🌌 Background Glows */}
    <motion.div
      className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-[#ff0040]/20 rounded-full blur-[180px]"
      animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-28 -right-20 w-[400px] h-[400px] bg-[#ffd700]/20 rounded-full blur-[150px]"
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* ✨ Main Content */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 max-w-3xl mx-auto"
    >
      <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ff5d5d] to-[#ff0040] mb-6 animate-gradient-x">
        Get In Touch
      </h2>
      <p className="text-gray-300 text-lg sm:text-xl mb-8">
        Have a project, idea, or just want to connect? I’d love to hear from you!
      </p>

      {/* ✉️ Email Button */}
      <motion.a
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.97 }}
        href="mailto:maneeshk.dev@gmail.com"
        className="inline-block px-10 py-4 rounded-full bg-[#ffd700] text-[#180202] font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 transition-all duration-300 mb-8"
      >
       maneeshk.dev@gmail.com
      </motion.a>

      {/* 🌐 Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        {[
          { icon: SiLinkedin, link: 'https://linkedin.com/in/maneesh-kumar-b17787262/' },
          { icon: SiGithub, link: 'https://github.com/maneeshkumarr' },
          { icon: FaTwitter, link: 'https://twitter.com/manish_kumar28' },
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#ffd700] text-3xl hover:text-[#ff5d5d] transition-colors duration-300"
          >
            <social.icon />
          </motion.a>
        ))}
      </div>
    </motion.div>

    {/* 🌊 SVG Wave at Bottom */}
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-24"
      >
        <path
          d="M0,0V46.29c47.35,22.12,104.21,29.39,158,20.16,68.23-11.72,136.72-41.91,204-36,86.67,7.52,172,49,258,63.11,89.49,14.94,178-5.66,267-27.76,84.77-21.17,168.71-48.24,253-41.53,86.62,6.91,172,50.18,258,61.48V0Z"
          className="fill-[#1a0f0f]"
        />
      </svg>
    </div>
  </section>
)

export default Contact
