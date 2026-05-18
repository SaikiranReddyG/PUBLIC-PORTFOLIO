import { MapPin } from "lucide-react";
import { motion } from "motion/react";

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
    },
    {
      period: "2020 — 2023",
      degree: "B.Tech Electronics and communciation Engineering",
      institution: "Gurunanak Institute of Technology",
      location: "Hyderabad, India",
      image: "/assets/gnit.png",
      description: "Comprehensive foundational engineering program with a strong emphasis on core electronics, embedded systems and software development lifecycles. Established the analytical groundwork required for advanced technical problem-solving.",
      tags: ["ELECTRONICS", "Telecommuication", "Hardware engineering"],
      active: false,
    },
  ];

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

            <div className="md:col-span-8">
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
              <div className="flex flex-wrap gap-3">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`font-mono text-sm px-4 py-2 uppercase border-2 ${
                      item.active
                        ? "bg-on-background-custom text-background-custom border-on-background-custom"
                        : "border-on-background-custom text-on-background-custom"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
