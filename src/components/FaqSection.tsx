import React, { useState } from 'react';
import { GPI_FAQS } from '../data/gpiData';
import { ChevronDown } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#004361] tracking-tight">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {GPI_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div 
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200/80 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-[#004361] leading-snug">
                    {faq.question}
                  </h3>

                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#004361]">
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
