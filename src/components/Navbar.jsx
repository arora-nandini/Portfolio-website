export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        
        {/* LOGO / NAME */}
        <span className="text-xl sm:text-2xl font-bold text-accent">
          Nandini
        </span>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-8 text-base lg:text-lg font-medium">
          {["home", "about", "skills", "projects", "contact"].map((i) => (
            <a
              key={i}
              href={`#${i}`}
              className="capitalize hover:text-accent transition-colors duration-200"
            >
              {i}
            </a>
          ))}
        </div>

      </div>
    </nav>
  );
}
