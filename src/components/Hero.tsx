'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden px-6 py-24 bg-[#180202] font-body text-white">
      {/* 🔥 Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0505] via-[#430a0a] to-[#0d0101]" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      <motion.div
        className="absolute -top-28 -left-32 w-[520px] h-[520px] bg-[#ff0040]/25 rounded-full blur-[200px]"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-[#ffd700]/20 rounded-full blur-[180px]"
        animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 🧊 Spinning Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <svg
          className="w-full h-full animate-spin-slow opacity-[0.035]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.25"
                opacity="0.25"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* 💡 Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 grid max-w-7xl w-full gap-14 md:grid-cols-2 items-center"
      >
        {/* 🧍‍♂️ Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative h-[420px] md:h-[520px] flex items-end justify-center"
        >
          <Image
            src="/me.png"
            alt="Maneesh Portrait"
            fill
            priority
            className="object-contain object-bottom drop-shadow-[0_25px_70px_rgba(255,0,64,0.35)] hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>

        {/* ✍️ Text + CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="text-center md:text-left"
        >
          <motion.p
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="font-heading text-[13px] sm:text-sm uppercase tracking-[0.4em] text-[#ffd700] mb-4"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="inline-block font-heading text-[38px] sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#ffd700] via-[#ff5d5d] to-[#ff0040] animate-gradient-x"
          >
            <TypeAnimation
              sequence={['Design.', 3000, 'Code.', 3000, 'Launch.', 3000]}
              wrapper="span"
              repeat={Infinity}
            />
          </motion.h1>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            className="relative mt-6"
          >
            <div className="absolute inset-0 -z-10 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10" />
            <p className="px-6 py-4 text-gray-200 text-sm sm:text-lg leading-relaxed">
              I fuse code + design to craft high-impact, future-ready products for bold brands.
            </p>
          </motion.div>

          {/* ⚡ Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            className="mt-10 flex flex-col sm:flex-row gap-4 font-heading justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-[#ffd700] text-[#180202] font-semibold shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 transition-all duration-300"
            >
              See My Work
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="px-8 py-3 rounded-full border border-[#ffd700] text-[#ffd700] font-semibold hover:bg-[#ffd700]/10 transition-all duration-300"
            >
              Hire Me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
