'use client'

const About = () => (
  <section
    id="about"
    className="relative py-24 px-6 text-white text-center font-body overflow-hidden bg-[#180202]"
  >
    {/* 🔥 Background Layers */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#2b0505] via-[#430a0a] to-[#0d0101] z-0" />
    <div className="absolute inset-0 bg-noise opacity-[.03] pointer-events-none z-0" />
    <div className="absolute -top-28 -left-32 w-[500px] h-[500px] bg-[#ff0040]/20 rounded-full blur-[180px] animate-blob z-0" />
    <div className="absolute -bottom-32 -right-28 w-[400px] h-[400px] bg-[#ffd700]/15 rounded-full blur-[160px] animate-blob z-0" />

    {/* ✨ Content */}
    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 bg-gradient-to-r from-[#ff0040] via-[#ffd700] to-[#ff0040] text-transparent bg-clip-text animate-gradient-x">
        About Me
      </h2>

      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl px-6 py-8 shadow-md">
        <p className="text-gray-300 text-lg leading-relaxed">
          I’m a passionate full-stack developer focused on building products that solve real problems. <br />
          My current stack includes <span className="text-[#FFD700] font-medium">JavaScript</span>,{' '}
          <span className="text-[#FFD700] font-medium">TypeScript</span>,{' '}
          <span className="text-[#FFD700] font-medium">Node.js</span>, and{' '}
          <span className="text-[#FFD700] font-medium">Next.js</span>.
        </p>
      </div>
    </div>
  </section>
)

export default About
