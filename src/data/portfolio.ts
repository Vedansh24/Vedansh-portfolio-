import {
  Code, Layout, Server, Database, Terminal,
  ShieldCheck, Activity, Cpu, Layers
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: "Vedansh Wagh",
    role: "Full Stack Developer & Backend Systems Engineer",
    headline: "Building Scalable Web Applications, Backend Systems, and AI-Driven Solutions",
    status: "Initializing Systems... Node Status: Active",
    summary: "Computer Science Engineering student with hands-on experience building production-oriented applications using React, Next.js, TypeScript, Fastify, Prisma ORM, PostgreSQL, Redis, JWT Authentication, and modern backend architecture patterns. Experienced in developing enterprise-style systems including RBAC, workflow engines, evidence management systems, verdict engines, real-time APIs, and scalable full-stack applications. Focused on building reliable, maintainable, and scalable software rather than simple CRUD applications.",
    aboutStats: [
      { label: "Enterprise Projects", value: "3" },
      { label: "API Operations/sec", value: "10k+" },
      { label: "Core Technologies", value: "12+" }
    ],
    github: "https://github.com/Vedansh24",
    linkedin: "https://linkedin.com/in/vedanshwagh",
    resumeUrl: "#resume-link", // Update this with real PDF
  },
  
  projects: [
    {
      id: "falsity-api",
      title: "Falsity API",
      category: "backend",
      tagline: "Flagship Project",
      description: "Enterprise-style fact-checking platform featuring claims management, evidence workflows, verdict engine architecture, authentication, role-based access, and scalable API design.",
      problem: "Traditional fact-checking platforms rely on slow, manual workflows and lack high-throughput structured APIs to manage claims verification and verdict delivery programmatically.",
      architecture: "Layered architecture featuring Fastify controllers, services, repositories, and Middlewares. Utilizes Prisma ORM with PostgreSQL for structured claims relational storage and Redis for queuing evidence verification jobs and caching verdict results.",
      learned: "Mastered building asynchronous workflow engines, developing granular role-based access control (RBAC) middleware, and optimizing system reliability under simulated concurrent user load.",
      tech: ["Fastify", "TypeScript", "Prisma", "PostgreSQL", "JWT", "Redis"],
      live: "https://github.com/Vedansh24/falsity-api", 
      github: "https://github.com/Vedansh24/falsity-api",
      icon: Cpu,
      featured: true
    },
    {
      id: "medimeet",
      title: "MediMeet",
      category: "frontend / backend",
      tagline: "Full Stack System",
      description: "Doctor-patient appointment platform featuring authentication, booking workflows, and real-time communication capabilities.",
      problem: "Healthcare services struggle with fragmented scheduling interfaces, long loading times, and unreliable video consultation integrations for remote appointments.",
      architecture: "Next.js client-side routing and server actions integrated with Neon Serverless PostgreSQL. Built a custom slot-allocation algorithm to prevent double-booking, combined with Vonage API for low-latency WebRTC communications.",
      learned: "Implemented real-time synchronization of doctor calendars, resolved complex timezone booking edge cases, and optimized video stream connection speeds.",
      tech: ["Next.js", "Neon", "Tailwind CSS", "Vonage", "TypeScript", "PostgreSQL"],
      live: "https://medimeet-flame.vercel.app",
      github: "https://github.com/Vedansh24/medimeet",
      icon: Activity,
      featured: true
    },
    {
      id: "rbac-dashboard",
      title: "RBAC Dashboard",
      category: "frontend",
      tagline: "Security Dashboard",
      description: "Role-based dashboard with protected routes, permissions, dynamic navigation, and scalable frontend architecture.",
      problem: "Enterprise dashboards often leak UI elements or administrative routes to unauthorized roles, causing security vulnerabilities and poor user experience.",
      architecture: "React modular component architecture combined with Redux Toolkit for centralized auth/permission state management. Higher-Order Components (HOCs) protect routes client-side, with navigation bars rendered dynamically based on user permission matrices.",
      learned: "Developed granular frontend permission policies, decoupled UI state from backend auth state, and built custom theme systems using Tailwind CSS.",
      tech: ["React", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Vite"],
      live: "https://rbac-dashboard-amenses.vercel.app",
      github: "https://github.com/Vedansh24/rbac-dashboard",
      icon: ShieldCheck,
      featured: true
    }
  ],

  skills: [
    {
      category: "Frontend",
      icon: Layout,
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Shadcn UI"]
    },
    {
      category: "Backend",
      icon: Server,
      items: ["Node.js", "Express.js", "Fastify", "REST APIs", "JWT Authentication", "RBAC"]
    },
    {
      category: "Database",
      icon: Database,
      items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Redis", "Database Design"]
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      items: ["Docker", "Git", "GitHub Actions", "Postman", "Vercel"]
    },
    {
      category: "Monitoring & Production",
      icon: Activity,
      items: ["Sentry", "Prometheus", "Grafana"]
    },
    {
      category: "Programming Languages",
      icon: Code,
      items: ["JavaScript", "TypeScript", "C++", "SQL"]
    }
  ],

  experience: [
    {
      id: "amenses",
      role: "Engineering Intern",
      company: "Amenses Innovations",
      date: "March 2026 – Present",
      description: "Building production-ready backend systems and modular APIs with layered architecture for enterprise clients.",
      impact: [
        "Developing enterprise-grade backend systems using Fastify, TypeScript, Prisma ORM, PostgreSQL, JWT, and Redis.",
        "Building modular APIs with layered architecture and role-based access control (RBAC).",
        "Designing evidence workflows and verdict engine systems for fact-checking operations.",
        "Working on scalable architecture and production-ready backend development.",
        "Implementing authentication, authorization, validation, and caching mechanisms to maximize API performance."
      ]
    },
    {
      id: "mantic",
      role: "Trainee Software Developer",
      company: "Mantic Technologies",
      date: "Nov 2025 – Feb 2026",
      description: "Collaborated in team workflows to build and optimize full-stack web applications.",
      impact: [
        "Built full-stack applications using the MERN stack (MongoDB, Express, React, Node).",
        "Improved understanding of scalable web architecture, state management, and API optimization.",
        "Collaborated within cross-functional development teams and participated in agile production workflows."
      ]
    },
    {
      id: "ypsilon",
      role: "MERN Stack Developer Intern",
      company: "Ypsilon IT Solutions",
      date: "May 2025 – Oct 2025",
      description: "Contributed to building responsive layouts and restful APIs for business products.",
      impact: [
        "Built responsive, accessible web applications and dashboards utilizing React and CSS grids.",
        "Worked on frontend-backend integrations, handling state, API errors, and basic security checks.",
        "Collaborated in team-based software development, participating in daily standups and code reviews."
      ]
    }
  ],

  whatImBuilding: {
    currentlyBuilding: [
      { name: "Enterprise Fact Checking Platform", details: "High-throughput validation platform for claim processing" },
      { name: "Verdict Engine Systems", details: "State machine verdict generator mapping claims to evidence status" },
      { name: "Evidence Management Workflows", details: "Distributed asset upload and verification workflows with metadata locking" }
    ],
    currentlyLearning: [
      { name: "Distributed Systems", details: "Consensus protocols, database replication, and message queues" },
      { name: "AI Systems", details: "Integrating local LLMs, vector search, and Retrieval-Augmented Generation" },
      { name: "Scalable Backend Architecture", details: "Load balancing, connection pooling, and multi-tenant scaling" },
      { name: "System Design", details: "Designing fault-tolerant, highly available enterprise-level services" }
    ]
  },

  whyHireMe: {
    points: [
      {
        title: "I build systems, not just interfaces",
        description: "I focus on architectural integrity, API speed, reliability, and structured database designs to power complex applications.",
        icon: Cpu
      },
      {
        title: "End-to-End Technical Understanding",
        description: "Proficient across frontend, backend, databases, secure authentication (JWT/RBAC), caching, and cloud deployments.",
        icon: Layers
      },
      {
        title: "Enterprise Pattern Experience",
        description: "Hands-on experience implementing verdict engines, evidence workflows, and fine-grained authorization matrices.",
        icon: ShieldCheck
      },
      {
        title: "Engineering & Problem Solving Focus",
        description: "Passionate about optimizing SQL query plans, designing robust schemas, and debugging distributed systems bottlenecks.",
        icon: Code
      }
    ]
  }
};
