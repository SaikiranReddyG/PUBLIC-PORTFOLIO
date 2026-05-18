import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ExternalLink, Terminal, ArrowRight } from "lucide-react";
import PulseProject from "./PulseProject";
import SentinelProject from "./SentinelProject";
import NetlabProject from "./NetlabProject";
import SdnIotProject from "./SdnIotProject";

interface ProjectData {
  title: string;
  overview: string;
  architecture: {
    id: string;
    title: string;
    description: string;
  }[];
  stack: string[];
  image: string;
  repoLink: string;
  gallery?: string[];
  codeSnippet?: string;
}

const projectData: Record<string, ProjectData> = {
  "pulse": {
    title: "PULSE",
    overview: "A fully operational Security Operations Center — log ingestion pipeline, real-time threat alerting, and live Grafana dashboards — containerized from the ground up using Docker, Redis, MQTT, and SQLite. No off-the-shelf SIEM. Every component designed, built, and tuned manually.",
    architecture: [
      { id: "01", title: "Real-Time Log Ingestion", description: "High-velocity telemetry pipelines processing raw data streams instantaneously." },
      { id: "02", title: "Custom Alerting Logic", description: "Deterministic rule-sets triggering immediate notifications via secure MQTT channels." },
      { id: "03", title: "Interactive Dashboard", description: "Granular visual analysis interfaces providing immediate systemic oversight." },
    ],
    stack: ["DOCKER", "REDIS", "SQLITE", "PYTHON"],
    image: "/assets/dashboardMAIN.png",
    repoLink: "https://github.com/SaikiranReddyG/PULSE.git",
    gallery: [
      "/assets/dashboardMENU.png",
      "/assets/dashboardPOPULATED.png",
      "/assets/syswatch.png",
      "/assets/sentinal.png",
      "/assets/netlab.png"
    ],
  },
  "sentinel": {
    title: "SENTINEL",
    overview: "A custom intrusion detection system built entirely in Python without relying on Scapy, libpcap, or any packet capture library. Operates at the raw socket level — dissecting Ethernet frames, IP headers, and TCP segments manually to detect port scans, SYN floods, and traffic anomalies at the protocol layer.",
    architecture: [
      { id: "01", title: "Packet Sniffing", description: "Implementation of native raw sockets to capture traffic directly from the network interface." },
      { id: "02", title: "Signature Detection", description: "Custom parsing engine that evaluates packet payloads against known malicious signatures." },
      { id: "03", title: "Anomaly Analysis", description: "Baseline comparison logic to identify irregular traffic spikes and potential DoS vectors." },
    ],
    stack: ["PYTHON", "RAW-SOCKETS", "PACKET-ANALYSIS", "TCP/IP", "NETWORK MONITORING"],
    image: "/assets/sentinal.png",
    repoLink: "https://github.com/SaikiranReddyG/sentinel.git",
  },
  "sdn-iot-detection": {
    title: "SDN IoT DETECTION",
    overview: "A Software-Defined Networking framework that applies machine learning to classify IoT traffic in real time. When the Random Forest model flags an anomaly, the Ryu controller responds by pushing OpenFlow rules directly onto the virtual switches — isolating compromised nodes before lateral movement occurs.",
    architecture: [
      { id: "01", title: "ML Classification", description: "Traffic features extracted via Suricata and fed into a Random Forest classifier." },
      { id: "02", title: "SDN Flow Rules", description: "Ryu controller uses OpenFlow v1.3 to program dynamic match-action tables." },
      { id: "03", title: "Real-Time Mitigation", description: "Automatic port blocking and traffic redirection to honeypots execute in milliseconds." },
    ],
    stack: ["MININET", "RYU-OPENFLOW", "SURICATA", "SCIKIT-LEARN", "RANDOM-FOREST"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    repoLink: "https://github.com/kusumanjali15/SDN-Project.git",
    codeSnippet: `clf = RandomForestClassifier(n_estimators=100)
clf.fit(X_train, y_train)
prediction = clf.predict(live_flow_features)
if prediction == 'ATTACK':
    trigger_mitigation(flow.src_ip)`,
  },
  "netlab": {
    title: "NETLAB",
    overview: "A self-contained attack-and-defense laboratory built on Linux network namespaces — lightweight, isolated, and forensically precise. Scapy handles offensive traffic generation, nftables enforces dynamic firewall rules, and Suricata monitors every packet crossing the virtual interfaces. Built to simulate real threat scenarios and validate defensive controls under controlled, repeatable conditions.",
    architecture: [
      { id: "01", title: "Virtual Network Topology", description: "Constructed using core Linux network namespaces, creating isolated protocol stacks." },
      { id: "02", title: "Traffic Simulation", description: "Powered by Scapy for crafting precise, malformed, or heavily fragmented packets." },
      { id: "03", title: "Security Monitoring", description: "Deep packet inspection implemented via Suricata acting as an IDS/IPS." },
    ],
    stack: ["LINUX-NAMESPACES", "SCAPY", "NFTABLES", "SURICATA", "VETH-PAIRS"],
    image: "/assets/netlab.png",
    repoLink: "https://github.com/SaikiranReddyG/netlab.git",
  },
  "cti-pipeline": {
    title: "CTI Pipeline",
    overview: "Cyber threat intelligence pipeline with automated ingestion, processing, and visualization from OTX and NVD sources.",
    architecture: [
      { id: "01", title: "Data Ingestion", description: "Automated fetch mechanisms orchestrate API calls to OTX and NVD using Airflow DAGs." },
      { id: "02", title: "Processing Pipeline", description: "Apache Spark clusters handle ETL tasks, normalizing complex JSON structures." },
      { id: "03", title: "Visualization / ELK", description: "Processed data is indexed into Elasticsearch with Kibana dashboards for SecOps." },
    ],
    stack: ["Airflow", "Spark", "ELK", "OTX", "NVD"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    repoLink: "https://github.com/SaikiranReddyG",
  },
  "web-attack-framework": {
    title: "Web Attack Framework",
    overview: "Web application security testing framework covering OWASP top vulnerabilities. Designed for high-throughput, asynchronous vulnerability scanning.",
    architecture: [
      { id: "01", title: "Asynchronous Task Processing", description: "Leverages Celery and Redis to handle concurrent scanning tasks." },
      { id: "02", title: "Security Testing Modules", description: "Pluggable architecture for implementing specific OWASP Top 10 vulnerability checks." },
      { id: "03", title: "Real-time Dashboard", description: "React-based frontend providing live updates on scan progress via WebSockets." },
    ],
    stack: ["FastAPI", "Celery", "React", "OWASP"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    repoLink: "https://github.com/Anurag080102/attack-sim.git",
    codeSnippet: `@celery_app.task(bind=True, max_retries=3)
def execute_scan_module(self, target_url: str, module_type: str):
    try:
        scanner = ModuleFactory.get_scanner(module_type)
        results = scanner.run(target_url)
        db.save_results(self.request.id, results)
        return results
    except Exception as e:
        self.retry(exc=e, countdown=60)`,
  },
};

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();

  if (id === "pulse") {
    return <PulseProject />;
  }

  if (id === "sentinel") {
    return <SentinelProject />;
  }

  if (id === "netlab") {
    return <NetlabProject />;
  }

  if (id === "sdn-iot-detection") {
    return <SdnIotProject />;
  }

  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="py-40 px-16 text-center">
        <h1 className="font-display text-4xl uppercase">Project Not Found</h1>
        <Link to="/" className="text-primary-custom hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-24"
    >
      <header className="mb-16 border-b-4 border-on-background-custom pb-8">
        <h1 className="font-display text-5xl md:text-7xl text-on-background-custom uppercase tracking-tight font-bold">
          {project.title}
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-8 space-y-12 pr-0 md:pr-12 md:border-r-2 border-on-background-custom pb-12 md:pb-0">
          <section>
            <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-4 tracking-widest">Overview</h2>
            <p className="font-sans text-xl text-on-background-custom leading-relaxed">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-6 tracking-widest border-b border-on-background-custom pb-2 inline-block">Key Architecture</h2>
            <ul className="space-y-10 mt-8">
              {project.architecture.map((item) => (
                <li key={item.id} className="flex items-start gap-6">
                  <span className="font-display text-4xl text-primary-custom leading-none">{item.id}</span>
                  <div>
                    <h3 className="font-display text-2xl text-on-background-custom font-bold">{item.title}</h3>
                    <p className="font-sans text-lg text-on-surface-variant mt-2">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {project.codeSnippet && (
            <section>
              <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-4 tracking-widest">Implementation</h2>
              <div className="bg-[#121212] p-6 border border-on-background-custom">
                <pre className="font-mono text-on-primary-container overflow-x-auto">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            </section>
          )}

          {project.gallery && (
            <section>
              <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-6 tracking-widest">System Interface Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="border-2 border-on-background-custom bg-surface-container overflow-hidden aspect-video relative group"
                  >
                    <img
                      src={img}
                      alt={`Gallery view ${index + 1}`}
                      className="w-full h-full object-cover transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute bottom-2 right-2 font-mono text-[10px] bg-on-background-custom text-background-custom px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      VIEW_{index + 1}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="md:col-span-4 space-y-12">
          <section>
            <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-4 tracking-widest">Deployment Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="bg-on-background-custom text-background-custom font-mono text-sm uppercase px-3 py-1">
                  {s}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-mono text-sm text-on-surface-variant uppercase mb-4 tracking-widest">Repository</h2>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full bg-on-background-custom text-background-custom font-mono text-sm uppercase px-8 py-4 hover:bg-primary-custom transition-colors"
            >
              View on GitHub
              <ExternalLink size={18} className="ml-2" />
            </a>
          </section>
        </div>
      </div>

      <div className="mt-24 border-2 border-on-background-custom p-2 bg-surface-container-highest">
        <div className="w-full aspect-video bg-surface overflow-hidden relative group border border-on-background-custom">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
        <div className="mt-2 flex justify-between items-center px-2">
          <span className="font-mono text-xs text-on-surface-variant uppercase">Fig. 1</span>
          <span className="font-mono text-xs text-on-surface-variant uppercase">System Analysis</span>
        </div>
      </div>
    </motion.div>
  );
}
