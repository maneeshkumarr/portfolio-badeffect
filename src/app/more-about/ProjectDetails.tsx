'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export interface ProjectDetailsProps {
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  imageList: string[];
  imagePath: string;
  githubUrl?: string;
  liveUrl?: string;
}

const BackgroundElements = () => (
  <>
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse delay-2000"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-amber-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-3000"></div>
    </div>
    <div
      className="absolute inset-0 opacity-8 pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    />
  </>
);

export default function ProjectDetails({
  title,
  description,
  techStack,
  highlights,
  imageList,
  imagePath,
  githubUrl,
  liveUrl,
}: ProjectDetailsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoadErrors, setImageLoadErrors] = useState<Set<string>>(new Set());

  // Loader effect
  useEffect(() => setIsLoaded(true), []);

  const openModal = useCallback((src: string) => {
    setActiveImage(src);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveImage(null);
    document.body.style.overflow = 'unset';
  }, []);

  const handleImageError = useCallback((imageName: string) => {
    setImageLoadErrors(prev => new Set([...prev, imageName]));
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isModalOpen, closeModal]);

  // Motion Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 60, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Skeleton Loader
  if (!isLoaded) {
    return (
      <main className="min-h-screen px-4 sm:px-6 py-20 font-sans text-white bg-gradient-to-br from-gray-900 via-red-950 to-amber-900/40 overflow-hidden">
        <BackgroundElements />
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Header Skeleton */}
          <div className="space-y-6 text-center">
            <div className="h-12 sm:h-16 lg:h-20 bg-gray-700 rounded w-3/4 mx-auto animate-pulse" />
            <div className="h-4 sm:h-6 bg-gray-600 rounded w-2/3 mx-auto animate-pulse" />
          </div>

          {/* Tech Stack Skeleton */}
          <div className="text-center">
            <div className="h-8 sm:h-10 bg-gray-700 rounded w-1/3 mx-auto mb-4 animate-pulse" />
            <div className="flex justify-center flex-wrap gap-3">
              {Array(5).fill(0).map((_, idx) => (
                <div key={idx} className="h-8 sm:h-10 w-24 sm:w-28 bg-gray-600 rounded-full animate-pulse" />
              ))}
            </div>
          </div>

          {/* Gallery Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6).fill(0).map((_, idx) => (
              <div key={idx} className="h-64 bg-gray-700 rounded-2xl animate-pulse" />
            ))}
          </div>

          {/* Highlights Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {Array(4).fill(0).map((_, idx) => (
              <div key={idx} className="h-24 sm:h-32 bg-gray-600 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen px-4 sm:px-6 py-20 font-sans text-white bg-gradient-to-br from-gray-900 via-red-950 to-amber-900/40 overflow-hidden">
      <BackgroundElements />

      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="relative max-w-7xl mx-auto space-y-20 z-10">
        {/* Header */}
        <motion.header variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-amber-300 via-red-300 to-white text-transparent bg-clip-text drop-shadow-lg">
            {title}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-amber-100/90 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.header>

        {/* Tech Stack */}
        <motion.section variants={itemVariants} className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-8 uppercase tracking-wide">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                className="bg-gradient-to-r from-red-900/70 to-amber-900/70 border border-amber-500/50 backdrop-blur-sm text-amber-100 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 hover:border-amber-400/80"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Gallery */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 text-center text-amber-400 uppercase tracking-wider">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {imageList.map((img, index) => {
              const imageSrc = `${imagePath}${img}`;
              const hasError = imageLoadErrors.has(img);
              return (
                <motion.div
                  key={index}
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-red-900/50 to-amber-900/50 backdrop-blur-lg border border-amber-500/40 shadow-xl cursor-pointer hover:border-amber-400/80"
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  viewport={{ once: true, amount: 0.1 }}
                  onClick={() => !hasError && openModal(imageSrc)}
                  role="button"
                  aria-label={`View ${title} screenshot ${index + 1}`}
                >
                  {hasError ? (
                    <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-red-900/60 to-amber-900/60 rounded-xl">
                      <div className="text-center text-amber-200">
                        <div className="text-4xl mb-2" aria-hidden="true">📷</div>
                        <p className="text-sm">Image not available</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={imageSrc}
                      alt={`${title} Screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className="max-h-64 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(img)}
                      loading="lazy"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Highlights */}
        <motion.section variants={itemVariants} className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-400 mb-8 uppercase tracking-wider">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-red-900/50 to-amber-900/50 border border-amber-500/40 backdrop-blur-sm text-amber-100 p-4 sm:p-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-amber-500/30 hover:border-amber-400/70"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg font-medium leading-relaxed">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Action Buttons */}
        {(githubUrl || liveUrl) && (
          <motion.section variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-red-800 to-amber-800 border border-amber-500/50 text-amber-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-amber-500/40 hover:border-amber-400/80 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">📂 View Code</span>
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-red-600 border border-amber-400/60 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">🚀 Live Demo</span>
              </motion.a>
            )}
          </motion.section>
        )}

      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && activeImage && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Image preview modal"
          >
            <motion.div
              className="relative w-full h-full max-w-7xl max-h-[95vh] flex flex-col bg-gradient-to-br from-red-950/95 to-amber-950/95 backdrop-blur-xl border border-amber-500/50 shadow-2xl rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-amber-500/30 bg-red-900/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold text-amber-400">Project Screenshot</h3>
                <motion.button
                  onClick={closeModal}
                  className="bg-red-600 hover:bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-colors duration-200 border border-amber-500/50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close modal"
                >
                  ✕
                </motion.button>
              </div>
              <div className="flex-1 p-6 flex items-center justify-center min-h-0">
                <Image
                  src={activeImage}
                  alt="Full size project screenshot"
                  width={1200}
                  height={800}
                  className="w-full h-full object-contain rounded-lg shadow-2xl border border-amber-500/20"
                  priority
                />
              </div>
              <div className="p-4 border-t border-amber-500/30 bg-red-900/50 backdrop-blur-sm text-center">
                <p className="text-sm text-amber-200">
                  Press <kbd className="px-2 py-1 bg-red-800/50 rounded border border-amber-500/50 text-amber-300">ESC</kbd> or click outside to close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
