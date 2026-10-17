import { ProjectItem, QualificationItem, ServiceItem, SkillCategory } from '../types';

export const personalInfo = {
  name: 'Pragya Dwivedi',
  headline: 'AI Engineer & Full-Stack Developer',
  tagline: 'AI Engineer | Python | Full-Stack | LLM Applications',
  email: 'pragya27.kviitk@gmail.com',
  phone: '+91 8081986413',
  location: 'Kanpur, Uttar Pradesh, India',
  institute: 'Pranveer Singh Institute of Technology',
  degree: 'Bachelor of Technology (B.Tech) — CSE (2024 – 2028)',
  linkedinUrl: 'https://linkedin.com/in/pragya-dwivedi',
  githubUrl: 'https://github.com/pragyadwivedi',
  portfolioUrl: '#',
  aboutSummary:
    'BTech CSE student and aspiring AI engineer with full-stack skills in MERN and Python. Machine learning intern experienced in Exploratory Data Analysis (EDA), interactive dashboard building, and clustering-based ML applications with Streamlit, Pandas, and Scikit-learn. Focused on architecting context-grounded LLM applications and end-to-end ML solutions. Seeking an internship or engineering role to apply AI and full-stack skills to real-world products.',
  heroDescription:
    'Engineering intelligent, context-grounded LLM systems and responsive full-stack web applications with Python, LangChain, React, and modern ML pipelines.',
  stats: [
    { label: 'Years Academic & Project Experience', value: '02+' },
    { label: 'Completed AI & Web Projects', value: '06+' },
    { label: 'Specialized Certifications', value: '02' },
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'ai-llm',
    title: 'AI & LLM Applications',
    subtitle: 'Prompting, RAG & LLM agent architectures',
    iconName: 'Bot',
    skills: [
      { name: 'LLM Applications Architecture', percentage: 92, level: 'Advanced' },
      { name: 'Prompt Engineering & System Directives', percentage: 95, level: 'Expert' },
      { name: 'LangChain & Agentic Workflows', percentage: 88, level: 'Advanced' },
      { name: 'xAI Grok API Integration', percentage: 90, level: 'Advanced' },
      { name: 'PDF Context-Grounded Chatbots (RAG)', percentage: 92, level: 'Advanced' },
      { name: 'Conversation Memory & Multi-turn Chat', percentage: 90, level: 'Advanced' },
      { name: 'Streaming Responses & Chunk Handling', percentage: 86, level: 'Skilled' },
    ],
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & Modeling',
    subtitle: 'Algorithms, optimization & evaluation',
    iconName: 'BrainCircuit',
    skills: [
      { name: 'Scikit-learn', percentage: 90, level: 'Advanced' },
      { name: 'K-Means Clustering & Silhouette Score', percentage: 88, level: 'Advanced' },
      { name: 'Classification (Random Forest, Decision Trees)', percentage: 92, level: 'Advanced' },
      { name: 'Gradient Boosting (XGBoost, CatBoost, LightGBM)', percentage: 88, level: 'Advanced' },
      { name: 'Hyperparameter Tuning (Optuna)', percentage: 85, level: 'Skilled' },
      { name: 'Imbalanced-learn & Resampling (SMOTE)', percentage: 86, level: 'Skilled' },
      { name: 'AdaBoost & Ensemble Methods', percentage: 84, level: 'Skilled' },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    subtitle: 'EDA, manipulation & dashboard creation',
    iconName: 'BarChart3',
    skills: [
      { name: 'Pandas & NumPy', percentage: 94, level: 'Expert' },
      { name: 'Exploratory Data Analysis (EDA)', percentage: 95, level: 'Expert' },
      { name: 'Streamlit App Development', percentage: 92, level: 'Advanced' },
      { name: 'Plotly Interactive Visualizations', percentage: 88, level: 'Advanced' },
      { name: 'Matplotlib & Seaborn', percentage: 90, level: 'Advanced' },
      { name: 'KPI Formulation & Lifecycle Analytics', percentage: 87, level: 'Skilled' },
    ],
  },
  {
    id: 'fullstack-backend',
    title: 'Backend & Databases',
    subtitle: 'APIs, auth & database design',
    iconName: 'Database',
    skills: [
      { name: 'Node.js & Express.js', percentage: 88, level: 'Advanced' },
      { name: 'RESTful API Design & Architecture', percentage: 90, level: 'Advanced' },
      { name: 'MongoDB & Schema Design', percentage: 86, level: 'Skilled' },
      { name: 'User Authentication & JWT Security', percentage: 85, level: 'Skilled' },
      { name: 'Axios & Client-Server Integration', percentage: 90, level: 'Advanced' },
    ],
  },
  {
    id: 'frontend-ui',
    title: 'Frontend Development',
    subtitle: 'Responsive UI & interactive dashboards',
    iconName: 'Layout',
    skills: [
      { name: 'React.js (Hooks & Architecture)', percentage: 90, level: 'Advanced' },
      { name: 'Tailwind CSS & Responsive Layouts', percentage: 94, level: 'Expert' },
      { name: 'Interactive Admin Dashboards', percentage: 92, level: 'Advanced' },
      { name: 'State Management & Component Modularization', percentage: 88, level: 'Advanced' },
      { name: 'Accessible UI & Micro-interactions', percentage: 86, level: 'Skilled' },
    ],
  },
  {
    id: 'languages-tools',
    title: 'Languages & DevOps',
    subtitle: 'Programming foundations & cloud tools',
    iconName: 'Terminal',
    skills: [
      { name: 'Python', percentage: 95, level: 'Expert' },
      { name: 'JavaScript (ES6+)', percentage: 90, level: 'Advanced' },
      { name: 'C++', percentage: 82, level: 'Proficient' },
      { name: 'Data Structures & Algorithms', percentage: 86, level: 'Proficient' },
      { name: 'Git & GitHub Collaboration', percentage: 90, level: 'Advanced' },
      { name: 'Streamlit Community Cloud & Google Colab', percentage: 92, level: 'Advanced' },
    ],
  },
];

export const qualifications: QualificationItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    title: 'Machine Learning Intern',
    subtitle: 'Unified Mentor',
    location: 'Gurugram, Remote',
    period: 'May 2026 – July 2026',
    highlights: [
      "Built and deployed an interactive Streamlit dashboard on Spain's Top 50 songs, utilizing Python and EDA to analyze content maturity, release lifecycle dynamics, and playlist rotation patterns.",
      'Defined and monitored core music industry KPIs: 48.26 average days on playlist, 9.49 days from entry to peak, and a 41.74% re-entry rate. Discovered that singles stay about 1.5x longer than album tracks.',
      'Architected a learner segmentation and course recommendation engine for the EduPro platform, leveraging K-Means clustering (evaluated with silhouette scores) in Pandas, NumPy, Scikit-learn, and Plotly.',
      'Successfully deployed and published both production projects live on Streamlit Community Cloud for global accessibility.',
    ],
    metrics: [
      { label: 'Avg Days on Playlist', value: '48.26 days' },
      { label: 'Entry to Peak', value: '9.49 days' },
      { label: 'Re-entry Rate', value: '41.74%' },
      { label: 'Singles Retention', value: '1.5x vs Albums' },
    ],
    tags: ['Python', 'Streamlit', 'EDA', 'K-Means', 'Scikit-learn', 'Plotly', 'Pandas'],
  },
  {
    id: 'edu-1',
    type: 'education',
    title: 'Bachelor of Technology (B.Tech) — CSE',
    subtitle: 'Pranveer Singh Institute of Technology',
    location: 'Kanpur, India',
    period: '2024 – 2028',
    highlights: [
      'Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning Foundations, and Web Engineering.',
      'Active developer focusing on AI engineering, open-source projects, and full-stack system prototyping.',
      'Maintained consistent academic excellence while shipping end-to-end applications in ML and web technologies.',
    ],
    tags: ['Data Structures & Algorithms', 'C++', 'Python', 'DBMS', 'Software Engineering'],
  },
  {
    id: 'cert-1',
    type: 'certification',
    title: 'Data Analytics Bootcamp',
    subtitle: 'Analyst Builder',
    period: '2025',
    highlights: [
      'In-depth practical training on exploratory data analysis, data manipulation with Pandas & NumPy, business intelligence dashboards, and storytelling with metrics.',
      'Hands-on projects covering SQL queries, statistical analysis, and data cleaning workflows.',
    ],
    tags: ['Data Analytics', 'Pandas', 'EDA', 'SQL', 'Data Visualization'],
  },
  {
    id: 'cert-2',
    type: 'certification',
    title: 'Python For Datascience',
    subtitle: 'Infosys Springboard',
    period: '2026',
    highlights: [
      'Mastery of core Python programming for data science, algorithmic problem-solving, Scikit-learn workflows, and data pipelines.',
      'Practical evaluation on statistical modeling and predictive analytics.',
    ],
    tags: ['Python', 'Data Science', 'Scikit-learn', 'Statistics'],
  },
];

