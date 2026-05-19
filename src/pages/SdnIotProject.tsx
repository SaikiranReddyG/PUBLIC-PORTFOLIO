import { motion } from "motion/react";
import { ArrowLeft, Cpu, Activity, Shield, Zap, Terminal, Database, Server, ChevronRight, Binary, List, Users, Github } from "lucide-react";
import { Link } from "react-router-dom";

const techStrip = [
  "Ryu SDN Controller", "OpenFlow v1.3", "Open vSwitch", "Mininet", "Suricata v7", "scikit-learn", "Node-RED", "Python", "Kali Linux"
];

const team = [
  "Saikiran Gangula", "Kusumanjali Vegi", "Shane Samuel Pradeep"
];

const pipelineStages = [
  { stage: "SIMULATE", component: "Node-RED", description: "IoT traffic + attacks", color: "#6366f1" },
  { stage: "ROUTE", component: "Mininet / OvS", description: "SDN network + mirroring", color: "#8b5cf6" },
  { stage: "DETECT", component: "Suricata", description: "IDS alerts (EVE JSON)", color: "#a855f7" },
  { stage: "CLASSIFY", component: "ML Engine", description: "Attack type + confidence", color: "#d946ef" },
  { stage: "DECIDE", component: "Ryu Controller", description: "OpenFlow block rule", color: "#ec4899" },
  { stage: "ENFORCE", component: "Open vSwitch", description: "DROP rule enforced", color: "#f43f5e" },
];

