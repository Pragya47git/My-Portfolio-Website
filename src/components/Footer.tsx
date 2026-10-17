import React from 'react';
import { Linkedin, Github, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-12 sm:py-16 text-white transition-colors"
      style={{ backgroundColor: 'var(--color-primary)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-between pb-10 border-b border-white/20">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Pragya Dwivedi</h2>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              AI Engineer &bull; Python &bull; Full-Stack &bull; LLM Applications
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-start md:justify-center gap-5 text-sm font-medium">
            <button
              onClick={() => scrollTo('services')}
              className="text-white/85 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="text-white/85 hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-white/85 hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={onOpenResume}
              className="text-white/85 hover:text-white transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-start md:justify-end gap-4">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all transform hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 text-center text-xs text-white/70 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>&copy; {new Date().getFullYear()} Pragya Dwivedi. All rights reserved.</span>
          <span className="hidden sm:inline">&bull;</span>
          <span>Crafted with responsive portfolio architecture &amp; modern React</span>
        </div>
      </div>
    </footer>
  );
};
