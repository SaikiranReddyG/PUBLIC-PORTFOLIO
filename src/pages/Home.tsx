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

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 md:px-16 max-w-7xl mx-auto w-full" id="home">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-7 flex flex-col gap-8"
          >
            <h1 className="font-display text-7xl md:text-8xl uppercase leading-none font-bold">
              SAi.G
            </h1>
            <p className="font-sans text-xl max-w-2xl border-l-4 border-on-background-custom pl-4 text-on-surface-variant">
              Cybersecurity & network security engineering student — M2 Digital Security at ISEP Paris.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                to="/contact"
                className="bg-on-background-custom text-background-custom font-mono text-sm px-8 py-3 hover:bg-primary-container transition-colors uppercase border border-on-background-custom"
              >
                Contact
              </Link>
              <a
                href="https://drive.google.com/file/d/1r74_so1lt0I_YzqdBVUYi7IvMWX31n43/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-on-background-custom font-mono text-sm px-8 py-3 hover:bg-primary-container hover:text-background-custom hover:border-transparent transition-colors uppercase border-2 border-on-background-custom"
              >
                Download CV
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-5 mt-12 md:mt-0"
          >
            <div className="aspect-[3/4] overflow-hidden group relative">
              <img
                src="/assets/1779058089464.jpeg"
                alt="SAi.G Portrait"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal opacity-85 group-hover:opacity-100"
                style={{
                  maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)",
                  WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 80%)"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-custom/70 via-transparent to-background-custom/30 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="border-t-[3px] border-on-background-custom max-w-7xl mx-auto w-full" />
    </div>
  );
}
