export const en = {
  nav: {
    home: "Home",
    research: "Research",
    projects: "Projects",
    skills: "Skills",
    education: "Education",
    about: "About",
    contact: "Contact",
    cv: "Download CV"
  },
  layout: {
    prev: "PREV",
    next: "NEXT",
    load_prev: "Previous page: {{name}}",
    load_next: "Next page: {{name}}"
  },
  home: {
    operator: "SAi.G",
    name_line1: "Saikiran Reddy",
    name_line2: "Gangula",
    tagline: "IoT and network security research. M2 Digital Security & Networks at ISEP Paris, and research intern at the University of Padua (SPRITZ group), working on eBPF/XDP security for Matter and Thread networks.",
    research_btn: "Research",
    contact_btn: "Contact",
    cv_btn: "Download CV"
  },
  research: {
    header_title: "Research",
    header_desc: "How to detect attacks on IoT networks and respond to them inside the network itself, without leaving legitimate devices offline.",
    current_label: "Current",
    current_title: "eBPF/XDP security gateway for Matter and Thread networks",
    current_org: "University of Padua · SPRITZ Security & Privacy Research Group",
    current_period: "Nov 2026 – Apr 2027",
    current_supervisor: "Supervisor: Prof. Federico Corò",
    current_desc: "End-of-studies research internship (M2, ISEP). The project designs and evaluates a security gateway that inspects smart-home traffic in the Linux kernel's XDP hook, where it can act on packets before they reach the rest of the system.",
    goals_title: "Goals",
    goal_1: "Detect reconnaissance and misuse of Matter device discovery and commissioning at the gateway.",
    goal_2: "Enforce responses in the data plane with eBPF/XDP, scoped to the offending source.",
    goal_3: "Evaluate on real Matter and Thread hardware rather than emulation alone.",
    goals_note: "Results will be shared here once they are published.",
    interests_title: "Interests",
    interest_1: "IoT security: Matter, Thread, smart-home protocols",
    interest_2: "Programmable data planes: eBPF/XDP, SDN, OpenFlow",
    interest_3: "Intrusion detection and automated response",
    interest_4: "Deception and honeypots for IoT networks",
    pubs_title: "Publications",
    pub_status: "Under review",
    pub_venue: "Submitted to ICOIN 2027, Workshop on 5G & 6G Communications Networks and Big Data",
    pub_note: "Student authors contributed equally.",
    pub_project: "Project page",
    profiles_title: "Profiles"
  },
  projects: {
    header_title: "Projects",
    header_desc: "Systems I have built to study network security, threat detection and automated response.",
    btn_access: "View project",
    items: {
      pulse: {
        description: "A fully operational Security Operations Center — log ingestion pipeline, real-time threat alerting, and live dashboard — containerized from the ground up using Docker, Redis and SQLite. No off-the-shelf SIEM. Every component designed, built, and tuned manually."
      },
      sentinel: {
        description: "A custom intrusion detection system built entirely in Python without relying on Scapy, libpcap, or any packet capture library. Operates at the raw socket level — dissecting Ethernet frames, IP headers, and TCP segments manually to detect port scans, SYN floods, and traffic anomalies at the protocol layer."
      },
      "sdn-iot-detection": {
        description: "A Software-Defined Networking framework that applies machine learning to classify IoT traffic. When the Random Forest model flags an anomaly, the Ryu controller pushes OpenFlow rules onto the virtual switches to isolate the compromised node. Paper under review at ICOIN 2027."
      },
      netlab: {
        description: "A self-contained attack-and-defense laboratory built on Linux network namespaces — lightweight, isolated, and forensically precise. Scapy handles offensive traffic generation, nftables enforces dynamic firewall rules, and Suricata monitors every packet crossing the virtual interfaces. Built to simulate real threat scenarios and validate defensive controls under controlled, repeatable conditions."
      },
      portwatch: {
        description: "A real-time Linux port and socket visualiser built entirely from /proc. It parses raw kernel address/state codes and traces socket inodes back to process descriptors, generating live terminal blades with state snapshot diffing and direct Pulse platform event logging."
      }
    }
  },
  project_details: {
    overview: "Overview",
    key_architecture: "Key Architecture",
    implementation: "Implementation",
    system_gallery: "System Interface Gallery",
    deployment_stack: "Deployment Stack",
    repository: "Repository",
    view_github: "View on GitHub",
    fig_analysis: "System Analysis",
    not_found: "Project Not Found",
    return_home: "Return Home",
    back_to_portfolio: "Back to portfolio"
  },
  skills: {
    header_title: "Skills",
    header_desc: "Tools, protocols and environments I use for building and evaluating secure network systems.",
    categories: {
      iot_kernel: "IoT & Kernel Networking",
      net_sec: "Network Security",
      sec_tools: "Security Tools & AppSec",
      sys_infra: "Systems & Infrastructure",
      data_eng: "Data Engineering & Threat Intel",
      programming: "Programming",
      ai_automation: "AI & Automation"
    }
  },
  education: {
    header_title: "Education",
    m2_degree: "M2 Digital Security & Networks",
    m2_desc: "Master's-level engineering degree in network security, cryptography, threat modelling and secure distributed systems. Final project: SDN-assisted intrusion detection for IoT networks (paper under review). Final semester: research internship at the University of Padua.",
    btech_degree: "B.Tech Electronics and Communication Engineering",
    btech_desc: "Engineering degree in electronics, embedded systems and communication. The hardware background behind my interest in securing constrained IoT devices."
  },
  about: {
    header_title: "About",
    p1: "I am an M2 Digital Security & Networks student at ISEP Paris. From November 2026 to April 2027 I am a research intern in the SPRITZ Security & Privacy Research Group at the University of Padua, working on eBPF/XDP-based security for Matter and Thread networks.",
    p2: "My background is in electronics and communication engineering, which is why I keep coming back to the point where constrained devices meet the network. I like building systems end to end and measuring how they behave. After the internship I plan to continue with a PhD in IoT and network security.",
    btn_projects: "View Projects",
    btn_cv: "Download CV",
    lang_title: "Languages",
    lang_en: "English",
    lang_fr: "French",
    lang_te_hi: "Telugu / Hindi",
    hobby_title: "Outside Work",
    hobby_desc: "Click on a hobby to see photos.",
    hobby_travel: "Travel",
    hobby_gym: "GYM",
    hobby_photo: "Photography",
    view_records: "View photos for {{name}}",
    visual_record: "Photos",
    close_record: "Close"
  },
  contact: {
    header_title: "Contact",
    connection_vectors: "Links",
    focus_title: "Research Focus",
    focus_badge: "Open to collaboration",
    highlights: {
      h1_title: "From Hardware to Network",
      h1_desc: "An electronics background applied to securing constrained IoT devices and the networks they depend on.",
      h2_title: "Detection That Acts",
      h2_desc: "Closing the loop from detection to enforcement: SDN controllers, eBPF/XDP and in-kernel response.",
      h3_title: "Built and Measured",
      h3_desc: "Systems built end to end and evaluated on real traffic and hardware, not only in simulation."
    }
  }
};
