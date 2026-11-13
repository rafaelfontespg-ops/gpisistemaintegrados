import React from 'react';
import { Building2, Users, MapPin } from 'lucide-react';

export const ReachPresenceSection: React.FC = () => {

  return (
    <section id="abrangencia-presenca" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO: Título e Parágrafos */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#004361]/10 flex items-center justify-center text-[#004361]">
                <MapPin className="w-5 h-5" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight">
                Abrangência e Presença
              </h2>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Ao longo da nossa trajetória, consolidamos uma atuação abrangente no estado da Bahia, atendendo diferentes perfis de instituições públicas, incluindo Prefeituras, Câmaras Municipais, Autarquias, Consórcios e Fundações.
              </p>
              
              <p>
                A nossa carteira reúne clientes de diferentes portes e realidades, localizados em diversas regiões do estado, estando entre eles: Prefeitura de Camaçari, Prefeitura de Simões Filho, Prefeitura de Jequié, Prefeitura de Lajedinho, Prefeitura de Brotas de Macaúbas, Prefeitura de Catu, Prefeitura de Porto Seguro, Prefeitura de Ibirapuã, Prefeitura de São Sebastião do Passé, Prefeitura de Cruz das Almas, Consórcio Intermunicipal do Mosaico das Apas do Baixo Sul - CIAPRA, Consórcio de Saúde Metro Recôncavo Norte - MRN, Câmara de Lauro de Freitas, Câmara de São Francisco do Conde, Serviço Autônomo de Água e Esgoto (SAAE) de Itororó.
              </p>

              <p>
                A nossa presença em diferentes regiões do estado representa não apenas a abrangência da nossa atuação, mas também a experiência acumulada no atendimento à administração pública baiana. Essa vivência fortalece a nossa proximidade com os nossos clientes e amplia o nosso conhecimento sobre os desafios e as particularidades de diferentes realidades de gestão, permitindo-nos compreender as necessidades distintas e oferecer soluções tecnológicas e serviços profissionais adequados às demandas de cada município.
              </p>
            </div>

            </div>

          {/* LADO DIREITO: Indicadores */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-6">
              
              <div className="border-b border-slate-200/80 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#335B8F]">
                  Nossa Presença na Bahia
                </span>
                <h3 className="text-lg font-bold text-[#004361] mt-1">
                  Indicadores de Atuação
                </h3>
              </div>

              {/* Card Indicador 1 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-2xs flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#004361]/10 border border-[#004361]/15 flex items-center justify-center text-[#004361] shrink-0">
                  <Building2 className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#004361] tracking-tight">
                    + de 190
                  </div>
                  <p className="text-slate-600 text-sm font-semibold mt-0.5">
                    Clientes Atendidos
                  </p>
                </div>
              </div>

              {/* Card Indicador 2 */}
              <div className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-2xs flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-[#004361]/10 border border-[#004361]/15 flex items-center justify-center text-[#004361] shrink-0">
                  <Users className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#004361] tracking-tight">
                    + de 11.000
                  </div>
                  <p className="text-slate-600 text-sm font-semibold mt-0.5">
                    Usuários Ativos
                  </p>
                </div>
              </div>

              {/* Nota sutil */}
              <p className="text-xs text-slate-500 leading-relaxed pt-1 border-t border-slate-200/60">
                Soluções presentes em Prefeituras, Câmaras, Autarquias, Consórcios e Fundações em diversas regiões da Bahia.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
