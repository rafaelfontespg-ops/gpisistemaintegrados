import React from 'react';
import { PageId } from '../types';
import { ArrowRight, MessageSquare, Smartphone, Play } from 'lucide-react';
import { SosAppScreensGallery } from './SosAppScreensGallery';

interface SosMariaDaPenhaHighlightProps {
  setActivePage?: (page: PageId) => void;
  onOpenDemoModal?: (solutionId?: string) => void;
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

export const SosMariaDaPenhaHighlight: React.FC<SosMariaDaPenhaHighlightProps> = ({
  setActivePage,
  onOpenDemoModal
}) => {
  const handleGoToLanding = () => {
    if (setActivePage) {
      setActivePage('sos-maria-da-penha');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="sos-maria-da-penha" className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-rose-50/30 to-slate-50 border-t border-b border-rose-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* 1. Logo Oficial & Título */}
        <div className="text-center space-y-4 flex flex-col items-center justify-center">
          <img 
            src="/logo_sosmariadapenha.webp" 
            alt="Logo SOS Maria da Penha" 
            className="h-16 sm:h-20 lg:h-24 w-auto object-contain max-w-full drop-shadow-sm transition-transform hover:scale-105 duration-300"
          />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004361] tracking-tight">
            Proteção às Mulheres <span className="text-[#EA4D82]">(SOS Maria da Penha)</span>
          </h2>
        </div>

        {/* 2. Texto Institucional Já Existente */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-rose-100 shadow-sm space-y-5 text-slate-700 text-base sm:text-lg leading-relaxed relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#EA4D82]"></div>
          <p>
            Acreditamos que a construção de políticas públicas de proteção, conscientização e sensibilização, passa pelo compromisso conjunto entre o poder público, as empresas e toda a sociedade. Por essa razão, incorporamos esse compromisso à nossa política institucional, que se traduz em ações voltadas ao respeito, prevenção e valorização das mulheres. Isso é evidencedo através da certificação com o Selo Lilás pelo segundo biênio consecutivo, reforçando a nossa atuação na construção de ambientes mais seguros, conscientes e acolhedores.
          </p>
          <p>
            É nesse contexto que apresentamos o SOS Maria da Penha, um aplicativo voltado exclusivamente ao público feminino, desenvolvido para apoiar e fortalecer a proteção de mulheres em situação de violência e contribuir para a integração da rede de apoio.
          </p>
          <p>
            Gratuito, sigiloso e disponível 24 horas por dia, o aplicativo pode ser acessado por meio de dispositivos Android e iOS, reunindo recursos de informação, orientação, apoio e proteção em um único ambiente.
          </p>
        </div>

        {/* Preview Galeria de Telas do App */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#004361] flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#EA4D82]" />
              <span>Interface do Aplicativo SOS Maria da Penha</span>
            </h3>
            <button
              onClick={handleGoToLanding}
              className="text-xs sm:text-sm font-semibold text-[#EA4D82] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Ver no painel completo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <SosAppScreensGallery />
        </div>

        {/* 3. Vídeo Oficial (16:9 Responsivo) */}
        <div className="w-full max-w-4xl mx-auto pt-2 pb-2">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-rose-200/90 shadow-md bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/HhkWC0YnVHM"
              title="Apresentação SOS Maria da Penha"
              className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <p className="text-center text-xs sm:text-sm font-semibold text-slate-600 mt-2 flex items-center justify-center gap-1.5">
            <Play className="w-4 h-4 text-[#EA4D82] fill-[#EA4D82]" />
            <span>Apresentação Oficial — SOS Maria da Penha</span>
          </p>
        </div>

        {/* 4. Botões de Ação */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={handleGoToLanding}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#EA4D82] hover:bg-[#d63b6f] text-white font-bold text-base transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Conheça a Solução Completa</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onOpenDemoModal && onOpenDemoModal('sos-maria-da-penha')}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-rose-50 text-[#004361] border border-rose-200 font-semibold text-base transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
          >
            <MessageSquare className="w-4 h-4 text-[#EA4D82]" />
            <span>Solicitar Apresentação</span>
          </button>
        </div>

      </div>
    </section>
  );
};

