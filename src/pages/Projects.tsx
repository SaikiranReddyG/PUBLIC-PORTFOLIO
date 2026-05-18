import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Code } from "lucide-react";

const projects = [
  {
    id: "pulse",
    title: "PULSE",
    description: "A fully operational Security Operations Center — log ingestion pipeline, real-time threat alerting, and live dashboard — containerized from the ground up using Docker, Redis and SQLite. No off-the-shelf SIEM. Every component designed, built, and tuned manually.",
    tags: ["DOCKER", "REDIS", "SQLITE", "PYTHON"],
  },
  {
    id: "sentinel",
    title: "SENTINEL",
    description: "A custom intrusion detection system built entirely in Python without relying on Scapy, libpcap, or any packet capture library. Operates at the raw socket level — dissecting Ethernet frames, IP headers, and TCP segments manually to detect port scans, SYN floods, and traffic anomalies at the protocol layer.",
    tags: ["PYTHON", "RAW-SOCKETS", "PACKET-ANALYSIS", "TCP/IP"],
  },
  {
    id: "sdn-iot-detection",
    title: "SDN IoT DETECTION",
    description: "A Software-Defined Networking framework that applies machine learning to classify IoT traffic in real time. When the Random Forest model flags an anomaly, the Ryu controller responds by pushing OpenFlow rules directly onto the virtual switches — isolating compromised nodes before lateral movement occurs.",
    tags: ["MININET", "RYU-OPENFLOW", "SURICATA", "SCIKIT-LEARN"],
  },
  {
    id: "netlab",
    title: "NETLAB",
    description: "A self-contained attack-and-defense laboratory built on Linux network namespaces — lightweight, isolated, and forensically precise. Scapy handles offensive traffic generation, nftables enforces dynamic firewall rules, and Suricata monitors every packet crossing the virtual interfaces. Built to simulate real threat scenarios and validate defensive controls under controlled, repeatable conditions.",
    tags: ["LINUX-NAMESPACES", "SCAPY", "NFTABLES", "SURICATA"],
  },
];

const secondaryProjects = [
  { id: "cti-pipeline", title: "CTI Pipeline", category: "Cyber Threat Intelligence" },
  { id: "web-attack-framework", title: "Web Attack Framework", category: "Penetration Testing" },
];

export default function Projects() {
  return (
    <div className="flex flex-col pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
      <section id="projects">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-5xl uppercase flex items-center gap-4">
              <span className="text-primary-container">01.</span> Projects
            </h2>
          </div>
          <div className="md:col-span-8 flex items-end">
            <p className="font-sans text-xl border-l-2 border-on-background-custom pl-4 max-w-2xl text-on-surface-variant">
              Selected technical implementations focusing on network security, threat detection, and infrastructure resilience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              className="border border-outline-variant bg-surface-container flex flex-col h-full group hover:border-primary-custom transition-all duration-300"
            >
              <div className="p-8 pb-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 pb-4 border-b border-outline-variant">
                  <h3 className="font-display text-2xl uppercase font-bold text-on-surface">{project.title}</h3>
                  <div className="text-primary-custom opacity-40 group-hover:opacity-100 transition-opacity">
                    <Code size={24} />
                  </div>
                </div>
                <p className="font-sans text-base mb-8 flex-grow text-on-surface-variant leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-outline-variant text-on-surface-variant font-mono text-[10px] px-2 py-1 uppercase bg-background-custom/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link 
                to={`/projects/${project.id}`}
                className="mx-8 mb-8 flex items-center justify-between bg-primary-custom text-on-primary px-6 py-4 font-mono text-sm uppercase tracking-widest hover:bg-surface-tint transition-all group/btn shadow-[4px_4px_0px_#00210f] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
              >
                <span className="font-bold">Access Project Node</span>
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {secondaryProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="border-t border-b border-on-background-custom py-6 flex justify-between items-center group hover:bg-surface-container transition-colors px-4"
            >
              <div>
                <h4 className="font-display text-xl uppercase font-bold">{project.title}</h4>
                <span className="font-mono text-xs text-on-surface-variant uppercase">{project.category}</span>
              </div>
              <ArrowRight className="text-on-background-custom group-hover:text-primary-container transition-colors" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
