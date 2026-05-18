import { motion } from "motion/react";
import { ArrowLeft, Cpu, Globe, Link as LinkIcon, Shield, Zap, Terminal, Activity, ChevronRight, Binary, List, Github } from "lucide-react";
import { Link } from "react-router-dom";

const techStrip = [
  "Python", "AF_PACKET", "Raw sockets", "Manual protocol parsing", "YAML rule engine", "Textual TUI", "~1,250 lines", "18 files"
];

const stats = [
  { label: "Source files", value: "18" },
  { label: "Protocols parsed", value: "5" },
  { label: "Detection types", value: "Stateful + rule-based" },
];

const detectors = [
  { name: "Port scan", tracks: "Unique destination ports per source IP within a time window", trigger: "Source IP contacts N+ distinct ports on a target within T seconds" },
  { name: "SYN flood", tracks: "SYN packets without completing the handshake", trigger: "SYN count from a source exceeds threshold in time window, no corresponding ACK" },
  { name: "ARP poisoning", tracks: "ARP reply mappings — IP-to-MAC bindings", trigger: "An ARP reply changes the MAC address for a previously seen IP (MAC flip detection)" },
];

const yamlRule = ` - name: SSH brute force
   protocol: tcp
   dst_port: 22
   flags: SYN
   threshold: 10
   window: 60s
   severity: high
   message: "Possible SSH brute force from {src_ip}"

 - name: DNS amplification
   protocol: udp
   src_port: 53
   threshold: 50
   window: 30s
   severity: high
   message: "Possible DNS amplification targeting {dst_ip}"

 - name: HTTPS flood
   protocol: tcp
   dst_port: 443
   flags: SYN
   threshold: 200
   window: 10s
   severity: high
   message: "HTTPS flood from {src_ip}"`;

