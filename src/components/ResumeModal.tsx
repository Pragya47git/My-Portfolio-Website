import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Check } from 'lucide-react';
import { personalInfo, skillCategories, qualifications, projects } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200 print:p-0 print:bg-white"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col print:border-none print:shadow-none print:max-h-none print:w-full print:bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Action Toolbar (Hidden in Print) */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-20 print:hidden">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Pragya Dwivedi — Curriculum Vitae
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
              Verified PDF Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-200 space-y-8 font-sans print:text-black print:p-4">
          {/* Resume Header */}
          <div className="text-center space-y-1.5 pb-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white print:text-black">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-violet-700 dark:text-violet-400 print:text-black">
              AI Engineer | Python | Full-Stack | LLM Applications
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 pt-1">
              <a href={`mailto:${personalInfo.email}`} className="hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" />
                <span>{personalInfo.email}</span>
              </a>
              <span>&bull;</span>
              <a href={`tel:${personalInfo.phone}`} className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>{personalInfo.phone}</span>
              </a>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{personalInfo.location}</span>
              </span>
              <span>&bull;</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
              <span>&bull;</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 print:text-black">
              {personalInfo.aboutSummary}
            </p>
          </section>

          {/* Experience */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Experience
            </h2>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                <span>Machine Learning Intern — Unified Mentor, Gurugram, Remote</span>
                <span className="font-medium text-slate-500 print:text-slate-600">May 2026 – July 2026</span>
              </div>
              <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300 print:text-black list-disc pl-5">
                <li>
                  Built and deployed a Streamlit dashboard on Spain's Top 50 songs, using Python and EDA to analyze content maturity, release lifecycle, and playlist rotation.
                </li>
                <li>
                  Defined and tracked KPIs, including 48.26 average days on playlist, 9.49 days from entry to peak, and a 41.74% re-entry rate. Found that singles stay about 1.5x longer than album tracks.
                </li>
                <li>
                  Built a learner segmentation and course recommendation app for the EduPro platform, using K-Means clustering (evaluated with silhouette score) in Pandas, NumPy, Scikit-learn, and Plotly.
                </li>
                <li>
                  Published both projects on Streamlit Community Cloud.
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
              <span>Bachelor of Technology (B.Tech) — CSE — Pranveer Singh Institute of Technology</span>
              <span className="font-medium text-slate-500 print:text-slate-600">2024 – 2028</span>
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-black">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Languages: </span>
                <span>Python, JavaScript, C++</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">AI / LLM: </span>
                <span>LLM Applications, Prompt Engineering, LangChain, xAI Grok API, PDF Context-Grounded Chatbots, Conversation Memory, Streaming Responses</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Machine Learning: </span>
                <span>Scikit-learn, K-Means Clustering, Classification (Random Forest, XGBoost, CatBoost, LightGBM, AdaBoost), Hyperparameter Tuning (Optuna), Imbalanced-learn</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Data &amp; Analytics: </span>
                <span>Pandas, NumPy, EDA, Matplotlib, Plotly, Streamlit</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Backend: </span>
                <span>Node.js, Express.js, REST API Design, Authentication</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Frontend: </span>
                <span>React, Tailwind CSS, Axios, Responsive UI, Admin Dashboards</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Databases: </span>
                <span>MongoDB (Schema Design)</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Cloud / DevOps: </span>
                <span>Git, GitHub, Streamlit Community Cloud, Google Colab</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Core CS: </span>
                <span>Data Structures &amp; Algorithms</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Projects
            </h2>

            {/* AI Career Coach */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                <span>AI Career Coach — Resume-Aware Chatbot — GitHub</span>
                <span className="font-medium text-slate-500 print:text-slate-600">Oct 2026</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Python, LangChain, xAI API (Grok-4), PyPDF</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300 print:text-black list-disc pl-5">
                <li>Built a conversational career coach that loads a candidate's PDF resume as context to give personalized guidance on resume improvements, interview preparation, job search strategy, and skill-gap analysis.</li>
                <li>Implemented multi-turn chat with persistent conversation history and streaming responses using LangChain message abstractions and xAI's Grok-4 model, prototyped in Google Colab.</li>
              </ul>
            </div>

            {/* Task Management App */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                <span>Task Management App — GitHub</span>
                <span className="font-medium text-slate-500 print:text-slate-600">Sept 2026</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">MongoDB, Express.js, React, Node.js, Tailwind CSS, Axios</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300 print:text-black list-disc pl-5">
                <li>Built a full-stack task management app with a REST API for authentication, user management, task management, and report generation, with MongoDB schemas for users and tasks.</li>
                <li>Developed a responsive React and Tailwind CSS interface with an admin dashboard (summary cards, pie and bar charts), task creation and filtering, checklist-based automatic status updates, multi-user task assignment, file-link attachments, and downloadable task reports.</li>
              </ul>
            </div>

            {/* Telecom Churn */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm font-bold text-slate-900 dark:text-white print:text-black">
                <span>Telecom Customer Churn Analysis &amp; Prediction — GitHub</span>
                <span className="font-medium text-slate-500 print:text-slate-600">Aug 2026</span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Python, Pandas, NumPy, Matplotlib, Scikit-learn, Imbalanced-learn, XGBoost, CatBoost, LightGBM, Optuna</p>
              <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300 print:text-black list-disc pl-5">
                <li>Developed a machine learning pipeline to analyze telecom customer churn patterns and predict customer attrition using classification algorithms, including Decision Tree, Random Forest, XGBoost, AdaBoost, CatBoost, and LightGBM.</li>
                <li>Implemented data preprocessing, feature scaling, imbalanced-data handling, and hyperparameter optimization using Optuna to improve model performance and identify factors associated with customer churn.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Certifications
            </h2>
            <ul className="text-xs sm:text-sm space-y-1 text-slate-700 dark:text-slate-300 print:text-black list-disc pl-5">
              <li>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Data Analytics Bootcamp</span> — Analyst Builder, 2025
              </li>
              <li>
                <span className="font-semibold text-slate-900 dark:text-white print:text-black">Python For Datascience</span> — Infosys Springboard, 2026
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
