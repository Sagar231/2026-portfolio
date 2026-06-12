export const profile = {
  name: 'Sagar Saini',
  role: 'Full-Stack / Backend Engineer',
  tagline:
    'I design and ship production web apps and APIs — Django, FastAPI, React — and deploy them to the cloud.',
  blurb:
    "Backend-focused full-stack engineer with 3+ years building and shipping production systems. I care about clean REST APIs, solid data modeling, caching, and the kind of polish that makes a product feel fast. I also work on applied ML and LLM evaluation.",
  location: 'India',
  email: 'sagarfeb298@gmail.com',
  links: {
    github: 'https://github.com/Sagar231',
    linkedin: 'https://www.linkedin.com/in/sagar-saini-0785561b6/',
    leetcode: 'https://leetcode.com/u/sagarsaini_/',
  },
  resume: '/Sagar_Saini_Resume.pdf',
}

export const stats = [
  { value: '3+', label: 'Years building' },
  { value: 'Top 13%', label: 'LeetCode · 900+ solved' },
  { value: 'Open Source', label: 'SymPy contributor' },
  { value: 'Gold Medalist', label: 'B.Tech · SMVDU' },
]

export const experience = [
  {
    role: 'Freelance Full-Stack & Backend Engineer',
    company: 'Remote · Contract',
    period: 'Jan 2026 – Present',
    points: [
      'Built LungCare+, a lung-cancer diagnostics platform — a FastAPI backend with a CNN model serving predictions from CT-scan uploads — delivered end-to-end, including model training and production deployment on Railway.',
      'Over a five-month engagement at Harbor (Jan – May 2026), built and evaluated terminal-bench agentic tasks spanning scientific computing, model training, and software-engineering (SWE) domains — authoring Dockerized environments, automated tests, and scoring logic to benchmark LLM coding agents.',
      'Contributed to RLHF data pipelines and model evaluation, and shipped full-stack and backend features with Python, FastAPI/Django, REST APIs, and PostgreSQL across client projects.',
    ],
  },
  {
    role: 'Python Developer',
    company: 'Turing',
    period: 'Nov 2024 – Dec 2025',
    points: [
      'Fine-tuned and evaluated large language models using RLHF across multiple Python libraries, curating SWE-Bench-style software-engineering tasks and analyzing agent behavior to improve reliability on real-world problems.',
      'Built and reviewed human cursor/interaction data-collection and quality-assurance pipelines supporting model training and benchmarking.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Lyceum Gurukul Pvt. Ltd.',
    period: 'Sep 2023 – Oct 2024',
    points: [
      'Designed and maintained Django + Django REST Framework backends for client web applications, including a healthcare platform with secure, role-based REST APIs and normalized PostgreSQL data models.',
      'Implemented backend workflows, authentication, and pagination/filtering; conducted thorough API testing with Postman; and built an internal employee management dashboard.',
    ],
  },
]

export const projects = [
  {
    name: 'Prism — Social Blogging Platform',
    blurb:
      'A full-stack Medium/dev.to-style platform with a Django REST Framework API and a React (Vite) SPA. JWT auth with silent token refresh, 8 related models, Redis caching with write-invalidation, infinite scroll, and a live Markdown editor.',
    tags: ['Django', 'DRF', 'React', 'Redis', 'PostgreSQL', 'JWT'],
    live: 'https://social-blog-app-gamma.vercel.app/',
    github: 'https://github.com/Sagar231',
    featured: true,
    accent: 'from-blue-500/20 to-cyan-400/10',
  },
  {
    name: 'LungCare+ — Lung Cancer Detection',
    blurb:
      'A healthcare platform with a FastAPI backend serving CNN-based lung-cancer predictions from CT-scan uploads. REST endpoints for scans, predictions, and patient data, with an inference pipeline handling preprocessing and confidence scoring.',
    tags: ['FastAPI', 'PyTorch', 'CNN', 'PostgreSQL', 'Railway'],
    live: 'https://lung-care-plus-one.vercel.app/',
    github: null,
    featured: true,
    accent: 'from-cyan-400/20 to-blue-500/10',
  },
  {
    name: 'Terminal-Bench — Task Deliverables',
    blurb:
      'Created and curated Terminal-Bench task deliverables for Turing — Dockerized, reproducible environments and end-to-end tasks with automated tests. Benchmarked coding agents across realistic terminal scenarios with custom scoring logic.',
    tags: ['Python', 'Docker', 'Bash', 'LLM Eval'],
    live: null,
    github: 'https://github.com/Sagar231',
    featured: false,
    accent: 'from-indigo-500/20 to-blue-500/10',
  },
  {
    name: 'Medical Platform — Healthcare Web App',
    blurb:
      'Backend REST APIs for a client healthcare platform, built as part of a team at Lyceum Gurukul using Django and DRF with a normalized PostgreSQL schema, secure role-based endpoints, and structured API testing.',
    tags: ['Django', 'DRF', 'PostgreSQL', 'Team'],
    live: null,
    github: null,
    featured: false,
    accent: 'from-sky-500/20 to-blue-500/10',
  },
  {
    name: 'REST API Service',
    blurb:
      'A fully functional RESTful API with Flask and flask-smorest — CRUD endpoints, marshmallow validation, pagination, and error handling — documented via an interactive Swagger/OpenAPI UI. Structured with blueprints and clean resource routing.',
    tags: ['Flask', 'flask-smorest', 'Swagger/OpenAPI'],
    live: null,
    github: 'https://github.com/Sagar231/Rest_Api_Flask',
    featured: false,
    accent: 'from-blue-600/20 to-indigo-500/10',
  },
  {
    name: 'SymPy — Open Source Contribution',
    blurb:
      'Authored merged PR #21259 improving the as_relational method of the Range class to return accurate Mod-based relational expressions, collaborating with core maintainers on symbolic-range edge cases.',
    tags: ['Python', 'Open Source', 'Mathematics'],
    live: null,
    github: 'https://github.com/sympy/sympy/pull/21259',
    featured: false,
    accent: 'from-cyan-500/20 to-sky-500/10',
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'HTML5', 'CSS3', 'C'] },
  {
    group: 'Backend',
    items: ['Django', 'Django REST Framework', 'FastAPI', 'Flask', 'flask-smorest', 'Celery', 'REST APIs', 'JWT / SimpleJWT', 'django-filter', 'Gunicorn'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Vite', 'React Router', 'TanStack Query', 'Tailwind CSS', 'axios', 'Bootstrap'],
  },
  {
    group: 'ML / AI',
    items: ['LLM Evaluation', 'RLHF', 'ChatGPT', 'Claude', 'Prompt Engineering', 'Agentic Task Design', 'CNNs'],
  },
  {
    group: 'Data & DevOps',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Git / GitHub', 'Docker', 'Railway', 'Vercel', 'CI/CD', 'Postman', 'Swagger/OpenAPI', 'Linux / Bash'],
  },
]
