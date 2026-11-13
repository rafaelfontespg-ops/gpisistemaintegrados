import React from 'react';
import { Solution, PageId } from '../types';
import { GPI_SOLUTIONS } from '../data/gpiData';
import { SolutionCard } from './SolutionCard';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  setActivePage: (page: PageId) => void;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenDemoModal: (solutionId?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  setActivePage,
  setSelectedSolutionId,
  onOpenDemoModal
}) => {
  const handleSelectSolution = (slugOrId: string) => {
    setSelectedSolutionId(slugOrId);
    setActivePage('solution-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="solucoes" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Minimalist, clean, without tags or badges above title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Nossas Soluções
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Sistemas e módulos inteligentes desenvolvidos especificamente para otimizar a gestão pública, assegurando conformidade legal, eficiência operacional e transparência.
          </p>
        </div>

        {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {GPI_SOLUTIONS.map((solution) => (
            <SolutionCard
              key={solution.id}
              solution={solution}
              onSelect={handleSelectSolution}
              onDemoRequest={(id) => onOpenDemoModal(id)}
            />
          ))}
        </div>

        {/* Action button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              setActivePage('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#004361] hover:bg-[#335B8F] text-white px-7 py-3 rounded-lg font-bold text-sm transition-all shadow-sm cursor-pointer"
          >
            <span>Conhecer catálogo completo de soluções</span>
            <ArrowRight className="w-4 h-4 text-[#68A8DE]" />
          </button>
        </div>

      </div>
    </section>
  );
};
