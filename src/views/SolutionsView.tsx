import React, { useState } from 'react';
import { PageId, Solution } from '../types';
import { GPI_SOLUTIONS } from '../data/gpiData';
import { SolutionCard } from '../components/SolutionCard';
import { OtherSolutionsSection } from '../components/OtherSolutionsSection';
import { Search } from 'lucide-react';

interface SolutionsViewProps {
  setActivePage: (page: PageId) => void;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenDemoModal: (solutionId?: string) => void;
}

export const SolutionsView: React.FC<SolutionsViewProps> = ({
  setActivePage,
  setSelectedSolutionId,
  onOpenDemoModal
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSolutions = GPI_SOLUTIONS.filter(sol => {
    const term = searchTerm.toLowerCase();
    return sol.name.toLowerCase().includes(term) || 
           sol.summary.toLowerCase().includes(term) ||
           sol.shortDescription.toLowerCase().includes(term);
  });

  const handleSelectSolution = (slugOrId: string) => {
    setSelectedSolutionId(slugOrId);
    setActivePage('solution-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Institutional Header - Clean, minimal, no tags or badges */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004361] tracking-tight">
            Nossas Soluções
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Plataforma integrada de tecnologia para a Gestão Pública. Módulos inteligentes projetados para assegurar eficiência orçamentária, controle administrativo e conformidade com os órgãos de fiscalização.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por nome da solução ou palavra-chave..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#004361] shadow-2xs"
            />
          </div>
        </div>
      </section>

      {/* Solutions Catalog Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredSolutions.map((solution) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                onSelect={handleSelectSolution}
                onDemoRequest={(id) => onOpenDemoModal(id)}
              />
            ))}
          </div>

          {filteredSolutions.length === 0 && (
            <div className="text-center py-16 text-slate-500 text-sm">
              Nenhuma solução encontrada para "{searchTerm}".
            </div>
          )}

        </div>
      </section>

      {/* Bloco Outras Soluções */}
      <OtherSolutionsSection />

    </div>
  );
};

