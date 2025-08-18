"use client"

import { motion } from "framer-motion"
import {  FaAward, FaMedal } from "react-icons/fa"

export default function UltimatePortfolio() {
  const experiences = [
    {
      role: "Backend Developer Intern",
      company: "IRINFOTECH (Remote)",
      period: "Jun 2025 – Present",
      points: [
        "Developed backend for a Gym Management System using Express.js and MySQL, including database schema design and CRUD APIs.",
        "Performed API testing with Postman and contributed to Agile processes including daily scrums, code reviews, and version control via GitHub."
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Codelabs Systems, Mangalore",
      period: "May 2024",
      points: [
        "Designed and built responsive UI components using React.js and Tailwind CSS for a web-based internal project.",
        "Gained hands-on experience with real-time team collaboration, Git workflows, and component-driven development."
      ]
    }
  ]

  const achievements = [
    "President – IT Club: Led a state-level tech fest featuring coding & design competitions.",
    "1st Prize – Quiz Quest at MITE, showcasing strong problem-solving skills.",
    "Finalist – 3x web design competitions recognized for UI/UX innovation.",
    "Contributed to International Conference on Artificial Intelligence for Sustainability and Intelligent Systems.",
    "Participated in Semaphore IT Fest 2025-26."
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#180202] via-[#2b0505] to-[#430a0a] p-8 overflow-hidden">
      {/* Optional floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Add floating particles or tech icons if desired */}
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd700] via-[#ffa500] to-[#ffcc00] animate-gradient-x drop-shadow-[0_0_25px_rgba(255,215,0,0.8)]">
       My Elite Professional Journey
      </h1>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#ffd700]/60 to-[#ffd700]/20 h-full"></div>

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            className={`mb-24 relative w-full md:w-1/2 ${i % 2 === 0 ? "md:left-0 md:pr-10" : "md:left-1/2 md:pl-10"}`}
          >
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#ffd700] rounded-full shadow-[0_0_25px_rgba(255,215,0,0.9)] animate-pulse z-10"></span>
            <motion.div
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -1 : 1, boxShadow: "0 0 60px rgba(255,215,0,0.7)" }}
              className="bg-[#2b0505]/90 backdrop-blur-md border border-[#ffd700]/30 p-6 rounded-3xl shadow-[0_0_40px_rgba(255,215,0,0.25)] transition-all"
            >
              <h3 className="text-2xl font-bold text-[#ffd700] mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#ffd700] via-[#ffb700] to-[#ffdd00] animate-gradient-x">
                {exp.role}
              </h3>
              <p className="text-gray-300 italic text-sm mb-4">{exp.company} | {exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-white">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Achievements & Contributions */}
      <div className="mt-32 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffd700] mb-12 flex items-center gap-4 justify-center drop-shadow-[0_0_25px_rgba(255,215,0,0.9)]">
          <FaAward className="text-4xl" /> Achievements & Contributions
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 50px rgba(255,215,0,0.7)" }}
              className="flex items-center gap-2 bg-gradient-to-r from-[#2b0505]/80 via-[#2b0505]/60 to-[#2b0505]/90 backdrop-blur-md px-5 py-3 rounded-full border border-[#ffd700]/20 text-white font-semibold shadow-[0_0_25px_rgba(255,215,0,0.2)] transition-all"
            >
              <FaMedal className="text-[#ffd700]" /> {ach}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
