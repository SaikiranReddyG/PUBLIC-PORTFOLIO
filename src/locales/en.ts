export const en = {
  nav: {
    home: "Home",
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
    load_prev: "Load Previous Page: {{name}}",
    load_next: "Load Next Page: {{name}}"
  },
  home: {
    operator: "SAi.G",
    tagline: "Cybersecurity & network security engineering student — M2 Digital Security at ISEP Paris.",
    contact_btn: "Contact",
    cv_btn: "Download CV"
  },
  projects: {
    header_title: "Projects",
    header_desc: "Selected technical implementations focusing on network security, threat detection, and infrastructure resilience.",
    btn_access: "Access Project Node",
    secondary_cti: "Cyber Threat Intelligence",
    secondary_web: "Penetration Testing",
    items: {
      pulse: {
        description: "A fully operational Security Operations Center — log ingestion pipeline, real-time threat alerting, and live dashboard — containerized from the ground up using Docker, Redis and SQLite. No off-the-shelf SIEM. Every component designed, built, and tuned manually."
      },
      sentinel: {
        description: "A custom intrusion detection system built entirely in Python without relying on Scapy, libpcap, or any packet capture library. Operates at the raw socket level — dissecting Ethernet frames, IP headers, and TCP segments manually to detect port scans, SYN floods, and traffic anomalies at the protocol layer."
      },
      "sdn-iot-detection": {
        description: "A Software-Defined Networking framework that applies machine learning to classify IoT traffic in real time. When the Random Forest model flags an anomaly, the Ryu controller responds by pushing OpenFlow rules directly onto the virtual switches — isolating compromised nodes before lateral movement occurs."
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
    header_title: "Technical Arsenal",
    header_desc: "A structured breakdown of core competencies, tools, and environments utilized in securing, monitoring, and engineering resilient systems.",
    categories: {
      net_sec: "Network Security",
      sec_tools: "Security Tools & AppSec",
      sys_infra: "Systems & Infrastructure",
      data_eng: "Data Engineering & Threat Intel",
      programming: "Programming",
      ai_automation: "AI & Automation"
    }
  },
  education: {
    header_title: "Academic Foundation",
    decrypt_btn: "Decrypt Record",
    download_copy: "Download Certified Copy",
    secure_record: "[SECURE RECORD]",
    fullscreen: "FULLSCREEN",
    secure_close: "Secure close session",
    clearance: "DIGITAL ARCHIVE SYSTEMS SECURITY CLEARANCE",
    status_verified: "STATUS: RECOVERED & VERIFIED",
    m2_degree: "M2 Digital Security & Networks",
    m2_desc: "Advanced master's degree focusing on robust architectural design, threat modeling, and cryptographic protocols. Developing deep technical expertise in securing distributed systems and modern network infrastructure against sophisticated cyber threats.",
    btech_degree: "B.Tech Electronics and communication Engineering",
    btech_desc: "Comprehensive foundational engineering program with a strong emphasis on core electronics, embedded systems and software development lifecycles. Established the analytical groundwork required for advanced technical problem-solving."
  },
  about: {
    header_title: "Operator Profile",
    p1: "M2 Digital Security & Networks student at ISEP Paris. Driven by a rigorous pursuit of technical excellence and a deep understanding of adversarial tactics, I am seeking a final-year internship in cybersecurity.",
    p2: "My academic foundation is built on uncompromising analytical methodologies, preparing me to architect resilient systems and dismantle complex threats. The approach is surgical; the goal is absolute structural integrity.",
    btn_projects: "View Projects",
    btn_cv: "Download CV",
    lang_title: "Languages",
    lang_en: "English",
    lang_fr: "French",
    lang_te_hi: "Telugu / Hindi",
    hobby_title: "Off-Duty",
    hobby_desc: "Click on a hobby to decrypt and unlock visual records.",
    hobby_travel: "Travel",
    hobby_gym: "GYM",
    hobby_photo: "Photography",
    view_records: "View records for {{name}}",
    visual_record: "Visual Record",
    close_record: "Close record",
    recovered_record: "RECOVERED RECORD",
    status_secure: "STATUS: SECURE"
  },
  contact: {
    header_title: "Get in Touch",
    connection_vectors: "CONNECTION VECTORS",
    why_hire_me: "Why Hire Me",
    active_node: "Active Node",
    protocol_init: "Initiate connection protocol",
    highlights: {
      h1_title: "Hardware-Rooted Security",
      h1_desc: "Applies low-level precision from an electronics background to digital security.",
      h2_title: "Resource-Constrained Engineering",
      h2_desc: "Brings hardware-level efficiency to software architecture.",
      h3_title: "End-to-End Systems Thinking",
      h3_desc: "Designs individual tools to work as a unified ecosystem. Connects a network IDS, system monitor, and attack lab into a modular SOC platform operating over a single event contract."
    }
  }
};
