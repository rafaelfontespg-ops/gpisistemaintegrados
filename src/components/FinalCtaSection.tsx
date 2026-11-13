import React from 'react';
import { PageId } from '../types';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenDemoModal: () => void;
  setActivePage: (page: PageId) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  setActivePage
}) => {
  const whatsappUrl = "https://wa.me/5571982557718?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20gostaria%20de%20conhecer%20melhor%20as%20solu%C3%A7%C3%B5es.";

  return (
    <section className="py-20 sm:py-24 bg-[#004361] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Título Oficial */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Conheça as soluções da GPI Sistemas
        </h2>

        {/* Texto Oficial */}
        <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Soluções integradas e serviços especializados para apoiar as diferentes áreas da Gestão Pública com mais eficiência, organização e segurança.
        </p>

        {/* Botões Principais */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Falar com a GPI Sistemas</span>
          </a>

          <button
            onClick={() => {
              setActivePage('solutions');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Conheça nossas soluções</span>
            <ArrowRight className="w-5 h-5 text-white/80" />
          </button>
        </div>

      </div>
    </section>
  );
};

