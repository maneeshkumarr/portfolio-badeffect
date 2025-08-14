'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

// Screenshots should be in /public/Food_Rescue/
const imageList = [
  'FR1.png', 'FR2.png', 'FR3.png',
  'FR4.png', 'FR5.png', 'FR6.png',
]

export default function FoodRescueDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const openModal = (src: string) => {
    setActiveImage(src)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveImage(null)
  }

  return (
    <main className="relative min-h-screen px-6 py-20 font-body text-white bg-[#180202] overflow-hidden">
      {/* Ambient Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0505] via-[#430a0a] to-[#0d0101] -z-10" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none -z-10" />
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-28"
      >
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-[#ffd700] via-[#ff5d5d] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
            Food Rescue App
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We are a team of 2 building a platform where restaurants donate leftover food to NGOs — with clean UI, real-time pickup status, and location tracking.
          </p>
        </header>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-6 uppercase tracking-wide">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Tailwind CSS", "TypeScript", "Node.js", "Express", "MongoDB"].map((tech) => (
              <span
                key={tech}
                className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold tracking-wide shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Mobile Mockup Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-[#ffd700] uppercase tracking-wider">
            Mobile Mockup Gallery
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {imageList.map((img, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl cursor-pointer"
                onClick={() => openModal(`/Food_Rescue/${img}`)}
              >
                <Image
                  src={`/Food_Rescue/${img}`}
                  alt={`Food Rescue Mockup ${i + 1}`}
                  width={1000}
                  height={2000}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Highlights */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-6 uppercase tracking-wider">Highlights</h2>
          <ul className="text-gray-200 text-lg space-y-3 max-w-3xl mx-auto">
            <li>🍽️ Restaurants list surplus food with expiry windows and portion sizes</li>
            <li>🚚 NGOs request & track pickups with real-time status updates</li>
            <li>🗺️ Live map tracking for couriers / volunteers</li>
            <li>🔐 Secure auth, media uploads, and role-based dashboards</li>
          </ul>
        </section>

        {/* GitHub Button */}
        <section className="flex justify-center gap-8 mt-14">
          <a
            href="https://github.com/username/food-rescue-app"
            target="_blank"
            className="bg-[#ffd700] text-[#180202] p-4 rounded-full shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 hover:scale-110 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
        </section>
      </motion.div>

      {/* Custom Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-[#ff0040] text-white px-4 py-2 rounded-full hover:bg-[#e60036] z-50"
              >
                ✕
              </button>
              {activeImage && (
                <Image
                  src={activeImage}
                  alt="Fullscreen Food Rescue Mockup"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
