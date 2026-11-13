import React from 'react';
import { PageId } from '../types';
import { LOGO_GPI_BRANCO } from '../constants/logos';
import { MapPin, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: () => void;
  setSelectedSolutionId: (id: string | null) => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  setSelectedSolutionId
}) => {

  const navigateToSolution = (id: string) => {
    setSelectedSolutionId(id);
    setActivePage('solution-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const adminWhatsappUrl = "https://wa.me/5571982557718?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  const suporteWhatsappUrl = "https://wa.me/5571999043307?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20GPI%20Sistemas%20e%20preciso%20de%20atendimento%20do%20Suporte%20T%C3%A9cnico.";

  return (
    <footer className="bg-[#002B3F] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800/80 text-sm">
          
          {/* Col 1: Logo Oficial e Apresentação Institucional (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img 
                src={LOGO_GPI_BRANCO} 
                alt="GPI Sistemas" 
                className="h-10 sm:h-11 w-auto max-w-[220px] object-contain"
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
              A GPI Sistemas atua com soluções integradas e serviços especializados para atender às necessidades da Gestão Pública.
            </p>
          </div>

          {/* Col 2: Soluções Oficiais (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-[#68A8DE] pl-3">
              Soluções
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={() => navigateToSolution('planejamento')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Planejamento
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('contabilidade-financas')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Contabilidade e Finanças
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('almoxarifado')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Almoxarifado
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('frota')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Frota
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('patrimonio')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Patrimônio
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('recursos-humanos')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Recursos Humanos e Folha de Pagamento
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('gerenciamento-contratos')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Gerenciamento de Contratos
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('diario-oficial')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Diário Oficial
                </button>
              </li>
              <li>
                <button onClick={() => navigateToSolution('portal-acesso-informacao')} className="hover:text-white transition-colors text-left cursor-pointer">
                  Portal de Acesso à Informação
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base mb-4 border-l-2 border-[#68A8DE] pl-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <button onClick={() => navigateToPage('home')} className="hover:text-white transition-colors cursor-pointer">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('about')} className="hover:text-white transition-colors cursor-pointer">
                  Nossa História
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('solutions')} className="hover:text-white transition-colors cursor-pointer">
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToPage('sos-maria-da-penha')} 
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  SOS Maria da Penha
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('blog')} className="hover:text-white transition-colors cursor-pointer">
                  Blog
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('downloads')} className="hover:text-white transition-colors cursor-pointer">
                  Downloads
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Nosso Endereço & Central de Atendimento (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* Nosso Endereço */}
            <div>
              <h4 className="text-white font-bold text-base mb-3 border-l-2 border-[#68A8DE] pl-3">
                Nosso Endereço
              </h4>
              <div className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#68A8DE] shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">Rua Arthur Azevedo Machado, 1459</p>
                  <p>Edif. International Trade Center, Sala 1206</p>
                  <p>Stiep – Salvador/BA</p>
                  <p>CEP: 41.770-790</p>
                </div>
              </div>
            </div>

            {/* Central de Atendimento */}
            <div>
              <h4 className="text-white font-bold text-base mb-3 border-l-2 border-[#68A8DE] pl-3">
                Central de Atendimento
              </h4>
              <div className="space-y-3 text-xs text-slate-300">
                
                {/* Setor Administrativo */}
                <div>
                  <span className="text-slate-400 block font-semibold mb-0.5">Setor Administrativo</span>
                  <a 
                    href={adminWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline font-bold text-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>(71) 98255-7718</span>
                  </a>
                </div>

                {/* Suporte Técnico */}
                <div>
                  <span className="text-slate-400 block font-semibold mb-0.5">Suporte Técnico</span>
                  <a 
                    href={suporteWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#25D366] hover:underline font-bold text-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>(71) 99904-3307</span>
                  </a>
                </div>

                {/* Telefones Fixos */}
                <div>
                  <span className="text-slate-400 block font-semibold mb-0.5">Telefones Fixos</span>
                  <div className="space-y-0.5 text-slate-200 font-medium">
                    <p>(71) 3341-4788</p>
                    <p>(71) 3486-5822</p>
                    <p>(71) 3486-5823</p>
                    <p>(71) 3021-1866</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4 text-center sm:text-left">
          <p>
            © 2026 GPI Sistemas. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
