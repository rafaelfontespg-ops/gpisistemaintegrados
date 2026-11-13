import React from 'react';
import { PageId } from '../types';
import { Hero } from '../components/Hero';
import { QuemSomosSection } from '../components/QuemSomosSection';
import { NumbersSection } from '../components/NumbersSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { OtherSolutionsSection } from '../components/OtherSolutionsSection';
import { AdvantagesSection } from '../components/AdvantagesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { SosMariaDaPenhaHighlight } from '../components/SosMariaDaPenhaHighlight';
import { CasesSection } from '../components/CasesSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ClientsAndReachSection } from '../components/ClientsAndReachSection';

interface HomeViewProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: (solutionId?: string) => void;
  onOpenVideoModal: (url: string, title: string) => void;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenArticleModal: (id: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenDemoModal,
  onOpenVideoModal,
  setSelectedSolutionId,
  onOpenArticleModal
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero */}
      <Hero 
        setActivePage={setActivePage}
        onOpenDemoModal={onOpenDemoModal}
        onOpenVideoModal={onOpenVideoModal}
      />

      {/* 2. Quem é a GPI Sistemas */}
      <QuemSomosSection 
        setActivePage={setActivePage}
        onOpenDemoModal={onOpenDemoModal}
      />

      {/* 3. GPI em Números */}
      <NumbersSection />

      {/* 4. Nossas Soluções */}
      <SolutionsSection 
        setActivePage={setActivePage}
        setSelectedSolutionId={setSelectedSolutionId}
        onOpenDemoModal={onOpenDemoModal}
      />

      {/* 5. Bloco Outras Soluções */}
      <OtherSolutionsSection />

      {/* 6. Diferenciais */}
      <AdvantagesSection />

      {/* 7. Por que escolher a GPI */}
      <WhyChooseUsSection />

      {/* 8. Como Funciona */}
      <HowItWorksSection />

      {/* 9. Nossos Clientes e Abrangência */}
      <ClientsAndReachSection />

      {/* 10. SOS Maria da Penha (Highlight) */}
      <SosMariaDaPenhaHighlight 
        setActivePage={setActivePage}
        onOpenDemoModal={onOpenDemoModal}
        onOpenVideoModal={onOpenVideoModal}
      />

      {/* 11. Cases de Sucesso / Depoimentos */}
      <CasesSection />

      {/* 12. FAQ */}
      <FaqSection />

      {/* 13. Final CTA */}
      <FinalCtaSection 
        onOpenDemoModal={onOpenDemoModal}
        setActivePage={setActivePage}
      />
    </div>
  );
};

