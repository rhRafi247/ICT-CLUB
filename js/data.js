/**
 * CPI ICT CLUB - Central Data Store
 * Contains comprehensive mock data for Resources, Courses, Notes, Coding,
 * Events, Career Opportunities, Roadmaps, Projects, Team, Gallery, FAQs & Achievements.
 */

const ICT_DATA = {
  stats: {
    members: 1850,
    resources: 420,
    events: 56,
    workshops: 38,
    projects: 145,
    certifications: 620
  },

  categories: [
    { id: 'all', name: 'All Resources', icon: 'fa-solid fa-layer-group' },
    { id: 'html', name: 'HTML5', icon: 'fa-brands fa-html5' },
    { id: 'css', name: 'CSS3 & Styling', icon: 'fa-brands fa-css3-alt' },
    { id: 'javascript', name: 'JavaScript', icon: 'fa-brands fa-js' },
    { id: 'react', name: 'React.js', icon: 'fa-brands fa-react' },
    { id: 'python', name: 'Python', icon: 'fa-brands fa-python' },
    { id: 'fundamentals', name: 'Programming Fundamentals', icon: 'fa-solid fa-code' },
    { id: 'networking', name: 'Computer Networking', icon: 'fa-solid fa-network-wired' },
    { id: 'database', name: 'Database & SQL', icon: 'fa-solid fa-database' },
    { id: 'git', name: 'Git & GitHub', icon: 'fa-brands fa-git-alt' },
    { id: 'uiux', name: 'UI/UX Design', icon: 'fa-solid fa-wand-magic-sparkles' },
    { id: 'graphic', name: 'Graphic Design', icon: 'fa-solid fa-palette' },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: 'fa-solid fa-shield-halved' }
  ],

  resources: [
    // --- HTML5 ---
    {
      id: 'res-html-1',
      title: 'Modern HTML5 Semantic Architecture & Web Accessibility (a11y)',
      category: 'html',
      categoryName: 'HTML5',
      difficulty: 'Beginner',
      type: 'Documentation',
      duration: '45 mins',
      author: 'Technical Team',
      description: 'Master semantic layout tags, ARIA attributes, forms validation, SEO essentials, and web accessibility standards.',
      url: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
      badge: 'Popular',
      rating: 4.9,
      views: '3.4k'
    },
    {
      id: 'res-html-2',
      title: 'HTML5 Audio, Video, Canvas & Modern Media Elements',
      category: 'html',
      categoryName: 'HTML5',
      difficulty: 'Intermediate',
      type: 'Tutorial',
      duration: '1.2 hours',
      author: 'Web Dev Wing',
      description: 'Implement custom video players, canvas 2D rendering contexts, responsive picture elements, and SVG embedding.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas',
      badge: 'Multimedia',
      rating: 4.8,
      views: '2.8k'
    },
    {
      id: 'res-html-3',
      title: 'Advanced Web Components & Shadow DOM Deep Dive',
      category: 'html',
      categoryName: 'HTML5',
      difficulty: 'Advanced',
      type: 'Article',
      duration: '2 hours',
      author: 'Senior Web Architect',
      description: 'Build framework-agnostic reusable custom elements using Custom Elements API, HTML Templates, and encapsulated Shadow DOM.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_components',
      badge: 'Advanced',
      rating: 4.9,
      views: '1.9k'
    },

    // --- CSS3 ---
    {
      id: 'res-css-1',
      title: 'Mastering CSS Flexbox & CSS Grid with Interactive Visualizations',
      category: 'css',
      categoryName: 'CSS3',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '1.5 hours',
      author: 'Design & Web Wing',
      description: 'A comprehensive visual guide to building robust 2D and 1D responsive layouts with modern CSS alignment & gap properties.',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      badge: 'Essential',
      rating: 5.0,
      views: '5.2k'
    },
    {
      id: 'res-css-2',
      title: 'CSS Custom Properties, Fluid Typography & Dark Mode Systems',
      category: 'css',
      categoryName: 'CSS3',
      difficulty: 'Intermediate',
      type: 'Article',
      duration: '1.5 hours',
      author: 'UI/UX Guild',
      description: 'Build scalable CSS architecture with CSS variables, clamp() fluid scaling, color-mix(), and prefers-color-scheme media queries.',
      url: 'https://web.dev/learn/css/',
      badge: 'Design System',
      rating: 4.9,
      views: '3.7k'
    },
    {
      id: 'res-css-3',
      title: 'High-Performance CSS 3D Transforms, Keyframes & View Transitions',
      category: 'css',
      categoryName: 'CSS3',
      difficulty: 'Advanced',
      type: 'Video',
      duration: '2.5 hours',
      author: 'Animation Guild Lead',
      description: 'Create 60 FPS hardware-accelerated animations, scroll-driven animations, 3D perspective cards, and View Transition API magic.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations',
      badge: 'Pro Effects',
      rating: 5.0,
      views: '4.1k'
    },

    // --- JAVASCRIPT ---
    {
      id: 'res-js-1',
      title: 'JavaScript Modern ES6+ to ES2024 Deep Dive',
      category: 'javascript',
      categoryName: 'JavaScript',
      difficulty: 'Intermediate',
      type: 'Article',
      duration: '2 hours',
      author: 'Rafidul Islam (Lead Dev)',
      description: 'Closures, Prototypes, Event Loop, Promises, Async/Await, Web APIs, and functional programming patterns in modern JavaScript.',
      url: 'https://javascript.info/',
      badge: 'Featured',
      rating: 4.9,
      views: '6.1k'
    },
    {
      id: 'res-js-2',
      title: 'JavaScript DOM Manipulation & Web APIs Crash Course',
      category: 'javascript',
      categoryName: 'JavaScript',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '2 hours',
      author: 'Technical Team',
      description: 'Select and mutate DOM nodes, handle bubbling/capturing events, manage LocalStorage, Fetch API, and build interactive apps.',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model',
      badge: 'Core',
      rating: 4.8,
      views: '4.9k'
    },
    {
      id: 'res-js-3',
      title: 'Advanced Asynchronous JS, Microtasks & V8 Engine Internals',
      category: 'javascript',
      categoryName: 'JavaScript',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '3.5 hours',
      author: 'Lead Instructor',
      description: 'Understand the Call Stack, Web APIs, Microtask vs Macrotask Queue, Garbage Collection, JIT compiler optimizations, and Memory Leaks.',
      url: 'https://v8.dev/',
      badge: 'Deep Dive',
      rating: 5.0,
      views: '3.3k'
    },

    // --- REACT.JS ---
    {
      id: 'res-react-1',
      title: 'React 18 & 19 Complete Architecture: Hooks, State, & Suspense',
      category: 'react',
      categoryName: 'React.js',
      difficulty: 'Intermediate',
      type: 'Video',
      duration: '3.5 hours',
      author: 'ICT Club Web Wing',
      description: 'Learn React state mechanics, custom hooks, context API, performance optimization with useMemo/useCallback, and component lifecycles.',
      url: 'https://react.dev/learn',
      badge: 'Trending',
      rating: 4.8,
      views: '4.8k'
    },
    {
      id: 'res-react-2',
      title: 'React for Complete Beginners: Components, Props & JSX',
      category: 'react',
      categoryName: 'React.js',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '2 hours',
      author: 'Web Dev Circle',
      description: 'Start building declarative modern user interfaces with JSX syntax, component composition, useState, and conditional rendering.',
      url: 'https://react.dev/learn/your-first-component',
      badge: 'Starter',
      rating: 4.9,
      views: '5.6k'
    },
    {
      id: 'res-react-3',
      title: 'Enterprise React: Next.js App Router, Server Components & Zustand',
      category: 'react',
      categoryName: 'React.js',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '4 hours',
      author: 'Senior Frontend Engineer',
      description: 'Master React Server Components (RSC), Streaming SSR, Route Handlers, SEO optimization, and global state with Zustand.',
      url: 'https://nextjs.org/docs',
      badge: 'Production',
      rating: 5.0,
      views: '3.8k'
    },

    // --- PYTHON ---
    {
      id: 'res-py-1',
      title: 'Python for Problem Solving & Automated Scripting',
      category: 'python',
      categoryName: 'Python',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '2.5 hours',
      author: 'Python & AI Circle',
      description: 'Core syntax, data structures (lists, dicts, sets, tuples), OOP principles, file handling, and writing automated productivity scripts.',
      url: 'https://docs.python.org/3/tutorial/',
      badge: 'Recommended',
      rating: 4.9,
      views: '7.3k'
    },
    {
      id: 'res-py-2',
      title: 'Python Web Scraping & Data Extraction with BeautifulSoup & Selenium',
      category: 'python',
      categoryName: 'Python',
      difficulty: 'Intermediate',
      type: 'Article',
      duration: '2 hours',
      author: 'Tasnim Ahmed',
      description: 'Automate browser navigation, bypass basic rate limits, parse dynamic HTML pages, and export structured datasets to CSV/JSON.',
      url: 'https://beautiful-soup-4.readthedocs.io/',
      badge: 'Practical',
      rating: 4.8,
      views: '4.2k'
    },
    {
      id: 'res-py-3',
      title: 'Python for Data Science, NumPy Arrays & Pandas DataFrames',
      category: 'python',
      categoryName: 'Python',
      difficulty: 'Advanced',
      type: 'Video',
      duration: '4.5 hours',
      author: 'Data & AI Team',
      description: 'Perform vectorized mathematical transformations, exploratory data analysis (EDA), multi-indexing, and interactive data visualization.',
      url: 'https://pandas.pydata.org/docs/',
      badge: 'Data Science',
      rating: 4.9,
      views: '5.1k'
    },

    // --- PROGRAMMING FUNDAMENTALS ---
    {
      id: 'res-fund-1',
      title: 'Data Structures & Algorithms in C/C++ for Competitive Programming',
      category: 'fundamentals',
      categoryName: 'Fundamentals',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '6 hours',
      author: 'Competitive Coding Wing',
      description: 'Pointers, memory management, arrays, linked lists, stacks, queues, trees, graphs, dynamic programming and complexity analysis.',
      url: 'https://cp-algorithms.com/',
      badge: 'Advanced',
      rating: 5.0,
      views: '8.9k'
    },
    {
      id: 'res-fund-2',
      title: 'C Programming Fundamentals: Variables, Loops, Arrays & Pointers',
      category: 'fundamentals',
      categoryName: 'Fundamentals',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '3 hours',
      author: 'Academic Help Wing',
      description: 'The definitive foundation for polytechnic students. Learn algorithmic thinking, memory addresses, pointers, structs, and recursion.',
      url: 'https://www.learn-c.org/',
      badge: 'Foundation',
      rating: 4.9,
      views: '9.4k'
    },
    {
      id: 'res-fund-3',
      title: 'Big-O Asymptotic Complexity, Sorting & Searching Masterclass',
      category: 'fundamentals',
      categoryName: 'Fundamentals',
      difficulty: 'Intermediate',
      type: 'Article',
      duration: '2.5 hours',
      author: 'CP Mentors Guild',
      description: 'Master time and space complexity, Binary Search, Merge Sort, Quick Sort, Two Pointers, and Sliding Window algorithmic techniques.',
      url: 'https://www.bigocheatsheet.com/',
      badge: 'Core Algo',
      rating: 4.8,
      views: '6.2k'
    },

    // --- NETWORKING ---
    {
      id: 'res-net-1',
      title: 'Computer Networking: OSI 7-Layer, TCP/IP, DNS & Subnetting',
      category: 'networking',
      categoryName: 'Networking',
      difficulty: 'Intermediate',
      type: 'Article',
      duration: '2 hours',
      author: 'Network Admin Wing',
      description: 'Understand packet switching, routing protocols, IP addressing (IPv4/IPv6), subnet masks, CIDR, firewalls, and HTTP/HTTPS headers.',
      url: 'https://www.cloudflare.com/learning/network-layer/what-is-the-network-layer/',
      badge: 'Core',
      rating: 4.7,
      views: '3.9k'
    },
    {
      id: 'res-net-2',
      title: 'Cisco Packet Tracer Lab Guide: Router & Switch Configuration',
      category: 'networking',
      categoryName: 'Networking',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '3 hours',
      author: 'Engr. Mahbubur Rahman',
      description: 'Hands-on lab simulations for VLAN setup, Inter-VLAN routing, static routing, DHCP server configuration, and ping troubleshooting.',
      url: 'https://www.packettracernetwork.com/',
      badge: 'Hands-on Lab',
      rating: 5.0,
      views: '4.8k'
    },
    {
      id: 'res-net-3',
      title: 'Network Packet Analysis & Wireshark Protocol Troubleshooting',
      category: 'networking',
      categoryName: 'Networking',
      difficulty: 'Advanced',
      type: 'Video',
      duration: '3.5 hours',
      author: 'Network Security Lead',
      description: 'Capture real-time network packets, inspect TCP 3-way handshakes, troubleshoot SSL/TLS handshakes, and identify network bottlenecks.',
      url: 'https://www.wireshark.org/docs/',
      badge: 'Pro Tools',
      rating: 4.9,
      views: '3.1k'
    },

    // --- DATABASE ---
    {
      id: 'res-db-1',
      title: 'Relational Database Engineering & SQL Mastery (PostgreSQL / MySQL)',
      category: 'database',
      categoryName: 'Database',
      difficulty: 'Intermediate',
      type: 'Tutorial',
      duration: '3 hours',
      author: 'Database Specialist Team',
      description: 'Schema normalization (1NF-3NF), complex JOINs, indexing strategies, ACID transactions, subqueries, and performance query tuning.',
      url: 'https://www.postgresqltutorial.com/',
      badge: 'Hot',
      rating: 4.9,
      views: '4.5k'
    },
    {
      id: 'res-db-2',
      title: 'SQL for Complete Beginners: SELECT, INSERT, UPDATE & GROUP BY',
      category: 'database',
      categoryName: 'Database',
      difficulty: 'Beginner',
      type: 'Article',
      duration: '1.5 hours',
      author: 'Academic Study Group',
      description: 'Understand database tables, primary keys, foreign keys, filtering with WHERE, aggregate functions, and writing first queries.',
      url: 'https://www.w3schools.com/sql/',
      badge: 'Essential',
      rating: 4.8,
      views: '6.7k'
    },
    {
      id: 'res-db-3',
      title: 'Database Indexing, Query Optimization & B-Tree Internals',
      category: 'database',
      categoryName: 'Database',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '3 hours',
      author: 'Senior DB Administrator',
      description: 'How B-Tree & Hash indexes work, EXPLAIN ANALYZE query execution plans, connection pooling, and optimizing slow database queries.',
      url: 'https://use-the-index-luke.com/',
      badge: 'High Performance',
      rating: 5.0,
      views: '3.5k'
    },

    // --- GIT & GITHUB ---
    {
      id: 'res-git-1',
      title: 'Professional Git & GitHub: Rebase, Branching Workflows, & PRs',
      category: 'git',
      categoryName: 'Git & GitHub',
      difficulty: 'Beginner',
      type: 'Video',
      duration: '1 hour',
      author: 'Open Source Community',
      description: 'Master version control, interactive rebase, cherry-pick, merge conflict resolution, pull request collaboration, and GitHub Actions CI/CD.',
      url: 'https://git-scm.com/book/en/v2',
      badge: 'Must-Have',
      rating: 5.0,
      views: '9.2k'
    },
    {
      id: 'res-git-2',
      title: 'Mastering Git Merge Conflicts & Interactive Rebase Workflows',
      category: 'git',
      categoryName: 'Git & GitHub',
      difficulty: 'Intermediate',
      type: 'Tutorial',
      duration: '1.5 hours',
      author: 'Arifuzzaman Khan',
      description: 'Never fear a merge conflict again. Learn 3-way merge tools, git rebase -i, squash commits, cherry-pick, and git reflog recovery.',
      url: 'https://learngitbranching.js.org/',
      badge: 'Interactive',
      rating: 4.9,
      views: '5.3k'
    },
    {
      id: 'res-git-3',
      title: 'GitHub Actions CI/CD: Automated Testing, Linting & Deployments',
      category: 'git',
      categoryName: 'Git & GitHub',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '2.5 hours',
      author: 'DevOps Circle',
      description: 'Write custom YAML workflow files, cache dependencies, run unit test matrices, and trigger zero-downtime production deployments.',
      url: 'https://docs.github.com/en/actions',
      badge: 'Automation',
      rating: 4.8,
      views: '4.0k'
    },

    // --- UI/UX DESIGN ---
    {
      id: 'res-uiux-1',
      title: 'UI/UX Design Systems, Wireframing & Prototyping with Figma',
      category: 'uiux',
      categoryName: 'UI/UX Design',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '2.5 hours',
      author: 'Design Guild Lead',
      description: 'Heuristic evaluation, typography scales, color theory, auto-layout, components, variants, design tokens, and user research methodologies.',
      url: 'https://www.figma.com/resource-library/',
      badge: 'Creative',
      rating: 4.8,
      views: '3.1k'
    },
    {
      id: 'res-uiux-2',
      title: 'Figma Auto-Layout, Variables, Tokens & Responsive Web Layouts',
      category: 'uiux',
      categoryName: 'UI/UX Design',
      difficulty: 'Intermediate',
      type: 'Video',
      duration: '2 hours',
      author: 'Nusrat Jahan',
      description: 'Build flexible modern layouts with Figma nested auto-layout, min/max dimensions, variable modes (Dark/Light), and component properties.',
      url: 'https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties',
      badge: 'Design System',
      rating: 5.0,
      views: '4.4k'
    },
    {
      id: 'res-uiux-3',
      title: 'User Research, Usability Testing & Writing Design Case Studies',
      category: 'uiux',
      categoryName: 'UI/UX Design',
      difficulty: 'Advanced',
      type: 'Article',
      duration: '3 hours',
      author: 'Senior Product Designer',
      description: 'Conduct user interviews, synthesize empathy maps, run unmoderated usability tests, and format high-impact portfolio case studies.',
      url: 'https://www.nngroup.com/articles/',
      badge: 'Case Study',
      rating: 4.9,
      views: '2.9k'
    },

    // --- GRAPHIC DESIGN ---
    {
      id: 'res-graph-1',
      title: 'Vector Graphics, Branding, & Typography for Tech Creators',
      category: 'graphic',
      categoryName: 'Graphic Design',
      difficulty: 'Beginner',
      type: 'Video',
      duration: '1.5 hours',
      author: 'Media & Creative Wing',
      description: 'Create tech club banners, event badges, SVG iconography, social media kits, and brand guidelines using industry best practices.',
      url: 'https://www.canva.com/designschool/',
      badge: 'Visual',
      rating: 4.7,
      views: '2.6k'
    },
    {
      id: 'res-graph-2',
      title: 'Adobe Illustrator & Vector Illustration Masterclass',
      category: 'graphic',
      categoryName: 'Graphic Design',
      difficulty: 'Intermediate',
      type: 'Tutorial',
      duration: '3 hours',
      author: 'Creative Team',
      description: 'Master the Pen tool, shape builder, color palettes, isometric tech illustrations, and exporting pixel-perfect SVG assets.',
      url: 'https://helpx.adobe.com/illustrator/tutorials.html',
      badge: 'Vector Art',
      rating: 4.9,
      views: '3.8k'
    },
    {
      id: 'res-graph-3',
      title: 'Visual Identity, Logo Design & Brand Architecture for Startups',
      category: 'graphic',
      categoryName: 'Graphic Design',
      difficulty: 'Advanced',
      type: 'Article',
      duration: '2 hours',
      author: 'Brand Strategist',
      description: 'From moodboards to grid systems, optical kerning, negative space mastery, and compiling comprehensive brand design guidelines.',
      url: 'https://www.logodesignlove.com/',
      badge: 'Branding',
      rating: 4.8,
      views: '2.4k'
    },

    // --- CYBERSECURITY ---
    {
      id: 'res-sec-1',
      title: 'Cybersecurity Fundamentals: Web App Security & Ethical Hacking',
      category: 'cybersecurity',
      categoryName: 'Cybersecurity',
      difficulty: 'Advanced',
      type: 'Documentation',
      duration: '4 hours',
      author: 'Security Research Group',
      description: 'OWASP Top 10 vulnerabilities (SQLi, XSS, CSRF), network packet sniffing, cryptography basics, authentication hashing, and security hardening.',
      url: 'https://owasp.org/www-project-top-ten/',
      badge: 'Security',
      rating: 4.9,
      views: '5.8k'
    },
    {
      id: 'res-sec-2',
      title: 'Hands-on Linux Security & Bash Scripting for Penetration Testing',
      category: 'cybersecurity',
      categoryName: 'Cybersecurity',
      difficulty: 'Beginner',
      type: 'Tutorial',
      duration: '2.5 hours',
      author: 'Tariqul Alam (SecOps)',
      description: 'Linux file permissions (chmod, chown), sudo privileges, system log monitoring, cron security, and bash automated security audits.',
      url: 'https://overthewire.org/wargames/bandit/',
      badge: 'Linux Pro',
      rating: 5.0,
      views: '6.4k'
    },
    {
      id: 'res-sec-3',
      title: 'Practical Burp Suite & Web Application Vulnerability Assessment',
      category: 'cybersecurity',
      categoryName: 'Cybersecurity',
      difficulty: 'Intermediate',
      type: 'Video',
      duration: '3 hours',
      author: 'Cyber Defense Wing',
      description: 'Intercepting HTTP requests, testing session tokens, discovering IDOR flaws, parameter tampering, and writing vulnerability reports.',
      url: 'https://portswigger.net/web-security',
      badge: 'Ethical Hacking',
      rating: 4.9,
      views: '4.7k'
    }
  ],

  courses: [
    {
      id: 'course-1',
      title: 'Full Stack Web Development: Zero to Production',
      slug: 'fullstack-web-dev',
      instructor: 'Rafidul Islam & Technical Team',
      role: 'Lead Full Stack Engineer',
      duration: '12 Weeks (48 Hours)',
      difficulty: 'Beginner to Intermediate',
      lessonsCount: 36,
      studentsEnrolled: 820,
      rating: 4.9,
      progress: 68,
      thumbnailGradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
      icon: 'fa-solid fa-globe',
      description: 'A complete hands-on journey from HTML5/CSS3 foundations to interactive JavaScript, responsive UI architecture, REST APIs, and production deployment on Vercel & Netlify.',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'APIs', 'Deployment'],
      syllabus: [
        'Week 1-2: Semantic HTML5, CSS Grid/Flexbox & Responsive Design',
        'Week 3-4: Modern JavaScript (ES6+), DOM Manipulation & Async JS',
        'Week 5-6: Building Complex Interactive UIs & State Management',
        'Week 7-8: Fetching REST APIs, JSON Handling & LocalStorage',
        'Week 9-10: Git Workflow, Collaborative PRs & Project Architecture',
        'Week 11-12: Capstone Project Deployment & Portfolio Review'
      ]
    },
    {
      id: 'course-2',
      title: 'JavaScript Essentials & Algorithmic Problem Solving',
      slug: 'js-essentials',
      instructor: 'Samiul Hasan',
      role: 'Senior JS Instructor',
      duration: '8 Weeks (32 Hours)',
      difficulty: 'Intermediate',
      lessonsCount: 24,
      studentsEnrolled: 640,
      rating: 4.8,
      progress: 45,
      thumbnailGradient: 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
      icon: 'fa-brands fa-js',
      description: 'Master core JavaScript mechanics, lexical scopes, event loop concurrency, functional data transformations, regex, and LeetCode algorithmic patterns.',
      tags: ['JavaScript', 'Algorithms', 'Data Structures', 'ES6+'],
      syllabus: [
        'Week 1: Scopes, Execution Contexts & Memory Lifecycle',
        'Week 2: Advanced Arrays, Objects & Functional Methods (Map/Filter/Reduce)',
        'Week 3: Asynchronous Programming: Promises, Microtasks & Async/Await',
        'Week 4: Object-Oriented JS, Prototype Chains & Classes',
        'Week 5-6: Practical Data Structures in JS (Stacks, Queues, Maps, Sets)',
        'Week 7-8: Algorithmic Complexity, Big-O Notation & Problem Solving'
      ]
    },
    {
      id: 'course-3',
      title: 'Python for Beginners & Automated Data Workflows',
      slug: 'python-beginners',
      instructor: 'Tasnim Ahmed',
      role: 'Python & Data Mentor',
      duration: '6 Weeks (24 Hours)',
      difficulty: 'Beginner',
      lessonsCount: 18,
      studentsEnrolled: 950,
      rating: 5.0,
      progress: 85,
      thumbnailGradient: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
      icon: 'fa-brands fa-python',
      description: 'Learn computational thinking using Python. Cover fundamentals, working with files, CSV/Excel parsing, web scraping with BeautifulSoup, and basic data visualization.',
      tags: ['Python', 'Automation', 'Data Analysis', 'Scripting'],
      syllabus: [
        'Week 1: Python Syntax, Variables, Operators & Control Flow',
        'Week 2: Functions, Lambda Expressions & Modular Code',
        'Week 3: File I/O, JSON, CSV & Exception Handling',
        'Week 4: Web Scraping & Extracting Web Data with Python',
        'Week 5: Intro to Data Analytics with Pandas & Matplotlib',
        'Week 6: Building an Automated Utility Bot or Data Script'
      ]
    },
    {
      id: 'course-4',
      title: 'Professional Git, GitHub & Open Source Contribution',
      slug: 'git-github-mastery',
      instructor: 'Arifuzzaman Khan',
      role: 'Open Source Advocate',
      duration: '4 Weeks (16 Hours)',
      difficulty: 'Beginner',
      lessonsCount: 12,
      studentsEnrolled: 1100,
      rating: 4.9,
      progress: 90,
      thumbnailGradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
      icon: 'fa-brands fa-git-alt',
      description: 'Step into professional software collaboration. Learn distributed version control, branching models (GitFlow, Trunk-based), CI/CD pipelines, and contributing to real OSS repos.',
      tags: ['Git', 'GitHub', 'CI/CD', 'Open Source'],
      syllabus: [
        'Week 1: Version Control Foundations, Commits, & Stashing',
        'Week 2: Branching Strategies, Merge vs Rebase, & Conflicts',
        'Week 3: Remote Repositories, Forking, Issues & Pull Requests',
        'Week 4: GitHub Actions, Automated Testing & Open Source Etiquette'
      ]
    },
    {
      id: 'course-5',
      title: 'UI/UX Design Fundamentals: Wireframe to High-Fidelity UI',
      slug: 'uiux-fundamentals',
      instructor: 'Nusrat Jahan',
      role: 'Head of Product Design',
      duration: '8 Weeks (30 Hours)',
      difficulty: 'Beginner to Intermediate',
      lessonsCount: 22,
      studentsEnrolled: 530,
      rating: 4.8,
      progress: 30,
      thumbnailGradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
      icon: 'fa-solid fa-palette',
      description: 'Transform user ideas into stunning, accessible, and intuitive digital interfaces. Master Figma, responsive layout grids, micro-interactions, and design handoff.',
      tags: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
      syllabus: [
        'Week 1-2: UX Research, User Personas & Information Architecture',
        'Week 3-4: Low-Fidelity Wireframing & User Journey Mapping',
        'Week 5-6: Visual Design Systems: Typography, Colors, Spacing & Icons',
        'Week 7-8: Interactive Prototyping, Usability Testing & Developer Handoff'
      ]
    },
    {
      id: 'course-6',
      title: 'Computer Networking & Network Security Essentials',
      slug: 'networking-basics',
      instructor: 'Engr. Mahbubur Rahman',
      role: 'Network Infrastructure Lead',
      duration: '10 Weeks (38 Hours)',
      difficulty: 'Intermediate',
      lessonsCount: 28,
      studentsEnrolled: 470,
      rating: 4.7,
      progress: 20,
      thumbnailGradient: 'linear-gradient(135deg, #14B8A6 0%, #3B82F6 100%)',
      icon: 'fa-solid fa-network-wired',
      description: 'Comprehensive network engineering course covering router & switch configuration, packet tracing with Wireshark, DHCP/DNS setup, VLANs, and firewall rules.',
      tags: ['Networking', 'Cisco Packet Tracer', 'Security', 'Protocols'],
      syllabus: [
        'Week 1-2: Network Architectures & OSI / TCP-IP Models',
        'Week 3-4: IPv4/IPv6 Addressing, Subnetting & CIDR Calculation',
        'Week 5-6: Routing Protocols (RIP, OSPF) & Switch Configurations',
        'Week 7-8: Packet Sniffing, Traffic Analysis with Wireshark & NAT',
        'Week 9-10: Network Security, ACLs, Firewalls & VPN Fundamentals'
      ]
    }
  ],

  notes: [
    {
      id: 'note-1',
      title: 'Data Structures & Algorithms Handcrafted Exam Notes',
      category: 'programming',
      categoryName: 'Programming',
      author: 'Academic Help Wing',
      semester: '3rd & 4th Semester',
      fileSize: '4.8 MB',
      format: 'PDF',
      downloads: 1420,
      date: 'Aug 2024',
      pages: 64,
      description: 'Comprehensive handwritten & typed notes covering Linked Lists, Trees, Graphs, Sorting algorithms, and asymptotic notations with clean diagrams.'
    },
    {
      id: 'note-2',
      title: 'Computer Networks & Internet Protocols Quick Revision Guide',
      category: 'networking',
      categoryName: 'Networking',
      author: 'Engr. Mahbubur Rahman',
      semester: '4th & 5th Semester',
      fileSize: '3.2 MB',
      format: 'PDF',
      downloads: 980,
      date: 'Jul 2024',
      pages: 42,
      description: 'Cheat sheets for OSI layers, TCP/UDP 3-way handshake, Subnetting shortcuts, DNS lookups, and Cisco CLI command cheatsheets.'
    },
    {
      id: 'note-3',
      title: 'Database Management Systems (DBMS) & SQL Syntax Guide',
      category: 'database',
      categoryName: 'Database',
      author: 'Database Study Group',
      semester: '3rd & 4th Semester',
      fileSize: '5.1 MB',
      format: 'PDF',
      downloads: 1650,
      date: 'Jun 2024',
      pages: 58,
      description: 'ER Diagram symbols, relational calculus, schema normal forms (1NF to BCNF), and 100+ standard SQL query examples for exam prep.'
    },
    {
      id: 'note-4',
      title: 'Computer Fundamentals, Architecture & Digital Logic',
      category: 'fundamentals',
      categoryName: 'Fundamentals',
      author: 'Foundations Committee',
      semester: '1st & 2nd Semester',
      fileSize: '6.4 MB',
      format: 'PDF',
      downloads: 2100,
      date: 'May 2024',
      pages: 76,
      description: 'Boolean algebra, logic gates, Karnaugh maps, CPU instruction cycle, ALU, memory hierarchy, and basic assembly concepts.'
    },
    {
      id: 'note-5',
      title: 'Modern Web Development Cheat Sheet & HTML5/CSS3 Reference',
      category: 'webdev',
      categoryName: 'Web Development',
      author: 'Web Development Wing',
      semester: 'All Semesters',
      fileSize: '2.9 MB',
      format: 'PDF',
      downloads: 3200,
      date: 'Aug 2024',
      pages: 35,
      description: 'A pocket guide for HTML5 tags, CSS Flexbox & Grid properties, CSS selectors priority, media queries, and JavaScript DOM API methods.'
    },
    {
      id: 'note-6',
      title: 'Software Engineering Methodologies & Agile / Scrum Handbook',
      category: 'software',
      categoryName: 'Software Engineering',
      author: 'Senior Project Mentors',
      semester: '5th & 6th Semester',
      fileSize: '3.7 MB',
      format: 'PDF',
      downloads: 840,
      date: 'Jul 2024',
      pages: 48,
      description: 'SDLC models (Waterfall, Spiral, Agile), UML diagrams (Use Case, Class, Sequence), software testing strategies (Unit, Integration, Blackbox).'
    }
  ],

  codingResources: {
    challenges: [
      {
        id: 'ch-1',
        title: 'Two Sum Problem (Optimized with Hash Map)',
        difficulty: 'Easy',
        category: 'Algorithms',
        tags: ['Array', 'Hash Table', 'Time Complexity O(N)'],
        solvedCount: '1.2k',
        prompt: 'Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.',
        codeSnippet: `// Efficient O(N) Hash Map Solution
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`
      },
      {
        id: 'ch-2',
        title: 'Valid Parentheses & Bracket Matching using Stack',
        difficulty: 'Easy',
        category: 'Data Structures',
        tags: ['Stack', 'String', 'Validation'],
        solvedCount: '980',
        prompt: 'Given a string containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.',
        codeSnippet: `// Stack-based Solution
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char);
    } else if (map[char]) {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}`
      },
      {
        id: 'ch-3',
        title: 'Binary Tree Level Order Traversal (BFS)',
        difficulty: 'Medium',
        category: 'Trees & BFS',
        tags: ['Queue', 'Tree', 'Breadth-First Search'],
        solvedCount: '640',
        prompt: 'Given the root of a binary tree, return the level order traversal of its nodes values from left to right, level by level.',
        codeSnippet: `// BFS Queue Traversal
function levelOrder(root) {
  if (!root) return [];
  const result = [], queue = [root];
  while (queue.length > 0) {
    const levelSize = queue.length;
    const currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentLevel);
  }
  return result;
}`
      },
      {
        id: 'ch-4',
        title: 'Longest Substring Without Repeating Characters',
        difficulty: 'Medium',
        category: 'Sliding Window',
        tags: ['Two Pointers', 'Sliding Window', 'Set'],
        solvedCount: '720',
        prompt: 'Given a string `s`, find the length of the longest substring without repeating characters using a sliding window technique.',
        codeSnippet: `// Sliding Window with Set
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}`
      }
    ],

    beginnerProjects: [
      {
        title: 'Interactive Student Task & Habit Tracker',
        level: 'Beginner',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage'],
        desc: 'Build a productivity dashboard with task categorization, deadline countdowns, completion graphs, and local storage data persistence.'
      },
      {
        title: 'Real-Time Weather & Air Quality Web App',
        level: 'Beginner',
        tech: ['Vanilla JS', 'OpenWeather API', 'Geolocation API', 'CSS Grid'],
        desc: 'Fetch real-time meteorological forecasts, dynamic weather background themes, and 5-day temperature forecast charts.'
      },
      {
        title: 'Competitive Programming Stopwatch & Problem Tracker',
        level: 'Intermediate',
        tech: ['JavaScript ES6', 'Codeforces API', 'Audio API', 'CSS Custom Props'],
        desc: 'A specialized tool for CP enthusiasts with contest timers, penalty calculators, and real-time user rating badge scrapers.'
      },
      {
        title: 'Markdown Live Editor with Instant Syntax Highlighting',
        level: 'Intermediate',
        tech: ['JS Regex', 'DOM Parser', 'CSS Themes', 'File Export API'],
        desc: 'Side-by-side markdown to HTML live compiler with table generation, code block formatting, and PDF export features.'
      }
    ],

    cheatSheets: [
      { name: 'Git Commands Cheatsheet', icon: 'fa-brands fa-git-alt', link: '#', desc: 'Commit, Branch, Cherry-pick, Rebase, Submodules' },
      { name: 'CSS Flexbox & Grid Matrix', icon: 'fa-brands fa-css3-alt', link: '#', desc: 'Visual alignment, justify, align-content, grid-template' },
      { name: 'JavaScript Array Methods', icon: 'fa-brands fa-js', link: '#', desc: 'Map, Filter, Reduce, FlatMap, Slice, Splice, Every, Some' },
      { name: 'SQL Query Syntax & Joins', icon: 'fa-solid fa-database', link: '#', desc: 'SELECT, GROUP BY, HAVING, INNER/OUTER JOINs, Window Functions' },
      { name: 'Linux Terminal & Bash Commands', icon: 'fa-solid fa-terminal', link: '#', desc: 'grep, awk, sed, chmod, ssh, curl, top, systemctl' },
      { name: 'Regular Expressions (RegEx) Guide', icon: 'fa-solid fa-asterisk', link: '#', desc: 'Character classes, quantifiers, lookahead, groups' }
    ]
  },

  events: [
    {
      id: 'event-1',
      title: 'CPI Tech Fest & Inter-Polytechnic Hackathon 2025',
      category: 'hackathons',
      type: 'Hackathon',
      date: 'March 25 - 26, 2025',
      time: '09:00 AM - 08:00 PM',
      location: 'CPI Main Auditorium & Tech Lab',
      mode: 'In-Person',
      status: 'Registration Open',
      statusClass: 'status-open',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      description: 'A 24-hour sprint where student teams design, develop, and pitch innovative software and hardware prototypes solving real-world challenges in smart campus, healthcare, and education.',
      prizePool: 'BDT 50,000 + Tech Gadgets & Trophies',
      speakers: ['Engr. Farhan Tanvir (Tech Lead, Brain Station 23)', 'Sadia Afrin (Product Manager)'],
      agenda: [
        '09:00 AM: Keynote & Problem Statements Release',
        '10:30 AM: Hacking & Prototyping Begins',
        '03:00 PM: Mentorship Checkpoint #1',
        '08:00 PM: Midnight Code Review',
        '02:00 PM (Day 2): Pitching & Jury Evaluation',
        '06:00 PM: Award Ceremony & Gala Dinner'
      ],
      seatsLeft: 34
    },
    {
      id: 'event-2',
      title: 'Hands-on Workshop: Modern Web Apps with Vanilla JS & Web APIs',
      category: 'workshops',
      type: 'Workshop',
      date: 'April 05, 2025',
      time: '02:30 PM - 05:30 PM',
      location: 'Computer Lab 3, CPI Campus',
      mode: 'In-Person',
      status: 'Upcoming',
      statusClass: 'status-upcoming',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      description: 'An intensive interactive coding session where participants build a responsive, high-performance web application completely from scratch with zero external dependencies.',
      prizePool: 'Verified Certificates + Exclusive Resource Pack',
      speakers: ['Rafidul Islam (Technical Lead, CPI ICT Club)'],
      agenda: [
        '02:30 PM: DOM Engineering & Memory Optimization',
        '03:30 PM: Async Web APIs, Fetch & LocalStorage',
        '04:30 PM: Live Capstone Project Build',
        '05:15 PM: Q&A and Resource Sharing'
      ],
      seatsLeft: 12
    },
    {
      id: 'event-3',
      title: 'Cybersecurity Seminar: Defending Web Apps Against Modern Cyber Threats',
      category: 'seminars',
      type: 'Seminar',
      date: 'April 18, 2025',
      time: '04:00 PM - 06:30 PM',
      location: 'Virtual via Google Meet & ICT Club Hall',
      mode: 'Hybrid',
      status: 'Upcoming',
      statusClass: 'status-upcoming',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
      description: 'Learn ethical hacking techniques, how web vulnerabilities like XSS, SQLi, and Auth bypass occur in real-world software, and practical countermeasures to harden web applications.',
      prizePool: 'Certificate of Attendance',
      speakers: ['Tariqul Alam (Certified Ethical Hacker & SecOps Analyst)'],
      agenda: [
        '04:00 PM: The Current Cyber Threat Landscape',
        '04:45 PM: Live Demonstration of Common Vulnerabilities',
        '05:30 PM: Defense in Depth Strategies',
        '06:15 PM: Career Opportunities in Cybersecurity'
      ],
      seatsLeft: 78
    },
    {
      id: 'event-4',
      title: 'CPI Intra-Department Competitive Programming Contest 2025',
      category: 'contests',
      type: 'Contest',
      date: 'May 02, 2025',
      time: '10:00 AM - 01:00 PM',
      location: 'Online Contest Arena (VJudge / Codeforces Group)',
      mode: 'Online',
      status: 'Registration Open',
      statusClass: 'status-open',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      description: 'Test your algorithmic agility, problem-solving stamina, and mathematical intuition across 6 challenging problems designed for beginners to advanced coders.',
      prizePool: 'BDT 15,000 + Medals & Certificates',
      speakers: ['Competitive Programming Mentors Panel'],
      agenda: [
        '09:30 AM: Contest Warmup & Rules Briefing',
        '10:00 AM: 3-Hour Contest Commences',
        '01:00 PM: System Testing & Final Leaderboard Freeze',
        '03:00 PM: Problem Editorial Discussion'
      ],
      seatsLeft: 45
    },
    {
      id: 'event-5',
      title: 'General Club Assembly & Tech Innovation Showcase',
      category: 'meetings',
      type: 'Meeting',
      date: 'May 15, 2025',
      time: '03:00 PM - 05:00 PM',
      location: 'CPI Seminar Hall Room #204',
      mode: 'In-Person',
      status: 'Upcoming',
      statusClass: 'status-upcoming',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
      description: 'Monthly gathering of all club members to review ongoing project developments, upcoming club initiatives, executive announcements, and member spotlights.',
      prizePool: 'Member of the Month Recognition Award',
      speakers: ['Club Executive Committee'],
      agenda: [
        '03:00 PM: Monthly Progress Review',
        '03:30 PM: Student Project Demos',
        '04:15 PM: Executive Roadmap for Upcoming Quarter',
        '04:45 PM: Open Networking & Snacks'
      ],
      seatsLeft: 120
    }
  ],

  careers: [
    {
      id: 'job-1',
      title: 'Junior Frontend Web Developer',
      company: 'TechnoCraft Solutions Ltd.',
      location: 'Dhaka, Bangladesh',
      type: 'Full-time',
      category: 'job',
      salary: 'BDT 35,000 - 45,000 / month',
      deadline: 'April 15, 2025',
      badge: 'Urgent Hiring',
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Git'],
      description: 'Looking for a passionate junior developer who can build modern, responsive web interfaces, collaborate with backend engineers, and translate Figma designs to pixel-perfect code.',
      requirements: [
        'Strong grasp of vanilla JavaScript, DOM manipulation and responsive CSS',
        'Familiarity with React or modern component libraries',
        'Comfortable working with Git version control and RESTful APIs',
        'Good problem-solving mindset and eagerness to learn'
      ]
    },
    {
      id: 'job-2',
      title: 'Web Design & UI/UX Intern',
      company: 'PixelNova Creative Studio',
      location: 'Remote (Bangladesh)',
      type: 'Internship',
      category: 'internship',
      salary: 'BDT 12,000 - 18,000 / month',
      deadline: 'April 20, 2025',
      badge: 'Student Friendly',
      skills: ['Figma', 'UI/UX', 'Wireframing', 'Basic HTML/CSS'],
      description: 'Ideal opportunity for creative students to gain real client experience designing web interfaces, mobile mockups, design tokens, and user flow architectures under senior mentorship.',
      requirements: [
        'Solid portfolio showcasing Figma UI designs and prototypes',
        'Understanding of modern typography, visual balance, and color systems',
        'Basic familiarity with frontend implementation constraints'
      ]
    },
    {
      id: 'job-3',
      title: 'Python Backend & Scripting Intern',
      company: 'DataFlow Systems',
      location: 'Chittagong (Hybrid)',
      type: 'Internship',
      category: 'internship',
      salary: 'BDT 15,000 / month',
      deadline: 'May 01, 2025',
      badge: 'Mentorship Included',
      skills: ['Python', 'SQL', 'FastAPI/Flask', 'Git', 'Data Parsing'],
      description: 'Work with backend development teams on building automated web crawlers, data ingestion pipelines, REST APIs, and database migrations.',
      requirements: [
        'Good knowledge of Python data structures and OOP',
        'Familiarity with SQL database queries',
        'Interest in backend microservices and API integrations'
      ]
    },
    {
      id: 'job-4',
      title: 'Freelance Technical Content & Tutorial Writer',
      company: 'DevPublish Hub',
      location: 'Worldwide Remote',
      type: 'Freelance',
      category: 'freelance',
      salary: '$30 - $60 per published article',
      deadline: 'Open Continuously',
      badge: 'Flexible Hours',
      skills: ['Technical Writing', 'JavaScript', 'Python', 'Markdown'],
      description: 'Write beginner-friendly coding tutorials, architectural breakdowns, and cheat sheets for student developers worldwide.',
      requirements: [
        'Ability to break down complex technical topics into easy steps',
        'Clean code examples and working demonstrations',
        'Fluent English written communication'
      ]
    },
    {
      id: 'job-5',
      title: 'ICT Youth Tech Innovation Scholarship 2025',
      company: 'Bangladesh National ICT Division & Partners',
      location: 'National (Bangladesh)',
      type: 'Scholarship',
      category: 'scholarship',
      salary: 'Full Tuition Grant + Laptop Stipend',
      deadline: 'May 30, 2025',
      badge: 'Prestigious',
      skills: ['Academic Merit', 'ICT Project Prototype', 'Leadership'],
      description: 'Merit-based national grant awarded to outstanding polytechnic and diploma engineering students presenting high-impact software or IoT innovations.',
      requirements: [
        'Currently enrolled in a Polytechnic / Diploma Engineering institution',
        'Submission of an original working project prototype or software demo',
        'Recommendation letter from CPI ICT Club or Department Head'
      ]
    }
  ],

  careerGuidance: {
    resumeTips: [
      'Use clean single-column ATS-friendly layout with standard headings.',
      'Quantify your achievements (e.g., "Improved page load by 35%", "Built platform with 1,200+ users").',
      'List live demo URLs and GitHub repository links for every listed project.',
      'Categorize technical skills cleanly (Languages, Frameworks, Developer Tools, Databases).'
    ],
    interviewPrep: [
      'Master core JavaScript fundamentals (Event loop, Promises, Closures, DOM).',
      'Practice explaining your thought process out loud while solving algorithmic problems.',
      'Prepare 2-3 detailed stories using the STAR method (Situation, Task, Action, Result) for behavioral questions.',
      'Deeply understand the architecture, database schema, and trade-offs of your flagship portfolio project.'
    ]
  },

  roadmaps: [
    {
      id: 'frontend',
      name: 'Frontend Web Developer',
      icon: 'fa-solid fa-laptop-code',
      duration: '4 - 6 Months',
      description: 'Master the skills required to build ultra-fast, responsive, interactive web interfaces and dynamic single-page applications.',
      steps: [
        {
          id: 'fe-1',
          title: 'Internet & Web Foundations',
          skills: ['How HTTP/HTTPS works', 'Domain Names & DNS', 'Web Hosting & Browsers', 'Client-Server Architecture'],
          status: 'Foundation'
        },
        {
          id: 'fe-2',
          title: 'HTML5 & Semantic Structure',
          skills: ['Semantic Elements', 'Forms & Validations', 'Web Accessibility (a11y)', 'SEO Meta & OpenGraph'],
          status: 'Core'
        },
        {
          id: 'fe-3',
          title: 'Modern CSS3 & Responsive UI',
          skills: ['Box Model & Selectors', 'Flexbox & CSS Grid', 'Responsive Media Queries', 'CSS Custom Variables & Animations'],
          status: 'Core'
        },
        {
          id: 'fe-4',
          title: 'JavaScript Fundamentals to ES6+',
          skills: ['DOM Manipulation', 'Event Handling', 'Promises & Async/Await', 'Fetch API & JSON', 'LocalStorage & Web Storage'],
          status: 'Essential'
        },
        {
          id: 'fe-5',
          title: 'Version Control & Git/GitHub',
          skills: ['Git CLI & Branching', 'GitHub PRs & Code Reviews', 'Merge Conflict Resolution', 'GitHub Pages Deployment'],
          status: 'Essential'
        },
        {
          id: 'fe-6',
          title: 'Component Frameworks (React.js)',
          skills: ['JSX & Component Thinking', 'Props & State Mechanics', 'Hooks (useState, useEffect, useMemo)', 'React Router & API Integration'],
          status: 'Advanced'
        },
        {
          id: 'fe-7',
          title: 'Build Tools, Performance & CI/CD',
          skills: ['Vite / Webpack', 'NPM Package Management', 'Lighthouse Optimization', 'Vercel / Netlify Deployment'],
          status: 'Production'
        }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Developer',
      icon: 'fa-solid fa-server',
      duration: '5 - 7 Months',
      description: 'Learn server-side programming, database architecture, API design, security, and cloud deployment.',
      steps: [
        {
          id: 'be-1',
          title: 'Programming Language Mastery',
          skills: ['JavaScript / Node.js OR Python OR Go', 'Object Oriented Programming', 'Memory & Concurrency Models'],
          status: 'Foundation'
        },
        {
          id: 'be-2',
          title: 'Databases & Data Modeling',
          skills: ['Relational: PostgreSQL / MySQL', 'NoSQL: MongoDB / Redis', 'Schema Design & Normalization', 'Indexing & Optimization'],
          status: 'Core'
        },
        {
          id: 'be-3',
          title: 'API Architecture & Web Protocols',
          skills: ['RESTful API Conventions', 'HTTP Methods & Status Codes', 'Authentication (JWT, OAuth2, Sessions)', 'Input Validation & Rate Limiting'],
          status: 'Essential'
        },
        {
          id: 'be-4',
          title: 'Backend Frameworks',
          skills: ['Express.js / NestJS (Node) OR FastAPI / Django (Python)', 'Middleware Architecture', 'ORM / Query Builders (Prisma, SQLAlchemy)'],
          status: 'Essential'
        },
        {
          id: 'be-5',
          title: 'Security, Testing & Caching',
          skills: ['OWASP Top 10 Prevention', 'Password Hashing (bcrypt, argon2)', 'Redis Caching', 'Unit & Integration Testing (Jest, PyTest)'],
          status: 'Advanced'
        },
        {
          id: 'be-6',
          title: 'Deployment & DevOps Basics',
          skills: ['Docker Containerization', 'Linux Server Administration', 'Reverse Proxy (Nginx)', 'Cloud Hosting (Render, AWS, DigitalOcean)'],
          status: 'Production'
        }
      ]
    },
    {
      id: 'fullstack',
      name: 'Full Stack Developer',
      icon: 'fa-solid fa-layer-group',
      duration: '8 - 10 Months',
      description: 'Unite frontend design prowess with robust backend engineering to build complete end-to-end applications.',
      steps: [
        {
          id: 'fs-1',
          title: 'Frontend Foundations (HTML/CSS/JS)',
          skills: ['Semantic HTML', 'Responsive CSS Grid/Flexbox', 'Modern JavaScript ES6+'],
          status: 'Phase 1'
        },
        {
          id: 'fs-2',
          title: 'Frontend UI Frameworks',
          skills: ['React.js / Next.js', 'State Management', 'Tailwind / Modern CSS Modules'],
          status: 'Phase 2'
        },
        {
          id: 'fs-3',
          title: 'Backend Server & APIs',
          skills: ['Node.js & Express / Python', 'REST & GraphQL APIs', 'JWT Authentication'],
          status: 'Phase 3'
        },
        {
          id: 'fs-4',
          title: 'Databases & ORMs',
          skills: ['PostgreSQL & MongoDB', 'Prisma / Mongoose', 'Database Migrations'],
          status: 'Phase 4'
        },
        {
          id: 'fs-5',
          title: 'Full Stack Integration & Testing',
          skills: ['End-to-End API Connections', 'State Hydration', 'Error Handling & Toast Systems'],
          status: 'Phase 5'
        },
        {
          id: 'fs-6',
          title: 'DevOps, CI/CD & Cloud Hosting',
          skills: ['Docker Basics', 'GitHub Actions CI/CD', 'Production Monitoring & Analytics'],
          status: 'Phase 6'
        }
      ]
    },
    {
      id: 'python-ai',
      name: 'Python & AI / Data Track',
      icon: 'fa-solid fa-brain',
      duration: '6 - 8 Months',
      description: 'Explore the universe of Python programming, data analytics, automated pipelines, and machine learning models.',
      steps: [
        {
          id: 'py-1',
          title: 'Python Language Fundamentals',
          skills: ['Variables, Loops, Data Structures', 'Functions & OOP Principles', 'File Handling & Modules'],
          status: 'Foundation'
        },
        {
          id: 'py-2',
          title: 'Data Wrangling & Visualization',
          skills: ['NumPy Arrays & Math', 'Pandas DataFrames', 'Matplotlib & Seaborn Charts'],
          status: 'Core'
        },
        {
          id: 'py-3',
          title: 'Web Scraping & Automation',
          skills: ['Requests & BeautifulSoup', 'Selenium / Playwright Automation', 'Automated Cron Tasks'],
          status: 'Essential'
        },
        {
          id: 'py-4',
          title: 'Applied Machine Learning',
          skills: ['Scikit-Learn Algorithms', 'Linear/Logistic Regression', 'Decision Trees & Clustering'],
          status: 'Advanced'
        },
        {
          id: 'py-5',
          title: 'Generative AI & LLM Integrations',
          skills: ['OpenAI / Gemini API Integration', 'Prompt Engineering', 'LangChain Basics', 'Building AI Chatbots'],
          status: 'Specialized'
        }
      ]
    },
    {
      id: 'uiux-design',
      name: 'UI/UX Product Designer',
      icon: 'fa-solid fa-pen-nib',
      duration: '4 - 5 Months',
      description: 'Craft meaningful, user-centered digital products from research and wireframes to design systems and polished Figma prototypes.',
      steps: [
        {
          id: 'ux-1',
          title: 'UX Research & Mental Models',
          skills: ['User Interviews & Personas', 'Empathy Mapping', 'Information Architecture', 'Competitor Auditing'],
          status: 'Phase 1'
        },
        {
          id: 'ux-2',
          title: 'Wireframing & Low-Fidelity Testing',
          skills: ['Paper Sketching', 'Low-Fi Figma Wireframes', 'User Journey Mapping', 'Clickable Flow Validation'],
          status: 'Phase 2'
        },
        {
          id: 'ux-3',
          title: 'Visual Design & Design Systems',
          skills: ['Typography Hierarchy', 'Color Theory & Contrast', 'Design Tokens & Spacing Systems', 'Reusable UI Components'],
          status: 'Phase 3'
        },
        {
          id: 'ux-4',
          title: 'High-Fidelity Prototyping',
          skills: ['Figma Auto-Layout & Variants', 'Smart Animations', 'Micro-interactions', 'Usability Testing'],
          status: 'Phase 4'
        },
        {
          id: 'ux-5',
          title: 'Developer Handoff & Case Studies',
          skills: ['Design Documentation', 'Asset Exporting', 'Writing In-Depth Portfolio Case Studies'],
          status: 'Phase 5'
        }
      ]
    },
    {
      id: 'cybersec',
      name: 'Cybersecurity Analyst',
      icon: 'fa-solid fa-shield-halved',
      duration: '6 - 9 Months',
      description: 'Defend systems and networks from vulnerabilities, conduct penetration tests, and master security compliance.',
      steps: [
        {
          id: 'cs-1',
          title: 'Networking & Operating Systems',
          skills: ['TCP/IP, UDP, DNS, DHCP', 'Linux Command Line & Permissions', 'Windows Security Internals'],
          status: 'Foundation'
        },
        {
          id: 'cs-2',
          title: 'Web Application Security',
          skills: ['OWASP Top 10 (SQLi, XSS, CSRF)', 'Burp Suite Proxy', 'Cookie & Session Security', 'CORS & CSP Headers'],
          status: 'Core'
        },
        {
          id: 'cs-3',
          title: 'Network Defense & Packet Analysis',
          skills: ['Wireshark Traffic Analysis', 'Nmap Network Scanning', 'Firewall Configurations & IDS/IPS'],
          status: 'Essential'
        },
        {
          id: 'cs-4',
          title: 'Ethical Hacking & Penetration Testing',
          skills: ['Metasploit Framework', 'Vulnerability Assessment', 'Privilege Escalation Techniques'],
          status: 'Advanced'
        },
        {
          id: 'cs-5',
          title: 'Cryptography & Incident Response',
          skills: ['Public Key Infrastructure (PKI)', 'Symmetric & Asymmetric Encryption', 'Digital Forensics Basics'],
          status: 'Professional'
        }
      ]
    }
  ],

  projects: [
    {
      id: 'proj-1',
      title: 'Smart Campus Attendance & Notice Portal',
      category: 'web',
      author: 'CPI ICT Web Development Wing',
      authorRole: 'Batch 2021-22',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'A digitized campus management dashboard allowing students to monitor subject-wise attendance percentages, upcoming exam schedules, and department notices.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Chart.js'],
      github: 'https://github.com/cpi-ict-club/smart-campus-portal',
      demo: 'https://cpi-campus-portal.demo.app',
      featured: true
    },
    {
      id: 'proj-2',
      title: 'Polytechnic Resource & Notes Repository',
      category: 'web',
      author: 'Rafidul Islam & Academic Team',
      authorRole: 'Lead Contributors',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80',
      description: 'A comprehensive open-source document archive providing categorized semester syllabus notes, previous year question papers, and lab manuals for all technologies.',
      tech: ['Vanilla JS', 'Modern CSS', 'Web Storage', 'PDF Viewer API'],
      github: 'https://github.com/cpi-ict-club/notes-hub',
      demo: 'https://cpi-notes-hub.demo.app',
      featured: true
    },
    {
      id: 'proj-3',
      title: 'AI Study Assistant & Code Explainer Bot',
      category: 'ai',
      author: 'Tasnim Ahmed & AI Circle',
      authorRole: 'Batch 2022-23',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
      description: 'An AI-powered web companion that breaks down complex code snippets, creates study summaries, and generates quiz flashcards from lecture notes.',
      tech: ['Python', 'FastAPI', 'Gemini API', 'Vanilla JS UI'],
      github: 'https://github.com/cpi-ict-club/ai-study-assistant',
      demo: 'https://ai-study-bot.demo.app',
      featured: true
    },
    {
      id: 'proj-4',
      title: 'Campus IoT Environmental Monitor & Energy Tracker',
      category: 'iot',
      author: 'Hardware & IoT Innovation Wing',
      authorRole: 'Diploma Engineers Group',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      description: 'An ESP32-powered micro-station that tracks temperature, humidity, CO2 levels, and power consumption across campus computer laboratories in real-time.',
      tech: ['ESP32', 'C++', 'MQTT', 'WebSockets', 'Chart.js'],
      github: 'https://github.com/cpi-ict-club/iot-campus-monitor',
      demo: 'https://iot-campus.demo.app',
      featured: false
    },
    {
      id: 'proj-5',
      title: 'DevTimer: Focus & Competitive Coding Tracker',
      category: 'web',
      author: 'Samiul Hasan',
      authorRole: 'Technical Member',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80',
      description: 'A developer-first Pomodoro timer integrated with ambient Lo-Fi audio, GitHub streak widgets, and customizable coding task intervals.',
      tech: ['HTML5', 'CSS Variables', 'Web Audio API', 'JavaScript'],
      github: 'https://github.com/cpi-ict-club/dev-timer',
      demo: 'https://dev-timer.demo.app',
      featured: false
    },
    {
      id: 'proj-6',
      title: 'Polytechnic Community Android & PWA App',
      category: 'mobile',
      author: 'Mobile App Wing',
      authorRole: 'Team Alpha',
      image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80',
      description: 'A Progressive Web App allowing members to access club events offline, receive push notifications for urgent workshops, and view member profiles.',
      tech: ['Progressive Web App', 'Service Workers', 'IndexedDB', 'Tailored CSS'],
      github: 'https://github.com/cpi-ict-club/pwa-mobile',
      demo: 'https://cpi-mobile.demo.app',
      featured: false
    }
  ],

  team: [
    {
      id: 'team-1',
      name: 'Engr. Mahbubur Rahman',
      role: 'Chief Patron & Advisor',
      category: 'executive',
      department: 'Computer Science & Technology Dept.',
      bio: 'Visionary educator and technology mentor with 12+ years of experience guiding student innovators toward national excellence.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
      skills: ['Mentorship', 'Cloud Computing', 'Academic Strategy'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-2',
      name: 'Rafidul Islam',
      role: 'President & Technical Lead',
      category: 'executive',
      department: 'Computer Technology (7th Sem)',
      bio: 'Full-stack software developer and tech enthusiast passionate about open source ecosystems and architecting student-driven digital tools.',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80',
      skills: ['JavaScript', 'System Architecture', 'UI/UX Engineering'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-3',
      name: 'Sadia Afrin',
      role: 'Vice President & Community Lead',
      category: 'executive',
      department: 'Computer Technology (7th Sem)',
      bio: 'Community builder dedicated to fostering diversity in tech, organizing mega hackathons, and connecting students with industry leaders.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80',
      skills: ['Leadership', 'Event Direction', 'Public Relations'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-4',
      name: 'Samiul Hasan',
      role: 'General Secretary & Operations',
      category: 'executive',
      department: 'Computer Technology (6th Sem)',
      bio: 'Spearheading club operations, resource procurement, inter-college partnerships, and competitive coding leagues.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
      skills: ['Operations', 'Problem Solving', 'Strategic Planning'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-5',
      name: 'Tasnim Ahmed',
      role: 'Lead, Python & AI Wing',
      category: 'technical',
      department: 'Computer Technology (5th Sem)',
      bio: 'Data science practitioner passionate about machine learning research, automated scripting, and algorithmic problem solving.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
      skills: ['Python', 'Machine Learning', 'Data Analysis'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-6',
      name: 'Nusrat Jahan',
      role: 'Lead, UI/UX & Design Guild',
      category: 'design',
      department: 'Computer Technology (5th Sem)',
      bio: 'Product designer obsessed with crafting delightful user journeys, aesthetic design systems, and inclusive digital accessibility.',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
      skills: ['Figma', 'User Research', 'Design Systems'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-7',
      name: 'Arifuzzaman Khan',
      role: 'Lead, Media & Content Writing',
      category: 'content',
      department: 'Computer Technology (5th Sem)',
      bio: 'Technical author and video storyteller managing club publication media, newsletters, and social media technology campaigns.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=500&q=80',
      skills: ['Content Strategy', 'Video Editing', 'Tech Journalism'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    },
    {
      id: 'team-8',
      name: 'Farhana Yeasmin',
      role: 'Lead, Student Volunteer Wing',
      category: 'volunteer',
      department: 'Computer Technology (4th Sem)',
      bio: 'Coordinating student mentorship circles, peer tutoring sessions, event logistics, and member onboarding programs.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
      skills: ['Team Coordination', 'Student Mentorship', 'Logistics'],
      socials: { github: '#', linkedin: '#', twitter: '#' }
    }
  ],

  gallery: [
    {
      id: 'gal-1',
      title: 'Annual Inter-Polytechnic Hackathon 2024 Final Sprint',
      category: 'hackathons',
      categoryName: 'Hackathon',
      date: 'Dec 2024',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80',
      caption: 'Over 120 student coders collaborating tirelessly during the final 4-hour countdown of our annual hackathon.'
    },
    {
      id: 'gal-2',
      title: 'Hands-on React & Modern Frontend Bootcamp',
      category: 'workshops',
      categoryName: 'Workshop',
      date: 'Nov 2024',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      caption: 'Packed Computer Lab #2 during the interactive React Component Architecture workshop.'
    },
    {
      id: 'gal-3',
      title: 'National Cybersecurity & Ethical Hacking Symposium',
      category: 'seminars',
      categoryName: 'Seminar',
      date: 'Oct 2024',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
      caption: 'Guest speakers from industry demonstrating live defensive strategies against sophisticated cyber exploits.'
    },
    {
      id: 'gal-4',
      title: 'Intra-College Coding Championship Prize Ceremony',
      category: 'competitions',
      categoryName: 'Competition',
      date: 'Aug 2024',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      caption: 'Celebrating the top 5 problem solvers who triumphed in the 4-hour algorithmic battle.'
    },
    {
      id: 'gal-5',
      title: 'IoT & Embedded Robotics Demonstration Day',
      category: 'workshops',
      categoryName: 'Workshop',
      date: 'Jul 2024',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
      caption: 'Students showcasing hardware micro-controllers and smart telemetry sensors.'
    },
    {
      id: 'gal-6',
      title: 'Tech Career & Mock Interview Masterclass',
      category: 'seminars',
      categoryName: 'Seminar',
      date: 'Jun 2024',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
      caption: 'Industry engineers conducting 1-on-1 resume reviews and behavioral mock interview sessions for graduating students.'
    }
  ],

  faqs: [
    {
      q: 'What is CPI ICT Club and what is its primary mission?',
      a: 'CPI ICT Club is the premier student-driven technology and innovation hub of our polytechnic institute. Our mission is to bridge the gap between academic curriculum and modern industry expectations by providing hands-on coding workshops, mentorship circles, real-world project development, career opportunities, and hackathons.'
    },
    {
      q: 'Who is eligible to join the CPI ICT Club?',
      a: 'Any currently enrolled student across all academic departments and semesters of our institute can join! Whether you are a complete beginner just writing your first line of HTML or an experienced developer building backend microservices, there is a welcoming community and active track for you.'
    },
    {
      q: 'Are all learning resources, courses, and notes free of cost?',
      a: 'Yes, 100%! All study notes, code repositories, cheatsheets, tutorials, workshops, and recorded masterclasses are completely free and open-access for every student.'
    },
    {
      q: 'How can I participate in upcoming hackathons and workshops?',
      a: 'Browse the "Events & Announcements" section on this website, select the event you are interested in, and click "Register Now". You will receive instant confirmation and instructions in your email and through our club Discord/Telegram channels.'
    },
    {
      q: 'How can I submit my project to be featured on the Projects Showcase?',
      a: 'Click the "Submit Your Project" button inside the Projects section. Provide your project name, live demo link, GitHub repo link, tech stack, and a short overview. Our Technical Committee will review and feature verified projects within 48 hours!'
    },
    {
      q: 'How can I apply to become an Executive or Technical Wing member?',
      a: 'We open recruitment applications at the beginning of each academic semester. Active club participation, contribution to open-source student projects, and peer tutoring will fast-track your invitation to join our core team.'
    }
  ]
};
