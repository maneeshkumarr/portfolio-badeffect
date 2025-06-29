'use client'
import { motion } from 'framer-motion'
import {
  SiOpenjdk, SiTypescript, SiJavascript, SiSpringboot, SiMongodb, SiMysql,
  SiDotnet, SiPython, SiNextdotjs, SiVercel, SiGit, SiGithub, SiGitlab,
  SiPostman, SiVscodium, SiAndroidstudio, SiCloudflare, SiAwsamplify, SiTailwindcss,
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', icon: <SiOpenjdk size={22} /> },
      { name: 'TypeScript', icon: <SiTypescript size={22} /> },
      { name: 'JavaScript', icon: <SiJavascript size={22} /> },
      { name: 'Python', icon: <SiPython size={22} /> },
      { name: 'C# / .NET', icon: <SiDotnet size={22} /> },
    ],
  },
  {
    title: 'Frameworks & DB',
    skills: [
      { name: 'Next.js', icon: <SiNextdotjs size={22} /> },
      { name: 'Spring Boot', icon: <SiSpringboot size={22} /> },
      { name: 'MongoDB', icon: <SiMongodb size={22} /> },
      { name: 'MySQL', icon: <SiMysql size={22} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={22} /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'VS Code', icon: <SiVscodium size={22} /> },
      { name: 'Android Studio', icon: <SiAndroidstudio size={22} /> },
      { name: 'Vercel', icon: <SiVercel size={22} /> },
      { name: 'Postman', icon: <SiPostman size={22} /> },
      { name: 'Git', icon: <SiGit size={22} /> },
      { name: 'GitHub', icon: <SiGithub size={22} /> },
      { name: 'GitLab', icon: <SiGitlab size={22} /> },
    ],
  },
  {
    title: 'Focus Areas',
    skills: [
      { name: 'DSA (Java)', icon: <SiOpenjdk size={22} /> },
      { name: 'Cloud & DevOps', icon: <SiCloudflare size={22} /> },
      { name: 'AI / ML (AWS)', icon: <SiAwsamplify size={22} /> },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-gradient-to-br from-[#0e0000] via-[#180202] to-[#0a0101] text-white overflow-hidden"
    >
      {/* Glowing blobs and noise */}
      <div className="absolute inset-0 bg-noise opacity-[.02] pointer-events-none" />
      <div className="absolute -top-48 -left-40 w-[480px] h-[480px] bg-[#ff0040]/20 rounded-full blur-[180px] animate-blob" />
      <div className="absolute -bottom-40 -right-32 w-[420px] h-[420px] bg-[#ffd700]/15 rounded-full blur-[160px] animate-blob" />

      {/* Title */}
      <h2 className="relative z-10 mb-20 text-center text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#ff0040] via-[#ffd700] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
        Skills & Tools
      </h2>

      {/* Grid */}
      <div className="relative z-10 grid max-w-6xl mx-auto gap-12 md:grid-cols-2 px-4">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 shadow-xl shadow-black/20 hover:shadow-yellow-500/10 hover:scale-[1.015] transition-all duration-300"
          >
            <h3 className="mb-6 text-lg font-semibold tracking-wider text-[#FFD700] uppercase">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-sm font-medium text-white/90 hover:bg-white/20 hover:scale-105 transition backdrop-blur-sm"
                >
                  <span className="text-[#FFD700]">{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
