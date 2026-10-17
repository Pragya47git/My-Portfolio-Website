import React, { createContext, useContext, useEffect, useState } from 'react';
import { AccentColor, ThemeMode } from '../types';

interface ThemeContextType {
  mode: ThemeMode;
  toggleMode: () => void;
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ACCENT_HUES: Record<AccentColor, { primary: string; hover: string; lightBg: string; darkBg: string; border: string }> = {
  violet: {
    primary: 'rgb(124, 58, 237)', // #7c3aed
    hover: 'rgb(109, 40, 217)',
    lightBg: 'rgb(245, 243, 255)',
    darkBg: 'rgba(124, 58, 237, 0.15)',
    border: 'rgb(196, 181, 253)',
  },
  blue: {
    primary: 'rgb(37, 99, 235)', // #2563eb
    hover: 'rgb(29, 78, 216)',
    lightBg: 'rgb(239, 246, 255)',
    darkBg: 'rgba(37, 99, 235, 0.15)',
    border: 'rgb(191, 219, 254)',
  },
  emerald: {
    primary: 'rgb(5, 150, 105)', // #059669
    hover: 'rgb(4, 120, 87)',
    lightBg: 'rgb(236, 253, 245)',
    darkBg: 'rgba(5, 150, 105, 0.15)',
    border: 'rgb(167, 243, 208)',
  },
  rose: {
    primary: 'rgb(225, 29, 72)', // #e11d48
    hover: 'rgb(190, 18, 60)',
    lightBg: 'rgb(255, 241, 242)',
    darkBg: 'rgba(225, 29, 72, 0.15)',
    border: 'rgb(254, 205, 211)',
  },
  amber: {
    primary: 'rgb(217, 119, 6)', // #d97706
    hover: 'rgb(180, 83, 9)',
    lightBg: 'rgb(254, 243, 199)',
    darkBg: 'rgba(217, 119, 6, 0.15)',
    border: 'rgb(253, 230, 138)',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_mode') as ThemeMode;
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [accent, setAccentState] = useState<AccentColor>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_accent') as AccentColor;
      if (saved && ACCENT_HUES[saved]) return saved;
    }
    return 'violet'; // Bedimcode classic portfolio default
  });

  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme_mode', mode);
  }, [mode]);

  useEffect(() => {
    const root = document.documentElement;
    const config = ACCENT_HUES[accent];
    root.style.setProperty('--color-primary', config.primary);
    root.style.setProperty('--color-primary-hover', config.hover);
    root.style.setProperty('--color-primary-light-bg', config.lightBg);
    root.style.setProperty('--color-primary-dark-bg', config.darkBg);
    root.style.setProperty('--color-primary-border', config.border);
    localStorage.setItem('theme_accent', accent);
  }, [accent]);

  const toggleMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, accent, setAccent }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
