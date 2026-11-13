import React from 'react';
import { PageId } from '../types';
import { BLOG_POSTS } from '../data/gpiData';
import { Clock, ArrowRight, BookOpen, Calendar, User } from 'lucide-react';

interface BlogPreviewSectionProps {
  setActivePage: (page: PageId) => void;
  onOpenArticleModal: (postId: string) => void;
}

export const BlogPreviewSection: React.FC<BlogPreviewSectionProps> = ({
  setActivePage,
  onOpenArticleModal
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
              Artigos Técnicos e Atualizações em Gestão Pública
            </h2>
            <p className="text-slate-600 text-base max-w-xl mt-2">
              Conteúdo especializado produzido por advogados públicos, contadores e especialistas em tecnologia governamental.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#004361] hover:text-[#335B8F] transition-colors cursor-pointer"
          >
            <span>Ver todos os artigos do Blog</span>
            <ArrowRight className="w-4 h-4 text-[#68A8DE]" />
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.slice(0, 3).map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  {/* Meta */}
                  <div className="flex items-center text-[11px] text-slate-500 gap-3 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#68A8DE]" />
                      {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#68A8DE]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#004361] group-hover:text-[#335B8F] transition-colors line-clamp-2 leading-snug mb-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                  <User className="w-3 h-3 text-[#004361]" />
                  {post.author}
                </span>

                <button
                  onClick={() => onOpenArticleModal(post.id)}
                  className="text-xs font-bold text-[#004361] group-hover:text-[#335B8F] flex items-center gap-1 cursor-pointer"
                >
                  Ler artigo
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
