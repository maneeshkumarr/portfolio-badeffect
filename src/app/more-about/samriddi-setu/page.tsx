'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

// Media list (image/video mixed allowed)
const mediaList = [
  { src: 'SS1.png', type: 'image' },
  { src: 'SS2.png', type: 'image' },
  { src: 'SS3.png', type: 'image' },
  { src: 'SS4.png', type: 'image' },
]

export default function CommunityHubDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeMedia, setActiveMedia] = useState<{ src: string; type: string } | null>(null)

  const openModal = (media: { src: string; type: string }) => {
    setActiveMedia(media)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setActiveMedia(null)
  }

  return (
    <main className="relative min-h-screen px-6 py-20 font-body text-white bg-[#180202] overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0505] via-[#180202] to-[#0d0101] -z-10" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none -z-10" />
      <div className="absolute -top-28 -left-32 w-[520px] h-[520px] bg-[#ff0040]/20 rounded-full blur-[200px] animate-blob -z-10" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-[#ffd700]/15 rounded-full blur-[180px] animate-blob -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-28"
      >
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-[#ffd700] via-[#ff7a7a] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
            Community Hub
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            This web application serves as a vibrant hub for communities to share posts, comment in real-time, and interact with rich features — powered by Next.js, Express.js, and MySQL.
          </p>
        </header>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-6 uppercase tracking-wide">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Express.js', 'MySQL'].map((tech) => (
              <span
                key={tech}
                className="bg-white/5 border border-[#ffd700]/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold tracking-wide shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-[#ff7a7a] uppercase tracking-wider">
            App Mockup Gallery
          </h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          >
            {mediaList.map((media, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 20px 50px rgba(255, 215, 0, 0.25)',
                }}
                transition={{ type: 'spring', stiffness: 100 }}
                className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-[#ff0040]/20 shadow-xl cursor-pointer aspect-video"
                onClick={() => openModal(media)}
              >
                {media.type === 'image' ? (
                  <Image
                    src={`/samriddi_setu/${media.src}`}
                    alt={`Community Hub Mockup ${i + 1}`}
                    fill
                    className="object-cover rounded-2xl"
                  />
                ) : (
                  <video
                    src={`/samriddi_setu/${media.src}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Highlights */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-[#ffd700] mb-6 uppercase tracking-wider">Highlights</h2>
          <ul className="text-gray-300 text-lg space-y-3 max-w-3xl mx-auto">
            <li>📝 Create and share posts with rich text support</li>
            <li>💬 Real-time commenting for instant discussions</li>
            <li>👍 Upvote / 👎 Downvote posts & comments</li>
            <li>⚡ Live updates without refreshing</li>
          </ul>
        </section>

        {/* Buttons */}
        <section className="flex justify-center gap-8 mt-14">
          <a
            href="https://github.com/username/community-hub"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[#1a0a0a] border border-[#ff0040]/20 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#2b0f0f] transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://community-hub-demo.vercel.app"
            target="_blank"
            className="bg-gradient-to-r from-[#ffd700] to-[#ff0040] text-[#180202] px-6 py-3 rounded-lg font-semibold shadow hover:brightness-110 transition"
          >
            🚀 Live Demo
          </a>
        </section>
      </motion.div>

      {/* Modal */}
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
              className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-3xl bg-gradient-to-br from-[#2b0505]/80 to-[#180202]/80 backdrop-blur-lg border border-[#ffd700]/30 shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-[#ff0040] text-white px-4 py-2 rounded-full hover:bg-[#ff1a4d] z-50"
              >
                ✕
              </button>
              {activeMedia?.type === 'image' ? (
                <Image
                  src={`/samriddi_setu/${activeMedia.src}`}
                  alt="Fullscreen Community Hub Mockup"
                  width={1600}
                  height={1000}
                  className="w-full h-auto object-contain rounded-2xl"
                />
              ) : (
                <video
                  src={`/samriddi_setu/${activeMedia.src}`}
                  autoPlay
                  muted
                  loop
                  controls
                  className="w-full h-auto rounded-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
