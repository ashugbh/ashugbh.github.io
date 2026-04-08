export const siteMetadata = {
  title: "Ashenafi Gebrehiwet Brhane | Flutter & Backend Engineer",
  description:
    "Ashenafi Gebrehiwet Brhane is a Flutter and backend engineer building secure, scalable FinTech applications with Clean Architecture, DDD, and production-grade API design.",
  keywords:
    "Ashenafi Gebrehiwet Brhane, Flutter Developer, Backend Engineer, FinTech Engineer, Clean Architecture, DDD, Django REST, BLoC",
  author: "Ashenafi Gebrehiwet Brhane",
  url: "https://ashugbh.github.io/",
  image: "https://ashugbh.github.io/assets/preview.svg",
  themeColor: "#020617"
};

export const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const heroProfile = {
  name: "Ashenafi Gebrehiwet Brhane",
  roleLabel: "Flutter & Backend Engineer",
  roles: [
    "secure, scalable FinTech products",
    "production Flutter experiences",
    "reliable backend API systems"
  ],
  summary:
    "Flutter and backend engineer focused on production mobile finance systems, clean architecture, and API reliability for high-trust user experiences.",
  focusPoints: [
    "Flutter mobile architecture for financial products",
    "Django REST API integration and security",
    "High-quality UX for transaction confidence"
  ],
  image: {
    src: "/assets/images/My_photo.jpg",
    alt: "Portrait of Ashenafi Gebrehiwet Brhane showing face and shoulders",
    width: 853,
    height: 1280
  },
  stats: [
    {
      title: "Production FinTech",
      description: "Built and shipped secure transaction and account workflows."
    },
    {
      title: "Architecture First",
      description: "Hands-on with DDD, BLoC, and clean layered codebases."
    },
    {
      title: "Cross-Team Delivery",
      description: "Strong execution across product, mobile, and backend collaboration."
    }
  ]
};

export const heroActions = [
  { label: "View Projects", href: "#projects", variant: "solid" },
  { label: "Contact", href: "#contact", variant: "ghost" },
  { label: "GitHub", href: "https://github.com/ashugbh", variant: "ghost", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashenafibr/",
    variant: "ghost",
    external: true
  }
];

export const aboutContent = {
  eyebrow: "About",
  title: "Engineering rigor with product awareness.",
  paragraphs: [
    "I am a Flutter and backend engineer with hands-on experience building production-grade financial products. At Beqelal FinTech, I contribute to secure transaction flows, account management, and API-integrated mobile features.",
    "I work with Domain-Driven Design and Clean Architecture to keep codebases modular, testable, and easier to scale across teams. I combine engineering rigor with practical product thinking to ship software that improves trust, speed, and reliability for users."
  ],
  facts: [
    {
      title: "Location",
      description: "Addis Ababa, Ethiopia"
    },
    {
      title: "Role Target",
      description: "Flutter, backend, and FinTech engineering positions"
    },
    {
      title: "FinTech Proof",
      description: "Production delivery of secure transaction and account workflows."
    },
    {
      title: "Engineering Approach",
      description: "Clean Architecture, DDD, and API reliability with team ownership."
    }
  ]
};

export const skillGroups = [
  {
    title: "Frontend and Mobile",
    items: [
      { label: "Flutter", code: "FL" },
      { label: "Dart", code: "DA" },
      { label: "BLoC", code: "BL" },
      { label: "Responsive Design", code: "RS" }
    ]
  },
  {
    title: "Backend",
    items: [
      { label: "Python", code: "PY" },
      { label: "Django", code: "DJ" },
      { label: "Django REST Framework", code: "DR" },
      { label: "Role-based Access", code: "RB" }
    ]
  },
  {
    title: "Architecture and Data",
    items: [
      { label: "Clean Architecture", code: "CA" },
      { label: "Domain-Driven Design", code: "DD" },
      { label: "SQL and MySQL", code: "SQ" },
      { label: "API Integration", code: "AP" }
    ]
  },
  {
    title: "Tools and Quality",
    items: [
      { label: "Git and GitHub", code: "GI" },
      { label: "Postman", code: "PM" },
      { label: "Unit Testing", code: "UT" },
      { label: "Linux", code: "LN" }
    ]
  }
];

