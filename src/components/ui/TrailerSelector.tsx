"use client";

import { TrailerData } from "@/data/trailers";
import { motion } from "framer-motion";

interface Props {
  trailers: TrailerData[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function TrailerSelector({ trailers, selectedId, onSelect }: Props) {
  return (
    <div className="flex gap-2 p-1.5 bg-primary-blue/80 backdrop-blur-md rounded-lg border-b-2 border-slate-800 shadow-2xl pointer-events-auto w-full md:w-auto overflow-x-auto justify-start md:justify-center">
      {trailers.map((trailer) => {
        const isSelected = selectedId === trailer.id;

        return (
          <button
            key={trailer.id}
            onClick={() => onSelect(trailer.id)}
            className={`relative px-5 py-2.5 text-xs tracking-[0.15em] font-inter font-bold uppercase transition-all duration-300 min-w-max rounded-lg
              ${isSelected ? "text-white" : "text-slate-500 hover:text-slate-300 hover:bg-slate-900/50"}
            `}
          >
            {isSelected && (
              <motion.div
                layoutId="active-nav"
                className="absolute inset-x-0 bottom-0 h-1 bg-tech-cyan shadow-[0_0_10px_rgba(0,229,255,0.8)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span
                className={`w-2 h-2 ${isSelected ? "bg-tech-cyan" : "bg-transparent border border-slate-600"}`}
              ></span>
              {trailer.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
