import React from 'react';
import { BlogPost } from '../types';
import { X, Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onOpenDemoModal: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  post,
  onClose,
  onOpenDemoModal
}) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar aos artigos</span>
          </button>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1">
          
          {/* Article Image Banner */}
          <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 mb-6">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#004361]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#004361]" />
              {post.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <User className="w-3.5 h-3.5 text-[#004361]" />
              {post.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#004361] tracking-tight leading-snug">
            {post.title}
          </h1>

          {/* Main Body */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4 pt-2 border-t border-slate-100">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('###')) {
                return (
                  <h3 key={idx} className="text-lg font-bold text-[#004361] mt-6 mb-2">
                    {paragraph.replace('###', '').trim()}
                  </h3>
                );
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Author / CTA Banner Inside Article */}
          <div className="p-6 rounded-2xl bg-[#EBF4FC] border border-[#68A8DE]/30 mt-8 space-y-3">
            <h4 className="text-sm font-bold text-[#004361]">
              Gostaria de adequar seu município a estas normas e inovações?
            </h4>
            <p className="text-xs text-slate-600">
              A GPI Sistemas atende prefeituras com consultoria técnica, treinamentos e software em conformidade com a Lei 14.133/21.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenDemoModal();
              }}
              className="bg-[#004361] hover:bg-[#335B8F] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors cursor-pointer"
            >
              Falar com Nossos Especialistas
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
