import React from 'react';
import { PageId } from '../types';

interface BlogViewProps {
  setActivePage?: (page: PageId) => void;
  onOpenArticleModal?: (postId: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = () => {
  return (
    <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#004361] tracking-tight">
          Blog
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed pt-2">
          Em breve, novos conteúdos sobre Gestão Pública, tecnologia e inovação.
        </p>
      </div>
    </div>
  );
};
