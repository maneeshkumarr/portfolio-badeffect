'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Place screenshots in /public/inventory_management/
// Update the filenames below to match your actual images.
const imageList = [
  'Ip1.png', 'Ip2.png', 'Ip3.png',
  'Ip4.png', 'Ip5.png', 'Ip6.png',
];

export default function InventoryManagementDetails() {
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
    <main className="relative min-h-screen px-6 py-20 font-body text-white bg-[#0a141a] overflow-hidden">
      {/* Ambient Gradient Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2d3a] via-[#14485c] to-[#03090c] -z-10" />
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none -z-10" />
      <div className="absolute -top-28 -left-32 w-[520px] h-[520px] bg-cyan-500/25 rounded-full blur-[200px] animate-blob -z-10" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-teal-400/20 rounded-full blur-[180px] animate-blob -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto space-y-28"
      >
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-6xl font-black tracking-tight bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-500 text-transparent bg-clip-text animate-gradient-x">
            Inventory Management System
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Developed an Inventory Management website using Spring Boot, Next.js (TypeScript), and MySQL. Features include product tracking, stock updates, and secure CRUD operations with a responsive user interface.
          </p>
        </header>

        {/* Tech Stack */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 uppercase tracking-wide">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Next.js", "Tailwind CSS", "TypeScript", "Spring Boot", "MySQL"].map((tech) => (
              <span
                key={tech}
                className="bg-white/5 border border-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-base font-semibold tracking-wide shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Mockup Gallery */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center text-teal-300 uppercase tracking-wider">App Mockup Gallery</h2>
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
                onClick={() => openModal(`/inventory-management/${img}`)}
              >
                <Image
                  src={`/inventory-management/${img}`}
                  alt={`Inventory Management Mockup ${i + 1}`}
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
          <h2 className="text-3xl font-bold text-cyan-300 mb-6 uppercase tracking-wider">Highlights</h2>
          <ul className="text-gray-300 text-lg space-y-3 max-w-3xl mx-auto">
            <li>📦 Track products with live stock levels</li>
            <li>✏️ Secure Create, Read, Update, Delete operations</li>
            <li>🔔 Low-stock alerts and restocking suggestions</li>
            <li>📱 Fully responsive design for desktop and mobile</li>
          </ul>
        </section>

        {/* Buttons */}
        <section className="flex justify-center gap-8 mt-14">
          <a
            href="https://github.com/username/inventory-management"
            target="_blank"
            className="bg-[#0c0c0c] border border-white/10 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-neutral-800 transition"
          >
             GitHub Repo
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
                className="absolute top-6 right-6 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 z-50"
              >
                ✕
              </button>
              {activeImage && (
                <Image
                  src={activeImage}
                  alt="Fullscreen Inventory Management Mockup"
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
  );
}
