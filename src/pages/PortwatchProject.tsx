import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Cpu, Activity, Shield, Zap, Terminal, Database, Server, ChevronRight, Binary, List, Github, Eye, Radio, Network, HelpCircle, Key, RefreshCw, Send, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const techStrip = [
  "Python", "/proc/net/tcp", "/proc/net/udp", "/proc/PID/fd/", "Textual TUI", "Rich", "httpx", "pulse-platform"
];

const stats = [
  { label: "Data sources", value: "/proc/net/tcp, tcp6, udp, udp6" },
  { label: "Poll interval", value: "2 seconds (configurable)" },
  { label: "External dependencies", value: "0 (data layer)" },
  { label: "Test coverage", value: "61+ tests across 6 modules" },
  { label: "Lines of production code", value: "~600 (data) + ~400 (TUI)" },
  { label: "Root required", value: "No" }
];

const modules = [
  {
    name: "proc.py",
    desc: "Parses /proc/net/tcp, tcp6, udp, udp6. Converts little-endian hex addresses. Maps state codes to human names. Handles malformed lines via log-and-skip.",
    stats: "15 tests · 146 lines",
    tag: "Ingestion"
  },
  {
    name: "process.py",
    desc: "scans /proc/PID/fd/ for socket file descriptors. Reads comm, exe, cmdline, status per PID. Degrades to ??? on permission denied — never crashes.",
    stats: "9 tests · 143 lines",
    tag: "Resolution"
  },
  {
    name: "snapshot.py",
    desc: "Joins sockets with processes via a single inode map scan. Returns list[PortRecord] — the unified data contract everything downstream consumes.",
    stats: "7 tests · 57 lines",
    tag: "Aggregation"
  },
  {
    name: "diff.py",
    desc: "Compares two snapshots by (protocol, local_ip, local_port) identity key. Returns added, removed, changed lists. Pure function — no I/O, no side effects.",
    stats: "12 tests · 73 lines",
    tag: "Analysis"
  },
  {
    name: "loop.py",
    desc: "Polls every 2 seconds. Prints changes to stdout. Emits to pulse on diff. Prints session summary on Ctrl+C. Single-threaded, synchronous.",
    stats: "9 tests · 134 lines",
    tag: "Execution"
  },
  {
    name: "pulse.py",
    desc: "Daemon thread with bounded queue. Batches events in 500ms windows. 2s HTTP timeout. Drops silently if Pulse is unreachable. The TUI never blocks on this.",
    stats: "12 tests · ~150 lines",
    tag: "Egress"
  }
];

const colorSystem = [
  { symbol: "●", color: "text-emerald-400 font-bold", meaning: "LISTEN, process known" },
  { symbol: "●", color: "text-yellow-400 font-bold", meaning: "LISTEN, process unknown (???)" },
  { symbol: "◐", color: "text-cyan-400 font-bold", meaning: "ESTABLISHED, active connection" },
  { symbol: "◯", color: "text-neutral-500 font-bold", meaning: "CLOSING — TIME_WAIT, FIN_WAIT, CLOSE_WAIT" },
  { symbol: "✕", color: "text-rose-500 font-bold", meaning: "Suspicious (Phase 3)" },
  { symbol: "····", color: "text-neutral-600 font-bold", meaning: "Empty sticky slot — port recently closed" }
];

const portRanges = [
  { range: "1–1023", color: "text-white font-bold", examples: "22 (ssh), 53 (dns), 80 (http), 443 (https)" },
  { range: "1024–49151", color: "text-yellow-400 font-bold", examples: "3306 (mysql), 5432 (postgres), 6379 (redis), 8080" },
  { range: "≥49152", color: "text-cyan-400 font-bold", examples: "Chrome ephemeral, TIME_WAIT debris" }
];

const ipColors = [
  { type: "Public internet", color: "text-cyan-400 font-bold", detection: "Not 10.x, 172.16-31.x, 192.168.x" },
  { type: "Private LAN", color: "text-fuchsia-400 font-bold", detection: "RFC1918 ranges" }
];

