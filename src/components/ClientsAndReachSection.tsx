import React from 'react';
import { Building2, Users, MapPin } from 'lucide-react';

const OFFICIAL_CLIENTS = [
  'Prefeitura de Camaçari',
  'Prefeitura de Simões Filho',
  'Prefeitura de Jequié',
  'Prefeitura de Lajedinho',
  'Prefeitura de Brotas de Macaúbas',
  'Prefeitura de Catu',
  'Prefeitura de Porto Seguro',
  'Prefeitura de Ibirapuã',
  'Prefeitura de São Sebastião do Passé',
  'Prefeitura de Cruz das Almas',
  'Consórcio Intermunicipal do Mosaico das Apas do Baixo Sul - CIAPRA',
  'Consórcio de Saúde Metro Recôncavo Norte - MRN',
  'Câmara de Lauro de Freitas',
  'Câmara de São Francisco do Conde',
  'Serviço Autônomo de Água e Esgoto (SAAE) de Itororó'
];

export const ClientsAndReachSection: React.FC = () => {
  return (
    <section id="clientes-abrangencia" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* BLOCO 1 — INTRODUÇÃO */}
        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004361] tracking-tight">
            Nossos Clientes e Abrangência
          </h2>

          <div className="space-y-5 text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed pt-1">
            <p>
              Ao longo da nossa trajetória, consolidamos uma atuação abrangente no estado da Bahia, atendendo diferentes perfis de instituições públicas, incluindo Prefeituras, Câmaras Municipais, Autarquias, Consórcios e Fundações.
            </p>
            <p>
              A nossa presença em diferentes regiões do estado representa não apenas a abrangência da nossa atuação, mas também a experiência acumulada no atendimento à administração pública baiana. Essa vivência fortalece a nossa proximidade com os nossos clientes e amplia o nosso conhecimento sobre os desafios e as particularidades de diferentes realidades de gestão, permitindo-nos compreender as necessidades distintas e oferecer soluções tecnológicas e serviços profissionais adequados às demandas de cada município.
            </p>
          </div>
        </div>

        {/* BLOCO 2 — INDICADORES DE ATUAÇÃO */}
        <div>
          <div className="bg-gradient-to-br from-[#004361]/5 via-slate-50 to-[#335B8F]/5 rounded-3xl p-8 sm:p-12 border border-[#004361]/15 shadow-2xs">
            <div className="text-center mb-8">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#335B8F]">
                Indicadores de Atuação
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              
              {/* Indicador 1 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs flex items-center gap-6 hover:border-[#004361]/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#004361] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building2 className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004361] tracking-tight leading-none">
                    + de 190
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-600 mt-2">
                    Clientes Atendidos
                  </div>
                </div>
              </div>

              {/* Indicador 2 */}
              <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-2xs flex items-center gap-6 hover:border-[#004361]/30 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-[#004361] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-8 h-8 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#004361] tracking-tight leading-none">
                    + de 11.000
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-600 mt-2">
                    Usuários Ativos
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BLOCO 3 — ALGUNS DOS NOSSOS CLIENTES */}
        <div className="space-y-8 pt-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361] shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
              Alguns dos nossos clientes
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {OFFICIAL_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-xl p-4 sm:p-5 border border-slate-200/80 hover:bg-white hover:border-[#004361]/30 hover:shadow-xs transition-all flex items-center gap-3.5 group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#004361]/10 group-hover:bg-[#004361] group-hover:text-white text-[#004361] flex items-center justify-center shrink-0 transition-colors">
                  <Building2 className="w-4 h-4 stroke-[1.75]" />
                </div>
                <span className="text-slate-800 text-sm font-semibold tracking-tight leading-snug group-hover:text-[#004361] transition-colors">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
