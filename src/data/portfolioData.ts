export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  category: string;
  categoryBadges: string[];
  description: string;
  keyFeatures: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'databases' | 'core_cs' | 'tools';
  categoryLabel: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  scoreLabel: string;
  score: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "PASUMARTHY SANJANA",
    shortName: "SANJANA",
    title: "Software Developer",
    animatedHeadlines: [
      "Software Developer",
      "AI & Machine Learning Enthusiast",
      "Data Analytics Enthusiast",
      "Computer Science Undergraduate"
    ],
    tagline: "Turning Ideas Into Intelligent Digital Experiences.",
    intro: "I'm a Computer Science undergraduate passionate about software development, artificial intelligence, and data-driven solutions. I enjoy building practical applications that solve real-world problems through technology.",
    aboutNarrative: [
      "I'm currently pursuing my Bachelor of Technology in Computer Science and Engineering at Koneru Lakshmaiah Education Foundation (KL University).",
      "I have strong foundations in Python, SQL, Data Structures and Algorithms, Object-Oriented Programming, and database management.",
      "I have hands-on experience building AI-powered applications, machine learning-based recommendation systems, and interactive data analytics solutions.",
      "I'm always excited to learn new technologies, solve challenging problems, and turn innovative ideas into useful applications."
    ],
    email: "pasumarthisanjaa0602@gmail.com",
    location: "Vijayawada, India",
    university: "Koneru Lakshmaiah Education Foundation (KL University)",
    resumeUrl: "/Sanjana_Pasumarthy_Resume.pdf",
    githubUrl: "https://github.com/Sanjanapasumarthi02",
    linkedinUrl: "https://linkedin.com/in/sanjana-pasumarthy",
    stats: [
      { label: "CGPA", value: "8.09", sub: "KL University (2023-2027)" },
      { label: "Featured Projects", value: "2", sub: "AI & ML Powered Apps" },
      { label: "AWS Certified", value: "Cloud Practitioner", sub: "Issued May 2025" },
      { label: "Academic Journey", value: "2023–2027", sub: "B.Tech in CSE" }
    ]
  },

  skills: [
    // Programming Languages
    {
      name: "Python",
      category: "languages",
      categoryLabel: "Programming Languages",
      description: "Data analysis, ML algorithms, scripting, and backend development.",
      iconName: "python",
      tag: "Primary Language"
    },
    {
      name: "SQL",
      category: "languages",
      categoryLabel: "Programming Languages",
      description: "Relational database querying, aggregations, schema design, and joins.",
      iconName: "sql",
      tag: "Database Querying"
    },
    {
      name: "Java",
      category: "languages",
      categoryLabel: "Programming Languages",
      description: "Object-oriented software development, DSA, and multi-threaded architecture.",
      iconName: "java",
      tag: "OOP & DSA"
    },
    {
      name: "C",
      category: "languages",
      categoryLabel: "Programming Languages",
      description: "Low-level memory management, pointers, and systems programming basics.",
      iconName: "c",
      tag: "Systems Foundation"
    },

    // Frontend Technologies
    {
      name: "React.js",
      category: "frontend",
      categoryLabel: "Frontend Technologies",
      description: "Component architecture, hooks, state management, and modern UI workflows.",
      iconName: "react",
      tag: "Modern Frontend"
    },
    {
      name: "JavaScript",
      category: "frontend",
      categoryLabel: "Frontend Technologies",
      description: "ES6+, asynchronous programming, DOM manipulation, and web APIs.",
      iconName: "javascript",
      tag: "Core Web"
    },
    {
      name: "HTML5",
      category: "frontend",
      categoryLabel: "Frontend Technologies",
      description: "Semantic web architecture, accessibility standards, and SEO optimization.",
      iconName: "html",
      tag: "Markup"
    },
    {
      name: "CSS3",
      category: "frontend",
      categoryLabel: "Frontend Technologies",
      description: "Responsive layouts, Flexbox, CSS Grid, custom properties, and animations.",
      iconName: "css",
      tag: "Styling & Layout"
    },

    // Databases
    {
      name: "MySQL",
      category: "databases",
      categoryLabel: "Databases",
      description: "Relational data modeling, ACID compliance, indices, and transaction handling.",
      iconName: "mysql",
      tag: "RDBMS"
    },
    {
      name: "MongoDB",
      category: "databases",
      categoryLabel: "Databases",
      description: "NoSQL document storage, JSON-like schemas, aggregations, and rapid scaling.",
      iconName: "mongodb",
      tag: "NoSQL"
    },

    // Core Computer Science
    {
      name: "Data Structures & Algorithms",
      category: "core_cs",
      categoryLabel: "Core Computer Science",
      description: "Trees, graphs, dynamic programming, sorting, searching, and complexity analysis.",
      iconName: "dsa",
      tag: "Algorithmic Thinking"
    },
    {
      name: "Database Management Systems (DBMS)",
      category: "core_cs",
      categoryLabel: "Core Computer Science",
      description: "Normalization, concurrency control, transaction recovery, and query optimization.",
      iconName: "dbms",
      tag: "Data Architecture"
    },
    {
      name: "Object-Oriented Programming (OOP)",
      category: "core_cs",
      categoryLabel: "Core Computer Science",
      description: "Encapsulation, inheritance, polymorphism, abstraction, and SOLID principles.",
      iconName: "oop",
      tag: "Software Design"
    },
    {
      name: "Operating Systems",
      category: "core_cs",
      categoryLabel: "Core Computer Science",
      description: "Process synchronization, CPU scheduling, virtual memory, and deadlocks.",
      iconName: "os",
      tag: "System Concepts"
    },

    // Developer Tools
    {
      name: "Git",
      category: "tools",
      categoryLabel: "Developer Tools",
      description: "Distributed version control, branching strategies, rebase, and merge resolution.",
      iconName: "git",
      tag: "Version Control"
    },
    {
      name: "GitHub",
      category: "tools",
      categoryLabel: "Developer Tools",
      description: "Collaborative workflows, code reviews, pull requests, and repository tracking.",
      iconName: "github",
      tag: "Collaboration"
    },
    {
      name: "Linux",
      category: "tools",
      categoryLabel: "Developer Tools",
      description: "Command line shell scripting, file permissions, environment configuration.",
      iconName: "linux",
      tag: "OS & Shell"
    }
  ] as SkillItem[],

  projects: [
    {
      id: "aegis-ai",
      title: "AEGISAI – PHISHING AND THREAT ANALYZER",
      tagline: "Intelligent Cyber Threat Detection & Semantic Risk Scoring",
      category: "Artificial Intelligence | Cyber Security",
      categoryBadges: ["Artificial Intelligence", "Cyber Security", "Cloud API"],
      description: "An AI-powered web application designed to detect phishing attempts in emails, SMS messages, and URLs using intelligent content analysis.",
      keyFeatures: [
        "Integrated Google Gemini API for deep linguistic threat analysis.",
        "Detects suspicious content, spoofed domain patterns, and security red flags.",
        "Classifies threats into Low, Medium, and High risk with explainable reasoning.",
        "Serverless backend deployed using Vercel for instant, scalable execution.",
        "Secure API key handling and hardened client-server communication."
      ],
      techStack: ["TypeScript", "Node.js", "Gemini API", "Vercel Serverless Functions", "Cyber Intelligence"],
      liveUrl: "https://ai-phishing-and-threat-analyzer.vercel.app",
      githubUrl: "https://github.com/Sanjanapasumarthi02/AI-Phishing-and-Threat-Analyzer",
      metrics: [
        { label: "Threat Engine", value: "Gemini 1.5 Flash" },
        { label: "Risk Levels", value: "Low / Med / High" },
        { label: "Execution Time", value: "< 1.2s" }
      ]
    },
    {
      id: "scheme-navigator",
      title: "AI-BASED GOVERNMENT SCHEME NAVIGATOR",
      tagline: "Demographic Welfare Eligibility Engine with ML Cosine Similarity",
      category: "Artificial Intelligence | Machine Learning | Data Analytics",
      categoryBadges: ["Artificial Intelligence", "Machine Learning", "Data Analytics"],
      description: "A smart recommendation platform that helps users discover eligible Central and Andhra Pradesh government welfare schemes based on their profiles, including age, income, and occupation.",
      keyFeatures: [
        "Rule-based deterministic eligibility filtering across state and central guidelines.",
        "Machine learning-based ranking using cosine similarity vector representations.",
        "Personalized government scheme recommendations tailored to citizen profiles.",
        "Administrative dashboard for monitoring scheme awareness and uptake.",
        "Interactive bar and pie chart visualizations for eligibility distributions and sector trends."
      ],
      techStack: ["Python", "Machine Learning", "Scikit-learn", "Streamlit", "Pandas", "Git", "GitHub"],
      liveUrl: "https://ai-based-government-scheme-navigator-kzvrbjpwnuranqpgqjvpvu.streamlit.app/",
      githubUrl: "https://github.com/Sanjanapasumarthi02/AI-Based-Government-Scheme-Navigator",
      metrics: [
        { label: "Ranking Model", value: "Cosine Similarity" },
        { label: "Coverage", value: "AP & Central Schemes" },
        { label: "Analytics", value: "Interactive Visualizations" }
      ]
    }
  ] as ProjectData[],

  certification: {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "May 2025",
    badgeLabel: "Official Cloud Credential",
    credentialIdPlaceholder: "AWS-CCP-2025-PASUMARTHY",
    credentialUrl: "https://aws.amazon.com/verification",
    description: "Validates overall understanding of AWS Cloud platform concepts, security models, compliance standards, cloud economics, core architectural best practices, and billing strategies.",
    domains: [
      "Cloud Concepts & Architecture",
      "Security & Compliance in the Cloud",
      "Cloud Technology & Core Services (EC2, S3, RDS, Lambda)",
      "Billing, Pricing Models & Cost Management"
    ]
  },

  education: [
    {
      degree: "Bachelor of Technology – Computer Science and Engineering",
      institution: "Koneru Lakshmaiah Education Foundation (KL University)",
      period: "2023 – 2027",
      scoreLabel: "CGPA",
      score: "8.09",
      description: "Specializing in core computer science, artificial intelligence, data structures, algorithm design, and database engineering.",
      highlights: [
        "8.09 CGPA maintained across rigorous engineering curriculum",
        "Key Coursework: DSA, DBMS, OOP, Operating Systems, Computer Networks, AI Systems",
        "Active member of developer and technology innovation societies"
      ]
    },
    {
      degree: "Intermediate – MPC (Mathematics, Physics, Chemistry)",
      institution: "Sri Chaitanya Junior College",
      period: "2021 – 2023",
      scoreLabel: "Percentage",
      score: "67.7%",
      description: "Focused on advanced mathematics, classical physics, and analytical chemistry foundations.",
      highlights: [
        "Rigorous analytical problem-solving foundation",
        "Focus on calculus, algebra, and physics principles"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Sri Chaitanya High School",
      period: "2020 – 2021",
      scoreLabel: "CGPA",
      score: "10.0",
      description: "Completed secondary education with perfect academic distinction across all subjects.",
      highlights: [
        "Achieved a perfect 10.0 / 10.0 CGPA",
        "Strong foundation in science, mathematics, and analytical reasoning"
      ]
    }
  ] as EducationItem[],

  codingProfiles: [
    {
      platform: "LeetCode",
      role: "Algorithmic Problem Solving",
      description: "Practicing data structures and algorithmic efficiency. Solving problems in arrays, strings, hash maps, binary trees, recursion, and dynamic programming.",
      url: "https://leetcode.com/u/sanjanapasumarthy",
      urlPlaceholder: "https://leetcode.com/u/sanjanapasumarthy",
      color: "from-amber-500 to-orange-600",
      iconType: "leetcode"
    },
    {
      platform: "HackerRank",
      role: "Skill Certifications & Practice",
      description: "Demonstrating problem solving rigor, SQL relational querying proficiency, and Python core competencies through structured coding assessments.",
      url: "https://hackerrank.com/profile/sanjanapasumarthy",
      urlPlaceholder: "https://hackerrank.com/profile/sanjanapasumarthy",
      color: "from-emerald-500 to-green-600",
      iconType: "hackerrank"
    },
    {
      platform: "GitHub",
      role: "Source Code & Collaboration",
      description: "Managing project source codes, version control branches, documentation, serverless architectures, and open developer repositories.",
      url: "https://www.linkedin.com/in/sanjana-pasumarthy-01a787411/",
      urlPlaceholder: "https://www.linkedin.com/in/sanjana-pasumarthy-01a787411/",
      color: "from-purple-500 to-indigo-600",
      iconType: "github"
    }
  ]
};
