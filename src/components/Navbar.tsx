const Navbar = () => (
  <nav className="w-full flex justify-between items-center px-8 py-4 bg-black sticky top-0 z-50">
    <h1 className="text-2xl font-bold">Maneesh</h1>
    <div className="space-x-6">
      <a href="#projects" className="hover:text-green-400">Projects</a>
      <a href="#about" className="hover:text-green-400">About</a>
      <a href="#contact" className="hover:text-green-400">Contact</a>
    </div>
  </nav>
)
export default Navbar
