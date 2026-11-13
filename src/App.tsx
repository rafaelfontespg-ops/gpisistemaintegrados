import React, { useState } from 'react';
import { PageId, BlogPost } from './types';
import { BLOG_POSTS } from './data/gpiData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { VideoModal } from './components/VideoModal';
import { ArticleModal } from './components/ArticleModal';
import { SearchModal } from './components/SearchModal';
import { WhatsAppButton } from './components/WhatsAppButton';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { SolutionsView } from './views/SolutionsView';
import { SolutionDetailView } from './views/SolutionDetailView';
import { BlogView } from './views/BlogView';
import { DownloadsView } from './views/DownloadsView';
import { ContactView } from './views/ContactView';
import { SosMariaDaPenhaView } from './views/SosMariaDaPenhaView';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedSolutionId, setSelectedSolutionId] = useState<string | null>(null);

  // Modals
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSolutionId, setDemoSolutionId] = useState<string | null>(null);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoData, setVideoData] = useState({ url: '', title: '' });

  const [articleModalOpen, setArticleModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenDemoModal = (solutionId?: string) => {
    setDemoSolutionId(solutionId || null);
    setDemoModalOpen(true);
  };

  const handleOpenVideoModal = (url: string, title: string) => {
    setVideoData({ url, title });
    setVideoModalOpen(true);
  };

  const handleOpenArticleModal = (postId: string) => {
    const found = BLOG_POSTS.find(p => p.id === postId) || BLOG_POSTS[0];
    setSelectedArticle(found);
    setArticleModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-slate-800 antialiased selection:bg-[#68A8DE]/30 selection:text-[#004361]">
      
      {/* Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenDemoModal={handleOpenDemoModal}
        selectedSolutionId={selectedSolutionId}
        setSelectedSolutionId={setSelectedSolutionId}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Dynamic Main View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            setActivePage={setActivePage}
            onOpenDemoModal={handleOpenDemoModal}
            onOpenVideoModal={handleOpenVideoModal}
            setSelectedSolutionId={setSelectedSolutionId}
            onOpenArticleModal={handleOpenArticleModal}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            setActivePage={setActivePage}
            onOpenDemoModal={handleOpenDemoModal}
          />
        )}

        {activePage === 'solutions' && (
          <SolutionsView
            setActivePage={setActivePage}
            setSelectedSolutionId={setSelectedSolutionId}
            onOpenDemoModal={handleOpenDemoModal}
          />
        )}

        {activePage === 'solution-detail' && (
          <SolutionDetailView
            solutionId={selectedSolutionId}
            setActivePage={setActivePage}
            setSelectedSolutionId={setSelectedSolutionId}
            onOpenDemoModal={handleOpenDemoModal}
            onOpenVideoModal={handleOpenVideoModal}
          />
        )}

        {activePage === 'blog' && (
          <BlogView
            setActivePage={setActivePage}
            onOpenArticleModal={handleOpenArticleModal}
          />
        )}

        {activePage === 'downloads' && (
          <DownloadsView
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            setActivePage={setActivePage}
          />
        )}

        {activePage === 'sos-maria-da-penha' && (
          <SosMariaDaPenhaView
            setActivePage={setActivePage}
            onOpenDemoModal={handleOpenDemoModal}
            onOpenVideoModal={handleOpenVideoModal}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenDemoModal={() => handleOpenDemoModal()}
        setSelectedSolutionId={setSelectedSolutionId}
      />

      {/* Interactive Global Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialSolutionId={demoSolutionId}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={videoData.url}
        title={videoData.title}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => {
          setArticleModalOpen(false);
          setSelectedArticle(null);
        }}
        onOpenDemoModal={handleOpenDemoModal}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        setActivePage={setActivePage}
        setSelectedSolutionId={setSelectedSolutionId}
        onOpenArticleModal={handleOpenArticleModal}
      />

      {/* Botão Flutuante do WhatsApp */}
      <WhatsAppButton />

    </div>
  );
}
