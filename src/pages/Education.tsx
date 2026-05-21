import { useState } from "react";
import { MapPin, FileText, ExternalLink, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Education() {
  const education = [
    {
      period: "2024 — PRESENT",
      degree: "M2 Digital Security & Networks",
      institution: "ISEP Paris",
      location: "Paris, France",
      image: "/assets/ISEP.png",
      description: "Advanced master's degree focusing on robust architectural design, threat modeling, and cryptographic protocols. Developing deep technical expertise in securing distributed systems and modern network infrastructure against sophisticated cyber threats.",
      tags: ["Security", "Networks", "Telecommunications", "Cryptography"],
      active: true,
      document: "/assets/CertificatScolarite_63956_20260116130437.pdf",
      docLabel: "Certificat de Scolarité (ISEP)",
      docType: "pdf"
    },
    {
      period: "2020 — 2023",
      degree: "B.Tech Electronics and communication Engineering",
      institution: "Gurunanak Institute of Technology",
      location: "Hyderabad, India",
      image: "/assets/gnit.png",
      description: "Comprehensive foundational engineering program with a strong emphasis on core electronics, embedded systems and software development lifecycles. Established the analytical groundwork required for advanced technical problem-solving.",
      tags: ["ELECTRONICS", "Telecommunication", "Hardware engineering"],
      active: false,
      document: "/assets/provisional_btech.jpg",
      docLabel: "B.Tech Provisional Certificate",
      docType: "image"
    },
  ];

  const [activeDoc, setActiveDoc] = useState<typeof education[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <header className="mb-24 pt-16">
        <h1 className="font-display text-5xl md:text-7xl text-on-background-custom uppercase font-bold">
          Academic<br />Foundation
        </h1>
      </header>

      <div className="space-y-24">
        {education.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8 border-t-2 border-on-background-custom"
          >
            <div className="md:col-span-4 mb-8 md:mb-0 flex flex-col justify-between">
              <div>
                <div className={`font-mono text-sm mb-4 block uppercase ${item.active ? "text-primary-custom" : "text-on-surface-variant"}`}>
                  {item.period}
                </div>
                <h3 className="font-display text-2xl text-on-background-custom leading-tight pr-4 font-bold">
                  {item.degree}
                </h3>
              </div>
              
              {item.image && (
                <div className="mt-8 border border-on-background-custom/10 p-4 bg-on-background-custom/5 filter grayscale hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={item.image} 
                    alt={item.institution} 
                    className="w-full h-auto max-h-32 object-contain"
                  />
                </div>
              )}
            </div>

            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <h2 className="font-display text-4xl md:text-5xl text-on-background-custom mb-4 font-bold">
                  {item.institution}
                </h2>
                <div className="flex items-center gap-2 font-mono text-sm text-on-surface-variant mb-8 uppercase">
                  <MapPin size={18} />
                  <span>{item.location}</span>
                </div>
                <p className="font-sans text-xl text-on-surface-variant max-w-2xl mb-10">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-on-background-custom/10">
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-3 py-1.5 uppercase border-2 ${
                        item.active
                          ? "bg-on-background-custom text-background-custom border-on-background-custom"
                          : "border-on-background-custom text-on-background-custom"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {item.document && (
                  <div className="flex items-center gap-2 font-mono">
                    <button
                      onClick={() => setActiveDoc(item)}
                      className="flex items-center gap-2 border-2 border-primary-custom hover:bg-primary-custom hover:text-black transition-all px-4 py-2 text-xs font-bold uppercase rounded-sm cursor-pointer select-none"
                    >
                      <FileText size={14} />
                      <span>Decypt Record</span>
                    </button>

                    <a
                      href={item.document}
                      download
                      className="border-2 border-on-background-custom hover:bg-on-background-custom hover:text-background-custom p-2 rounded-sm cursor-pointer"
                      title="Download Certified Copy"
                    >
                      <Download size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Cyber Academic Record Decryption Modal */}
      <AnimatePresence>
        {activeDoc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background-custom/95 backdrop-blur-md"
            onClick={() => setActiveDoc(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 25 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl border-2 border-on-background-custom bg-[#0b0e14] p-2 overflow-hidden shadow-2xl rounded"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Terminal-like Header */}
              <div className="flex justify-between items-center px-4 py-3 bg-[#111622] border-b border-[#1c2435]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-primary-custom font-mono text-xs uppercase tracking-widest font-bold">
                    [SECURE RECORD]: {activeDoc.docLabel}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={activeDoc.document}
                    target="_blank"
                    rel="noreferrer"
                    className="text-on-background-custom hover:text-primary-custom p-1.5 transition-all focus:outline-none cursor-pointer text-xs font-mono flex items-center gap-1"
                    title="Open in new window"
                  >
                    <ExternalLink size={14} />
                    <span className="hidden sm:inline">FULLSCREEN</span>
                  </a>
                  <button
                    onClick={() => setActiveDoc(null)}
                    className="text-on-background-custom hover:text-rose-400 p-1.5 transition-all focus:outline-none cursor-pointer"
                    aria-label="Secure close session"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Secure content screen */}
              <div className="w-full bg-black overflow-hidden relative" style={{ height: "65vh" }}>
                {activeDoc.docType === "pdf" ? (
                  <iframe
                    src={`${activeDoc.document}#toolbar=0&navpanes=0`}
                    className="w-full h-full border-0 select-none bg-white"
                    title={activeDoc.docLabel}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#07090d] p-4 overflow-auto">
                    <img
                      src={activeDoc.document}
                      alt={activeDoc.docLabel}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}
              </div>

              {/* Status footer line */}
              <div className="flex justify-between items-center px-4 py-2.5 bg-[#111622] border-t border-[#1c2435] font-mono text-[9px] uppercase text-[#9caab8]/40">
                <span>DIGITAL ARCHIVE SYSTEMS SECURITY CLEARANCE</span>
                <span className="text-emerald-400 font-bold">STATUS: RECOVERED & VERIFIED</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
