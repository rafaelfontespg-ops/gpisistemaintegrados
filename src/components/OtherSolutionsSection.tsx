import React from 'react';
import { HeartPulse, GraduationCap, HeartHandshake, Landmark } from 'lucide-react';

const OTHER_SOLUTIONS = [
  {
    title: 'Saúde Pública',
    description: 'Prontuário Eletrônico do Cidadão, gestão de postos de saúde, controle de medicamentos na farmácia básica e integração ao e-SUS PEC.',
    icon: HeartPulse
  },
  {
    title: 'Educação Municipal',
    description: 'Diário de classe eletrônico, matrícula online, gestão da merenda escolar, transporte público escolar e histórico acadêmico dos alunos.',
    icon: GraduationCap
  },
  {
    title: 'Assistência Social (SUAS)',
    description: 'Gestão do CRAS e CREAS, prontuário unificado das famílias em situação de vulnerabilidade, concessão de benefícios eventuais e relatórios ao CadÚnico.',
    icon: HeartHandshake
  },
  {
    title: 'Tributos e Arrecadação',
    description: 'Emissão de IPTU, ISSQN e taxas com código Pix e boleto registrado, Portal do Contribuinte, Nota Fiscal de Serviços Eletrônica (NFS-e) e Dívida Ativa.',
    icon: Landmark
  }
];

export const OtherSolutionsSection: React.FC = () => {
  return (
    <section id="outras-solucoes" className="py-16 sm:py-20 bg-slate-50/50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title and Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Outras Soluções
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Além das soluções em gestão administrativa, planejamento, contabilidade, contratos e transparência, a GPI Sistemas oferece módulos especializados para atender demandas das demais áreas municipais:
          </p>
        </div>

        {/* Grid 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {OTHER_SOLUTIONS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-xs hover:border-[#004361]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#004361]/10 text-[#004361] group-hover:bg-[#004361] group-hover:text-white flex items-center justify-center mb-5 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#004361] mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
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
