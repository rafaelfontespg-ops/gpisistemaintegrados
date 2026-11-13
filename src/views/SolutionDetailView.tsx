import React, { useState } from 'react';
import { PageId, Solution } from '../types';
import { GPI_SOLUTIONS } from '../data/gpiData';
import { 
  ArrowLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown,
  ChevronUp,
  Video,
  Layers,
  HelpCircle,
  ShieldCheck,
  Zap,
  MessageSquare
} from 'lucide-react';

interface SolutionDetailViewProps {
  solutionId: string | null;
  setActivePage: (page: PageId) => void;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenDemoModal: (solutionId?: string) => void;
  onOpenVideoModal: (url: string, title: string) => void;
}

export const SolutionDetailView: React.FC<SolutionDetailViewProps> = ({
  solutionId,
  setActivePage,
  setSelectedSolutionId,
  onOpenDemoModal,
  onOpenVideoModal
}) => {
  // Match solution by slug or id
  const solution: Solution = GPI_SOLUTIONS.find(
    s => s.slug === solutionId || s.id === solutionId
  ) || GPI_SOLUTIONS[0];

  // Accordion state for FAQs
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const isStructuredSolution = Boolean(
    solution.presentationParagraphs || solution.problemSolvedParagraphs || solution.faqs
  );

  // Helper to format Youtube embed URL or handle placeholder
  const getEmbedUrl = (url?: string, placeholder?: string) => {
    if (!url || url.includes('YOUTUBE_URL_')) {
      return null;
    }
    return url;
  };

  const fallbackParagraphs = solution.fullTextParagraphs && solution.fullTextParagraphs.length > 0
    ? solution.fullTextParagraphs
    : [solution.fullDescription || ''];

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* Structured Official Solution Page Flow */}
      {isStructuredSolution ? (
        <div className="py-10 sm:py-14 space-y-12 sm:space-y-16">
          
          {/* 1. Nome da solução (Header Section) */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#004361] tracking-tight leading-tight">
              {solution.name}
            </h1>
          </section>

          {/* 2. Apresentação da solução */}
          {solution.presentationParagraphs && solution.presentationParagraphs.length > 0 && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight border-b border-slate-100 pb-2">
                  Apresentação da solução
                </h2>
                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed pt-1">
                  {solution.presentationParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 3. Problema que resolve */}
          {solution.problemSolvedParagraphs && solution.problemSolvedParagraphs.length > 0 && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight">
                  Problema que resolve
                </h2>
                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {solution.problemSolvedParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 4. Benefícios */}
          {solution.benefits && solution.benefits.length > 0 && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight border-b border-slate-100 pb-2">
                Benefícios
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.benefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5 hover:border-[#004361]/30 transition-all"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#004361]/10 text-[#004361] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 stroke-[2]" />
                    </div>
                    <span className="text-slate-800 text-sm sm:text-base font-semibold leading-snug">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Funcionalidades */}
          {solution.features && solution.features.length > 0 && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight border-b border-slate-100 pb-2">
                  Funcionalidades
                </h2>
                {solution.featuresIntro && (
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2">
                    {solution.featuresIntro}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {solution.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-[#004361]/30 hover:shadow-2xs transition-all flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#335B8F] shrink-0 mt-2"></div>
                    <span className="text-slate-800 text-sm sm:text-base font-medium leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6. Vídeo demonstrativo */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 rounded-2xl bg-slate-50/90 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#004361]/10 text-[#004361] flex items-center justify-center shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#004361]">
                    Vídeo demonstrativo
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    {solution.videoStatusText || '(Em preparação)'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Diferenciais */}
          {((solution.differentiatorsParagraphs && solution.differentiatorsParagraphs.length > 0) || 
            (solution.differentiators && solution.differentiators.length > 0)) && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight border-b border-slate-100 pb-2">
                Diferenciais
              </h2>

              {/* Se for parágrafos */}
              {solution.differentiatorsParagraphs && solution.differentiatorsParagraphs.length > 0 && (
                <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                  {solution.differentiatorsParagraphs.map((para, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
                      <p>{para}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Se for lista */}
              {solution.differentiators && solution.differentiators.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {solution.differentiators.map((diff, idx) => (
                    <div 
                      key={idx}
                      className="p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-start gap-3.5 hover:border-[#004361]/30 transition-all"
                    >
                      <div className="w-6 h-6 rounded-lg bg-[#004361]/10 text-[#004361] flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-4 h-4 stroke-[2]" />
                      </div>
                      <span className="text-slate-800 text-sm sm:text-base font-semibold leading-snug">
                        {diff}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 8. Integrações */}
          {((solution.integrationsIntroParagraphs && solution.integrationsIntroParagraphs.length > 0) || 
            (solution.integrations && solution.integrations.length > 0)) && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight border-b border-slate-100 pb-2">
                Integrações
              </h2>

              {solution.integrationsIntroParagraphs && solution.integrationsIntroParagraphs.map((para, idx) => (
                <p key={idx} className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {para}
                </p>
              ))}

              {solution.integrations && solution.integrations.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {solution.integrations.map((integ, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50/70 border border-slate-200/80 flex items-start gap-3 hover:bg-white hover:shadow-2xs transition-all"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#004361] shrink-0 mt-2"></div>
                      <span className="text-slate-800 text-sm sm:text-base font-medium leading-snug">
                        {integ}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* 9. Perguntas Frequentes */}
          {solution.faqs && solution.faqs.length > 0 && (
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-2">
                <HelpCircle className="w-6 h-6 text-[#004361]" />
                <h2 className="text-xl sm:text-2xl font-bold text-[#004361] tracking-tight">
                  Perguntas Frequentes
                </h2>
              </div>

              <div className="space-y-3.5">
                {solution.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndices.includes(idx);
                  return (
                    <div 
                      key={idx}
                      className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-2xs transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-slate-800 text-base sm:text-lg pr-2">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#004361] shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 text-slate-700 text-base leading-relaxed border-t border-slate-100 bg-slate-50/30">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* 10. CTA Final */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#004361] to-[#335B8F] rounded-3xl p-8 sm:p-10 text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Modernize a gestão do seu município
                </h3>
                <p className="text-slate-200 text-sm sm:text-base">
                  Conheça em detalhes como o {solution.name} pode apoiar a sua administração pública.
                </p>
              </div>

              <button
                onClick={() => onOpenDemoModal(solution.slug || solution.id)}
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-[#004361] font-bold text-base transition-all shadow-sm flex items-center justify-center gap-2.5 shrink-0 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-[#335B8F]" />
                <span>Fale com um especialista</span>
              </button>
            </div>
          </section>

        </div>
      ) : (
        /* Standard Solution Detail View for non-customized solutions */
        <div>
          <section className="pt-10 pb-8 bg-white border-b border-slate-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004361] tracking-tight leading-tight">
                {solution.name}
              </h1>

              {solution.keyBenefit && (
                <div className="mt-6 p-4 rounded-lg bg-slate-50 border-l-4 border-[#004361] text-xs sm:text-sm text-slate-700 font-medium">
                  <strong className="text-[#004361] font-bold block mb-0.5">Destaque do Módulo:</strong>
                  {solution.keyBenefit}
                </div>
              )}
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                {fallbackParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-[#004361]">Interessado nesta solução para seu município?</h3>
                  <p className="text-sm text-slate-500">Agende uma demonstração personalizada com nossos consultores técnicos.</p>
                </div>

                <button
                  onClick={() => onOpenDemoModal(solution.slug || solution.id)}
                  className="bg-[#004361] hover:bg-[#335B8F] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Fale com um especialista</span>
                  <ArrowRight className="w-4 h-4 text-[#68A8DE]" />
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Other Solutions Navigation Footer */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#004361]">Conheça outras soluções GPI</h3>
            <button
              onClick={() => {
                setActivePage('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-semibold text-[#335B8F] hover:text-[#004361] flex items-center gap-1 cursor-pointer"
            >
              <span>Ver todas as soluções</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GPI_SOLUTIONS.filter(s => (s.slug || s.id) !== (solution.slug || solution.id)).slice(0, 3).map((other) => (
              <button
                key={other.id}
                onClick={() => {
                  setSelectedSolutionId(other.slug || other.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="p-4 rounded-lg bg-white border border-slate-200 hover:border-[#4A7EB3] text-left transition-all hover:shadow-sm cursor-pointer group"
              >
                <h4 className="text-xs font-bold text-[#004361] group-hover:text-[#335B8F] transition-colors mb-1">
                  {other.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {other.summary}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
