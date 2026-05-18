import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-custom border-b-2 border-on-background-custom transition-all duration-200">
      <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-on-background-custom">
          SAi.G
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-sans text-sm uppercase tracking-wider transition-all px-2 py-1 ${
                isActive(link.path)
                  ? "text-primary-custom border-b-4 border-primary-custom font-bold"
                  : "text-on-surface-variant hover:text-background-custom hover:bg-primary-custom"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://drive.google.com/file/d/1r74_so1lt0I_YzqdBVUYi7IvMWX31n43/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-custom text-on-primary font-mono text-xs px-4 py-2 hover:bg-surface-tint transition-all uppercase border border-outline-variant shadow-[3px_3px_0px_#00210f] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] font-bold"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-on-background-custom" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background-custom border-b-2 border-on-background-custom p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-lg uppercase tracking-wider ${
                    isActive(link.path) ? "text-primary-custom font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://drive.google.com/file/d/1r74_so1lt0I_YzqdBVUYi7IvMWX31n43/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-on-background-custom text-background-custom font-mono text-center py-3 hover:bg-primary-container transition-colors uppercase block"
              >
                DOWNLOAD CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
