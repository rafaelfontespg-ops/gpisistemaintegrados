import React from 'react';
import { 
  Building2, 
  Workflow, 
  Lock, 
  RefreshCw, 
  Headphones, 
  FileCheck 
} from 'lucide-react';

interface Differentiator {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const WhyChooseUsSection: React.FC = () => {
  const differentiators: Differentiator[] = [
    {
      title: 'Especialização em Gestão Pública',
      description: 'Soluções desenvolvidas para atender às necessidades e particularidades da Administração Pública, considerando suas regras, processos e exigências.',
      icon: <Building2 className="w-6 h-6 text-[#004361]" />
    },
    {
      title: 'Integração entre Módulos',
      description: 'Os módulos da GPI trabalham de forma integrada, permitindo o compartilhamento de dados e informações, reduzindo retrabalho e proporcionando maior eficiência às rotinas da gestão.',
      icon: <Workflow className="w-6 h-6 text-[#004361]" />
    },
    {
      title: 'Segurança da Informação',
      description: 'Controle de acesso por usuários, senhas, níveis de competência e atribuições, com registro das movimentações realizadas no sistema.',
      icon: <Lock className="w-6 h-6 text-[#004361]" />
    },
    {
      title: 'Atualizações Constantes',
      description: 'As soluções acompanham alterações nas normas e na legislação aplicáveis ao setor público, contribuindo para que os clientes mantenham suas rotinas atualizadas.',
      icon: <RefreshCw className="w-6 h-6 text-[#004361]" />
    },
    {
      title: 'Suporte Técnico Especializado',
      description: 'Equipe formada por profissionais qualificados e experientes, capacitados para atuar na implantação, treinamento, suporte técnico e orientação sobre as regras de negócio dos módulos.',
      icon: <Headphones className="w-6 h-6 text-[#004361]" />
    },
    {
      title: 'Conformidade com a Legislação',
      description: 'Soluções desenvolvidas considerando a legislação e as normas vigentes aplicáveis à Gestão Pública, incluindo requisitos específicos dos órgãos de controle quando aplicáveis a cada módulo.',
      icon: <FileCheck className="w-6 h-6 text-[#004361]" />
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Por que escolher a GPI Sistemas?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Diferenciais tecnológicos e operacionais desenvolvidos exclusivamente para a Gestão Pública.
          </p>
        </div>

        {/* 6 Cards Grid (2 rows of 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white border border-slate-200/80 hover:border-[#4A7EB3]/50 transition-all duration-200 hover:-translate-y-0.5 shadow-2xs hover:shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#004361]/5 border border-[#004361]/10 flex items-center justify-center mb-5 group-hover:bg-[#004361] group-hover:text-white transition-colors duration-200">
                  {React.cloneElement(diff.icon as React.ReactElement, {
                    className: "w-6 h-6 text-[#004361] group-hover:text-white transition-colors duration-200"
                  })}
                </div>

                <h3 className="text-sm font-bold text-[#004361] tracking-tight mb-2.5">
                  {diff.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
