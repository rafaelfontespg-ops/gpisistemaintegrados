import React from 'react';
import { Search, Rocket, GraduationCap, Headphones } from 'lucide-react';

const STEPS = [
  {
    stepNumber: '01',
    title: 'Diagnóstico & Alinhamento',
    description: 'Mapeamento da estrutura tecnológica da prefeitura ou câmara, análise de dados legados e definição do cronograma de transição sem interrupção dos serviços públicos.',
    icon: Search
  },
  {
    stepNumber: '02',
    title: 'Implantação & Migração',
    description: 'Instalação e parametrização dos módulos na nuvem, migração segura do histórico de dados e homologação técnica junto aos órgãos de fiscalização.',
    icon: Rocket
  },
  {
    stepNumber: '03',
    title: 'Capacitação & Treinamento',
    description: 'Treinamento prático para os servidores de todas as secretarias envolvidas, com acompanhamento especial nos primeiros dias de uso efetivo.',
    icon: GraduationCap
  },
  {
    stepNumber: '04',
    title: 'Suporte Contínuo & Evolução',
    description: 'Atendimento técnico especializado por telefone, chat e presencial, atualizações legais automáticas e assessoria contínua para fechamentos mensais e eSocial.',
    icon: Headphones
  }
];

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004361] tracking-tight">
            Como Funciona
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A implantação e a manutenção das soluções GPI Sistemas seguem um fluxo de trabalho estruturado em 4 etapas, garantindo segurança na transição de dados, capacitação da equipe municipal e acompanhamento contínuo:
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch pt-4">
          {STEPS.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#004361]/30 transition-all flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#004361]/10 text-[#004361] group-hover:bg-[#004361] group-hover:text-white flex items-center justify-center transition-colors">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <span className="text-2xl font-black text-[#004361]/30 group-hover:text-[#004361]/60 transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#004361] mb-3 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};


