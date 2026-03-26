import {
  Code, Layout, Server, Database, BrainCircuit, Terminal,
  ShieldCheck, Activity, Cpu
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Vedansh Wagh",
    role: "Full Stack Developer",
    status: "Initializing VedanshOS...",
    tagline: "I build real-world applications, participate in hackathons, and solve complex problems using scalable systems and intelligent data-driven approaches.",
    aboutStats: [
      { label: "Projects Built", value: 3 },
      { label: "Teams Beaten", value: "500+" },
      { label: "Tech Stacks", value: 4 }
    ],
    github: "https://github.com/Vedansh24",
    linkedin: "https://linkedin.com/in/vedanshwagh",
    resumeUrl: "#resume-link", // Update this with real PDF
  },
  
  projects: [
    {
      id: "purifai",
      title: "PurifAI",
      category: "AI / ML",
      description: "An AI-powered data cleaning and synthetic data generation platform.",
      problem: "Data scientists spend 80% of their time cleaning dirty datasets instead of training models.",
      learned: "Built advanced data pipelines using Pandas and NumPy, and integrated LLMs for intelligent synthetic data generation.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tech: ["Python", "Flask", "Pandas", "Scikit-Learn", "React"],
      live: "https://github.com/Vedansh24", // Add actual live link later if available
      github: "https://github.com/Vedansh24",
      icon: BrainCircuit,
      featured: true
    },
    {
      id: "rbac",
      title: "RBAC Dashboard",
      category: "Full Stack",
      description: "Secure role-based access control system with protected routing and multi-tier user dashboards.",
      problem: "Managing complex permissions and ensuring secure navigation paths in enterprise applications without exposing admin routes.",
      learned: "Mastered React Context API, higher-order components for route guarding, and scalable user-role state management.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      live: "https://rbac-dashboard-amenses.vercel.app",
      github: "https://github.com/Vedansh24",
      icon: ShieldCheck,
      featured: true
    },
    {
      id: "medimeet",
      title: "MediMeet",
      category: "Full Stack",
      description: "A comprehensive healthcare platform for scheduling appointments and remote video consultations.",
      problem: "Patients struggle to seamlessly book doctors and attend virtual check-ups on a unified interface.",
      learned: "Learned WebRTC foundations for video streaming, complex date-time scheduling algorithms, and building a responsive patient/doctor UI.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      tech: ["MERN Stack", "Socket.io", "React", "Node.js"],
      live: "https://medimeet-flame.vercel.app",
      github: "https://github.com/Vedansh24",
      icon: Activity,
      featured: true
    }
  ],

  skills: [
    {
      category: "Frontend",
      items: [
        { name: "React / Vite", level: 90, icon: Layout },
        { name: "TypeScript", level: 85, icon: Code },
        { name: "Tailwind CSS", level: 95, icon: Layout },
        { name: "Framer Motion", level: 80, icon: Layout }
      ]
    },
    {
      category: "Backend & Systems",
      items: [
        { name: "Node.js / Express", level: 85, icon: Server },
        { name: "MongoDB", level: 80, icon: Database },
        { name: "Python / Flask", level: 85, icon: Terminal },
        { name: "SQL", level: 75, icon: Database }
      ]
    },
    {
      category: "AI & Data",
      items: [
        { name: "Pandas / NumPy", level: 85, icon: Database },
        { name: "Scikit-Learn", level: 75, icon: BrainCircuit },
        { name: "Data Pipelines", level: 80, icon: Cpu },
        { name: "Prompt Engineering", level: 90, icon: Terminal }
      ]
    }
  ],

  experience: [
    {
      id: "acehack",
      role: "Participant & Developer",
      company: "AceHack Jaipur",
      date: "2024",
      description: "Competed in a massive 24-hour hackathon focusing on rapid prototyping and problem-solving under pressure.",
      impact: [
        "Identified a critical problem in dataset preparation and ideated PurifAI.",
        "Architected and deployed a working prototype within 24 hours.",
        "Ranked Top 70 out of 500+ participating teams nationwide."
      ]
    }
  ],

  aiVision: {
    title: "Building Intelligence",
    intro: "My journey into AI isn't just about using APIs. It's about understanding how intelligent systems process information to solve highly complex, unstructured problems.",
    learning: [
      "Machine Learning: Understanding core algorithms with Scikit-Learn.",
      "Data Pipelines: Automating the ingestion, cleaning, and formatting of raw data.",
      "Intelligent Systems: Integrating LLMs to create context-aware applications."
    ],
    vision: "Building AI-powered systems that solve real-world problems."
  },

  hireMe: {
    intro: "I don't just write code — I build systems. I combine full-stack capability with AI-first thinking to deliver exceptional products.",
    points: [
      "I build real-world projects, not tutorials.",
      "I understand systems, not just syntax.",
      "I combine full-stack + AI thinking.",
      "I adapt fast and learn aggressively."
    ],
    cta: "Let's build something impactful."
  }
};