export const experienceEntries = [
  {
    period: "2025 - Present",
    role: "Mobile Application Developer (Remote)",
    company: "Beqelal (FinTech)",
    highlights: [
      "Delivered production Flutter features for financial transactions, account management, and PIN confirmation workflows.",
      "Applied DDD and Clean Architecture to keep presentation, application, domain, and infrastructure layers maintainable.",
      "Integrated REST APIs for real-time financial operations while improving debugging and performance across devices.",
      "Collaborated through PR reviews and feature-branch workflows to strengthen code quality and release confidence."
    ]
  },
  {
    period: "2025",
    role: "Backend Developer",
    company: "Bill Management System (Django REST)",
    highlights: [
      "Designed backend APIs for bill creation, payment tracking, authentication, and reporting in a multi-role system.",
      "Implemented role-based access controls for Admin, Biller, and Customer with secure permission handling.",
      "Built automated reminders and structured endpoints to improve visibility into payment lifecycle status."
    ]
  },
  {
    period: "Nov 2024 - Feb 2025",
    role: "Network Security Design Intern",
    company: "Adigrat University",
    highlights: [
      "Designed and documented secure campus network infrastructure with routers, switches, and firewall policies.",
      "Deployed IDS and endpoint security controls and produced recommendations for scalable security hardening."
    ]
  }
];

const emunSlides = [
  {
    src: "/assets/images/Emun/emun-1.jpg",
    alt: "Emun app profile and admin dashboard view"
  },
  {
    src: "/assets/images/Emun/emun-3.jpg",
    alt: "Emun app home feed with featured listings"
  },
  {
    src: "/assets/images/Emun/emun-2.jpg",
    alt: "Emun app listing details and contact seller view"
  },
  {
    src: "/assets/images/Emun/emun-4.jpg",
    alt: "Emun app listing submission flow"
  },
  {
    src: "/assets/images/Emun/emun-5.jpg",
    alt: "Emun app message and chat interface"
  },
];

const emunCover = {
  src: "/assets/images/Emun/thu.png",
  alt: "Emun app thumbnail"
};

export const projectCards = [
  {
    title: "Emun Brokerage Mobile Application",
    description:
      "Designed and shipped a two-sided brokerage marketplace for buyers and sellers with categorized discovery, direct interaction, and smooth listing workflows.",
    image: emunCover.src,
    alt: emunCover.alt,
    tags: [
      "Flutter",
      "State Management",
      "UI/UX Design",
      "API Integration",
      "Real-time Data",
      "FinTech"
    ],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/ashugbh/Emun/",
        variant: "solid",
        external: true
      },
      {
        label: "Live Demo",
        type: "demo",
        variant: "ghost",
        slides: emunSlides
      }
    ],

  },
  {
    title: "Beqelal FinTech Mobile Application",
    description:
      "Implemented secure transaction and account workflows in a production FinTech app, improving architecture quality and reliability through BLoC state management and layered domain modeling.",
    image: "/assets/projects/beqelal-fintech-app.png",
    alt: "Beqelal FinTech app screenshot",
    tags: ["Flutter", "Dart", "BLoC", "Clean Architecture", "FinTech"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/ashugbh",
        variant: "solid",
        external: true
      },
      {
        label: "Live Demo",
        href: "#",
        variant: "ghost",
        disabled: true
      }
    ]
  },
  {
    title: "Bill Management System API",
    description:
      "Designed and shipped Django REST APIs for bill lifecycle management, payment tracking, reminders, and reporting, including role-based permissions for operational security and admin control.",
    image: "/assets/projects/bill-management-system.png",
    alt: "Bill management backend project screenshot",
    tags: ["Python", "Django", "Django REST", "MySQL", "RBAC"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/ashugbh/Bill-Management-System",
        variant: "solid",
        external: true
      },
      {
        label: "Live Demo",
        href: "#",
        variant: "ghost",
        disabled: true
      }
    ]
  },
  {
    title: "AI-Driven Face Recognition Surveillance",
    description:
      "Developed a CNN-based security system that reached 96.3% recognition accuracy, with schedule-aware access control, live monitoring, alerting, and low-latency response tuning for real-time operations.",
    image: "/assets/projects/ai-surveillance-system.png",
    alt: "AI face recognition and surveillance system screenshot",
    tags: ["TensorFlow", "OpenCV", "Python", "SQLite", "Computer Vision"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/ashugbh/Smart-System",
        variant: "solid",
        external: true
      },
      {
        label: "Live Demo",
        href: "#",
        variant: "ghost",
        disabled: true
      }
    ]
  }
];

export const contactCards = [
  {
    label: "Phone",
    value: "+251 978 194 411",
    href: "tel:+251978194411"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ashenafibr",
    href: "https://www.linkedin.com/in/ashenafibr/",
    external: true
  },
  {
    label: "GitHub",
    value: "github.com/ashugbh",
    href: "https://github.com/ashugbh",
    external: true
  },
  {
    label: "Email",
    value: "ashugb780@gmail.com",
    href: "mailto:ashugb780@gmail.com"
  }
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ashugbh",
    external: true
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashenafibr/",
    external: true
  },
  {
    label: "Email",
    href: "mailto:ashugb780@gmail.com"
  }
];