export default function SentinelProject() {
  return (
    <div className="bg-[#0a0e17] text-[#dfe2ef] min-h-screen selection:bg-[#4bd9de]/30 selection:text-[#6ef6fb]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1c2a38] bg-[#0a0e17]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase">
        <span className="text-[#4bd9de] font-bold">SENTINEL</span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/SaikiranReddyG/sentinel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#4bd9de] transition-colors">
            <Github size={14} /> Repository
          </a>
          <Link to="/projects" className="flex items-center gap-2 hover:text-[#4bd9de] transition-colors">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-[10px] text-[#4bd9de] tracking-[0.4em] uppercase mb-6 block">SENTINEL</span>
            <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
              Network IDS. <br/>Written from scratch.<br/>
              <span className="text-[#4bd9de]">Raw sockets. No frameworks.</span>
            </h1>
            <p className="font-sans text-xl text-[#bacbbc] max-w-3xl mb-12 leading-relaxed">
              A packet-level intrusion detection system in pure Python. Opens a raw AF_PACKET socket, reads every frame off the wire, parses protocols by hand — Ethernet, IP, TCP, UDP, ARP — and runs stateful detection logic on what it finds.
            </p>

            <div className="flex flex-wrap gap-2 mb-16">
              {techStrip.map((tech) => (
                <span key={tech} className="border border-[#1c2a38] bg-[#161b22] px-3 py-1 font-mono text-[10px] uppercase text-[#4bd9de]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8 border-y border-[#1c2a38]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-mono text-[10px] uppercase text-[#bacbbc]/60 tracking-widest block mb-1">{stat.label}</span>
                  <span className="font-mono text-xl font-bold text-[#4bd9de]">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 italic font-sans text-xs text-[#bacbbc]/40">
              *No Scapy. No libpcap. No dpkt. Every byte offset is manual.*
            </div>
          </motion.div>
        </section>

        {/* THE PROBLEM */}
        <section className="py-32 border-y border-[#1c2a38] bg-[#0d121b]">
          <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-[10px] text-[#4bd9de] tracking-[0.2em] uppercase mb-4 block">WHY BUILD THIS</span>
              <h2 className="font-display text-3xl font-bold leading-tight">Suricata exists. So does Snort. This isn't about replacing them.</h2>
            </div>
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="space-y-6 text-[#bacbbc] leading-relaxed text-lg">
                <p>
                  Commercial and open-source IDS tools are production-grade, battle-tested, and fast. They're also opaque. Suricata processes packets through a pipeline you don't control, applies rules from a syntax you memorize but don't build, and outputs alerts you consume but don't shape.
                </p>
                <p>
                  Sentinel exists because the best way to understand network intrusion detection is to implement it. Not configure it — implement it. Open the socket. Read the Ethernet header. Check the EtherType. Parse the IP header. Calculate the offset. Find the TCP flags. Track state. Decide if something is wrong.
                </p>
                <p>
                  That's what this project does. Every layer of the network stack — handled manually in Python. No abstraction between the wire and the detection logic.
                </p>
                <p className="italic text-xs opacity-60 text-[#4bd9de] pt-4">
                  *The goal was to know exactly what Suricata does — by doing it myself, byte by byte.*
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PACKET PIPELINE */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-24">
            <span className="font-mono text-[10px] text-[#4bd9de] tracking-[0.2em] uppercase mb-4 block">HOW IT READS THE WIRE</span>
            <h2 className="font-display text-4xl font-bold mb-4">From raw socket to structured event.</h2>
            <p className="font-mono text-sm text-[#bacbbc]/60 uppercase">Every layer parsed by hand.</p>
          </div>

          {/* Visual Pipeline */}
          <div className="flex justify-center mb-32 overflow-x-auto">
            <div className="min-w-[600px] flex flex-col items-center font-mono">
              <div className="border-2 border-[#4bd9de] px-6 py-3 bg-[#161b22] text-[#4bd9de] mb-8 font-bold">
                RAW SOCKET (AF_PACKET, ETH_P_ALL)
              </div>
              <div className="h-12 w-px bg-[#1c2a38] relative">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#4bd9de]"></div>
              </div>
              <div className="border border-[#1c2a38] px-6 py-4 bg-[#0d121b] text-[#dfe2ef] mb-8 text-center">
                <span className="text-[#4bd9de] block text-[10px] mb-1">ETHERNET FRAME</span>
                <span className="text-[10px] opacity-60">dst_mac, src_mac, ethertype</span>
              </div>

              <div className="flex w-full justify-center gap-24 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-[#1c2a38]"></div>
                
                {/* Column 1: IPv4 */}
                <div className="flex flex-col items-center">
                   <div className="h-12 w-24 border-t border-l border-[#1c2a38] relative -mb-px px-2 pt-2 text-[8px] text-[#4bd9de]">ethertype 0x0800</div>
                   <div className="border border-[#1c2a38] px-6 py-4 bg-[#0d121b] text-[#dfe2ef] mb-8 text-center w-48">
                      <span className="text-[#4bd9de] block text-[10px] mb-1">IPv4 HEADER</span>
                      <span className="text-[10px] opacity-60 leading-tight block">src_ip, dst_ip, protocol, ttl, ihl</span>
                   </div>
                   <div className="h-8 w-px bg-[#1c2a38]"></div>
                   <div className="flex gap-8 relative">
                      <div className="flex flex-col items-center">
                         <div className="h-6 w-12 border-t border-l border-[#1c2a38] relative text-[8px] text-[#4bd9de] pl-1">proto 6</div>
                         <div className="border border-[#4bd9de]/30 px-4 py-3 bg-[#161b22] text-[#dfe2ef] text-center w-32">
                           <span className="text-[#4bd9de] block text-[10px] mb-1">TCP HEADER</span>
                           <span className="text-[9px] opacity-60">Handshake flags extracted</span>
                         </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="h-6 w-12 border-t border-r border-[#1c2a38] relative text-[8px] text-[#4bd9de] pr-1 text-right self-end">proto 17</div>
                         <div className="border border-[#1c2a38] px-4 py-3 bg-[#0d121b] text-[#dfe2ef] text-center w-32">
                           <span className="text-[#4bd9de] block text-[10px] mb-1">UDP HEADER</span>
                           <span className="text-[9px] opacity-60">src/dst ports, length</span>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Column 2: ARP */}
                <div className="flex flex-col items-center">
                   <div className="h-12 w-24 border-t border-r border-[#1c2a38] relative -mb-px px-2 pt-2 text-[8px] text-[#4bd9de] text-right">ethertype 0x0806</div>
                   <div className="border border-[#1c2a38] px-6 py-4 bg-[#0d121b] text-[#dfe2ef] mb-8 text-center w-48">
                      <span className="text-[#4bd9de] block text-[10px] mb-1">ARP HEADER</span>
                      <span className="text-[10px] opacity-60 leading-tight block">op, sender_mac, target_ip</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#161b22] border border-[#1c2a38] p-8">
              <h4 className="font-mono text-[#4bd9de] font-bold mb-4 uppercase text-sm">1. AF_PACKET, not pcap.</h4>
              <p className="font-sans text-sm text-[#bacbbc] leading-relaxed">
                The socket opens at layer 2 with <code>socket.socket(AF_PACKET, SOCK_RAW, ETH_P_ALL)</code>. Every Ethernet frame on the interface hits the socket. No kernel filtering. No BPF.
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#1c2a38] p-8">
              <h4 className="font-mono text-[#4bd9de] font-bold mb-4 uppercase text-sm">2. Manual byte offsets.</h4>
              <p className="font-sans text-sm text-[#bacbbc] leading-relaxed">
                Ethernet header: bytes 0–13. IP header: starts at byte 14, length varies by IHL field. Every offset is explicit in the code. No <code>struct</code> magic beyond <code>unpack</code>.
              </p>
            </div>
            <div className="bg-[#161b22] border border-[#1c2a38] p-8">
              <h4 className="font-mono text-[#4bd9de] font-bold mb-4 uppercase text-sm">3. Typed Python Objects.</h4>
              <p className="font-sans text-sm text-[#bacbbc] leading-relaxed">
                Each protocol layer produces a typed object — <code>EthernetFrame</code>, <code>IPv4Packet</code>, etc. These flow into the detection engine as structured data, not raw buffers.
              </p>
            </div>
          </div>
        </section>

        {/* DETECTORS */}
        <section className="py-32 bg-[#0d121b] border-y border-[#1c2a38]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-24">
              <span className="font-mono text-[10px] text-[#4bd9de] tracking-[0.2em] uppercase mb-4 block">WHAT IT CATCHES</span>
              <h2 className="font-display text-4xl font-bold mb-8">Two detection layers. Stateful analysis and declarative rules.</h2>
            </div>

            <div className="space-y-32">
              {/* Stateful Detectors */}
              <div>
                <div className="flex items-center gap-4 mb-12">
                   <h3 className="font-display text-2xl font-bold">Stateful Detectors</h3>
                   <div className="h-px flex-grow bg-[#1c2a38]"></div>
                   <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">Behavioral tracking</span>
                </div>
                <p className="font-sans text-lg text-[#bacbbc] max-w-3xl mb-12">
                   Stateful detectors maintain internal tracking structures — counters, sliding time windows, connection tables — and trigger when a pattern crosses a threshold over time.
                </p>

                <div className="overflow-x-auto border border-[#1c2a38]">
                  <table className="w-full text-left font-mono text-xs border-collapse">
                    <thead>
                      <tr className="bg-[#161b22] border-b border-[#1c2a38]">
                        <th className="px-6 py-4 text-[#4bd9de] uppercase">Detector</th>
                        <th className="px-6 py-4 text-[#4bd9de] uppercase">What it tracks</th>
                        <th className="px-6 py-4 text-[#4bd9de] uppercase">Trigger condition</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1c2a38]">
                      {detectors.map((d) => (
                        <tr key={d.name} className="hover:bg-[#4bd9de]/5 transition-colors">
                          <td className="px-6 py-6 font-bold">{d.name}</td>
                          <td className="px-6 py-6 text-[#bacbbc]">{d.tracks}</td>
                          <td className="px-6 py-6 text-[#bacbbc]">{d.trigger}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-8 font-sans text-xs text-[#bacbbc]/60 italic">
                  *State is kept in memory. Time windows are sliding, not fixed buckets.*
                </p>
              </div>

              {/* YAML Rules */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                 <div>
                    <h3 className="font-display text-2xl font-bold mb-6">YAML Rule Engine</h3>
                    <p className="font-mono text-sm text-[#4bd9de] uppercase mb-8">Declarative rules. No recompilation.</p>
                    <p className="font-sans text-base text-[#bacbbc] mb-8 leading-relaxed">
                      On top of the stateful detectors, sentinel runs a YAML-based rule engine for threshold-based detection on specific patterns. Add a rule, restart, done.
                    </p>
                    <div className="bg-[#161b22] border-l-2 border-[#4bd9de] p-6 text-xs font-sans text-[#bacbbc]/80 italic">
                       The rule engine handles known-pattern threshold detection, while stateful detectors handle behavioral anomalies that can't be reduced to a single rule.
                    </div>
                 </div>
                 <div className="bg-[#0a0e17] border border-[#1c2a38] p-6 font-mono text-[11px] relative overflow-hidden group">
                    <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#1c2a38]">
                      <span className="text-[#4bd9de] uppercase tracking-widest text-[9px]">rules.yaml</span>
                      <Binary size={14} className="text-[#4bd9de]/40" />
                    </div>
                    <pre className="text-[#dfe2ef] scrollbar-hide overflow-x-auto leading-relaxed">
{yamlRule}
                    </pre>
                    <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                       <Shield size={64} />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTEGRATION & FOOTER */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-16">
           <div className="mb-24">
              <span className="font-mono text-[10px] text-[#4bd9de] tracking-[0.2em] uppercase mb-4 block">WHERE IT FITS</span>
              <h2 className="font-display text-4xl font-bold mb-8">One sensor in a larger system.</h2>
              <p className="font-sans text-lg text-[#bacbbc] max-w-3xl leading-relaxed mb-12">
                Sentinel implements the <span className="text-[#4bd9de]">pulse-contract</span> — a shared JSON schema that all sensor tools use to communicate. When something is detected, sentinel constructs a structured event and POSTs it to the platform's <code>/events</code> endpoint.
              </p>
              
              {/* Simple Diagram */}
              <div className="flex items-center justify-between border border-[#1c2a38] bg-[#161b22] px-8 py-12 mb-24 overflow-x-auto min-w-[300px]">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0a0e17] border border-[#4bd9de] flex items-center justify-center text-[#4bd9de]">
                       <Shield size={24} />
                    </div>
                    <span className="font-mono font-bold">sentinel</span>
                 </div>
                 <div className="flex-grow mx-8 flex items-center relative">
                    <div className="h-px w-full bg-[#1c2a38] border-t border-dashed border-[#4bd9de]/30"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#161b22] px-4 font-mono text-[10px] text-[#4bd9de]">
                       [POST /events]
                    </div>
                 </div>
                 <div className="flex items-center gap-4">
                    <span className="font-mono font-bold text-[#bacbbc]">pulse-platform</span>
                    <div className="w-12 h-12 bg-[#0a0e17] border border-[#1c2a38] flex items-center justify-center text-[#bacbbc]">
                       <Activity size={24} />
                    </div>
                 </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                 <div className="space-y-4">
                    <div className="border border-[#1c2a38] bg-black aspect-video overflow-hidden group">
                       <img src="/assets/sentinal.png" alt="Sentinel TUI" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <p className="font-mono text-[10px] text-[#bacbbc]/60 uppercase italic">Caption: Sentinel tab showing SSH brute force detections and HTTPS flood alerts.</p>
                 </div>
                 <div className="space-y-4">
                    <div className="border border-[#1c2a38] bg-black aspect-video overflow-hidden group">
                       <img src="/assets/netlab.png" alt="Netlab Sentinel Integration" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <p className="font-mono text-[10px] text-[#bacbbc]/60 uppercase italic">Caption: Overview during active HTTPS flood. Sparkline shows non-routine event bursts.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <footer className="border-t border-[#1c2a38] py-12 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-2 text-[#4bd9de]">Saikiran Gangula</h3>
            <p className="font-mono text-[10px] tracking-widest opacity-60">© 2024 SENTINEL SYSTEMS. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest text-[#bacbbc]">
             <a href="https://github.com/SaikiranReddyG/sentinel" target="_blank" rel="noopener noreferrer" className="hover:text-[#4bd9de] transition-colors">SENTINEL REPO</a>
             <Link to="/projects/pulse" className="hover:text-[#4bd9de] transition-colors">PULSE</Link>
             <Link to="/projects/sentinel" className="hover:text-[#4bd9de] transition-colors text-[#4bd9de] font-bold underline underline-offset-8 decoration-2">SENTINEL</Link>
             <Link to="/projects/netlab" className="hover:text-[#4bd9de] transition-colors">NETLAB</Link>
             <Link to="/projects/sdn-iot-detection" className="hover:text-[#4bd9de] transition-colors">SDN IoT</Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#1c2a38] flex flex-wrap justify-between items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
          <div className="flex gap-4">
             <span>Paris, France</span>
             <a href="mailto:saikiranreddy19565@gmail.com">saikiranreddy19565@gmail.com</a>
             <span>+33 07 51 14 76 31</span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-[10px] opacity-40 uppercase tracking-widest">Final year · seeking end-of-study internship</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
