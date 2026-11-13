import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, User } from 'lucide-react';

// Image Constants for easy photo assignment in future
export const FOTO_FERNANDO_CARLOS_ALMEIDA = '';
export const FOTO_LUCIDARLE_PRADO = '';
export const FOTO_JICELMA_BATISTA = '';
export const FOTO_FABIANA_PESSOA = '';
export const FOTO_ANA_PAULA_SANTOS = '';
export const FOTO_ELLISSON_PEREIRA = '';
export const FOTO_DINALVA_MOTA = '';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  photoUrl: string;
  photoPlaceholderKey: string;
  initials: string;
}

const REAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'fernando-almeida',
    name: 'Fernando Carlos Almeida',
    role: 'Sócio na Rencont Consultoria Contábil',
    quote: 'A RENCONT tem prestado serviços de consultoria contábil a entidades públicas usuárias do sistema de contabilidade “Contabilis” e na nossa avaliação o aludido sistema possui os requisitos mínimos necessários ao atendimento das Normas Brasileiras de Contabilidade Aplicada ao Setor Público e exigências do Tribunal de Contas, contando com agilidade e presteza do suporte prestado pela GPI Sistemas.',
    photoUrl: FOTO_FERNANDO_CARLOS_ALMEIDA,
    photoPlaceholderKey: 'FOTO_FERNANDO_CARLOS_ALMEIDA',
    initials: 'FA'
  },
  {
    id: 'lucidarle-prado',
    name: 'Lucidarle Prado',
    role: 'Diretora da Almeida Prado Assessoria e Consultoria em Gestão Pública',
    quote: 'Somos parceiros das soluções tecnológicas representadas pela GPI desde 2013 e estamos muito satisfeitos com a experiência. Uma equipe de desenvolvedores e suporte que nos dá um feedback muito positivo com as atualizações da legislação da área pública, conseguimos acompanhar e tomar decisões de forma rápida e segura, otimizando nosso trabalho junto ao cliente.',
    photoUrl: FOTO_LUCIDARLE_PRADO,
    photoPlaceholderKey: 'FOTO_LUCIDARLE_PRADO',
    initials: 'LP'
  },
  {
    id: 'jicelma-batista',
    name: 'Jicelma Batista Matos de Jesus',
    role: 'Chefe do Setor Contábil – Prefeitura Municipal de Olindina-BA',
    quote: 'Através da experiência adquirida ao longo do tempo, acho o sistema Contábilis um Sistema de qualidade, de linguagem simples e apresentação de relatórios de fácil entendimento. Facilitando bastante o nosso trabalho e atende as nossas necessidades. O principal de um Sistema é a confiabilidade e a Equipe da GPI Sistemas é muito qualificada, sempre atentos às nossas necessidades. Super recomendo!',
    photoUrl: FOTO_JICELMA_BATISTA,
    photoPlaceholderKey: 'FOTO_JICELMA_BATISTA',
    initials: 'JJ'
  },
  {
    id: 'fabiana-pessoa',
    name: 'Fabiana Pessoa de Oliveira',
    role: 'Contadora Responsável pelo Município de Serrinha',
    quote: 'Conheci o sistema Contabilis em 2014, onde conseguimos implementar rotinas seguras e fidedignas. Trata-se de um sistema leve, seguro e atualizado, para além de tudo isso o atendimento é um dos seus grandes diferenciais.',
    photoUrl: FOTO_FABIANA_PESSOA,
    photoPlaceholderKey: 'FOTO_FABIANA_PESSOA',
    initials: 'FO'
  },
  {
    id: 'ana-paula-santos',
    name: 'Ana Paula Santos e Santos',
    role: 'Auxiliar Administrativa do Almoxarifado Central da Prefeitura de Alagoinhas',
    quote: 'Nós do Almoxarifado da Prefeitura Municipal de Alagoinhas, tivemos a sorte e satisfação de conhecer a GPI Sistemas e o Sistema Contábilis há 1 ano atrás, para cuidar da contabilidade e do almoxarifado. A equipe é muitíssimo prestativa, profissionais preciosos, muito atenciosos e capacitados. Certeza que estamos muito bem assessorados. Recomendo sem qualquer restrição.',
    photoUrl: FOTO_ANA_PAULA_SANTOS,
    photoPlaceholderKey: 'FOTO_ANA_PAULA_SANTOS',
    initials: 'AS'
  },
  {
    id: 'ellisson-pereira',
    name: 'Ellisson Pereira da Silva',
    role: 'Controlador Executivo Municipal da Prefeitura Municipal de Lajedinho',
    quote: 'A Contratação da GPI, impulsionou e modernizou os processos administrativos na gestão pública do município de Lajedinho, obtivemos um melhor desenvolvimento das atividades administrativas de modo mais eficiente e eficaz a automação dos atos processuais o que permitiu a redução de gastos com insumos de armazenamento físico, os resultados alcançados em pouco tempo de mais transparência e agilidade dos processos administrativos.',
    photoUrl: FOTO_ELLISSON_PEREIRA,
    photoPlaceholderKey: 'FOTO_ELLISSON_PEREIRA',
    initials: 'ES'
  },
  {
    id: 'dinalva-mota',
    name: 'Dinalva Mota',
    role: 'Contadora',
    quote: 'Confiança é tudo! E essa confiança temos com o trabalho maravilhoso da equipe da GPI sistemas, sempre atentos a nossas demandas. Uma parceria que deu certo Contabilis e GPI. Aprovo e recomendo.',
    photoUrl: FOTO_DINALVA_MOTA,
    photoPlaceholderKey: 'FOTO_DINALVA_MOTA',
    initials: 'DM'
  }
];

