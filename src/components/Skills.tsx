import React, { useState } from 'react';
import {
  ChevronDown,
  Bot,
  BrainCircuit,
  BarChart3,
  Database,
  Layout,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { SkillCategory } from '../types';

export const Skills: React.FC = () => {
  // By default, open the first two high-impact categories (AI/LLM and Machine Learning)
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'ai-llm': true,
    'machine-learning': true,
    'data-analytics': true,
    'fullstack-backend': false,
    'frontend-ui': false,
    'languages-tools': false,
  });

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      case 'Database':
        return <Database className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      case 'Layout':
        return <Layout className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      case 'Terminal':
        return <Terminal className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
      default:
        return <Layers className="w-6 h-6" style={{ color: 'var(--color-primary)' }} />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Skills
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            My technical proficiency &amp; toolset
          </p>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-3"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* 2-Column Accordion Grid (Bedimcode signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {skillCategories.map((category) => {
            const isOpen = !!openCategories[category.id];

            return (
              <div
                key={category.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                      {getIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-4 animate-in fade-in duration-200">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-slate-500 dark:text-slate-400 font-medium">
                            {skill.percentage}%
                          </span>
                        </div>

                        {/* Progress Bar (Bedimcode signature skill bar) */}
                        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700 ease-out"
                            style={{
                              width: `${skill.percentage}%`,
                              backgroundColor: 'var(--color-primary)',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Core CS & Engineering Foundations Footer Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-slate-500" />
            <span className="font-semibold text-slate-800 dark:text-slate-200">Foundations:</span>
            <span>Data Structures &amp; Algorithms &bull; Object-Oriented Programming &bull; DBMS &bull; REST API Architecture</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Environments:</span>
            <span className="font-medium text-slate-700 dark:text-slate-300">Linux &bull; Google Colab &bull; Git &bull; Streamlit Cloud</span>
          </div>
        </div>
      </div>
    </section>
  );
};
