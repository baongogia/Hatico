import React, { useState } from "react";
import Image from "next/image";
import { MOOC_PRODUCTS } from "@/data/products";
import {
  IoLayersOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { FaTruck, FaTrailer, FaWater } from "react-icons/fa";

interface HeaderProps {
  role: string | null;
  filter: string;
  setFilter: (f: string) => void;
  viewMode: "snap" | "grid";
  setViewMode: (v: "snap" | "grid") => void;
}

export default function Header({
  role,
  filter,
  setFilter,
  viewMode,
  setViewMode,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getCategoryIcon = (category: string, isActive: boolean) => {
    const className = isActive ? "text-blue-600" : "text-slate-400";
    const size = 22;

    if (category.toLowerCase().includes("téc")) {
      return <FaWater className={className} size={size} />;
    }
    if (category.toLowerCase().includes("đầu kéo")) {
      return <FaTruck className={className} size={size} />;
    }
    return <FaTrailer className={className} size={size} />;
  };

  const categories = [
    "all",
    ...Array.from(new Set(MOOC_PRODUCTS.map((p) => p.category))),
  ];
  return (
    <>
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-black/5 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0 flex items-center gap-3">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center overflow-hidden bg-white shrink-0">
                <Image
                  src="/logo/Logo_hatico.png"
                  alt="HATICO Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-100 overflow-x-auto scrollbar-none no-scrollbar max-w-[calc(100vw-300px)]">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2.5 whitespace-nowrap ${
                      filter === c
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-black/5"
                        : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
                    }`}
                  >
                    {c === "all" ? (
                      <IoLayersOutline className={filter === "all" ? "text-blue-600" : "text-slate-400"} />
                    ) : (
                      getCategoryIcon(c, filter === c)
                    )}
                    {c === "all" ? "Tất cả" : c}
                  </button>
                ))}
              </nav>

              {/* Removed Quyền (Role) display as per user request */}

              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200 shadow-sm bg-white"
              >
                <IoMenuOutline className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Hamburger Menu Overlay - FULL WIDTH LIGHT MODE */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 bottom-0 w-full bg-white border-l border-slate-200 p-3 flex flex-col shadow-2xl transition-transform duration-300 ease-out transform overflow-hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative z-10 flex justify-between items-center mb-6 pb-4 border-b border-slate-100 max-w-lg mx-auto w-full mt-2">
            <h2 className="text-xl font-bold font-space-grotesk text-slate-900">
              Chức năng
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-transparent"
            >
              <IoCloseOutline className="w-6 h-6" />
            </button>
          </div>

          <div className="relative z-10 space-y-8 max-w-lg mx-auto w-full grow overflow-y-auto pb-10">
            {/* Filter */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 pl-2">
                Danh mục sản phẩm
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    setFilter("all");
                    setIsMenuOpen(false);
                  }}
                  className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
                    filter === "all"
                      ? "bg-blue-50 text-blue-700 border-2 border-blue-500 shadow-sm"
                      : "bg-white text-slate-600 border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <IoLayersOutline
                    className={
                      filter === "all" ? "text-blue-600" : "text-slate-400"
                    }
                    size={22}
                  />
                  Tất cả sản phẩm
                </button>

                {categories
                  .filter((c) => c !== "all")
                  .map((c) => (
                    <button
                      key={c}
                      onClick={() => {
                        setFilter(c);
                        setIsMenuOpen(false);
                      }}
                      className={`text-left px-3 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3 ${
                        filter === c
                          ? "bg-blue-50 text-blue-700 border-2 border-blue-500 shadow-sm"
                          : "bg-white text-slate-600 border-2 border-slate-100 hover:border-slate-300 hover:bg-slate-50"
                      }`}
                    >
                      {getCategoryIcon(c, filter === c)}
                      {c}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
