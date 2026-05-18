import { motion } from "motion/react";
import { ArrowLeft, Clock, Code, Database, Globe, Network, Shield, Zap, Terminal, Activity, Bell, Github } from "lucide-react";
import { Link } from "react-router-dom";

const techStack = [
  "Python", "C", "Bash", "Docker", "FastAPI", "Shell", "SQLite", "Textual TUI", "Pydantic"
];

const sensors = [
  { id: "sentinel", title: "sentinel", description: "Intrusion Detection System (IDS)", status: "STABLE", color: "text-primary-custom" },
  { id: "syswatch", title: "syswatch", description: "System and Metric Monitor", status: "STABLE", color: "text-primary-custom" },
  { id: "netlab", title: "netlab", description: "Attack & Scenario Lab", status: "BETA", color: "text-secondary-custom" },
];

const roadmap = [
  { item: "Live tail mode for events", done: true },
  { item: "Anomaly markers in graphs", done: true },
  { item: "HTTP dashboard variant (SvelteKit)", done: false },
  { item: "PCAP integration for Sentinel", done: false },
  { item: "Distributed multi-node collectors", done: false },
  { item: "Custom rule editor in TUI", done: false },
  { item: "Database migration to PostgreSQL optional", done: false },
  { item: "Native TLS support for receiver", done: false },
];

