import React, { useState } from 'react';
import { ExternalLink, Github, Play, Sparkles, Bot, Layers, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { InteractiveDemos } from './InteractiveDemos';

export const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai' | 'fullstack' | 'ml' | 'data'>('all');
  const [selectedDemoProject, setSelectedDemoProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white dark:bg-slate-900/50 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Portfolio
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            Most recent AI, ML &amp; full-stack projects
          </p>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-3"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* Interactive Filter Controls (Segmented control adhering to frontend design constitution) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl max-w-xl mx-auto mb-12 border border-slate-200/80 dark:border-slate-700/80">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeFilter === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveFilter('ai')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeFilter === 'ai'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            AI &amp; LLMs
          </button>
          <button
            onClick={() => setActiveFilter('fullstack')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeFilter === 'fullstack'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Full-Stack
          </button>
          <button
            onClick={() => setActiveFilter('ml')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeFilter === 'ml'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Machine Learning
          </button>
          <button
            onClick={() => setActiveFilter('data')}
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeFilter === 'data'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Analytics &amp; EDA
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top Banner / Preview Header */}
              <div
                className="p-6 relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800"
                style={{
                  background:
                    'linear-gradient(135deg, var(--color-primary-light-bg) 0%, transparent 100%)',
                }}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-semibold uppercase tracking-wider">
                    {project.category === 'ai'
                      ? 'AI / LLM'
                      : project.category === 'fullstack'
                      ? 'MERN Full-Stack'
                      : project.category === 'ml'
                      ? 'Machine Learning'
                      : 'Data Analytics'}
                  </span>
                  <span>{project.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                      />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack (Unboxed metadata with separators) */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="inline-flex items-center">
                      <span>{tech}</span>
                      {i < 3 && i < project.technologies.length - 1 && (
                        <span className="mx-1 text-slate-300 dark:text-slate-700">&bull;</span>
                      )}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-slate-400">+{project.technologies.length - 4} more</span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 bg-white dark:bg-slate-900/90 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedDemoProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold py-1.5 px-3 rounded-lg text-white shadow-sm transition-all hover:opacity-90"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{project.demoType ? 'Try Live Prototype' : 'Explore Details'}</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>Code</span>
                  <Github className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Live Demo Modal Sandbox */}
        <InteractiveDemos
          project={selectedDemoProject}
          onClose={() => setSelectedDemoProject(null)}
        />
      </div>
    </section>
  );
};
