import React, { useState } from 'react';
import {
  X,
  Bot,
  BrainCircuit,
  Sliders,
  Send,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileText,
  RefreshCw,
  Kanban,
  Plus,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface InteractiveDemosProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const InteractiveDemos: React.FC<InteractiveDemosProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm z-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Interactive Project Sandbox
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-medium">
                Live Prototype
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close Sandbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content depending on demoType */}
        <div className="p-5 sm:p-6 flex-1">
          {project.demoType === 'ai-chat' && <AiCareerCoachDemo />}
          {project.demoType === 'churn-calc' && <ChurnRiskCalculatorDemo />}
          {project.demoType === 'task-board' && <TaskManagementDemo />}
          {!project.demoType && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                <p className="text-xs font-semibold text-slate-900 dark:text-white">Technical Highlights:</p>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 list-disc pl-4">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* 1. AI Career Coach Simulated Interactive Chatbot */
const AiCareerCoachDemo: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'bot'; text: string }>>([
    {
      sender: 'bot',
      text: "Hello! I'm Pragya's AI Career Coach powered by LangChain & xAI Grok-4. I've ingested candidate resumes and job requirements into my contextual memory. Try asking me for resume feedback, interview prep, or skill gap analysis!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const SUGGESTED_QUERIES = [
    'Analyze my skill gaps for AI Engineer roles',
    'How should I highlight my ML internship at Unified Mentor?',
    'What behavioral questions should I prepare for?',
  ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    const userMsg = { sender: 'user' as const, text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = '';
      if (q.toLowerCase().includes('skill') || q.toLowerCase().includes('gap')) {
        botResponse =
          "Based on your resume context (B.Tech CSE, PSIT Kanpur):\n\n• Strengths: Solid hands-on foundation in LangChain, xAI Grok API, Scikit-learn, and Streamlit dashboards.\n• Recommendations for AI Engineer target: Strengthen Vector Database experience (e.g. Pinecone/ChromaDB), explore model evaluation frameworks (Ragas/TruLens), and deploy a production containerized service on Docker/GCP.";
      } else if (q.toLowerCase().includes('mentor') || q.toLowerCase().includes('intern')) {
        botResponse =
          "Your Machine Learning internship at Unified Mentor is high-impact because of concrete metrics! In interviews, emphasize:\n1. 'Spain's Top 50 Spotify EDA': Quantify the 48.26 average playlist days and how standalone singles lasted 1.5x longer than album tracks.\n2. 'EduPro Segmentation': Mention evaluating K-Means clusters using the Silhouette Score in Pandas & Plotly.";
      } else {
        botResponse =
          `Great question regarding "${q}". Grounded in your project history (AI Career Coach, Task Management App, and Telecom Churn ML pipeline):\n\n1. Highlight your end-to-end experience from data cleaning & EDA to deploying full-stack user interfaces.\n2. Emphasize why you chose xAI Grok-4 and LangChain message abstractions for streaming context handling.`;
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="flex flex-col h-[460px]">
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2 pb-2 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <Bot className="w-4 h-4 text-violet-500" />
          <span>Model: xAI Grok-4 (Context-Grounded via LangChain)</span>
        </div>
        <span className="text-emerald-500 font-medium">Context: Pragya Dwivedi Resume</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 py-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm whitespace-pre-line leading-relaxed ${
                m.sender === 'user'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium rounded-tr-none'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/80 dark:border-slate-700'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2.5 rounded-2xl rounded-tl-none flex items-center gap-1.5 text-xs text-slate-500">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]" />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="flex flex-wrap gap-1.5 my-2">
        {SUGGESTED_QUERIES.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-left"
          >
            &quot;{q}&quot;
          </button>
        ))}
      </div>

      {/* Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask career coach a question..."
          className="flex-1 px-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2.5 rounded-xl bg-violet-600 text-white disabled:opacity-50 hover:bg-violet-700 transition-colors"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};

/* 2. Telecom Customer Churn Risk Calculator */
const ChurnRiskCalculatorDemo: React.FC = () => {
  const [tenure, setTenure] = useState(12);
  const [monthlyCharge, setMonthlyCharge] = useState(75);
  const [contractType, setContractType] = useState<'month' | 'one-year' | 'two-year'>('month');
  const [hasTechSupport, setHasTechSupport] = useState(false);
  const [internetService, setInternetService] = useState<'fiber' | 'dsl' | 'no'>('fiber');

  // Realistic formula modeled after classification weights
  let score = 30;
  if (contractType === 'month') score += 35;
  if (contractType === 'one-year') score -= 15;
  if (contractType === 'two-year') score -= 30;

  if (tenure < 6) score += 25;
  else if (tenure > 36) score -= 25;

  if (monthlyCharge > 80) score += 15;
  if (!hasTechSupport) score += 12;
  if (internetService === 'fiber') score += 10;

  const churnProbability = Math.min(Math.max(score, 5), 96);
  const isHighRisk = churnProbability > 60;
  const isModerateRisk = churnProbability >= 35 && churnProbability <= 60;

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          Ensemble Classifier (XGBoost + LightGBM + Optuna)
        </span>
        <span className="text-slate-500">Benchmark: 88.4% AUC-ROC</span>
      </div>

      {/* Sliders and Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Customer Tenure: <span className="font-bold text-slate-900 dark:text-white">{tenure} months</span>
          </label>
          <input
            type="range"
            min="1"
            max="72"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-violet-600"
          />
        </div>

        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Monthly Charges: <span className="font-bold text-slate-900 dark:text-white">${monthlyCharge} / mo</span>
          </label>
          <input
            type="range"
            min="20"
            max="120"
            value={monthlyCharge}
            onChange={(e) => setMonthlyCharge(Number(e.target.value))}
            className="w-full accent-violet-600"
          />
        </div>

        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Contract Structure:
          </label>
          <select
            value={contractType}
            onChange={(e) => setContractType(e.target.value as any)}
            className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
          >
            <option value="month">Month-to-month (High Risk)</option>
            <option value="one-year">One year contract</option>
            <option value="two-year">Two year contract (Strong Loyalty)</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-slate-700 dark:text-slate-300 mb-1">
            Internet Service:
          </label>
          <select
            value={internetService}
            onChange={(e) => setInternetService(e.target.value as any)}
            className="w-full p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
          >
            <option value="fiber">Fiber Optic</option>
            <option value="dsl">DSL</option>
            <option value="no">No Internet Service</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <input
          type="checkbox"
          id="techSupport"
          checked={hasTechSupport}
          onChange={(e) => setHasTechSupport(e.target.checked)}
          className="rounded border-slate-300 text-violet-600 focus:ring-violet-500"
        />
        <label htmlFor="techSupport" className="text-slate-700 dark:text-slate-300 cursor-pointer">
          Has Active Tech Support add-on
        </label>
      </div>

      {/* Result Display */}
      <div
        className={`p-4 rounded-xl border ${
          isHighRisk
            ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60'
            : isModerateRisk
            ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60'
            : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60'
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
              Predicted Churn Probability
            </p>
            <h4
              className={`text-2xl font-bold mt-0.5 ${
                isHighRisk
                  ? 'text-rose-600 dark:text-rose-400'
                  : isModerateRisk
                  ? 'text-amber-600 dark:text-amber-400'
                  : 'text-emerald-600 dark:text-emerald-400'
              }`}
            >
              {churnProbability}% — {isHighRisk ? 'High Risk' : isModerateRisk ? 'Moderate' : 'Low Risk / Loyal'}
            </h4>
          </div>

          <div className="text-right text-xs">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Feature Weight:</span>
            <p className="text-slate-500">Contract &gt; Tenure &gt; Charges</p>
          </div>
        </div>

        <div className="mt-3 w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${
              isHighRisk ? 'bg-rose-500' : isModerateRisk ? 'bg-amber-500' : 'bg-emerald-500'
            }`}
            style={{ width: `${churnProbability}%` }}
          />
        </div>
      </div>
    </div>
  );
};

/* 3. Task Management Dashboard Preview */
const TaskManagementDemo: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Build LangChain PDF Loader', status: 'completed', tag: 'AI' },
    { id: 2, title: 'Optuna Hyperparameter Trials', status: 'in-progress', tag: 'ML' },
    { id: 3, title: 'Connect MongoDB User Auth Endpoints', status: 'completed', tag: 'Backend' },
    { id: 4, title: 'Deploy Streamlit Spain Top 50 Dashboard', status: 'to-do', tag: 'Analytics' },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === 'completed' ? 'in-progress' : 'completed',
            }
          : t
      )
    );
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), title: newTaskTitle, status: 'to-do', tag: 'Task' },
    ]);
    setNewTaskTitle('');
  };

  const completedCount = tasks.filter((t) => t.status === 'completed').length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100 dark:border-slate-800">
        <span className="font-semibold text-slate-700 dark:text-slate-300">
          Admin Task Board &bull; React + Node.js + MongoDB API
        </span>
        <span className="text-emerald-500 font-medium">
          {completedCount} / {tasks.length} Completed ({Math.round((completedCount / tasks.length) * 100)}%)
        </span>
      </div>

      <form onSubmit={addTask} className="flex gap-2">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new sprint task..."
          className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-medium hover:opacity-90"
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <div className="flex items-center gap-3 text-xs">
              <span
                className={`w-4 h-4 rounded flex items-center justify-center border ${
                  task.status === 'completed'
                    ? 'bg-emerald-500 border-emerald-500 text-white'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                {task.status === 'completed' && '✓'}
              </span>
              <span
                className={`font-medium ${
                  task.status === 'completed'
                    ? 'line-through text-slate-400'
                    : 'text-slate-800 dark:text-slate-200'
                }`}
              >
                {task.title}
              </span>
            </div>

            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              {task.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
