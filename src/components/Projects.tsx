'use client'

import { motion } from 'framer-motion'
import MediaPreview from './MediaPreview'
import Link from 'next/link'

const featuredProjects = [
{
  
    title: 'Casting platform',
    description:'A professional mobile app for casting and auditions.Built with Flutter for the frontend and Express.js for the backend.Uses a MySQL database for secure and scalable data management.',
    media: '/purchase.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform',
  },
  {
    title: 'Inventory Management',
    description:
      'Developed an Inventory Management website using Spring Boot, Next.js (TypeScript), and MySQL. Features include product tracking, stock updates, and secure CRUD operations with a responsive user interface.',
    media: '/inventory.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform',
  },
  {
    title: 'Community Hub (Samriddhi Setu)',
    description:
      'A full-stack social platform built with Next.js, TypeScript, Tailwind CSS, Express.js, and MySQL. Users can create, like, comment, share, and delete posts.',
    media: '/community.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform',
  },
  {
    title: 'Food Rescue App',
    description:
      'A Next.js + Express.js platform where restaurants connect with helpers & NGOs to donate surplus food to the needy. Built with TypeScript, Tailwind CSS, and MongoDB.',
    media: '/Food-Rescue.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform'
  },
]

const miniProjects = [
  {
    title: 'Rock Paper Scissors Game',
    description:
      'A simple web-based Rock Paper Scissors game built with vanilla JavaScript to understand DOM manipulation and event handling.',
    media: '/rock-paper.mp4',
    type: 'video',
  },
  {
    title: 'Purchase Bill Generator',
    description:
      'A C# web app built with Razor Pages, Bootstrap, and SQLite. Supports rate change, quantity tracking, and invoice-style bill generation.',
    media: '/purchase.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform',
  },
  {
    title: 'Tic Tac Toe Game',
    description:
      'Classic Tic Tac Toe built using HTML, CSS, and JavaScript to explore DOM manipulation, game logic, and UI rendering.',
    media: '/tic-toc-toe.mp4',
    type: 'video',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-[#0a0101] text-white font-body overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#2a0505] to-[#0a0101] z-0" />
      <div className="absolute inset-0 bg-noise opacity-[.02] z-0 pointer-events-none" />

      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#ff0040] via-[#ffd700] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
        Featured Projects
      </h2>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {featuredProjects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <MediaPreview src={proj.media} alt={proj.title} type={proj.type} />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-[#FFD700]">{proj.title}</h3>
              <p className="text-gray-300">{proj.description}</p>
              {proj.moreLink && (
                <Link href={proj.moreLink}>
                  <button className="mt-3 inline-block px-6 py-2 text-sm rounded-full border border-[#FFD700] text-[#FFD700] hover:bg-[#ffd700]/10 transition-all">
                    More About Project
                  </button>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* Mini Projects Section */}
      <h3 className="relative z-10 text-3xl font-bold text-center mt-24 mb-10 text-[#FFD700]">
        Mini Projects
      </h3>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {miniProjects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <MediaPreview src={proj.media} alt={proj.title} type={proj.type} />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-[#FFD700]">{proj.title}</h3>
              <p className="text-gray-300">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
