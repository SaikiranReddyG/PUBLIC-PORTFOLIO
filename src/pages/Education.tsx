import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();

  const education = [
    {
      period: "2024 — PRESENT",
      degree: "M2 Digital Security & Networks",
      institution: "ISEP Paris",
      location: "Paris, France",
      image: "/assets/ISEP.png",
      description: "Advanced master's degree focusing on robust architectural design, threat modeling, and cryptographic protocols. Developing deep technical expertise in securing distributed systems and modern network infrastructure against sophisticated cyber threats.",
      tags: ["Security", "Networks", "Telecommunications", "Cryptography"],
      active: true
    },
    {
      period: "2020 — 2023",
      degree: "B.Tech Electronics and communication Engineering",
      institution: "Gurunanak Institute of Technology",
      location: "Hyderabad, India",
      image: "/assets/gnit.png",
      description: "Comprehensive foundational engineering program with a strong emphasis on core electronics, embedded systems and software development lifecycles. Established the analytical groundwork required for advanced technical problem-solving.",
      tags: ["ELECTRONICS", "Telecommunication", "Hardware engineering"],
      active: false
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <header className="mb-24 pt-16">
        <h1 className="font-display text-5xl md:text-7xl text-on-background-custom uppercase font-bold">
          {t("education.header_title")}
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
                  {index === 0 ? t("education.m2_degree") : t("education.btech_degree")}
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
                  {index === 0 ? t("education.m2_desc") : t("education.btech_desc")}
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
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
