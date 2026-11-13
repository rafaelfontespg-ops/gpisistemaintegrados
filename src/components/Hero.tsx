import React, { useEffect, useRef, useState } from 'react';
import { PageId } from '../types';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setActivePage: (page: PageId) => void;
  onOpenDemoModal: () => void;
  onOpenVideoModal?: (videoUrl: string, title: string) => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

export const Hero: React.FC<HeroProps> = ({
  setActivePage,
  onOpenDemoModal
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const videoId = '_KTuY7_KnJA';
    const startSeconds = 6;

    const initPlayer = () => {
      if (!window.YT || !window.YT.Player) return;

      playerRef.current = new window.YT.Player('hero-yt-player', {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          playsinline: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          start: startSeconds,
        },
        events: {
          onReady: (event: any) => {
            if (event && event.target) {
              if (typeof event.target.mute === 'function') {
                event.target.mute();
              }
              if (typeof event.target.seekTo === 'function') {
                event.target.seekTo(startSeconds, true);
              }
              if (typeof event.target.playVideo === 'function') {
                event.target.playVideo();
              }
            }
          },
          onStateChange: (event: any) => {
            // YT.PlayerState.PLAYING === 1
            if (event.data === 1) {
              setIsPlaying(true);
            }
            // YT.PlayerState.ENDED === 0 -> restart at 00:06
            if (event.data === 0 && event && event.target) {
              if (typeof event.target.seekTo === 'function') {
                event.target.seekTo(startSeconds, true);
              }
              if (typeof event.target.playVideo === 'function') {
                event.target.playVideo();
              }
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      let tag = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
      if (!tag) {
        tag = document.createElement('script');
        (tag as HTMLScriptElement).src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const previousCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current && playerRef.current.destroy) {
        try {
          playerRef.current.destroy();
        } catch (err) {
          // ignore unmount errors
        }
      }
    };
  }, []);

  return (
    <section className="relative bg-[#004361] text-white overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
      
      {/* BACKGROUND LAYER SYSTEM */}
      <div className="absolute inset-0 bg-[#004361] z-0 overflow-hidden pointer-events-none select-none">
        
        {/* CAMADA 1 (#004361) is the background container itself */}

        {/* CAMADA 2: YouTube Video Player (opacity: 0 -> opacity: 1 on PLAYING) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-in-out ${
            isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ pointerEvents: 'none' }}
        >
          <div className="w-[300vw] h-[300vh] min-w-[177.77vh] min-h-[56.25vw] pointer-events-none select-none scale-110 flex items-center justify-center [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:pointer-events-none">
            <div id="hero-yt-player" className="w-full h-full pointer-events-none" />
          </div>
        </div>

        {/* CAMADA 3: Dark/Blue Translucent Overlay */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0, 43, 61, 0.88) 0%, rgba(0, 43, 61, 0.68) 55%, rgba(0, 43, 61, 0.50) 100%)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/15 pointer-events-none" />
      </div>

      {/* CAMADA 4: Hero Content (Title, Text, Action Buttons) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
        <div className="max-w-3xl text-left space-y-8">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Soluções para<br />
            <span className="text-[#68A8DE]">
              Gestão Pública
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl">
            Tecnologia integrada para modernizar processos, aumentar a eficiência e apoiar uma gestão pública mais segura, ágil e transparente em Prefeituras, Câmaras Municipais e demais órgãos públicos.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={() => {
                setActivePage('solutions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#335B8F] hover:bg-[#4A7EB3] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-3 group cursor-pointer border border-white/10"
            >
              <span>Conheça nossas soluções</span>
              <ArrowRight className="w-5 h-5 text-[#68A8DE] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemoModal}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow hover:border-white/40"
            >
              <span>Fale com um especialista</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