const keyboardBinds = [
  { key: "f", action: "Cycle filter: All → LISTEN only → ESTABLISHED only → Suspicious" },
  { key: "/", action: "Search by port number or process name" },
  { key: "↑ ↓", action: "Navigate between pins/ports" },
  { key: "Enter", action: "Inspect detail — port, PID, binary path, cmdline, remote IP" },
  { key: "q", action: "Quit + print session summary" }
];

const severityRules = [
  { condition: "Known process opens a port", severity: "info", color: "text-cyan-400 border-cyan-950", why: "Expected behaviour" },
  { condition: "Unknown process (???) opens a LISTEN port", severity: "high", color: "text-amber-400 border-amber-950", why: "Process invisible without root — worth flagging" },
  { condition: "Binary in /tmp, /dev/shm, /var/tmp listens", severity: "critical", color: "text-rose-500 border-rose-950", why: "Classic malware staging path" }
];

const screenshots = [
  {
    src: "/assets/Screenshot_2026-05-21_14-13-26.png",
    caption: "portwatch text loop detecting python3 -m http.server 7777 opening (port 7777) and closing within seconds.",
    meta: "19 snapshots · 10 changes · 38s runtime"
  },
  {
    src: "/assets/Screenshot_2026-05-21_14-13-34.png",
    caption: "portwatch TUI — process-grouped blade layout representing system workload and socket distribution.",
    meta: "CODE (internal server) · CHROME (18 connections) · ELECTRON"
  },
  {
    src: "/assets/Screenshot_2026-05-21_14-13-41.png",
    caption: "port 7777 detected within 2 seconds of python3 -m http.server 7777 running in a second terminal.",
    meta: "Real-time state diffing and mapping on active sockets"
  },
  {
    src: "/assets/Screenshot_2026-05-21_14-13-50.png",
    caption: "Detailed lookup menu overlay inside the TUI displaying process environment variables, socket inodes and parent tree.",
    meta: "Deep process inspection mode activated on selected blade"
  }
];

const roadmap = [
  { phase: "01", title: "Phase 3 — Suspicious heuristics", desc: "Three detection rules: unknown binary opens LISTEN, process establishes outbound connection to foreign IP for the first time, binary path in /tmp or /dev/shm. Learning mode baseline: 60 seconds on startup, everything seen is trusted. After that, deltas are flagged." },
  { phase: "02", title: "Geo-IP on established connections", desc: "Show country flag and city for remote IPs using MaxMind GeoLite2 offline database. No API calls, no rate limits." },
  { phase: "03", title: "Headless daemon mode", desc: "portwatch --daemon runs the poll loop and emits to Pulse without a UI. Systemd user service ships in contrib/. Useful for always-on monitoring without keeping a terminal open." },
  { phase: "04", title: "Widget embedding in Pulse", desc: "The BladesWidget is already extracted as portwatch.widgets.BladesWidget. Pulse's Textual dashboard imports it as an optional dependency." },
  { phase: "05", title: "Traffic byte counters", desc: "Per-port byte counts via eBPF or libpcap. Adding a sparkline per blade showing bytes/s over the last 60 seconds is the next visual upgrade." },
  { phase: "06", title: "Kill and block actions", desc: "k to kill the process owning a port (with confirmation), b to add an nftables rule blocking inbound on that port. Requires sudo but the UI detects privilege level." }
];

