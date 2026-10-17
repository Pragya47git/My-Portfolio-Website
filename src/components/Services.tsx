import React, { useState } from 'react';
import { Bot, BrainCircuit, Layout, ArrowRight, X, CheckCircle2 } from 'lucide-react';
import { services } from '../data/portfolioData';
import { ServiceItem } from '../types';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />;
      case 'Layout':
        return <Layout className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />;
      default:
        return <Bot className="w-8 h-8" style={{ color: 'var(--color-primary)' }} />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Services
          </h2>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            What I offer &amp; build
          </p>
          <div
            className="w-12 h-1 rounded-full mx-auto mt-3"
            style={{ backgroundColor: 'var(--color-primary)' }}
          />
        </div>

        {/* Services 3-Card Grid (Bedimcode signature layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="mb-6 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 inline-block">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
                  {service.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* View More Button (Bedimcode signature modal trigger) */}
              <div>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-xs font-semibold group-hover:gap-3 transition-all"
                  style={{ color: 'var(--color-primary)' }}
                >
                  <span>View More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bedimcode Services Modal Popup */}
        {selectedService && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedService(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <div className="mb-4">{getIcon(selectedService.iconName)}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedService.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {selectedService.subtitle}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Key Deliverables &amp; Solutions
                </p>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {selectedService.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-400 mb-2">Core Technologies:</p>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                  {selectedService.techStack.map((tech, i) => (
                    <span key={tech} className="inline-flex items-center">
                      <span>{tech}</span>
                      {i < selectedService.techStack.length - 1 && (
                        <span className="mx-1.5 text-slate-300 dark:text-slate-700">&bull;</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
