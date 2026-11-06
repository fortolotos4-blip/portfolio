function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="space-x-6 text-base font-medium">
          <a href="#about" className="hover:text-blue-400">Tentang Saya</a>
        </div>

        <div className="text-base font-medium">
           <a  href="#contact" className="hover:text-blue-400">Kontak</a> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;