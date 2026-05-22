import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brain, Trophy, Camera, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const languages = [
    { name: "English", level: "C2", type: "system" },
    { name: "French", level: "B1", type: "system" },
    { name: "Telugu / Hindi", level: "Native", type: "native" },
  ];

  const hobbies = [
    { name: "Travel", icon: <Brain size={20} />, image: "/assets/travel.jpeg" },
    { name: "GYM", icon: <Trophy size={20} />, image: "/assets/gym.jpeg" },
    { name: "Photography", icon: <Camera size={20} />, image: "/assets/photography.jpeg" },
  ];

  const [selectedHobby, setSelectedHobby] = useState<typeof hobbies[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-5 relative">
          <div className="w-full aspect-[3/4] border-2 border-on-background-custom bg-surface-container-high overflow-hidden group">
            <img
              src="/assets/profilepicHOMEcolour.jpeg"
              alt="SAi.G Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary-custom hidden md:block"></div>
        </div>

        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <h1 className="font-display text-5xl md:text-6xl uppercase mb-6 text-on-background-custom font-bold tracking-tighter leading-tight">
            Operator <br /> Profile
          </h1>
          <hr className="border-t-4 border-on-background-custom w-24 mb-8" />
          <div className="space-y-6">
            <p className="font-sans text-xl text-on-surface-variant leading-relaxed">
              M2 Digital Security & Networks student at ISEP Paris. Driven by a rigorous pursuit of technical excellence and a deep understanding of adversarial tactics, I am seeking a final-year internship in cybersecurity.
            </p>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed opacity-80">
              My academic foundation is built on uncompromising analytical methodologies, preparing me to architect resilient systems and dismantle complex threats. The approach is surgical; the goal is absolute structural integrity.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-on-background-custom text-background-custom font-mono text-sm uppercase px-8 py-4 border-2 border-on-background-custom hover:bg-primary-custom transition-colors"
            >
              View Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1yJ6pmbUEy-2pgmuI1rMKQPinJJyz9c-k/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-transparent text-on-background-custom font-mono text-sm uppercase px-8 py-4 border-2 border-on-background-custom hover:bg-primary-container hover:text-background-custom hover:border-transparent transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-12 border-t-2 border-on-background-custom">
        <div className="md:col-span-5">
          <h2 className="font-display text-2xl uppercase mb-6 text-on-background-custom flex justify-between items-center font-bold">
            Languages <span className="text-primary-custom font-mono text-sm opacity-60">SYS.LANG</span>
          </h2>
          <ul className="border border-outline-variant bg-surface-container-low">
            {languages.map((lang) => (
              <li key={lang.name} className="flex justify-between items-center p-4 border-b border-outline-variant last:border-0 hover:bg-surface-container transition-colors">
                <span className="font-mono text-sm uppercase font-bold text-on-surface">{lang.name}</span>
                <span className={`font-mono text-xs px-2 py-1 border border-outline-variant ${lang.type === 'system' ? 'bg-primary-custom text-on-primary' : 'bg-surface-variant text-on-surface-variant'}`}>
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <h2 className="font-display text-2xl uppercase mb-6 text-on-background-custom flex justify-between items-center font-bold">
            Off-Duty <span className="text-primary-custom font-mono text-sm opacity-60">HOBBIES</span>
          </h2>
          <p className="font-sans text-sm text-on-surface-variant mb-4 opacity-70">
            Click on a hobby to decrypt and unlock visual records.
          </p>
          <div className="flex flex-wrap gap-4">
            {hobbies.map((hobby) => (
              <button
                key={hobby.name}
                onClick={() => setSelectedHobby(hobby)}
                className="flex items-center gap-3 border-2 border-on-background-custom px-6 py-3 hover:bg-on-background-custom hover:text-background-custom transition-all group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-custom text-left"
                aria-label={`View records for ${hobby.name}`}
              >
                <span className="text-on-background-custom group-hover:text-primary-custom transition-colors">
                  {hobby.icon}
                </span>
                <span className="font-mono text-sm uppercase font-bold">{hobby.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hobby Visual record Modal */}
      <AnimatePresence>
        {selectedHobby && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-custom/90 backdrop-blur-md"
            onClick={() => setSelectedHobby(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 25 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl border-2 border-on-background-custom bg-[#0f111a] p-2 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center px-4 py-3 bg-[#151824] border-b border-[#242938]">
                <div className="flex items-center gap-2">
                  <span className="text-primary-custom">{selectedHobby.icon}</span>
                  <span className="font-mono text-xs uppercase tracking-widest font-bold text-on-background-custom">
                    Visual Record: {selectedHobby.name}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedHobby(null)}
                  className="text-on-background-custom hover:text-primary-custom hover:bg-[#242938] p-1.5 transition-all focus:outline-none cursor-pointer"
                  aria-label="Close record"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Main Image */}
              <div className="aspect-[4/3] w-full bg-black overflow-hidden relative group">
                <img
                  src={selectedHobby.image}
                  alt={`${selectedHobby.name} record`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
              </div>

              {/* Footer status line */}
              <div className="flex justify-between items-center px-4 py-2 bg-[#151824] border-t border-[#242938] font-mono text-[10px] uppercase text-on-background-custom/40">
                <span>RECOVERED RECORD</span>
                <span>STATUS: SECURE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
