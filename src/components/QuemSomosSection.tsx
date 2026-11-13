import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { LOGO_GPI_PRINCIPAL } from '../constants/logos';
import { ArrowRight } from 'lucide-react';

interface QuemSomosSectionProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: () => void;
}

export const QuemSomosSection: React.FC<QuemSomosSectionProps> = ({
  setActivePage,
  onOpenDemoModal
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respeitar preferência do sistema para redução de movimento
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Executa apenas uma vez
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Imagem Institucional com entrada suave da esquerda */}
          <div 
            className="lg:col-span-5 transition-all duration-800 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)'
            }}
          >
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80"
                alt="Tecnologia e Gestão Pública - GPI Sistemas"
                className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            </div>
          </div>

          {/* Lado Direito: Logo, Título, Parágrafos e Botões com entrada sequencial */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Logo Oficial (Assinatura Institucional) */}
            <div
              className="transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
                transitionDelay: isVisible ? '100ms' : '0ms'
              }}
            >
              <img
                src={LOGO_GPI_PRINCIPAL}
                alt="GPI Sistemas"
                className="h-auto w-[160px] sm:w-[190px] lg:w-[210px] object-contain mb-1"
              />
            </div>

            {/* 2. Título */}
            <h2 
              className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: isVisible ? '180ms' : '0ms'
              }}
            >
              Conheça a GPI Sistemas
            </h2>

            {/* Parágrafos Oficiais */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {/* 3. Primeiro Parágrafo */}
              <p
                className="transition-all duration-600 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: isVisible ? '260ms' : '0ms'
                }}
              >
                A GPI Sistemas atua no mercado de sistemas integrados de Gestão Pública, ofertando uma prestação de serviço diferenciada com foco na satisfação do cliente, disponibilizando módulos integrados, fáceis e intuitivos, com visual moderno e desenvolvidos com base na legislação e normas vigentes aplicadas ao setor público, com regras de negócio estruturadas em requisitos e funcionalidades que permitem aos administradores, conduzirem sua gestão de modo eficiente, eficaz e efetiva.
              </p>

              {/* 4. Segundo Parágrafo */}
              <p
                className="transition-all duration-600 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: isVisible ? '340ms' : '0ms'
                }}
              >
                Apresentamos soluções para as mais diversas áreas da administração, incluindo planejamento, financeiro, gestão, saúde, educação entre outros.
              </p>
            </div>

            {/* 5. Botões */}
            <div 
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 transition-all duration-600 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: isVisible ? '420ms' : '0ms'
              }}
            >
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#004361] hover:bg-[#335B8F] text-white font-bold px-7 py-3.5 rounded-lg text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conheça nossa história</span>
                <ArrowRight className="w-4 h-4 text-[#68A8DE]" />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="text-[#004361] hover:text-[#335B8F] font-semibold text-sm transition-colors cursor-pointer py-2 text-center sm:text-left"
              >
                Fale com nossa equipe
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