export const projects: ProjectItem[] = [
  {
    id: 'project-ai-career-coach',
    title: 'AI Career Coach — Resume-Aware Chatbot',
    subtitle: 'Personalized Career Guidance Powered by xAI Grok-4 & LangChain',
    category: 'ai',
    date: 'Oct 2026',
    description:
      'A conversational career coach that loads a candidate’s PDF resume as contextual memory to deliver personalized guidance on resume enhancement, technical interview preparation, job search strategy, and targeted skill-gap analysis.',
    highlights: [
      'Engineered multi-turn chat with persistent conversation memory and real-time streaming responses.',
      'Leveraged LangChain message abstractions and integrated xAI’s Grok-4 model for high-fidelity reasoning.',
      'Integrated PyPDF context loading pipeline to extract candidate skills, experience, and educational background for tailored recommendations.',
      'Prototyped and validated in Google Colab with test suites for varied job profiles and resumes.',
    ],
    technologies: ['Python', 'LangChain', 'xAI API (Grok-4)', 'PyPDF', 'Prompt Engineering', 'Streaming API'],
    githubUrl: 'https://github.com/pragyadwivedi/ai-career-coach',
    featured: true,
    demoType: 'ai-chat',
  },
  {
    id: 'project-task-management-app',
    title: 'Full-Stack Task Management & Admin Platform',
    subtitle: 'End-to-End MERN Application with Analytics & Role Control',
    category: 'fullstack',
    date: 'Sept 2026',
    description:
      'A robust full-stack task management application featuring RESTful API authentication, multi-user assignment, dynamic checklist-based progress updates, and a responsive administrative dashboard.',
    highlights: [
      'Designed scalable MongoDB schemas for users and tasks with relationship references and automated timestamp tracking.',
      'Constructed a responsive React and Tailwind CSS admin dashboard with visual summary cards, pie charts, and bar charts.',
      'Implemented checklist-driven automatic status transitions (To Do, In Progress, Review, Completed).',
      'Engineered multi-user task delegation, file-link attachments, and downloadable tabular task reports.',
      'Secured backend REST endpoints with JWT authentication and middleware error handling in Express.js.',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS', 'Axios', 'REST API'],
    githubUrl: 'https://github.com/pragyadwivedi/task-management-app',
    featured: true,
    demoType: 'task-board',
  },
  {
    id: 'project-telecom-churn',
    title: 'Telecom Customer Churn Analysis & Prediction',
    subtitle: 'High-Accuracy Classification Pipeline with Optuna Optimization',
    category: 'ml',
    date: 'Aug 2026',
    description:
      'An end-to-end machine learning pipeline that analyzes telecom subscriber behavior patterns and predicts customer churn risks using state-of-the-art classification ensembles.',
    highlights: [
      'Evaluated and benchmarked multiple algorithms: Decision Tree, Random Forest, AdaBoost, XGBoost, CatBoost, and LightGBM.',
      'Implemented robust data preprocessing: outlier detection, standard feature scaling, and categorical one-hot encoding.',
      'Handled severe class imbalance using Imbalanced-learn techniques (SMOTE and Tomek links) to boost minority class recall.',
      'Conducted hyperparameter optimization with Optuna over 100+ trials, driving significant gains in AUC-ROC and F1-score.',
      'Extracted feature importance rankings highlighting contract duration, fiber optic service, and tenure as primary churn drivers.',
    ],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'CatBoost', 'LightGBM', 'Optuna', 'Imbalanced-learn', 'Matplotlib'],
    githubUrl: 'https://github.com/pragyadwivedi/telecom-churn-prediction',
    featured: true,
    demoType: 'churn-calc',
  },
  {
    id: 'project-spain-top-50',
    title: "Spain's Top 50 Spotify EDA & Playlist Dynamics",
    subtitle: 'Streamlit Lifecycle Analytics & Hit Track Rotation Dashboard',
    category: 'data',
    date: 'May – July 2026',
    description:
      'A data analytics dashboard analyzing music consumption patterns, tracking how tracks enter, peak, decay, and re-enter Spain’s Top 50 Spotify charts over time.',
    highlights: [
      'Extracted and cleaned multi-month streaming telemetry to track 48.26 average playlist days and 9.49 days to peak popularity.',
      'Quantified 41.74% re-entry rate and proved that standalone singles sustain about 1.5x longer lifespan than album cuts.',
      'Built interactive Plotly time-series plots and distribution histograms inside a high-speed Streamlit interface.',
      'Deployed on Streamlit Community Cloud for public stakeholder analysis.',
    ],
    technologies: ['Python', 'EDA', 'Streamlit', 'Plotly', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/pragyadwivedi/spain-top50-music-eda',
    featured: false,
  },
  {
    id: 'project-edupro-recommendation',
    title: 'EduPro Learner Segmentation & Recommendation',
    subtitle: 'Unsupervised K-Means Course Matching Engine',
    category: 'ml',
    date: 'June 2026',
    description:
      'An unsupervised learning application grouping online learners by pace, topic affinity, and completion rates to deliver personalized course recommendations.',
    highlights: [
      'Formulated customer vector embeddings based on engagement metrics, quiz scores, and time-on-platform.',
      'Optimized cluster counts (k) via the Elbow Method and Silhouette Score analysis for distinct cohort definition.',
      'Developed interactive Plotly 2D/3D cluster visualizations enabling academic counselors to inspect learner personas.',
      'Shipped live on Streamlit Community Cloud with instant recommendation generation.',
    ],
    technologies: ['Python', 'Scikit-learn', 'K-Means', 'Pandas', 'Plotly', 'Streamlit'],
    githubUrl: 'https://github.com/pragyadwivedi/edupro-learner-segmentation',
    featured: false,
  },
];

export const services: ServiceItem[] = [
  {
    id: 'srv-ai',
    title: 'LLM & AI Systems',
    subtitle: 'Context-aware chatbots & RAG',
    iconName: 'Bot',
    description:
      'Designing and developing intelligent LLM solutions with document grounding, conversation memory, and streaming responses.',
    deliverables: [
      'Document context ingestion & PDF processing (RAG pipelines)',
      'Multi-turn conversational memory with LangChain message abstractions',
      'Integration with modern LLM APIs (xAI Grok, Gemini, OpenAI)',
      'Structured prompt engineering for deterministic JSON extraction',
      'Real-time streaming token UI with instant feedback',
    ],
    techStack: ['LangChain', 'Python', 'xAI Grok API', 'PyPDF', 'Prompt Engineering'],
  },
  {
    id: 'srv-ml',
    title: 'ML & Predictive Analytics',
    subtitle: 'Classification, clustering & tuning',
    iconName: 'BrainCircuit',
    description:
      'Building end-to-end machine learning pipelines from raw data preprocessing to hyperparameter tuning and model deployment.',
    deliverables: [
      'Customer churn and attrition risk predictive modeling',
      'Learner and customer segmentation via K-Means and clustering',
      'Automated hyperparameter optimization using Optuna',
      'Handling imbalanced datasets with SMOTE & class-weighting',
      'Feature importance analysis and actionable business insights',
    ],
    techStack: ['Scikit-learn', 'XGBoost', 'CatBoost', 'LightGBM', 'Optuna', 'Pandas'],
  },
  {
    id: 'srv-fullstack',
    title: 'Full-Stack Development',
    subtitle: 'MERN stack & data dashboards',
    iconName: 'Layout',
    description:
      'Constructing responsive, high-performance web applications with Node/Express backends, MongoDB databases, and React frontends.',
    deliverables: [
      'RESTful API architecture with secure authentication & JWT',
      'Normalized and efficient MongoDB schema design',
      'Interactive analytical dashboards with charts and metrics',
      'Responsive, accessible user interfaces with Tailwind CSS',
      'Interactive Streamlit data applications for instant stakeholder value',
    ],
    techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Streamlit'],
  },
];
