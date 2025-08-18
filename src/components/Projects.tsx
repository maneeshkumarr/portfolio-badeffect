'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import MediaPreview from './MediaPreview'

type ProjectType = 'image' | 'video'
type Project = {
  title: string
  description: string
  media: string
  type: ProjectType
  moreLink?: string
}

const featuredProjects: Project[] = [
  {
    title: 'Casting platform',
    description:
      'A professional mobile app for casting and auditions. Built with Flutter for the frontend and Express.js for the backend. Uses a MySQL database for secure and scalable data management.',
    media: 'https://res.cloudinary.com/dvgxdgrgo/video/upload/v1755537305/InShot_20250818_221624696_1_kgttrj.mp4',
    type: 'video',
    moreLink: '/more-about/casting-platform',
  },
  {
    title: 'Inventory Management',
    description:
      'Developed an Inventory Management website using Spring Boot, Next.js (TypeScript), and MySQL. Features include product tracking, stock updates, and secure CRUD operations with a responsive UI.',
    media: 'https://res.cloudinary.com/dgndxx56k/video/upload/v1755422374/inventory_bkfgjy.mp4',
    type: 'video',
    moreLink: '/more-about/inventory-management',
  },
  {
    title: 'Community Hub (Samriddhi Setu)',
    description:
      'A full-stack social platform built with Next.js, TypeScript, Tailwind CSS, Express.js, and MySQL. Users can create, like, comment, share, and delete posts.',
    media: 'https://res.cloudinary.com/dgndxx56k/video/upload/v1755423554/community_k7vov6.mp4',
    type: 'video',
    moreLink: '/more-about/samriddi-setu',
  },
  {
    title: 'Food Rescue App',
    description:
      'A Next.js + Express.js platform where restaurants connect with helpers & NGOs to donate surplus food to the needy. Built with TypeScript, Tailwind CSS, and MongoDB.',
    media: 'https://res.cloudinary.com/dgndxx56k/video/upload/v1755422392/Food-Rescue_j2xavl.mp4',
    type: 'video',
    moreLink: '/more-about/food-rescue',
  },
  {
    title: 'Event Management',
    description:
      'A-Z Wedding Management Website is a full-stack event booking platform built with TypeScript, Next.js, Express.js, and MongoDB. Users can explore and book complete wedding services, from venue to decor, in one place.',
    media: '/event-management.mp4',
    type: 'video',
    moreLink: '/more-about/event-management',
  },
  {
    title: 'Community Hub (Samriddhi Setu)',
    description:
      'A full-stack social platform built with Next.js, TypeScript, Tailwind CSS, Express.js, and MySQL. Users can create, like, comment, share, and delete posts.',
    media: '/community.mp4',
    type: 'video',
    moreLink: '/more-about/samriddi-setu',
  }
]

const miniProjects: Project[] = [
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
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  const ProjectCard = ({
    proj,
    delay,
    showOverlay,
  }: {
    proj: Project
    delay: number
    showOverlay: boolean
  }) => {
    const CardContent = (
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        whileHover={{ scale: 1.04 }}
        className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl cursor-pointer hover:border-[#FFD700]/40 hover:shadow-[#FFD700]/30 transition-all"
      >
        {/* Media */}
        <div className="relative w-full aspect-video overflow-hidden">
          <MediaPreview src={proj.media} alt={proj.title} type={proj.type} />
          {showOverlay && (
            <>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                <span className="text-[#FFD700] font-semibold text-lg bg-black/50 px-4 py-2 rounded-full">
                  View Project →
                </span>
              </div>
            </>
          )}
        </div>

        {/* Text */}
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-bold text-[#FFD700]">{proj.title}</h3>
          <p className="text-gray-300 leading-relaxed">{proj.description}</p>
        </div>
      </motion.div>
    )

    return proj.moreLink ? (
      <Link href={proj.moreLink} prefetch>
        {CardContent}
      </Link>
    ) : (
      CardContent
    )
  }

  return (
    <section
      id="projects"
      className="relative py-24 px-4 bg-[#0a0101] text-white font-body overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#2a0505] to-[#0a0101] z-0" />
      <div className="absolute inset-0 bg-noise opacity-[.02] z-0 pointer-events-none" />

      {/* Featured Projects */}
      <motion.h2
        className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#ff0040] via-[#ffd700] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {featuredProjects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} delay={idx * 0.1} showOverlay />
        ))}
      </div>

      {/* Mini Projects */}
      <motion.h3
        className="relative z-10 text-4xl font-extrabold text-center mt-24 mb-14 text-[#FFD700] tracking-wide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Mini Projects
      </motion.h3>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        {miniProjects.map((proj, idx) => (
          <ProjectCard key={idx} proj={proj} delay={idx * 0.1} showOverlay={false} />
        ))}
      </div>
    </section>
  )
}
// Hello