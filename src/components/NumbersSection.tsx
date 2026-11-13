import React from 'react';
import { ShieldCheck, Landmark, MapPin, Layers } from 'lucide-react';

export const NumbersSection: React.FC = () => {
  const blocks = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#68A8DE]" />,
      title: 'Especialização em Gestão Pública',
      description: 'Soluções e serviços desenvolvidos para atender às necessidades, processos e particularidades da Administração Pública.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-[#68A8DE]" />,
      title: 'Atuação em Diferentes Entidades Públicas',
      description: 'A GPI Sistemas presta serviços a Prefeituras, Câmaras, Autarquias, Consórcios e Fundação.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#68A8DE]" />,
      title: 'Municípios de Diferentes Portes',
      description: 'A carteira da GPI contempla grandes, médios e pequenos municípios localizados em diferentes regiões do estado da Bahia.'
    },
    {
      icon: <Layers className="w-6 h-6 text-[#68A8DE]" />,
      title: 'Soluções Integradas',
      description: 'Módulos desenvolvidos para diferentes áreas da gestão, permitindo integração de dados e informações e contribuindo para maior eficiência nos processos administrativos.'
    }
  ];

  return (
    <section className="py-20 bg-[#004361] text-white relative overflow-hidden">
      {/* Background Subtle Accent Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#68A8DE_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experiência e Atuação na Gestão Pública
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-3">
            Tecnologia, conhecimento e serviços especializados para apoiar diferentes áreas da Administração Pública.
          </p>
        </div>

        {/* 4 Blocks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 shrink-0">
                {block.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {block.title}
              </h3>

              <p className="text-sm text-slate-200 leading-relaxed mt-1">
                {block.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

