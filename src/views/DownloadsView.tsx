import React from 'react';
import { PageId } from '../types';
import { Download } from 'lucide-react';

const GOOGLE_DRIVE_DOWNLOADS_URL =
  'https://drive.google.com/drive/folders/1KfH48M-x1Ymo1ZcAjgC0-0-NBnNY3SJw?usp=sharing';

interface DownloadsViewProps {
  setActivePage?: (page: PageId) => void;
}

export const DownloadsView: React.FC<DownloadsViewProps> = () => {
  return (
    <div className="bg-white min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 sm:py-36">
      <div className="max-w-2xl w-full mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#004361] tracking-tight">
            Downloads
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Acesse os arquivos e materiais disponibilizados pela GPI Sistemas.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <a
            href={GOOGLE_DRIVE_DOWNLOADS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#004361] hover:bg-[#335B8F] text-white font-bold text-base sm:text-lg px-10 py-4 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md cursor-pointer"
          >
            <Download className="w-5 h-5 shrink-0" />
            <span>Downloads</span>
          </a>
        </div>
      </div>
    </div>
  );
};
