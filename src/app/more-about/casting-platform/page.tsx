'use client';

import { useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

Modal.setAppElement('body');

const imageList = [
  'splash-1.png', 'splash-2.png', 'splash-3.png', 'login.png',
  'forgot-password.png', 'enter-otp.png', 'set-password.png', 'reset-success.png',
  'signup-1.png', 'signup-2.png', 'signup-3.png', 'signup-4.png', 'signup-5.png',
  'talent-feed.png', 'message-talent.png', 'profile-talent.png', 'sucess-logout.png',
  'post-audition.png', 'find-talent.png', 'rersource.png', 'new-aud-1.png',
  'new-aud-2.png', 'aud-posted.png', 'post-view.png', 'my-resource.png', 'add-res-1.png',
  'add-res-2.png', 'res-live.png', 'settings.png'
];

export default function CastingPlatformDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setActiveImage(src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveImage(null);
  };

  return (
    <main className="relative min-h-screen px-6 py-20 font-body text-white bg-[#180202] overflow-hidden">
      {/* Ambient Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b0505] via-[#430a0a] to-[#0d0101] -z-10" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none -z-10" />
      <div className="absolute -top-28 -left-32 w-[520px] h-[520px] bg-[#ff0040]/25 rounded-full blur-[200px] animate-blob -z-10" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-[#ffd700]/20 rounded-full blur-[180px] animate-blob -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-28"
      >
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-[#ffd700] via-[#ff5d5d] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
            Casting Platform
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A sleek, production-ready platform built for aspiring talents and casting teams with seamless UX, robust backend, and mobile-first design.
          </p>
        </header>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 uppercase tracking-wide">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Tailwind CSS", "TypeScript", "Node.js", "MySQL"].map((tech) => (
              <span key={tech} className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold tracking-wide shadow">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-yellow-300 uppercase tracking-wider">Mobile Mockup Gallery</h2>
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
                onClick={() => openModal(`/casting_platform/${img}`)}
              >
                <Image
                  src={`/casting_platform/${img}`}
                  alt={`Mockup ${i + 1}`}
                  width={1000}
                  height={2000}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 uppercase tracking-wider">Highlights</h2>
          <ul className="text-gray-300 text-lg space-y-3 max-w-3xl mx-auto">
            <li>🧑‍🎤 Actor & Admin onboarding with custom profiles</li>
            <li>🎬 Post and manage casting calls from admin dashboard</li>
            <li>📲 Mobile-first UI with elegant transitions</li>
            <li>🔐 Secure backend with media storage and uploads</li>
          </ul>
        </section>

        <section className="flex justify-center gap-8 mt-14">
          <a
            href="https://github.com/username/casting-platform"
            target="_blank"
            className="bg-[#0c0c0c] border border-white/10 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-neutral-800 transition"
          >
            🐙 GitHub Repo
          </a>
          <a
            href="https://casting-platform.vercel.app"
            target="_blank"
            className="bg-gradient-to-r from-green-400 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:brightness-110 transition"
          >
            🚀 Live Demo
          </a>
        </section>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        overlayClassName="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
      >
        <div className="relative max-w-6xl w-full max-h-[90vh] overflow-auto rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 z-50"
          >
            ✕
          </button>
          {activeImage && (
            <Image
              src={activeImage}
              alt="Fullscreen Mockup"
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-2xl"
            />
          )}
        </div>
      </Modal>
    </main>
  );
}