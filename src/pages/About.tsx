import { motion } from "motion/react";
import { Brain, Trophy, Camera } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const languages = [
    { name: "English", level: "C2", type: "system" },
    { name: "French", level: "B1", type: "system" },
    { name: "Telugu / Hindi", level: "Native", type: "native" },
  ];

  const hobbies = [
    { name: "Travel", icon: <Brain size={20} /> },
    { name: "GYM", icon: <Trophy size={20} /> },
    { name: "Photography", icon: <Camera size={20} /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
        <div className="md:col-span-5 relative">
          <div className="w-full aspect-[3/4] border-2 border-on-background-custom bg-surface-container-high overflow-hidden group">
            <img
              src="/assets/profilepicMAINcolour.jpeg"
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
              href="https://drive.google.com/file/d/1r74_so1lt0I_YzqdBVUYi7IvMWX31n43/view?usp=drive_link"
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
          <div className="flex flex-wrap gap-4">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="flex items-center gap-3 border-2 border-on-background-custom px-6 py-3 hover:bg-on-background-custom hover:text-background-custom transition-all group">
                <span className="text-on-background-custom group-hover:text-primary-custom transition-colors">
                  {hobby.icon}
                </span>
                <span className="font-mono text-sm uppercase font-bold">{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
