import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-neon-aqua text-2xl font-light tracking-wider">
          Akarsa
        </Link>

        {/* Navigation */}
        <nav className="flex gap-10 text-white/70 text-sm">
          <a href="#identity" className="hover:text-neon-aqua transition">About Us</a>
          <Link to="/work/websites" className="hover:text-neon-aqua transition">Careers</Link>
          <Link to="/case-studies/end-of-ordinary-branding" className="hover:text-neon-aqua transition">
            Projects
          </Link>
          <a href="#contact" className="hover:text-neon-aqua transition">Contact Us</a>
        </nav>

      </div>
    </header>
  );
};
