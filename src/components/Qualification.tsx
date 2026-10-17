import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { qualifications } from '../data/portfolioData';
import { QualificationItem } from '../types';

export const Qualification: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certification'>('experience');

  const filteredItems = qualifications.filter((item) => item.type === activeTab);

  return (
    <section id="qualification" className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Qualification
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            My personal journey &amp; milestones
          </p>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-3"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* Tab Buttons (Bedimcode signature tab buttons) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12">
          <button
            onClick={() => setActiveTab('experience')}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'experience'
                ? 'text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            style={activeTab === 'experience' ? { backgroundColor: 'var(--color-primary)' } : {}}
          >
            <Briefcase className="w-4 h-4" />
            <span>Work Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            style={activeTab === 'education' ? { backgroundColor: 'var(--color-primary)' } : {}}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('certification')}
            className={`inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'certification'
                ? 'text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            style={activeTab === 'certification' ? { backgroundColor: 'var(--color-primary)' } : {}}
          >
            <Award className="w-4 h-4" />
            <span>Certifications</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-700">
          {filteredItems.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Node Dot */}
              <div
                className="absolute -left-[23px] sm:-left-[27px] top-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 shadow-sm transition-transform duration-200 group-hover:scale-125"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />

              {/* Timeline Card */}
              <div className="bg-slate-50 dark:bg-slate-800/70 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p
                      className="text-sm font-semibold transition-colors mt-0.5"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      {item.subtitle}
                      {item.location && (
                        <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2">
                          &bull; {item.location}
                        </span>
                      )}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shrink-0 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* KPI Metrics Highlight if available */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className="text-center p-1.5">
                        <span
                          className="block text-sm font-bold"
                          style={{ color: 'var(--color-primary)' }}
                        >
                          {m.value}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Detailed Highlights from Resume */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech / Subject Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="pt-3 border-t border-slate-200/70 dark:border-slate-700/60 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Skills:</span>
                    {item.tags.map((tag, idx) => (
                      <span key={tag} className="inline-flex items-center">
                        <span>{tag}</span>
                        {idx < item.tags!.length - 1 && <span className="mx-1.5 text-slate-300 dark:text-slate-600">&bull;</span>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
