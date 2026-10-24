import { Link, useLocation } from "react-router-dom";
import { Menu, X, Languages } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.research"), path: "/research" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.skills"), path: "/skills" },
    { name: t("nav.education"), path: "/education" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path.startsWith("/#")) {
      return location.pathname === "/" && location.hash === path.substring(1);
    }
    return location.pathname === path;
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(nextLang);
  };

  const isEn = i18n.language === "en";

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-custom border-b-2 border-on-background-custom transition-all duration-200">
      <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
        <Link to="/" className="font-display text-2xl font-bold tracking-tighter text-on-background-custom">
          {t("home.operator")}
        </Link>
 
         {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
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

          {/* Fully Accessible Language Selector */}
          <button
            onClick={toggleLanguage}
            aria-label={isEn ? "Passer au français" : "Switch to English"}
            className="font-mono text-xs font-bold px-3 py-2 border border-outline-variant hover:border-primary-custom text-on-background-custom hover:text-primary-custom bg-transparent select-none cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-custom flex items-center gap-1.5 focus:outline-none"
          >
            <Languages size={14} />
            <span>{isEn ? "FR" : "EN"}</span>
          </button>

          <a
            href="https://drive.google.com/file/d/1yJ6pmbUEy-2pgmuI1rMKQPinJJyz9c-k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-custom text-on-primary font-mono text-xs px-4 py-2 hover:bg-surface-tint transition-all uppercase border border-outline-variant shadow-[3px_3px_0px_#00210f] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] font-bold"
          >
            {t("nav.cv")}
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
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-sans text-lg uppercase tracking-wider ${
                    isActive(link.path) ? "text-primary-custom font-bold" : "text-on-surface-variant"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Accessible Language Selector */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                aria-label={isEn ? "Passer au français" : "Switch to English"}
                className="font-mono text-sm font-bold py-3 px-4 border border-outline-variant hover:border-primary-custom text-on-background-custom bg-[#0b0e14]/50 select-none cursor-pointer rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-primary-custom flex items-center justify-center gap-2 focus:outline-none"
              >
                <Languages size={15} />
                <span>{isEn ? "PASSER EN FRANÇAIS" : "SWITCH TO ENGLISH"}</span>
              </button>

              <a
                href="https://drive.google.com/file/d/1yJ6pmbUEy-2pgmuI1rMKQPinJJyz9c-k/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-on-background-custom text-background-custom font-mono text-center py-3 hover:bg-primary-container transition-colors uppercase block"
              >
                {t("nav.cv")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
