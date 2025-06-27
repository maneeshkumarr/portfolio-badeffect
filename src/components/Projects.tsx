const Projects = () => (
  <section id="projects" className="py-20 px-4 bg-[#121212]">
    <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <div className="bg-[#1e1e1e] p-6 rounded-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-2">Inventory App</h3>
        <p className="text-gray-400">Full-stack app using Next.js + Node.js</p>
      </div>
      <div className="bg-[#1e1e1e] p-6 rounded-lg hover:scale-105 transition">
        <h3 className="text-2xl font-semibold mb-2">Blog Platform</h3>
        <p className="text-gray-400">Built with MERN + Tailwind UI</p>
      </div>
    </div>
  </section>
)
export default Projects
