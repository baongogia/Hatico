export default function FloatingCall() {
  return (
    <a
      href="tel:0988376666"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center group"
      aria-label="Gọi Hotline"
    >
      <div className="absolute inset-0 bg-cyan-500 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity"></div>
      <div className="relative w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,180,255,0.4)] group-hover:scale-110 transition-transform duration-300">
        <svg
          className="w-6 h-6 animate-[wiggle_1s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </div>

      {/* Tooltip for desktop */}
      <div className="absolute bottom-full right-0 mb-3 bg-[#0a1122]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-cyan-400 font-bold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex flex-col items-end">
        <span className="text-[10px] text-blue-200/50 uppercase tracking-widest leading-none font-medium mb-1">
          Hotline tư vấn
        </span>
        0988.376.666
      </div>
    </a>
  );
}
