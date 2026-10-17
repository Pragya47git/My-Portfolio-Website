import React from 'react';
import { Download, Award, Briefcase, GraduationCap, MapPin, CheckCircle2, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header (Bedimcode signature layout) */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            My introduction &amp; background
          </p>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-3"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual summary card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />

              <div className="flex items-center gap-4 mb-6">
                <ProfileAvatar size="about" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    B.Tech CSE &bull; Class of 2028
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{personalInfo.location}</span>
                  </p>
                </div>
              </div>

              {/* Education & Role Highlights */}
              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <GraduationCap className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Pranveer Singh Institute of Technology
                    </span>
                    <p className="text-slate-500 dark:text-slate-400">B.Tech in Computer Science &amp; Engineering</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Briefcase className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Unified Mentor — Machine Learning Intern
                    </span>
                    <p className="text-slate-500 dark:text-slate-400">EDA, Spotify lifecycle metrics &amp; K-Means apps</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Award className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-slate-200">
                      Certified in Data Analytics &amp; Python
                    </span>
                    <p className="text-slate-500 dark:text-slate-400">Analyst Builder &amp; Infosys Springboard</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-slate-700/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400">Focus Areas:</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">
                  LLMs &bull; Python &bull; Full-Stack
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Stat Counters */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.aboutSummary}
            </p>

            {/* Bedimcode Stat Boxes */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <span
                  className="block text-2xl sm:text-3xl font-bold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  02+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-1 leading-tight">
                  Years Core Coding &amp; ML
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <span
                  className="block text-2xl sm:text-3xl font-bold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  06+
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-1 leading-tight">
                  Completed Projects
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
                <span
                  className="block text-2xl sm:text-3xl font-bold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  02
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mt-1 leading-tight">
                  Specialized Certifications
                </span>
              </div>
            </div>

            {/* Core Competencies highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>PDF Context-Grounded Chatbots (LangChain)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>MERN Full-Stack with REST APIs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Streamlit EDA &amp; KPI Dashboards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Classification &amp; Clustering (XGBoost, K-Means)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-white shadow-md transition-all transform hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span>Download Resume (PDF)</span>
                <Download className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Inspect Verified Details</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
