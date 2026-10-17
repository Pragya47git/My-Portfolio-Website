import React, { useState, useEffect } from 'react';
import { Sun, Moon, Palette, Menu, X, Home, User, FileCode, GraduationCap, Briefcase, Image, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AccentColor } from '../types';

interface HeaderProps {
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: FileCode },
  { id: 'qualification', label: 'Qualification', icon: GraduationCap },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'portfolio', label: 'Portfolio', icon: Image },
  { id: 'contact', label: 'Contact', icon: Send },
];

const ACCENT_OPTIONS: { id: AccentColor; name: string; color: string }[] = [
  { id: 'violet', name: 'Violet', color: '#7c3aed' },
  { id: 'blue', name: 'Blue', color: '#2563eb' },
  { id: 'emerald', name: 'Emerald', color: '#059669' },
  { id: 'rose', name: 'Rose', color: '#e11d48' },
  { id: 'amber', name: 'Amber', color: '#d97706' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const { mode, toggleMode, accent, setAccent } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-sm border-b border-slate-200/60 dark:border-slate-800/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1 group"
        >
          <span>Pragya</span>
          <span
            className="w-2 h-2 rounded-full inline-block transition-transform duration-200 group-hover:scale-125"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Quick Button */}
          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
            title="View Pragya's Resume"
          >
            <span>Resume</span>
          </button>

          {/* Accent Color Picker Popover */}
          <div className="relative">
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              aria-label="Change Accent Color Theme"
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Theme Accent Colors"
            >
              <Palette className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
            </button>

            {showColorPicker && (
              <div
                className="absolute right-0 mt-2 p-3 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 flex items-center gap-2 z-50 animate-in fade-in duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                {ACCENT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setAccent(opt.id);
                      setShowColorPicker(false);
                    }}
                    className={`w-6 h-6 rounded-full transition-transform ${
                      accent === opt.id ? 'ring-2 ring-offset-2 ring-slate-400 scale-110' : 'hover:scale-105'
                    }`}
                    style={{ backgroundColor: opt.color }}
                    title={opt.name}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleMode}
            aria-label="Toggle Dark and Light Mode"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
          >
            {mode === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Bedimcode signature mobile grid) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl transition-all">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center justify-center py-3 px-2 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                  style={isActive ? { backgroundColor: 'var(--color-primary)' } : {}}
                >
                  <Icon className="w-5 h-5 mb-1.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full py-2.5 px-4 text-center rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            View Complete CV &amp; Resume
          </button>
        </div>
      )}
    </header>
  );
};
