"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrailerData } from "@/data/trailers";

interface Props {
  trailer: TrailerData;
}

export function TrailerInfo({ trailer }: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Nếu người dùng đang thu gọn, chỉ hiển thị một nút nhỏ
  if (isCollapsed) {
    return (
      <motion.div
        layout
        key={`collapsed-${trailer.id}`}
        initial={{ opacity: 0, x: -20 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-auto shrink-0 self-start"
      >
        <button
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-3 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg shadow-lg hover:bg-black/60 transition-colors backdrop-saturate-150"
          title="Mở rộng thông tin"
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>
          <div className="text-left hidden sm:block">
            <h2 className="text-[10px] text-slate-400 uppercase tracking-widest font-inter">
              {trailer.type}
            </h2>
            <h1 className="text-lg uppercase font-bold text-white font-space-grotesk leading-none">
              {trailer.name}
            </h1>
          </div>
        </button>
      </motion.div>
    );
  }

  // Panel thông tin đầy đủ
  return (
    <motion.div
      layout
      key={`expanded-${trailer.id}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col gap-3 w-[320px] md:w-[420px] h-full pointer-events-auto relative bg-linear-to-br from-black/80 to-black/50 backdrop-blur-2xl border border-white/10 p-4 pt-14 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-saturate-150 overflow-y-auto no-scrollbar shrink-0"
    >
      {/* Nút Thu gọn (Collapse) */}
      <button
        onClick={() => setIsCollapsed(true)}
        className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all z-10"
        title="Thu gọn panel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Title Area */}
      <div className="pr-10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-6 h-[2px] bg-slate-400"></div>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-slate-300 font-semibold font-inter">
            {trailer.type}
          </h2>
        </div>
        <h1 className="text-4xl md:text-5xl uppercase leading-[1.1] font-black text-white font-space-grotesk tracking-wide drop-shadow-md">
          {trailer.name}
        </h1>
      </div>

      <p className="text-slate-300 text-base leading-relaxed font-inter opacity-90">
        {trailer.description}
      </p>

      {/* Features */}
      <div className="flex flex-col gap-2 my-1">
        {trailer.features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-[6px] text-tech-cyan shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-sm text-slate-300 font-inter">{feature}</span>
          </div>
        ))}
      </div>

      {/* Specs Grid */}
      <div className="bg-white/5 rounded-lg p-3 border border-white/5">
        <h3 className="text-xs uppercase font-bold mb-4 text-slate-400 font-inter tracking-widest border-b border-white/10 pb-2">
          Thông Số Kỹ Thuật
        </h3>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4 font-inter">
          <div className="flex flex-col gap-1 col-span-2">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">
              Kích Thước (Mét - DxRxC)
            </span>
            <span className="text-lg font-bold text-white tracking-wide">
              {trailer.specs.dimensions}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">
              Tải Trọng (Tấn)
            </span>
            <span className="text-xl font-bold text-tech-cyan tracking-wide">
              {trailer.specs.payload}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">
              Tổng Tải (Tấn)
            </span>
            <span className="text-xl font-bold text-white tracking-wide">
              {trailer.specs.totalWeight}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest">
              Tự Trọng (Tấn)
            </span>
            <span className="text-base font-bold text-white tracking-wide">
              {trailer.specs.tareWeight}
            </span>
          </div>
          {trailer.specs.axles && (
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest">
                Hệ Thống Trục
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                {trailer.specs.axles}
              </span>
            </div>
          )}
          {trailer.specs.tires && (
            <div className="flex flex-col gap-1 col-span-2">
              <span className="text-slate-500 text-[10px] uppercase tracking-widest">
                Cỡ Lốp
              </span>
              <span className="text-base font-bold text-white tracking-wide">
                {trailer.specs.tires}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex flex-col gap-3 font-inter uppercase font-bold tracking-widest text-sm pt-4">
        <button className="relative w-full py-3 rounded-lg bg-white text-black hover:bg-slate-200 transition-all duration-300 overflow-hidden group shadow-lg">
          <span className="relative z-10 block pr-6 text-sm">
            YÊU CẦU BÁO GIÁ
          </span>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 text-black transition-transform group-hover:translate-x-2">
            →
          </div>
        </button>
        <button className="w-full py-3 text-xs text-slate-300 border border-slate-600 rounded-lg hover:border-slate-400 hover:bg-white/5 hover:text-white transition-all duration-300">
          XEM CHI TIẾT
        </button>
      </div>
    </motion.div>
  );
}