export default function PortwatchProject() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const pipelineSteps = [
    { title: "proc.py Parsing", subtitle: "/proc/net/tcp, tcp6, udp, udp6", icon: <Database size={16} />, desc: "Extracts local IP, ports, remote IP, and the target inode ID in hex format." },
    { title: "process.py Scans", subtitle: "/proc/PID/fd/ Inodes Map", icon: <Cpu size={16} />, desc: "Resolves matching PID of the socket, reads system descriptors and path metadata." },
    { title: "snapshot.py Consolidation", subtitle: "PortRecord Generation", icon: <Radio size={16} />, desc: "Generates static snap representing the instantaneous network state." },
    { title: "diff.py Comparative Engine", subtitle: "State Snapshot Diffing", icon: <RefreshCw size={16} />, desc: "Determines socket status transitions (added, removed, altered state)." },
    { title: "Client Egress", subtitle: "loop.py / app.py / pulse.py", icon: <Send size={16} />, desc: "Disseminates stdout stream, triggers live Textual TUI redraws, and sends alerts." }
  ];

  return (
    <div className="bg-[#0b0e14] text-[#dae2eb] min-h-screen selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1c2430] bg-[#0b0e14]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase">
        <span className="text-emerald-400 font-bold tracking-[0.25em]">PORTWATCH</span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/SaikiranReddyG/portwatch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <Github size={14} /> Repository
          </a>
          <Link to="/projects" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
            <ArrowLeft size={14} /> Back to portfolio
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono text-[10px] text-emerald-400 tracking-[0.4em] uppercase mb-5 block">PORTWATCH</span>
            <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.15] mb-6 tracking-tight">
              Your network surface. Live.<br/>
              <span className="text-emerald-400 font-mono">Every socket. Every process. Every change.</span>
            </h1>
            
            <p className="font-sans text-xl text-[#9caab8] max-w-3xl mb-10 leading-relaxed">
              A real-time Linux port and socket visualiser built entirely from <code className="font-mono text-emerald-300 text-base bg-emerald-950/40 px-1.5 py-0.5 border border-emerald-900/30">/proc</code>. 
              portwatch polls the kernel's own network tables every 2 seconds, resolves each socket to its owning process, diffs the current state against the previous snapshot, and renders the result as a live terminal dashboard — grouped by process, colored by state, updated in real time. No root required. No external agents. No cloud.
            </p>

            <div className="flex flex-wrap gap-2 mb-12">
              {techStrip.map((tech) => (
                <span key={tech} className="border border-[#1f293d] bg-[#121822] px-3 py-1 font-mono text-[10px] uppercase text-emerald-400 tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            {/* Stat strip (horizontal) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-8 border-y border-[#1c2430] bg-[#10141f]/40">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-mono text-[9px] uppercase text-[#9caab8]/50 tracking-widest block mb-1.5">{stat.label}</span>
                  <span className="font-mono text-sm font-bold text-[#dae2eb]">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 italic font-sans text-xs text-[#9caab8]/50 border-l-2 border-emerald-500/30 pl-4">
              "Every monitoring tool I found either needed root, called an external API, or showed me a flat list. I wanted something that reads the kernel directly, knows which process owns which socket, and tells me when something changes — in the terminal, always on, no setup."
            </div>
          </motion.div>
        </section>

        {/* SECTION 2 — THE PIPELINE */}
        <section className="py-28 border-y border-[#1c2430] bg-[#0c1017]">
          <div className="max-w-7xl mx-auto px-6 md:px-16 container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] text-emerald-400 tracking-[0.3em] uppercase mb-4 block">THE DATA PIPELINE</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight uppercase">
                  From raw kernel bytes to structured, diffed, live data.<br/>
                  <span className="text-emerald-400">Zero external calls.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <p className="font-sans text-lg text-[#9caab8] leading-relaxed">
                  portwatch reads the kernel's <code className="bg-emerald-950/20 px-1 py-0.5 font-mono text-emerald-400">/proc/net/</code> virtual filesystem directly — the same source <code className="font-mono text-[#dae2eb]">ss</code>, <code className="font-mono text-[#dae2eb]">netstat</code>, and <code className="font-mono text-[#dae2eb]">lsof</code> use. The difference is what happens next. Each hex-encoded address is decoded, each socket inode is traced back to the process that owns it, each snapshot is diffed against the previous one to produce a precise list of what opened, what closed, and what changed. The entire pipeline runs in pure Python with no root privileges and no shell callouts.
                </p>
              </div>
            </div>

            {/* Pipeline interactive diagram */}
            <div className="mb-24">
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/70 mb-4 block text-center">Data ingestion flowchart (interactive steps)</span>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 border border-[#1c2430] p-6 bg-[#080b0f] relative rounded">
                {pipelineSteps.map((step, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                    className={`flex flex-col p-4 border rounded text-left transition-all duration-300 relative focus:outline-none cursor-pointer ${
                      activeStep === idx 
                        ? "border-emerald-400 bg-emerald-950/20" 
                        : "border-[#1c2430] bg-[#0c1017] hover:border-emerald-500/50"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-[9px] text-[#9caab8]/40">STAGE 0{idx + 1}</span>
                      <span className={activeStep === idx ? "text-emerald-400" : "text-[#9caab8]/60"}>
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wide mb-1">
                      {step.title}
                    </h4>
                    <p className="font-mono text-[10px] text-[#dae2eb] opacity-80 leading-relaxed">
                      {step.subtitle}
                    </p>
                    
                    <AnimatePresence>
                      {activeStep === idx && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-emerald-900/40 text-[11px] font-sans text-[#a9b6c4] leading-relaxed overflow-hidden"
                        >
                          {step.desc}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
              <p className="text-center font-mono text-[9px] text-[#9caab8]/40 mt-3 uppercase">Click on stages to inspect pipeline actions</p>
            </div>

            {/* Six modules cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
              {modules.map((m, idx) => (
                <div key={idx} className="border border-[#1c2430] bg-[#0c1017] hover:border-[#2b394a] transition-all p-6 relative group">
                  <div className="absolute top-0 right-0 py-1 px-2 border-b border-l border-[#1c2430] font-mono text-[8px] tracking-wider uppercase text-emerald-400/65 bg-[#080b10]">
                    {m.tag}
                  </div>
                  <h3 className="font-mono text-sm font-bold text-[#dae2eb] mb-2">{m.name}</h3>
                  <p className="font-sans text-xs text-[#9caab8] leading-relaxed mb-4 min-h-[50px]">{m.desc}</p>
                  <p className="font-mono text-[10px] text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 py-1 px-2.5 inline-block">
                    {m.stats}
                  </p>
                </div>
              ))}
            </div>

            {/* Code Block */}
            <div className="max-w-4xl mx-auto mb-16">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9caab8]/40 block mb-3">Live Terminal loop trace</span>
              <div className="border border-[#1c2430] rounded overflow-hidden">
                <div className="bg-[#121620] px-4 py-2 border-b border-[#1c2430] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#9caab8]">STDOUT STREAM MODE</span>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                </div>
                <pre className="p-6 bg-[#07090e] font-mono text-xs text-[#b8c6d4] leading-relaxed overflow-x-auto space-y-1">
                  <code>
                    <div className="text-emerald-400">portwatch v0.1.0 · polling every 2.0s · press Ctrl+C to stop</div>
                    <div className="text-neutral-500">[13:38:10] baseline · 49 sockets (25 LISTEN, 12 ESTABLISHED, 12 other)</div>
                    <div>&nbsp;</div>
                    <div className="text-emerald-400">[13:38:14] + tcp4  0.0.0.0:7777  LISTEN  python3 (pid=84291)</div>
                    <div className="text-rose-400">[13:38:22] - tcp4  0.0.0.0:7777  LISTEN  python3 (pid=84291)</div>
                    <div className="text-amber-400">[13:38:24] ~ tcp4  10.66.67.153:34070  ESTABLISHED→TIME_WAIT  electron→??? (pid=7019→pid=-)</div>
                    <div>&nbsp;</div>
                    <div className="text-neutral-500">^C</div>
                    <div className="text-neutral-400">───────────────────────────────────</div>
                    <div className="font-bold text-[#dae2eb]">portwatch session summary</div>
                    <div>  runtime     : 38s</div>
                    <div>  snapshots   : 19</div>
                    <div>  peak ports  : 52</div>
                    <div>  changes     : 10</div>
                    <div>  suspicious  : 0</div>
                    <div>  parse errors: 0</div>
                    <div className="text-neutral-400">───────────────────────────────────</div>
                  </code>
                </pre>
              </div>
            </div>

            {/* Why proc and not ss */}
            <div className="max-w-4xl mx-auto border-l-2 border-teal-500 bg-[#0e141f] p-6 hover:border-emerald-400 transition-colors">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Why read /proc directly instead of parsing ss output?
              </h4>
              <p className="font-sans text-xs text-[#9caab8] leading-relaxed">
                Shelling out to <code className="font-mono text-[#dae2eb]">ss</code> means spawning a subprocess every 2 seconds, parsing human-readable text that can change between kernel versions, and having no control over the data format. Reading <code className="font-mono text-[#dae2eb]">/proc/net/tcp</code> directly gives you a stable, documented binary format, instant access, and the ability to join socket inodes to process file descriptors — something <code className="font-mono text-[#dae2eb]">ss</code> doesn't expose cleanly without root. The only cost is writing your own hex decoder. That took 40 lines.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — THE DASHBOARD */}
        <section className="py-28 max-w-7xl mx-auto px-6 md:px-16">
          <span className="font-mono text-[10px] text-emerald-400 tracking-[0.3em] uppercase mb-4 block text-center">THE TERMINAL DASHBOARD</span>
          <h2 className="font-display text-4xl font-bold mb-4 text-center uppercase">Process-grouped. Color-coded. Live.</h2>
          <p className="font-sans text-sm text-[#9caab8] text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            The TUI groups sockets by the process that owns them. Each process gets a blade — a bordered panel showing all its ports, the direction of each connection, and a status tag. The header shows aggregate counts with a proportional bar. Everything updates every 2 seconds.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-stretch">
            {/* Legend / Info Panels */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-4">
                  Visual Symbol Codex
                </h4>
                <div className="border border-[#1c2430] bg-[#0c1017] p-4 font-mono text-xs space-y-3.5">
                  {colorSystem.map((item, id) => (
                    <div key={id} className="flex items-center gap-4">
                      <span className={`w-8 text-center text-sm ${item.color}`}>{item.symbol}</span>
                      <span className="text-[#9caab8]">{item.meaning}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-teal-400 uppercase tracking-widest mb-4">
                  Port Classification ranges
                </h4>
                <div className="border border-[#1c2430] bg-[#0c1017] p-4 font-mono text-xs space-y-3">
                  {portRanges.map((item, id) => (
                    <div key={id} className="flex flex-col border-b border-[#1c2430]/60 last:border-0 pb-2 last:pb-0">
                      <span className={`text-[10px] ${item.color}`}>{item.range}</span>
                      <span className="text-[#9caab8] text-[11px] mt-0.5">{item.examples}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold text-emerald-300 uppercase tracking-widest mb-4">
                  Remote IP Colors
                </h4>
                <div className="border border-[#1c2430] bg-[#0c1017] p-4 font-mono text-xs space-y-3">
                  {ipColors.map((item, id) => (
                    <div key={id} className="flex justify-between items-center text-[11px]">
                      <span className={item.color}>{item.type}</span>
                      <span className="text-[#9caab8]/60 text-[10px]">{item.detection}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dashboard features / interactive bindings */}
            <div className="lg:col-span-7 flex flex-col justify-between border border-[#1c2430] bg-[#0c1017] p-8">
              <div>
                <div className="flex items-center justify-between border-b border-[#1c2430] pb-4 mb-6">
                  <h4 className="font-mono text-xs font-bold tracking-widest uppercase text-emerald-400">
                    Dashboard Keyboard Interfaces
                  </h4>
                  <span className="font-mono text-[9px] text-[#9caab8]/40 uppercase">ACTIVE BINDINGS</span>
                </div>
                <div className="space-y-4">
                  {keyboardBinds.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 border-b border-[#1c2430]/30 pb-3 last:border-0 last:pb-0">
                      <span className="font-mono text-xs bg-[#151b27] text-white py-1 px-3 border border-[#2b394d] rounded font-bold min-w-[50px] text-center">
                        {item.key}
                      </span>
                      <span className="font-sans text-sm text-[#9caab8] mt-1">{item.action}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#1c2430] pt-6 mt-8">
                <span className="font-mono text-[10px] uppercase text-emerald-400 font-bold block mb-1">DESIGN DECISION: STICKY SLOTS</span>
                <p className="font-sans text-xs text-[#9caab8] leading-relaxed">
                  When a port closes, its slot in the display doesn't immediately vanish. It stays reserved for 30 seconds — shown as <code className="font-mono text-emerald-300">····</code> in dim grey. This prevents the layout from jumping around as ephemeral connections open and close. The eye tracks stable positions; the <code className="font-mono text-emerald-300">····</code> tells you something was there recently.
                </p>
              </div>
            </div>
          </div>

          {/* Labeled image sections */}
          <div className="border-2 border-[#1c2430] bg-[#080b0f] p-3 rounded">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#9caab8]/40 px-2 py-1 block">TUI DASHBOARD ARCHITECTURE & ANATOMY MAP</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
              <div className="border border-[#141a24] bg-black rounded p-2 overflow-hidden aspect-video relative group flex items-center justify-center">
                <img
                  src="/assets/Screenshot_2026-05-21_14-13-34.png"
                  alt="Anatomy map - Portwatch Dashboard"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/80 backdrop-blur-sm p-4 text-[10px] border-t border-[#141a24] font-mono leading-relaxed text-[#9caab8]">
                  Mapped visualization of port status across system containers and active kernel endpoints.
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block font-bold">10-POINT DASHBOARD ANATOMY</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[11px] font-sans text-[#9caab8]">
                    <div className="space-y-2">
                      <p><strong>1. Summary bar</strong> — total socket count, LISTEN/EST breakdown, proportional color bar.</p>
                      <p><strong>2. Blade header</strong> — process name + custom divider line + status tag.</p>
                      <p><strong>3. Status tags</strong> — <span className="text-emerald-400">[RUN]</span> active list, <span className="text-yellow-400">[BUSY]</span> connected paths, <span className="text-rose-500">[WARN]</span>.</p>
                      <p><strong>4. Port symbol</strong> — load-bearing state icons: <span className="text-emerald-400">●</span>, <span className="text-cyan-400">◐</span>, <span className="text-neutral-500">◯</span>.</p>
                      <p><strong>5. Port color</strong> — white (well-known), yellow (registered), cyan (ephemeral).</p>
                    </div>
                    <div className="space-y-2">
                      <p><strong>6. ESTABLISHED format</strong> — <code className="text-cyan-400">◉ port → remote_ip:port</code> with type resolution.</p>
                      <p><strong>7. ??? (UNRESOLVED) blade</strong> — active sockets belonging to denied processes.</p>
                      <p><strong>8. Summary lines</strong> — listening and active descriptors statistics per active blade.</p>
                      <p><strong>9. Live metrics footer</strong> — dynamic snapshot diff, timestamp metrics, uptime, exit.</p>
                      <p><strong>10. Dot grid</strong> — custom aesthetic filler filling idle UI columns cleanly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — THE ECOSYSTEM */}
        <section className="py-28 border-y border-[#1c2430] bg-[#0c1017]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
              <div className="lg:col-span-5">
                <span className="font-mono text-[10px] text-emerald-400 tracking-[0.3em] uppercase mb-4 block">PULSE INTEGRATION</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight uppercase">
                  Standalone by default.<br/>
                  <span className="text-emerald-400">A sensor when you need it.</span>
                </h2>
              </div>
              <div className="lg:col-span-7 flex items-center">
                <p className="font-sans text-lg text-[#9caab8] leading-relaxed">
                  portwatch runs completely independently by default — no configuration needed beyond installing it. Set <code className="bg-emerald-950/20 px-1 py-0.5 font-mono text-emerald-300">PULSE_ENABLED=true</code> in <code className="font-mono">.env</code> and it becomes a sensor: every time a port opens, closes, or changes state, portwatch fires an HTTP POST to pulse-platform's <code className="font-mono text-[#dae2eb]">/events</code> endpoint. The event carries the port, protocol, process name, binary path, severity, and a deduplication key.
                </p>
              </div>
            </div>

            {/* Micro coupling note */}
            <div className="border border-[#1c2430] bg-[#080b0f] p-8 mb-16 rounded">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="border-l-2 border-emerald-500 pl-4 py-1">
                    <span className="font-mono text-[9px] text-[#9caab8]/50 uppercase block">INTEGRATION PARADIGM IP CONSTRAINTS</span>
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">THE ISOLATION GUARANTEE</span>
                  </div>

                </div>

                <div className="lg:col-span-7">
                  <span className="font-mono text-[9px] text-[#9caab8]/50 uppercase tracking-widest block mb-1.5">Event schema (JSON)</span>
                  <div className="bg-[#05070a] border border-[#141a24] p-4 text-[11px] font-mono text-[#a2b5c5] overflow-x-auto rounded">
                    <pre>
{`{
  "schema_version": "1.0",
  "timestamp": "2026-05-20T13:38:18.000Z",
  "source": "portwatch",
  "event_type": "portwatch.port_opened",
  "severity": "high",
  "event_id": "portwatch-a3f9c21b4d8e-28976",
  "payload": {
    "port": 4444,
    "protocol": "tcp4",
    "local_ip": "0.0.0.0",
    "state": "LISTEN",
    "pid": null,
    "process_name": "???",
    "exe": "???",
    "remote_ip": null,
    "remote_port": null
  }
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Severity Rules Table */}
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400/70 mb-4 block">SEVERITY RULE MATRIX</span>
              <div className="border border-[#1c2430] rounded overflow-hidden">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-[#121620] border-b border-[#1c2430]">
                    <tr>
                      <th className="py-3 px-4 font-bold uppercase tracking-widest text-[#dae2eb]">Condition</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-widest text-[#dae2eb] w-32">Severity</th>
                      <th className="py-3 px-4 font-bold uppercase tracking-widest text-[#dae2eb]">Why</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1c2430]/60 bg-[#080b0f]">
                    {severityRules.map((rule, key) => (
                      <tr key={key} className="hover:bg-[#121620]/30 transition-colors">
                        <td className="py-4 px-4 text-[#dae2eb]">{rule.condition}</td>
                        <td className="py-4 px-4">
                          <span className={`border px-2 py-0.5 text-[10px] uppercase font-bold ${rule.color}`}>
                            {rule.severity}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-[#9caab8]">{rule.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — EVIDENCE + FUTURE */}
        <section className="py-28 max-w-7xl mx-auto px-6 md:px-16">
          <span className="font-mono text-[10px] text-emerald-400 tracking-[0.3em] uppercase mb-4 block text-center">PROOF + WHAT'S NEXT</span>
          <h2 className="font-display text-4xl font-bold text-center uppercase mb-4">LIVE SYSTEM EVIDENCE</h2>
          <p className="font-sans text-sm text-[#9caab8] text-center max-w-2xl mx-auto mb-16 leading-relaxed">
            Every screenshot in this page is from a live portwatch session on a Pop!_OS development machine — not a demo environment. The ports, processes, and connections are real: VS Code's internal server on 55952, Redis on 6379, Chrome ephemeral connections to Google CDN, Samba on 139/445, systemd-resolved on 53. The diff detection proved itself live: opening <code className="font-mono text-[#dae2eb]">python3 -m http.server 7777</code> in a second terminal produced a <code className="font-mono text-emerald-400">+</code> line within 2 seconds. Killing it produced a <code className="font-mono text-rose-400">-</code> line within 4 seconds.
          </p>

          {/* Screenshot grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {screenshots.map((shot, key) => (
              <div key={key} className="border-2 border-[#1c2430] bg-[#0c1017] p-2 hover:border-emerald-500/50 transition-all group flex flex-col justify-between">
                <div className="aspect-video overflow-hidden relative border border-[#1c2430] bg-black">
                  <img
                    src={shot.src}
                    alt={`Screenshot View ${key + 1}`}
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 font-mono text-[9px] bg-emerald-950/80 border border-emerald-900 text-emerald-400 px-2 py-0.5 rounded uppercase">
                    FIG. 0{key + 1}
                  </div>
                </div>
                <div className="p-4 bg-[#080b0f] border-t border-[#1c2430]/70 mt-2 font-mono text-[11px]">
                  <p className="text-[#dae2eb] leading-relaxed mb-2">{shot.caption}</p>
                  <p className="text-emerald-400 font-bold uppercase tracking-wider text-[9px]">
                    {shot.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ROADMAP / WHAT'S NEXT */}
          <div className="border-t border-[#1c2430] pt-20">
            <span className="font-mono text-[10px] text-teal-400 tracking-[0.3em] uppercase mb-4 block text-center">where this is going</span>
            <h2 className="font-display text-4xl font-bold uppercase text-center mb-16">Future Roadmap</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roadmap.map((item, key) => (
                <div key={key} className="border border-[#1c2430] bg-[#0c1017] p-6 relative flex flex-col justify-between">
                  <div>
                    <span className="font-display text-4xl text-emerald-500/20 font-bold block mb-4">
                      {item.phase}
                    </span>
                    <h3 className="font-mono text-sm font-bold text-[#dae2eb] mb-3 uppercase tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-[#9caab8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center italic font-sans text-xs text-[#9caab8]/50 max-w-3xl mx-auto">
              "The data layer took the longest and taught me the most. <code className="font-mono text-emerald-400">/proc/net/tcp</code> stores IPv4 addresses as little-endian hex — <code className="font-mono text-emerald-400">0100007F</code> is <code className="font-mono text-[#dae2eb]">127.0.0.1</code>, not <code className="font-mono text-[#dae2eb]">1.0.0.127</code>. Getting that wrong means the parser passes all its tests and produces subtly incorrect output. The fix was the <code className="font-mono text-[#dae2eb]">ss -4tln</code> cross-check: compare every LISTEN port from portwatch against the kernel's own ss output. They matched exactly. That was the moment I trusted the parser."
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1c2430] bg-[#07090d] py-16 text-[#9caab8] font-mono text-[11px]">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="font-display text-lg font-bold text-[#dae2eb] mb-2 uppercase">Saikiran Gangula</h3>
              <p className="font-sans text-xs leading-relaxed opacity-75 mb-1">ISEP Paris — Digital Security & Networks</p>
              <p className="font-sans text-xs opacity-65">Final year · seeking end-of-study internship</p>
            </div>

            <div className="md:col-span-4 text-center md:text-left">
              <span className="text-[#9caab8]/50 uppercase tracking-widest block mb-1">REPOS CODE</span>
              <a href="https://github.com/SaikiranReddyG/portwatch" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-2">
                <Github size={12} /> github.com/SaikiranReddyG/portwatch
              </a>
            </div>

            <div className="md:col-span-4 text-right">
              <span className="text-[#9caab8]/40 uppercase tracking-widest block mb-2">RELATED PROJECTS</span>
              <ul className="space-y-1 text-[10px] uppercase text-[#a9b6c4]">
                <li><Link to="/projects/pulse" className="hover:text-emerald-400">→ pulse-platform (SOC dashboard)</Link></li>
                <li><Link to="/projects/sentinel" className="hover:text-emerald-400">→ sentinel (network IDS)</Link></li>
                <li><span className="opacity-40">→ syswatch (system monitor)</span></li>
                <li><Link to="/projects/netlab" className="hover:text-[#ff9800]">→ netlab (attack lab)</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1c2430]/60 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px]">
            <span>saikiranreddy19565@gmail.com · +33 07 51 14 76 31 · Paris, France</span>
            <Link to="/projects" className="flex items-center gap-2 hover:text-[#dae2eb] transition-all text-xs font-bold uppercase text-emerald-400 tracking-wider">
              <ArrowLeft size={12} /> Back to portfolio
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
