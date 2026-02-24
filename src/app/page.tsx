"use client";

import { useState } from "react";
import { Scene } from "@/components/3d/Scene";
import { TrailerInfo } from "@/components/ui/TrailerInfo";
import { TrailerSelector } from "@/components/ui/TrailerSelector";
import { trailers } from "@/data/trailers";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedTrailerId, setSelectedTrailerId] = useState(trailers[0].id);
  const [isInteracting, setIsInteracting] = useState(false);

  const currentTrailer =
    trailers.find((t) => t.id === selectedTrailerId) || trailers[0];

  const handleInteractionStart = () => setIsInteracting(true);
  const handleInteractionEnd = () => setIsInteracting(false);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#040812]">
      {/* Background Graphic Grid */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none z-0" />

      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-3 z-50 flex justify-between items-center pointer-events-auto">
        <div className="group cursor-pointer flex items-center h-10 md:h-12">
          {/* Logo removed as per user request */}
        </div>
        <nav className="hidden md:flex gap-8 lg:gap-12 text-xs md:text-sm font-bold text-slate-400 font-montserrat tracking-widest uppercase items-center h-10 md:h-12">
          <a
            href="#"
            className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-primary-red hover:after:w-full after:transition-all after:duration-300"
          >
            SẢN PHẨM
          </a>
          <a href="#" className="hover:text-white transition-colors">
            CÔNG NGHỆ
          </a>
          <a href="#" className="hover:text-white transition-colors">
            GIỚI THIỆU
          </a>
          <a
            href="#"
            className="text-tech-cyan hover:text-white transition-colors font-bold"
          >
            LIÊN HỆ
          </a>
        </nav>
      </header>

      {/* 3D Scene - Full Screen Centered */}
      <div
        className="absolute inset-0 z-10 w-full h-full"
        onMouseDown={handleInteractionStart}
        onMouseUp={handleInteractionEnd}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
          <Scene trailer={currentTrailer} />
        </div>
      </div>

      {/* Overlay UI - Layout mới */}
      <div className="absolute inset-0 z-30 pointer-events-none p-3 flex gap-3 h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <TrailerInfo
            key={currentTrailer.id}
            trailer={currentTrailer}
            isInteracting={isInteracting}
          />
        </AnimatePresence>

        {/* Middle/Bottom: Trailer Selector */}
        <div className="flex-1 flex flex-col justify-end pb-0 pointer-events-none">
          <div className="pointer-events-auto w-fit p-1 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <TrailerSelector
              trailers={trailers}
              selectedId={selectedTrailerId}
              onSelect={setSelectedTrailerId}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