export const CasesSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive Items Per Page
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(REAL_TESTIMONIALS.length / itemsPerPage);
  const maxIndex = Math.max(0, REAL_TESTIMONIALS.length - itemsPerPage);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const activePage = Math.floor(currentIndex / itemsPerPage);

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
            Depoimentos
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            A experiência de quem conhece e utiliza as soluções da GPI Sistemas.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative px-2 sm:px-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Outer Grid / Sliding Window */}
          <div className="overflow-hidden py-2">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {REAL_TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  style={{ width: `calc(${100 / itemsPerPage}% - ${(gapSize(itemsPerPage))}px)` }}
                  className="shrink-0 flex"
                >
                  <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between w-full relative group">
                    
                    {/* Background Quote Icon */}
                    <div className="absolute top-5 right-5 text-[#68A8DE]/15 pointer-events-none group-hover:text-[#68A8DE]/25 transition-colors">
                      <Quote className="w-10 h-10 rotate-180" />
                    </div>

                    {/* Testimonial Quote Text (Full text without clipping) */}
                    <div className="mb-6 relative z-10">
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed font-normal">
                        "{item.quote}"
                      </p>
                    </div>

                    {/* Author Profile */}
                    <div className="pt-4 border-t border-slate-100 flex items-center gap-3.5 relative z-10 mt-auto">
                      {/* Photo or Placeholder */}
                      <div className="w-12 h-12 rounded-full bg-[#004361]/10 border border-[#004361]/20 flex items-center justify-center shrink-0 overflow-hidden text-[#004361] font-bold text-xs shadow-2xs">
                        {item.photoUrl ? (
                          <img
                            src={item.photoUrl}
                            alt={item.photoPlaceholderKey}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div 
                            className="w-full h-full flex items-center justify-center bg-[#004361] text-white font-bold text-xs"
                            title={item.photoPlaceholderKey}
                          >
                            {item.initials}
                          </div>
                        )}
                      </div>

                      {/* Name & Role */}
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-bold text-[#004361] tracking-tight truncate">
                          {item.name}
                        </h3>
                        <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-snug mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#004361] hover:bg-[#004361] hover:text-white transition-colors duration-200 shadow-sm flex items-center justify-center cursor-pointer z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#004361] hover:bg-[#004361] hover:text-white transition-colors duration-200 shadow-sm flex items-center justify-center cursor-pointer z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }).map((_, pageIdx) => {
            const isSelected = activePage === pageIdx;
            return (
              <button
                key={pageIdx}
                onClick={() => setCurrentIndex(Math.min(pageIdx * itemsPerPage, maxIndex))}
                aria-label={`Ir para a página ${pageIdx + 1} de depoimentos`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'w-7 bg-[#004361]' 
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};

// Helper for flex gap calculations in percentage slider
function gapSize(itemsPerPage: number): number {
  if (itemsPerPage === 1) return 0;
  if (itemsPerPage === 2) return 12; // 24px gap / 2
  return 16; // 24px gap * (3-1) / 3
}
