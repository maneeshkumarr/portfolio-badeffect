// components/Projects.tsx
'use client'
import { motion } from 'framer-motion'
import MediaPreview from './MediaPreview'

const projects = [
 {
  title: 'Purchase Bill Generator',
  description: 'A C# web app built with Razor Pages, Bootstrap, and SQLite. Supports rate change, quantity tracking, and invoice-style bill generation.',
  media: '/purchase.mp4', // ✅ Make sure this video is inside /public directory
  type: 'video',
}
,
 {
  title: 'Community Hub (Samriddhi Setu)',
  description: 'A full-stack social platform built with Next.js, TypeScript, Tailwind CSS, Express.js, and MySQL. Users can create, like, comment, share, and delete posts. Future updates aim to add real-time communication.',
  media: '/community.mp4', // ✅ Ensure video or gif is inside /public directory
  type: 'video',
},
{
  title: 'Rock Paper Scissors Game',
  description: 'A simple web-based Rock Paper Scissors game built with vanilla JavaScript to understand DOM manipulation and event handling. Helps reinforce conditionals, dynamic UI updates, and user input interactions.',
  media: '/rock-paper.mp4', // ✅ Place the demo video or GIF in /public
  type: 'video',
},
{
  title: 'Tic Tac Toe Game',
  description: 'Classic Tic Tac Toe built using HTML, CSS, and JavaScript to explore DOM manipulation, game logic, and UI rendering. Great for beginners to grasp 2D arrays, win conditions, and dynamic content updates.',
  media: '/tic-toc-toe.mp4', // ✅ Ensure the media is in /public
  type: 'video',
},
{
  title: 'Food Rescue App',
  description: 'A Next.js + Express.js platform where restaurants connect with helpers & NGOs to donate surplus food to the needy. Built with TypeScript, Tailwind CSS, and MongoDB. Features real-time food listing and pickup tracking. Future plans include authentication and pickup notifications for volunteers.',
  media: '/Food-Rescue.mp4', // ✅ Replace with actual media file
  type: 'video',
}

]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 bg-[#0a0101] text-white font-body overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0000] via-[#2a0505] to-[#0a0101] z-0" />
      <div className="absolute inset-0 bg-noise opacity-[.02] z-0 pointer-events-none" />

      <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-[#ff0040] via-[#ffd700] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
        Featured Projects
      </h2>

      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="group rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <MediaPreview src={proj.media} alt={proj.title} type={proj.type} />

            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-bold text-[#FFD700]">{proj.title}</h3>
              <p className="text-gray-300">{proj.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
