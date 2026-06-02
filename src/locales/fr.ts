// TODO: review FR - review tone of cybersecurity and academic terms where applicable
export const fr = {
  nav: {
    home: "Accueil",
    projects: "Projets",
    skills: "Compétences",
    education: "Formations",
    about: "À Propos",
    contact: "Contact",
    cv: "Télécharger le CV"
  },
  layout: {
    prev: "PRÉC",
    next: "SUIV",
    load_prev: "Charger la session précédente : {{name}}",
    load_next: "Établir la session suivante : {{name}}"
  },
  home: {
    operator: "SAi.G",
    tagline: "Étudiant ingénieur en cybersécurité et sécurité des réseaux — M2 Sécurité Numérique à l'ISEP Paris.",
    contact_btn: "Contact",
    cv_btn: "Télécharger le CV"
  },
  projects: {
    header_title: "Projets",
    header_desc: "Sélection d'implémentations techniques axées sur la sécurité des réseaux, la détection des menaces et la résilience des infrastructures.",
    btn_access: "Accéder au Nœud du Projet",
    secondary_cti: "Cyber Threat Intelligence",
    secondary_web: "Tests d'intrusion (Pentest)",
    items: {
      pulse: {
        // TODO: review FR tone of technical stack descriptions
        description: "Un Centre d'Opérations de Sécurité (SOC) pleinement opérationnel — pipeline d'ingestion de logs, alertes de menaces en temps réel et tableau de bord en direct — conteneurisé de bout en bout avec Docker, Redis et SQLite. Aucun SIEM du commerce. Chaque composant est conçu, développé et optimisé de manière autonome."
      },
      sentinel: {
        // TODO: review FR raw socket concepts translation
        description: "Un système de détection d'intrusion (IDS) réseau personnalisé, développé en Python sans dépendre de Scapy ou libpcap. Fonctionne au niveau 'raw socket' en décortiquant directement les trames Ethernet, en-têtes IP et segments TCP pour détecter balayages de ports, SYN floods et anomalies de protocoles."
      },
      "sdn-iot-detection": {
        // TODO: review FR machine learning terms
        description: "Un framework de réseau défini par logiciel (SDN) qui applique le machine learning pour classifier le trafic IoT en temps réel. Lorsqu'un modèle de forêt d'arbres décisionnels (Random Forest) lève une alerte, le contrôleur Ryu pousse des règles OpenFlow sur les commutateurs virtuels pour isoler les nœuds malveillants."
      },
      netlab: {
        // TODO: review FR Linux namespaces terminology
        description: "Laboratoire d'attaque-défense autonome fondé sur les espaces de noms réseau Linux — léger, isolé et d'une grande précision forensique. Scapy gère la génération de trafic offensif, nftables applique des pare-feu dynamiques et Suricata analyse chaque paquet."
      },
      portwatch: {
        // TODO: review FR system internals terms
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
    header_title: "Arsenal Technique",
    header_desc: "Une catégorisation rigoureuse des compétences clés, outils et environnements exploités pour sécuriser, surveiller et concevoir des architectures résilientes.",
    categories: {
      net_sec: "Sécurité des Réseaux",
      sec_tools: "Outils de Sécurité & AppSec",
      sys_infra: "Systèmes & Infrastructures",
      data_eng: "Ingénierie des Données & Threat Intel",
      programming: "Programmation",
      ai_automation: "IA & Automatisation"
    }
  },
  education: {
    header_title: "Parcours Académique",
    decrypt_btn: "Déchiffrer l'Enregistrement",
    download_copy: "Télécharger la Copie Certifiée",
    secure_record: "[ENREGISTREMENT SÉCURISÉ]",
    fullscreen: "PLEIN ÉCRAN",
    secure_close: "Fermeture sécurisée de la session",
    clearance: "HABILITATION DE SÉCURITÉ DE L'ARCHIVE NUMÉRIQUE",
    status_verified: "STATUT : RÉCUPÉRÉ & VÉRIFIÉ",
    m2_degree: "M2 Sécurité Numérique & Réseaux",
    m2_desc: "Formation d'ingénieur avancée spécialisée dans les architectures résilientes, la modélisation des menaces et les protocoles cryptographiques. Développement d'une expertise approfondie en sécurisation de systèmes distribués et d'infrastructures réseaux.",
    btech_degree: "B.Tech Électronique et Génie de la Communication",
    btech_desc: "Cursus d'ingénierie fondamental avec un accent prononcé sur l'électronique de pointe, les systèmes embarqués et le cycle de vie du développement logiciel. Pose des méthodologies analytiques requises pour les résolutions de problèmes complexes."
  },
  about: {
    header_title: "Profil Opérateur",
    p1: "Étudiant en M2 Sécurité Numérique & Réseaux à l'ISEP Paris. Animé par la recherche de l'excellence technique et une compréhension profonde des tactiques offensives adverses, je recherche un stage de fin d'études en cybersécurité.",
    p2: "Mon parcours académique repose sur des méthodes analytiques intransigeantes, me préparant à concevoir des architectures résilientes et à neutraliser des menaces complexes. La démarche est chirurgicale ; la finalité est l'intégrité systémique absolue.",
    btn_projects: "Voir les Projets",
    btn_cv: "Télécharger le CV",
    lang_title: "Langues",
    lang_en: "Anglais",
    lang_fr: "Français",
    lang_te_hi: "Télougou / Hindi",
    hobby_title: "Hors-Service",
    hobby_desc: "Cliquez sur une activité pour déchiffrer et visualiser les archives liées.",
    hobby_travel: "Voyages / Exploration",
    hobby_gym: "Musculation / Cardio",
    hobby_photo: "Photographie",
    view_records: "Voir l'enregistrement de {{name}}",
    visual_record: "Enregistrement Visuel",
    close_record: "Fermer l'enregistrement",
    recovered_record: "ENREGISTREMENT RÉCUPÉRÉ",
    status_secure: "STATUT : SÉCURISÉ"
  },
  contact: {
    header_title: "Entrer en Contact",
    connection_vectors: "VECTEURS DE CONNEXION",
    why_hire_me: "Pourquoi Me Recruter",
    active_node: "Nœud Actif",
    protocol_init: "Initialiser le protocole de connexion",
    highlights: {
      h1_title: "Sécurité Ancrée dans le Matériel",
      h1_desc: "Applique la précision du bas niveau issue d'une formation en électronique à la sécurité numérique.",
      h2_title: "Ingénierie à Ressources Limitées",
      h2_desc: "Apporte une efficacité matérielle directe à la conception logicielle globale.",
      h3_title: "Pensée Systémique Globale",
      h3_desc: "Conçoit ses outils comme un écosystème interconnecté. Réunit un IDS réseau, un moniteur de performances et un lab de test d'attaques au sein d'une plateforme SOC modulaire unifiée."
    }
  }
};