export default function SdnIotProject() {
  return (
    <div className="bg-[#0f111a] text-[#dfe2ef] min-h-screen selection:bg-[#6366f1]/30 selection:text-[#a5b4fc]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#242938] bg-[#0f111a] px-6 py-4 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase">
        <span className="text-[#a5b4fc] font-bold">SDN-ASSISTED DETECTION</span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/kusumanjali15/SDN-Project" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#a5b4fc] transition-colors">
            <Github size={14} /> Repository
          </a>
          <Link to="/projects" className="flex items-center gap-2 hover:text-[#a5b4fc] transition-colors">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32">
          <div className="opacity-100">
            <span className="font-mono text-[10px] text-[#a5b4fc] tracking-[0.4em] uppercase mb-6 block">SDN-ASSISTED ATTACK DETECTION</span>
            <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
              Detect. Classify. Block. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#d946ef]">No human in the loop.</span>
            </h1>
            <p className="font-sans text-xl text-[#b0b8cc] max-w-3xl mb-12 leading-relaxed">
              An end-to-end automated security pipeline for IoT networks. Suricata detects the threat, a trained ML model classifies it, and a Ryu SDN controller installs an OpenFlow drop rule — all in real time, milliseconds apart.
            </p>

            <div className="flex flex-wrap gap-2 mb-16">
              {techStrip.map((tech) => (
                <span key={tech} className="border border-[#242938] bg-[#1a1f2e] px-3 py-1 font-mono text-[10px] uppercase text-[#a5b4fc]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#242938] mb-16">
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#242938] hover:bg-[#1a1f2e] transition-colors">
                 <span className="text-[#a5b4fc] font-mono text-[10px] uppercase tracking-widest mb-4 block">IDS</span>
                 <p className="text-sm text-[#b0b8cc]">Detects threats. <br/>Can't block them.</p>
              </div>
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#242938] hover:bg-[#1a1f2e] transition-colors">
                 <span className="text-[#a5b4fc] font-mono text-[10px] uppercase tracking-widest mb-4 block">ML</span>
                 <p className="text-sm text-[#b0b8cc]">Classifies attacks. <br/>Can't enforce anything.</p>
              </div>
              <div className="p-8 hover:bg-[#1a1f2e] transition-colors">
                 <span className="text-[#a5b4fc] font-mono text-[10px] uppercase tracking-widest mb-4 block">SDN</span>
                 <p className="text-sm text-[#b0b8cc]">Blocks traffic. <br/>Doesn't know what to block.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-8 border-t border-[#242938]">
               <div className="flex items-center gap-4 text-[#8a94ad]">
                  <Users size={16} />
                  <span className="font-sans text-xs uppercase tracking-widest">
                     Team Project: {team.join(", ")}
                  </span>
               </div>
               <span className="font-mono text-[10px] text-[#a5b4fc] uppercase tracking-widest bg-[#1a1f2e] px-4 py-2 border border-[#242938]">
                  ISEP Paris · Digital Security & Networks
               </span>
            </div>
          </div>
        </section>

        {/* THE PIPELINE */}
        <section className="py-32 bg-[#121520] border-y border-[#242938]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="text-center mb-24">
               <span className="font-mono text-[10px] text-[#a5b4fc] tracking-[0.2em] uppercase mb-4 block">THE ARCHITECTURE</span>
               <h2 className="font-display text-4xl font-bold mb-4">Six stages. Each one feeds the next.</h2>
               <p className="text-[#8a94ad] max-w-2xl mx-auto italic text-sm">
                 Detection → classification → enforcement. No manual intervention.
               </p>
            </div>

            {/* Visual Pipeline Diagram */}
            <div className="relative mb-32">
               <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#242938] to-transparent hidden lg:block"></div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative z-10">
                  {pipelineStages.map((s, idx) => (
                    <div key={s.stage} className="flex flex-col items-center">
                       <div 
                         className="w-full bg-[#1a1f2e] border border-[#242938] p-6 text-center transform transition-all group-hover:scale-105"
                         style={{ borderBottom: `2px solid ${s.color}` }}
                       >
                          <span className="block font-mono text-[8px] text-[#8a94ad] mb-2">{s.stage}</span>
                          <span className="block font-display font-bold text-sm mb-1">{s.component}</span>
                          <span className="block font-sans text-[10px] text-[#8a94ad] leading-tight">{s.description}</span>
                       </div>
                       {idx < pipelineStages.length - 1 && (
                          <div className="lg:hidden h-8 w-px bg-[#242938] my-2"></div>
                       )}
                    </div>
                  ))}
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
               <div className="lg:col-span-4 space-y-6">
                  <div className="bg-[#1a1f2e] p-6 border-l-2 border-[#a5b4fc]">
                     <h4 className="font-mono text-[#a5b4fc] text-xs font-bold uppercase mb-2">Architectural Logic</h4>
                     <p className="text-xs text-[#8a94ad] leading-relaxed">
                        Each stage is independently replaceable. Suricata can be swapped for another IDS. The ML model can be retrained on new data. OpenFlow rules are generated dynamically — no hardcoded ACLs.
                     </p>
                  </div>
                  <p className="text-sm text-[#b0b8cc] leading-relaxed">
                     The system bridges the gap between passive observation and active mitigation. Traffic is mirrored to the IDS cluster, keeping the data plane fast while the control plane makes intelligent decisions.
                  </p>
               </div>
                <div className="lg:col-span-8">
                  <div className="border border-[#242938] bg-[#0a0c14] p-2 relative group overflow-hidden">
                     <div className="aspect-video bg-[#0d0f17] flex items-center justify-center border border-[#242938] overflow-hidden">
                        <img 
                          src="/assets/SDN-PROJECT-system-architecture.png" 
                          alt="System Architecture Overview" 
                          className="w-full h-full object-contain grayscale hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                        />
                     </div>
                     <div className="absolute top-4 right-4 bg-[#0f111a]/80 backdrop-blur-md border border-[#242938] p-3 flex items-center gap-3">
                        <Database size={16} className="text-[#a5b4fc]" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-[#a5b4fc]">System Architecture Blueprint</span>
                     </div>
                     <div className="mt-4 px-2 pb-2 flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-[#8a94ad]">
                        <span>Fig 2.1 — System Flow Diagram</span>
                        <span className="text-[#a5b4fc]">Integrated Defense Pipeline</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* STAGE BREAKDOWN */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-24">
            <span className="font-mono text-[10px] text-[#a5b4fc] tracking-[0.2em] uppercase mb-4 block">HOW IT WORKS</span>
            <h2 className="font-display text-4xl font-bold">Four key stages of the pipeline.</h2>
          </div>

          <div className="space-y-48">
            {/* 3A — SIMULATION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono text-[10px] text-[#6366f1] mb-2 block font-bold">01 — SIMULATION</span>
                <h3 className="font-display text-3xl font-bold mb-4">Traffic Generation + SDN Network</h3>
                <p className="font-mono text-xs text-[#8a94ad] uppercase mb-6 tracking-widest">Node-RED simulates IoT devices. Mininet routes the traffic.</p>
                <div className="space-y-4 text-[#b0b8cc] text-sm leading-relaxed">
                  <p>
                    Node-RED produces two types of traffic: normal periodic sensor readings (temperature, humidity — what a real IoT deployment looks like) and attack traffic — ICMP flood and TCP SYN flood — triggered on demand from a live dashboard.
                  </p>
                  <p>
                    Traffic is injected onto the Mininet topology: 8 virtual hosts connected through Open vSwitch instances. Traffic is mirrored to a dedicated IDS port so Suricata inspects every packet without sitting in the forwarding path.
                  </p>
                </div>
              </div>
              <div className="border border-[#242938] bg-[#0a0c14] p-4 group">
                 <div className="aspect-video bg-[#1a1f2e] overflow-hidden relative border border-[#242938]">
                    <img 
                      src="/assets/SDN-PROJECT-node-red-running.png" 
                      alt="Node-RED Dashboard Running" 
                      className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 left-4">
                       <span className="bg-[#0f111a]/80 backdrop-blur-sm border border-[#242938] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[#a5b4fc]">Active Simulation</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* 3B — DETECTION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <span className="font-mono text-[10px] text-[#a855f7] mb-2 block font-bold">02 — DETECTION</span>
                <h3 className="font-display text-3xl font-bold mb-4">Intrusion Detection</h3>
                <p className="font-mono text-xs text-[#8a94ad] uppercase mb-6 tracking-widest">Suricata inspects mirrored traffic. Alerts as structured JSON.</p>
                <div className="space-y-4 text-[#b0b8cc] text-sm leading-relaxed">
                  <p>
                    Suricata v7 runs in IDS mode on the mirrored interface with custom detection rules tuned for Node-RED patterns — ICMP flood thresholds and SYN flood rate limits.
                  </p>
                  <p>
                    Alerts land in EVE JSON format: signature ID, IPs, protocol, and raw metadata. Machine-readable output ensures the ML engine consumes them with zero parsing latency.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 border border-[#242938] bg-[#0a0c14] p-4 group">
                 <div className="aspect-video bg-[#1a1f2e] border border-[#242938] overflow-hidden relative">
                    <img 
                      src="/assets/SDN-PROJECT-suricata-and-ML-running.png" 
                      alt="Suricata and ML Models Running" 
                      className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-[#0f111a]/80 backdrop-blur-sm border border-[#242938] px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[#a5b4fc]">Suricata + ML Socket</span>
                    </div>
                 </div>
              </div>
            </div>

            {/* 3C — CLASSIFICATION */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono text-[10px] text-[#d946ef] mb-2 block font-bold">03 — CLASSIFICATION</span>
                <h3 className="font-display text-3xl font-bold mb-4">Attack Classification</h3>
                <p className="font-mono text-xs text-[#8a94ad] uppercase mb-6 tracking-widest">Pre-trained models. Inference under 5ms.</p>
                <div className="space-y-4 text-[#b0b8cc] text-sm leading-relaxed">
                  <p>
                    The ML module extracts features from alerts: signature, packet rate, flow duration, and byte counts. It uses Random Forest and Gradient Boosting models cross-validated on captured IoT traffic.
                  </p>
                  <p>
                    The ML layer adds critical context — distinguishing sustained attacks from transient spikes. This intelligence makes automated blocking safe enough to run without human oversight.
                  </p>
                </div>
                <div className="mt-8 bg-[#1a1f2e] p-6 border-l-2 border-[#d946ef] text-[11px] text-[#b0b8cc]">
                   <span className="font-bold text-[#d946ef] uppercase block mb-1">Contextual Shield</span>
                   "Suricata fires alerts; the ML layer adds the 'Why' and the 'Confidence'. That's the difference between a False Positive and a block rule."
                </div>
              </div>
              <div className="border border-[#242938] bg-[#0a0c14] p-4 group">
                 <div className="aspect-video bg-[#1a1f2e] border border-[#242938] overflow-hidden relative">
                    <img 
                      src="/assets/SDN-PROJECT-data-flow.png" 
                      alt="System Data Flow" 
                      className="w-full h-full object-contain grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 right-4">
                       <Activity size={16} className="text-[#d946ef]" />
                    </div>
                 </div>
              </div>
            </div>

            {/* 3D — ENFORCEMENT */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <span className="font-mono text-[10px] text-[#f43f5e] mb-2 block font-bold">04 — ENFORCEMENT</span>
                <h3 className="font-display text-3xl font-bold mb-4">Automated Mitigation</h3>
                <p className="font-mono text-xs text-[#8a94ad] uppercase mb-6 tracking-widest">ML says block. Ryu installs the rule.</p>
                <div className="space-y-4 text-[#b0b8cc] text-sm leading-relaxed">
                  <p>
                    Ryu receives the signal via internal API. If confidence exceeds the threshold, it constructs an <code>OFPFlowMod</code> message — priority 200, matching source IP, action DROP.
                  </p>
                  <p>
                    The rule is pushed to every switch in the topology. Attacker traffic is silently dropped at the edge. No manual ACL updates, no human latency. Recovery occurs via hard timeout.
                  </p>
                </div>
              </div>
              <div className="lg:order-1 border border-[#242938] bg-[#0a0c14] p-4">
                 <div className="bg-black p-6 font-mono text-[11px] text-[#f43f5e] border border-red-500/20">
                    <p className="font-bold mb-4">✦ IP BLOCKED: 10.0.1.1</p>
                    <div className="space-y-1 opacity-80 mb-6">
                      <p>Reason: ML detected portscan (conf: 0.68)</p>
                      <p>Applied to: 5 switches</p>
                      <p>Total Blocked IPs: 1</p>
                    </div>
                    <div className="border-t border-[#f43f5e]/30 pt-4 text-[10px] text-white/60">
                       <p>⊘ Dropping packets from blocked IP: 10.0.1.1 (count: 318)</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL CYCLE DEMO */}
        <section className="py-32 bg-[#121520] border-y border-[#242938]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-24">
              <span className="font-mono text-[10px] text-[#a5b4fc] tracking-[0.2em] uppercase mb-4 block">THE FULL CYCLE</span>
              <h2 className="font-display text-4xl font-bold mb-8 text-center lg:text-left">Normal traffic → Detection → Block.</h2>
              <p className="font-sans text-lg text-[#b0b8cc] leading-relaxed max-w-3xl">
                In a live demo: normal IoT sensor traffic flows. An ICMP flood is triggered. Suricata fires an alert. The ML engine classifies it. The Ryu controller installs an OpenFlow drop rule. All subsequent packets are silently dropped.
              </p>
            </div>

            <div className="border border-[#242938] bg-[#0a0c14] overflow-hidden group p-2">
               <div className="aspect-video bg-[#0d0f17] flex items-center justify-center relative overflow-hidden border border-[#242938]">
                  <img 
                    src="/assets/SDN-PROJECT-end-to-end-workflow.png" 
                    alt="End-to-End Demo Workflow" 
                    className="w-full h-full object-contain grayscale hover:grayscale-0 opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-[#0f111a]/90 backdrop-blur-md border border-[#242938] p-6 max-w-xl">
                     <div className="flex items-center gap-4 mb-3">
                        <Shield size={20} className="text-[#a5b4fc]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#a5b4fc] font-bold">Attack Mitigation Cycle</span>
                     </div>
                     <p className="text-xs font-sans text-[#b0b8cc] leading-relaxed">
                        End-to-end demo visualization showing normal traffic, attack onset, Suricata alerts, and traffic drop in a multi-pane environment.
                     </p>
                  </div>
               </div>
               <div className="p-4 bg-[#1a1f2e] flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-[#8a94ad]">
                  <span>Demo View: Live Traffic Pipeline</span>
                  <span className="text-[#a5b4fc]">Full Stack Security Validation</span>
               </div>
            </div>

            {/* Limitations */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16">
               <div>
                  <h4 className="font-display text-xl font-bold mb-6">Honest Scope</h4>
                  <ul className="space-y-4 font-sans text-sm text-[#8a94ad]">
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#a5b4fc] mt-1.5 flex-shrink-0"></div> Lab environment — predefined attack types based on training data.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#a5b4fc] mt-1.5 flex-shrink-0"></div> No TLS inspection — encapsulated attacks could bypass rules.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#a5b4fc] mt-1.5 flex-shrink-0"></div> Topology scaling limits — RYU may bottleneck at high node counts.</li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-display text-xl font-bold mb-6">Production Path</h4>
                  <ul className="space-y-4 font-sans text-sm text-[#8a94ad]">
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#d946ef] mt-1.5 flex-shrink-0"></div> Training on live IoT datasets (CICIOT2023).</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#d946ef] mt-1.5 flex-shrink-0"></div> SIEM integration (Elasticsearch/Kibana) for audit trails.</li>
                     <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#d946ef] mt-1.5 flex-shrink-0"></div> Real-world hardware deployment on ARM/Edge nodes.</li>
                  </ul>
               </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#242938] py-12 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-2 text-[#a5b4fc]">Saikiran Gangula</h3>
            <div className="font-sans text-xs text-[#8a94ad] space-y-1 mb-4 italic">
               <p>Team Project: Kusumanjali Vegi, Shane Samuel Pradeep</p>
               <p>ISEP Paris · Digital Security & Networks</p>
            </div>
            
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest text-[#8a94ad]">
             <a href="https://github.com/kusumanjali15/SDN-Project" target="_blank" rel="noopener noreferrer" className="hover:text-[#a5b4fc] transition-colors">PROJECT REPO</a>
             <Link to="/projects/pulse" className="hover:text-[#a5b4fc] transition-colors">PULSE</Link>
             <Link to="/projects/sentinel" className="hover:text-[#a5b4fc] transition-colors">SENTINEL</Link>
             <Link to="/projects/netlab" className="hover:text-[#a5b4fc] transition-colors">NETLAB</Link>
             <Link to="/projects/sdn-iot-detection" className="hover:text-[#a5b4fc] transition-colors text-[#a5b4fc] font-bold underline underline-offset-8 decoration-2">SDN IoT</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#242938] flex flex-wrap justify-between items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
          <div className="flex gap-4">
             <span>Paris, France</span>
             <a href="mailto:saikiranreddy19565@gmail.com">saikiranreddy19565@gmail.com</a>
             <span>+33 07 51 14 76 31</span>
          </div>
          <div className="flex items-center gap-2">
             <Link to="/projects" className="flex items-center gap-2 hover:text-[#a5b4fc] transition-colors">
                <ArrowLeft size={10} /> BACK TO PORTFOLIO
             </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
