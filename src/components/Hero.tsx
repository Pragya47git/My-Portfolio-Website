import React from 'react';
import { Send, ArrowDown, Github, Linkedin, Mail, Sparkles, Bot, BrainCircuit, Code2, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { ProfileAvatar } from './ProfileAvatar';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Social Icons Column (Bedimcode signature layout) */}
          <div className="hidden sm:flex lg:col-span-1 flex-col items-center gap-5">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              style={{ backgroundColor: 'var(--color-primary-light-bg)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light-bg)';
              }}
            >
              <Linkedin className="w-5 h-5 text-slate-700 dark:text-slate-200 hover:text-white" />
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              style={{ backgroundColor: 'var(--color-primary-light-bg)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light-bg)';
              }}
            >
              <Github className="w-5 h-5 text-slate-700 dark:text-slate-200 hover:text-white" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:text-white transition-all transform hover:-translate-y-1"
              style={{ backgroundColor: 'var(--color-primary-light-bg)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary-light-bg)';
              }}
            >
              <Mail className="w-5 h-5 text-slate-700 dark:text-slate-200 hover:text-white" />
            </a>

            <div className="w-0.5 h-16 bg-slate-300 dark:bg-slate-700 mt-2" />
          </div>

          {/* Center / Left Main Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <span className="w-2 h-2 rounded-full animate-ping bg-emerald-500" />
              <span>Available for AI &amp; Full-Stack Internships</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                {personalInfo.name}
              </h1>
              <h2
                className="text-xl sm:text-2xl font-semibold transition-colors"
                style={{ color: 'var(--color-primary)' }}
              >
                {personalInfo.headline}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              {personalInfo.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-white shadow-lg transition-all transform hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>View Full CV</span>
              </button>
            </div>

            {/* Mobile Socials */}
            <div className="flex sm:hidden items-center gap-4 pt-4">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-6 hidden lg:block">
              <button
                onClick={scrollToAbout}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group"
              >
                <span className="p-1.5 rounded-full border border-slate-300 dark:border-slate-700 group-hover:border-slate-900 dark:group-hover:border-white transition-colors">
                  <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
                </span>
                <span>Scroll down</span>
              </button>
            </div>
          </div>

          {/* Right Profile Blob (Bedimcode's signature element) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
              {/* Animated morphing background glow */}
              <div
                className="absolute inset-0 opacity-20 dark:opacity-30 blur-2xl rounded-full"
                style={{ backgroundColor: 'var(--color-primary)' }}
              />

              {/* Profile Avatar with uploaded photo support & Bedimcode morphing mask */}
              <ProfileAvatar size="hero" className="w-full h-full" />

              {/* Floating Badges (Bedimcode signature interactive accents) */}
              <div className="absolute -top-3 -right-2 sm:-right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-lg flex items-center gap-2.5 animate-float z-20">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">LLM Apps</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">xAI Grok-4</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-3 shadow-lg flex items-center gap-2.5 animate-float-delayed z-20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">ML Pipelines</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Optuna &amp; XGBoost</p>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 hidden sm:flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-2.5 shadow-md items-center gap-2 z-20">
                <Code2 className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200">MERN Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