export default function PulseProject() {
  return (
    <div className="bg-background-custom text-on-background-custom min-h-screen selection:bg-primary-custom selection:text-on-primary-custom">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-outline-variant bg-background-custom/80 backdrop-blur-md px-6 py-4 flex justify-between items-center font-mono text-xs tracking-widest uppercase">
        <span className="text-primary-custom font-bold">PULSE</span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/SaikiranReddyG/PULSE.git" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-custom transition-colors">
            <Github size={14} /> Repository
          </a>
          <Link to="/projects" className="flex items-center gap-2 hover:text-primary-custom transition-colors">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-24 overflow-x-hidden">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-4 block">PULSE:PLATFORM</span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 max-w-5xl">
              Security operations for your linux machine.
            </h1>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-3xl mb-12 leading-relaxed">
              A self-hosted SOC stack that collects, stores, and visualises security events from custom-built tools — through a unified HTTP receiver, SQLite persistence, Redis streaming, and a live terminal dashboard.
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {techStack.map((tech) => (
                <span key={tech} className="border border-outline-variant bg-surface-container px-3 py-1 font-mono text-[10px] uppercase">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-outline-variant">
              <div>
                <span className="font-mono text-[10px] uppercase text-on-surface-variant tracking-widest block mb-2">Events Ingested</span>
                <span className="font-display text-3xl font-bold text-primary-custom tracking-tighter">30k+</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-on-surface-variant tracking-widest block mb-2">Tools Integrated</span>
                <span className="font-display text-3xl font-bold text-primary-custom tracking-tighter">3</span>
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-on-surface-variant tracking-widest block mb-2">Lines of Code</span>
                <span className="font-display text-3xl font-bold text-primary-custom tracking-tighter">1,250+</span>
              </div>
            </div>
            <div className="mt-8">
              <span className="italic font-sans text-xs text-on-surface-variant opacity-60">Built during MS at ISEP Paris.</span>
            </div>
          </motion.div>
        </div>

        {/* How It Works Section */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-4 block text-center">HOW IT WORKS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">Three tools. One receiver. Everything flows downstream.</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8">
                <div className="border border-outline-variant bg-black p-4 aspect-video flex items-center justify-center relative group overflow-hidden">
                  <img src="/assets/dashboardMAIN.png" alt="Architecture Diagram" className="w-full h-full object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-700" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-xs border border-primary-custom px-4 py-2 bg-background-custom/80">PULSE SECURITY OPERATIONS PLATFORM</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-8">
                <div className="border-l border-primary-custom pl-6">
                  <span className="font-mono text-xs text-primary-custom block mb-2">01</span>
                  <h3 className="font-display text-lg font-bold mb-2">Data Integrity</h3>
                  <p className="font-sans text-sm text-on-surface-variant">SQLite is truth. Redis is the bus. Zero contention between storage and real-time streaming.</p>
                </div>
                <div className="border-l border-primary-custom pl-6">
                  <span className="font-mono text-xs text-primary-custom block mb-2">02</span>
                  <h3 className="font-display text-lg font-bold mb-2">Interoperability</h3>
                  <p className="font-sans text-sm text-on-surface-variant">Contract-driven. Not framework-coupled. JSON schema contract ensures any tool can ingest data.</p>
                </div>
                <div className="border-l border-primary-custom pl-6">
                  <span className="font-mono text-xs text-primary-custom block mb-2">03</span>
                  <h3 className="font-display text-lg font-bold mb-2">Orchestration</h3>
                  <p className="font-sans text-sm text-on-surface-variant">One .env file. One make up. Four Docker services running in perfect synchronization.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Under The Hood */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-16">
          <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-4 block text-center">UNDER THE HOOD</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-24">Three components. Each one could be its own project.</h2>

          {/* Component 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary-custom">01.</span> Event Ingestion Engine
              </h3>
              <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                A robust FastAPI POST /events endpoint acting as the gateway for the entire system. Every incoming request is strictly schema-validated via Pydantic before hitting the pipeline.
              </p>
              <ul className="space-y-4 font-mono text-xs">
                <li className="flex items-center gap-3"><Zap size={14} className="text-primary-custom" /> Async operation handling</li>
                <li className="flex items-center gap-3"><Shield size={14} className="text-primary-custom" /> Multi-sensor authentication</li>
                <li className="flex items-center gap-3"><Globe size={14} className="text-primary-custom" /> Automatic Redis publishing</li>
              </ul>
            </div>
            <div className="bg-surface-container border border-outline-variant p-6 font-mono text-[11px] relative">
              <span className="absolute top-2 right-4 text-[9px] opacity-40 uppercase">schema.json</span>
              <pre className="text-primary-custom leading-relaxed">
{`{
  "source": "string",
  "event_type": "string",
  "severity": "enum[info, low, high, critical]",
  "timestamp": "ISO8601",
  "metadata": {
    "src_ip": "ipv4",
    "dst_ip": "ipv4",
    "payload": "string"
  }
}`}
              </pre>
            </div>
          </div>

          {/* Component 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-40 lg:flex-row-reverse">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 gap-4">
                <img src="/assets/dashboardMENU.png" alt="TUI Screenshot 1" className="border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500" />
                <img src="/assets/dashboardPOPULATED.png" alt="TUI Screenshot 2" className="border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary-custom">02.</span> Terminal TUI
              </h3>
              <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                Built with the Textual framework, the dashboard provides a high-density, real-time interface for monitoring. It interfaces directly with SQLite for historically accurate views while remaining keyboard-navigable.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container border border-outline-variant p-6">
                  <h4 className="font-display font-bold text-secondary-custom mb-2">Tabbed</h4>
                  <p className="text-xs text-on-surface-variant">Dedicated views for Syswatch, Sentinel, and Netlab.</p>
                </div>
                <div className="bg-surface-container border border-outline-variant p-6">
                  <h4 className="font-display font-bold text-secondary-custom mb-2">Real-time</h4>
                  <p className="text-xs text-on-surface-variant">Live event refreshing with sub-second latency.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Component 03 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="text-primary-custom">03.</span> Automated Alerting
              </h3>
              <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                Two background workers handle downstream communication. The alert_worker performs real-time Discord notification for critical events via Redis XREAD, while the digest_worker generates summarized daily reports.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase mb-1">alert_worker</h4>
                  <p className="text-xs text-on-surface-variant">Reactive: Triggers Discord webhooks on severity 'high' or 'critical' within milliseconds of ingestion.</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs font-bold uppercase mb-1">digest_worker</h4>
                  <p className="text-xs text-on-surface-variant">Periodic: Analyzes SQLite data every 24 hours to post a statistical overview of the host's health.</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container border border-outline-variant p-8 flex items-center justify-center">
              <div className="w-full max-w-sm space-y-4">
                <div className="bg-black/40 border-l-2 border-primary-custom p-4 font-mono text-[10px]">
                  <span className="text-on-surface-variant opacity-60 mb-2 block">PULSE // ALERT_WORKER // NOW</span>
                  <p className="text-primary-custom mb-2 font-bold">[ALERT] CRITICAL: HTTPS flood detected from 192.168.1.50.</p>
                  <p className="text-on-surface-variant">Actions: 200/sec.</p>
                </div>
                <div className="bg-black/40 border-l-2 border-outline-variant p-4 font-mono text-[10px] opacity-40">
                  <span className="text-on-surface-variant block mb-1">PULSE // DIGEST_WORKER // 09:00</span>
                  <p>Daily report generated. 15,241 events processed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Ops Gallery */}
        <section className="bg-surface-container-lowest py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-4 block">LIVE OPS</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-16">Captured during live operation. Real alerts. Real data.</h2>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8">
                <img src="/assets/dashboardPOPULATED.png" alt="Live Overview" className="w-full h-auto border border-outline-variant grayscale hover:grayscale-0 transition-all duration-700" />
                <p className="font-mono text-[10px] mt-4 opacity-60">Overviews during an active HTTPS flood exercise. 30,487 events.</p>
              </div>
              <div className="md:col-span-4 flex flex-col gap-4">
                <img src="/assets/sentinal.png" alt="Sentinel Operation" className="w-full border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500" />
                <img src="/assets/syswatch.png" alt="Syswatch Metrics" className="w-full border border-outline-variant grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-12">
            <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-4 block">THE ECOSYSTEM</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">Integrated Sensors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sensors.map((sensor) => (
                <div key={sensor.id} className="border border-outline-variant bg-surface-container p-6 relative group hover:border-primary-custom transition-colors">
                  <h4 className={`font-display text-lg font-bold mb-1 ${sensor.color}`}>{sensor.title}</h4>
                  <p className="text-xs text-on-surface-variant font-sans">{sensor.description}</p>
                  <span className="absolute top-4 right-4 font-mono text-[8px] border border-outline-variant px-1.5 py-0.5 tracking-[0.2em]">
                    {sensor.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Roadmap & Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="border border-outline-variant p-8 bg-surface-container">
            <span className="font-mono text-[10px] text-primary-custom tracking-[0.3em] uppercase mb-6 block">ROADMAP</span>
            <ul className="space-y-3">
              {roadmap.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 font-mono text-xs">
                  <div className={`w-2 h-2 ${item.done ? "bg-primary-custom" : "border border-outline-variant"}`}></div>
                  <span className={item.done ? "text-on-background-custom" : "text-on-surface-variant opacity-40 line-through"}>
                    {item.item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className="border-t border-outline-variant py-12 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-2">Saikiran Gangula</h3>
            <p className="font-mono text-[10px] tracking-widest opacity-60">© 2024 PULSE SYSTEMS. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">
             <a href="https://github.com/SaikiranReddyG/PULSE.git" target="_blank" rel="noopener noreferrer" className="hover:text-primary-custom transition-colors">PULSE REPO</a>
             <Link to="/projects/pulse" className="hover:text-primary-custom transition-colors text-primary-custom font-bold underline underline-offset-8 decoration-2">PULSE</Link>
             <Link to="/projects/sentinel" className="hover:text-primary-custom transition-colors">SENTINEL</Link>
             <Link to="/projects/netlab" className="hover:text-primary-custom transition-colors">NETLAB</Link>
             <Link to="/projects/sdn-iot-detection" className="hover:text-primary-custom transition-colors">SDN IoT</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
