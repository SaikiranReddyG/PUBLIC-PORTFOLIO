export const fr = {
  nav: {
    home: "Accueil",
    research: "Recherche",
    projects: "Projets",
    skills: "Compétences",
    education: "Formation",
    about: "À propos",
    contact: "Contact",
    cv: "Télécharger le CV"
  },
  layout: {
    prev: "PRÉC",
    next: "SUIV",
    load_prev: "Page précédente : {{name}}",
    load_next: "Page suivante : {{name}}"
  },
  home: {
    operator: "SAi.G",
    name_line1: "Saikiran Reddy",
    name_line2: "Gangula",
    tagline: "Recherche en sécurité de l'IoT et des réseaux. M2 Sécurité Numérique & Réseaux à l'ISEP Paris, et stagiaire de recherche à l'Université de Padoue (groupe SPRITZ), sur la sécurité eBPF/XDP des réseaux Matter et Thread.",
    research_btn: "Recherche",
    contact_btn: "Contact",
    cv_btn: "Télécharger le CV"
  },
  research: {
    header_title: "Recherche",
    header_desc: "Comment détecter les attaques sur les réseaux IoT et y répondre au sein même du réseau, sans couper les appareils légitimes.",
    current_label: "En cours",
    current_title: "Passerelle de sécurité eBPF/XDP pour les réseaux Matter et Thread",
    current_org: "Université de Padoue · Groupe de recherche SPRITZ (sécurité et vie privée)",
    current_period: "Nov. 2026 – avr. 2027",
    current_supervisor: "Encadrant : Prof. Federico Corò",
    current_desc: "Stage de recherche de fin d'études (M2, ISEP). Le projet conçoit et évalue une passerelle de sécurité qui inspecte le trafic domotique dans le hook XDP du noyau Linux, là où elle peut agir sur les paquets avant qu'ils n'atteignent le reste du système.",
    goals_title: "Objectifs",
    goal_1: "Détecter à la passerelle la reconnaissance et l'abus de la découverte et de la mise en service des appareils Matter.",
    goal_2: "Appliquer les réponses dans le plan de données avec eBPF/XDP, ciblées sur la source fautive.",
    goal_3: "Évaluer sur du matériel Matter et Thread réel, et pas seulement en émulation.",
    goals_note: "Les résultats seront présentés ici une fois publiés.",
    interests_title: "Centres d'intérêt",
    interest_1: "Sécurité de l'IoT : Matter, Thread, protocoles domotiques",
    interest_2: "Plans de données programmables : eBPF/XDP, SDN, OpenFlow",
    interest_3: "Détection d'intrusion et réponse automatisée",
    interest_4: "Leurres et honeypots pour les réseaux IoT",
    pubs_title: "Publications",
    pub_status: "En cours d'évaluation",
    pub_venue: "Soumis à ICOIN 2027, Workshop on 5G & 6G Communications Networks and Big Data",
    pub_note: "Contribution égale des auteurs étudiants.",
    pub_project: "Page du projet",
    profiles_title: "Profils"
  },
  projects: {
    header_title: "Projets",
    header_desc: "Des systèmes que j'ai construits pour étudier la sécurité des réseaux, la détection des menaces et la réponse automatisée.",
    btn_access: "Voir le projet",
    items: {
      pulse: {
        description: "Un Centre d'Opérations de Sécurité (SOC) pleinement opérationnel — pipeline d'ingestion de logs, alertes de menaces en temps réel et tableau de bord en direct — conteneurisé de bout en bout avec Docker, Redis et SQLite. Aucun SIEM du commerce. Chaque composant est conçu, développé et optimisé de manière autonome."
      },
      sentinel: {
        description: "Un système de détection d'intrusion (IDS) réseau personnalisé, développé en Python sans dépendre de Scapy ou libpcap. Fonctionne au niveau 'raw socket' en décortiquant directement les trames Ethernet, en-têtes IP et segments TCP pour détecter balayages de ports, SYN floods et anomalies de protocoles."
      },
      "sdn-iot-detection": {
        description: "Un framework de réseau défini par logiciel (SDN) qui applique le machine learning pour classifier le trafic IoT. Lorsque le modèle Random Forest détecte une anomalie, le contrôleur Ryu pousse des règles OpenFlow sur les commutateurs virtuels pour isoler le nœud compromis. Article en cours d'évaluation à ICOIN 2027."
      },
      netlab: {
        description: "Laboratoire d'attaque-défense autonome fondé sur les espaces de noms réseau Linux — léger, isolé et d'une grande précision forensique. Scapy gère la génération de trafic offensif, nftables applique des pare-feu dynamiques et Suricata analyse chaque paquet."
      },
      portwatch: {
        description: "Visualisateur de sockets et ports Linux en temps réel extrait de /proc. Analyse les descripteurs bruts du noyau pour faire correspondre les processus et les sockets, affichant les différences d'état instantanées de la plateforme Pulse."
      }
    }
  },
  project_details: {
    overview: "Vue d'ensemble",
    key_architecture: "Architecture Clé",
    implementation: "Implémentation",
    system_gallery: "Galerie d'interfaces système",
    deployment_stack: "Architecture Technique",
    repository: "Dépôt de Code",
    view_github: "Voir sur GitHub",
    fig_analysis: "Analyse du Système",
    not_found: "Projet non trouvé",
    return_home: "Retourner à l'accueil",
    back_to_portfolio: "Retour au portfolio"
  },
  skills: {
    header_title: "Compétences",
    header_desc: "Les outils, protocoles et environnements que j'utilise pour construire et évaluer des systèmes réseau sécurisés.",
    categories: {
      iot_kernel: "IoT & Réseau Noyau",
      net_sec: "Sécurité des Réseaux",
      sec_tools: "Outils de Sécurité & AppSec",
      sys_infra: "Systèmes & Infrastructures",
      data_eng: "Ingénierie des Données & Threat Intel",
      programming: "Programmation",
      ai_automation: "IA & Automatisation"
    }
  },
  education: {
    header_title: "Formation",
    m2_degree: "M2 Sécurité Numérique & Réseaux",
    m2_desc: "Diplôme d'ingénieur (niveau master) en sécurité des réseaux, cryptographie, modélisation des menaces et systèmes distribués sécurisés. Projet de fin d'études : détection d'intrusion assistée par SDN pour les réseaux IoT (article en cours d'évaluation). Dernier semestre : stage de recherche à l'Université de Padoue.",
    btech_degree: "B.Tech Électronique et Communication",
    btech_desc: "Diplôme d'ingénieur en électronique, systèmes embarqués et communication. Le socle matériel à l'origine de mon intérêt pour la sécurité des objets IoT contraints."
  },
  about: {
    header_title: "À propos",
    p1: "Je suis étudiant en M2 Sécurité Numérique & Réseaux à l'ISEP Paris. De novembre 2026 à avril 2027, je suis stagiaire de recherche au sein du groupe SPRITZ (sécurité et vie privée) de l'Université de Padoue, où je travaille sur la sécurité eBPF/XDP des réseaux Matter et Thread.",
    p2: "Ma formation initiale est en électronique et communication, d'où mon intérêt pour le point de rencontre entre objets contraints et réseau. J'aime construire des systèmes de bout en bout et mesurer leur comportement. Après le stage, je souhaite poursuivre en doctorat en sécurité de l'IoT et des réseaux.",
    btn_projects: "Voir les Projets",
    btn_cv: "Télécharger le CV",
    lang_title: "Langues",
    lang_en: "Anglais",
    lang_fr: "Français",
    lang_te_hi: "Télougou / Hindi",
    hobby_title: "En dehors du travail",
    hobby_desc: "Cliquez sur une activité pour voir les photos.",
    hobby_travel: "Voyages",
    hobby_gym: "Musculation",
    hobby_photo: "Photographie",
    view_records: "Voir les photos : {{name}}",
    visual_record: "Photos",
    close_record: "Fermer"
  },
  contact: {
    header_title: "Contact",
    connection_vectors: "Liens",
    focus_title: "Axes de Recherche",
    focus_badge: "Ouvert aux collaborations",
    highlights: {
      h1_title: "Du Matériel au Réseau",
      h1_desc: "Une formation en électronique mise au service de la sécurité des objets IoT contraints et des réseaux dont ils dépendent.",
      h2_title: "Une Détection Qui Agit",
      h2_desc: "Boucler la chaîne de la détection à la réponse : contrôleurs SDN, eBPF/XDP et réponse dans le noyau.",
      h3_title: "Construit et Mesuré",
      h3_desc: "Des systèmes construits de bout en bout et évalués sur du trafic et du matériel réels, pas seulement en simulation."
    }
  }
};
