import React from 'react';
import { PageId } from '../types';
import { Download } from 'lucide-react';

// Link Constants for Easy Updating
export const DOWNLOAD_ANYDESK = '#';
export const DOWNLOAD_UP3 = '#';
export const DOWNLOAD_GED = '#';
export const DOWNLOAD_LICITARI = '#';
export const DOWNLOAD_CONTABILIS = '#';
export const DOWNLOAD_TEAM_VIEWER = '#';
export const DOWNLOAD_WINRAR = '#';

interface DownloadsViewProps {
  setActivePage?: (page: PageId) => void;
}

export const DownloadsView: React.FC<DownloadsViewProps> = () => {
  const downloadItems = [
    { name: 'AnyDesk', url: DOWNLOAD_ANYDESK },
    { name: 'UP3', url: DOWNLOAD_UP3 },
    { name: 'GED', url: DOWNLOAD_GED },
    { name: 'LICITARI', url: DOWNLOAD_LICITARI },
    { name: 'Contabilis', url: DOWNLOAD_CONTABILIS },
    { name: 'Team Viewer', url: DOWNLOAD_TEAM_VIEWER },
    { name: 'WinRAR', url: DOWNLOAD_WINRAR },
  ];

  const handleDownload = (item: { name: string; url: string }) => {
    if (item.url && item.url !== '#') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`Download solicitado para: ${item.name}`);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header */}
      <section className="bg-[#004361] text-white py-16 sm:py-20 border-b border-[#335B8F]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Downloads
          </h1>
          <p className="text-slate-200 text-sm sm:text-base mt-3 max-w-2xl leading-relaxed">
            Acesse os arquivos e ferramentas disponibilizados pela GPI Sistemas.
          </p>
        </div>
      </section>

      {/* 2. Downloads Grid Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {downloadItems.map((item) => (
              <div
                key={item.name}
                className="bg-slate-50/70 hover:bg-white rounded-xl p-6 border border-slate-200/80 hover:border-[#4A7EB3]/50 transition-all duration-200 flex flex-col items-center text-center justify-between group hover:-translate-y-0.5 hover:shadow-2xs"
              >
                <div className="w-12 h-12 rounded-lg bg-[#004361]/5 border border-[#004361]/10 flex items-center justify-center mb-4 text-[#004361] group-hover:bg-[#004361] group-hover:text-white transition-colors duration-200">
                  <Download className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="text-base font-bold text-[#004361] mb-5 tracking-tight">
                  {item.name}
                </h3>

                <a
                  href={item.url}
                  onClick={(e) => {
                    if (item.url === '#') {
                      e.preventDefault();
                      handleDownload(item);
                    }
                  }}
                  download={item.url !== '#' ? true : undefined}
                  className="w-full bg-[#004361] hover:bg-[#335B8F] text-white font-bold py-2.5 px-4 rounded-lg text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
