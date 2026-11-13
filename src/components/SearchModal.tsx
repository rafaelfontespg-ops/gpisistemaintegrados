import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { GPI_SOLUTIONS, BLOG_POSTS, GPI_MATERIALS, GPI_FAQS } from '../data/gpiData';
import { Search, X, ArrowRight, Layers, FileText, Download, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  setActivePage: (page: PageId) => void;
  setSelectedSolutionId: (id: string | null) => void;
  onOpenArticleModal: (id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  setActivePage,
  setSelectedSolutionId,
  onOpenArticleModal
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredSolutions = query.trim() ? GPI_SOLUTIONS.filter(s => 
    s.name.toLowerCase().includes(query.toLowerCase()) || 
    s.shortDescription.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const filteredPosts = query.trim() ? BLOG_POSTS.filter(p => 
    p.title.toLowerCase().includes(query.toLowerCase()) || 
    p.excerpt.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const filteredMaterials = query.trim() ? GPI_MATERIALS.filter(m => 
    m.title.toLowerCase().includes(query.toLowerCase()) || 
    m.description.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const filteredFaqs = query.trim() ? GPI_FAQS.filter(f => 
    f.question.toLowerCase().includes(query.toLowerCase()) || 
    f.answer.toLowerCase().includes(query.toLowerCase())
  ) : [];

  const hasResults = filteredSolutions.length > 0 || filteredPosts.length > 0 || filteredMaterials.length > 0 || filteredFaqs.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative flex flex-col max-h-[80vh]">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-[#004361] shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por licitações, saúde, IPTU, transparência, materiais..."
            className="w-full bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600 text-xs font-semibold px-2 py-0.5 rounded bg-slate-200">
            ESC
          </button>
        </div>

        {/* Results Box */}
        <div className="p-4 overflow-y-auto space-y-6 flex-1 text-xs">
          {!query.trim() ? (
            <div className="text-center py-8 text-slate-400">
              <p className="font-medium text-slate-600">Digite um termo para pesquisar em todo o site.</p>
              <p className="text-[11px] mt-1">Exemplos: "Lei 14.133", "SIAFIC", "Prontuário", "SOS Maria da Penha", "NFS-e".</p>
            </div>
          ) : !hasResults ? (
            <div className="text-center py-8 text-slate-500">
              Nenhum resultado encontrado para "{query}".
            </div>
          ) : (
            <>
              {/* Solutions */}
              {filteredSolutions.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#335B8F] mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Soluções e Módulos ({filteredSolutions.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredSolutions.map(s => (
                      <button
                        key={s.id}
                        onClick={() => {
                          setSelectedSolutionId(s.id);
                          setActivePage('solution-detail');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-[#EBF4FC] transition-colors flex items-center justify-between cursor-pointer border border-slate-100"
                      >
                        <div>
                          <strong className="text-slate-900 block font-bold">{s.name}</strong>
                          <span className="text-slate-500 line-clamp-1">{s.shortDescription}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#004361] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Articles */}
              {filteredPosts.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#335B8F] mb-2 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5" />
                    Artigos do Blog ({filteredPosts.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredPosts.map(p => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onOpenArticleModal(p.id);
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-[#EBF4FC] transition-colors flex items-center justify-between cursor-pointer border border-slate-100"
                      >
                        <div>
                          <strong className="text-slate-900 block font-bold">{p.title}</strong>
                          <span className="text-slate-500 line-clamp-1">{p.excerpt}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#004361] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Materials */}
              {filteredMaterials.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#335B8F] mb-2 flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    Materiais para Download ({filteredMaterials.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredMaterials.map(m => (
                      <button
                        key={m.id}
                        onClick={() => {
                          setActivePage('materials');
                          onClose();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-slate-50 hover:bg-[#EBF4FC] transition-colors flex items-center justify-between cursor-pointer border border-slate-100"
                      >
                        <div>
                          <strong className="text-slate-900 block font-bold">{m.title}</strong>
                          <span className="text-slate-500">{m.type} • {m.category}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#004361] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQs */}
              {filteredFaqs.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[#335B8F] mb-2 flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Dúvidas Frequentes ({filteredFaqs.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredFaqs.map(f => (
                      <div
                        key={f.id}
                        className="p-3 rounded-xl bg-slate-50 border border-slate-100"
                      >
                        <strong className="text-slate-900 block font-bold mb-0.5">{f.question}</strong>
                        <p className="text-slate-600 line-clamp-2">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};
