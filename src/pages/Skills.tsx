import { motion } from "motion/react";

export default function Skills() {
  const skills = [
    {
      id: "01",
      title: "Network Security",
      items: ["Suricata IDS", "Wireshark", "Nmap", "SDN (Ryu, OpenFlow, Open vSwitch, Mininet)"],
      cols: 8,
    },
    {
      id: "02",
      title: "Security Tools & AppSec",
      items: ["Burp Suite", "Metasploit (basics)", "OWASP Top 10 methodology"],
      cols: 4,
    },
    {
      id: "03",
      title: "Systems & Infrastructure",
      items: ["Linux", "Docker", "systemd", "SSH key management", "VirtualBox"],
      cols: 4,
    },
    {
      id: "04",
      title: "Data Engineering & Threat Intel",
      items: ["Apache Airflow", "Apache Spark", "Elasticsearch", "Kibana", "Grafana", "Redis", "SQLite"],
      cols: 8,
    },
    {
      id: "05",
      title: "Programming",
      items: ["Python (primary)", "C (systems/networking)", "Bash", "JavaScript", "SQL"],
      cols: 6,
    },
    {
      id: "06",
      title: "AI & Automation",
      items: ["Local LLM inference (Ollama, llama.cpp)", "RAG pipelines", "n8n", "AI agent design"],
      cols: 6,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24">
      <header className="mb-24 border-b-4 border-on-background-custom pb-12">
        <h1 className="font-display text-5xl md:text-7xl uppercase text-on-background-custom mb-4 font-bold">
          Technical Arsenal
        </h1>
        <p className="font-sans text-xl text-on-surface-variant max-w-2xl">
          A structured breakdown of core competencies, tools, and environments utilized in securing, monitoring, and engineering resilient systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {skills.map((skill) => (
          <motion.section
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${
              skill.cols === 8 ? 'md:col-span-8' : 
              skill.cols === 6 ? 'md:col-span-6' : 
              'md:col-span-4'
            } border border-outline-variant p-8 relative overflow-hidden group bg-surface-container-low`}
          >
            <div className="absolute inset-0 bg-primary-custom/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-0"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 border-b border-on-background-custom pb-4 mb-6 text-on-background-custom">
                <span className="font-display text-4xl text-primary-custom font-bold">{skill.id}</span>
                <h2 className="font-display text-2xl uppercase font-bold">{skill.title}</h2>
              </div>
              <ul className="flex flex-wrap gap-4">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-on-background-custom block"></span>
                    <span className="font-mono text-sm uppercase">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
