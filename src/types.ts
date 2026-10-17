export type ThemeMode = 'light' | 'dark';

export type AccentColor = 'violet' | 'blue' | 'emerald' | 'rose' | 'amber';

export interface SkillItem {
  name: string;
  level?: string;
  percentage?: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface QualificationItem {
  id: string;
  title: string;
  subtitle: string;
  location?: string;
  period: string;
  type: 'education' | 'experience' | 'certification';
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ai' | 'fullstack' | 'ml' | 'data';
  date: string;
  description: string;
  highlights: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  demoType?: 'ai-chat' | 'churn-calc' | 'task-board';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}
