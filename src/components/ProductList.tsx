import React from "react";
import Image from "next/image";
import { MOOC_PRODUCTS, Role } from "@/data/products";
import ProductCard from "./ProductCard";

interface Props {
  role: Role;
  filter: string;
  viewMode: "snap" | "grid";
}

export default function ProductList({ role, filter, viewMode }: Props) {
  const categories = [
    "all",
    ...Array.from(new Set(MOOC_PRODUCTS.map((p) => p.category))),
  ];

  const filteredProducts = MOOC_PRODUCTS.filter((product) => {
    return filter === "all" || product.category === filter;
  });

  if (viewMode === "snap") {
    return (
      <>
        <div className="h-svh w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative">
          {/* Product screens */}
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              role={role}
              index={index}
            />
          ))}

          {/* Footer Screen - Last Snap */}
          <div className="w-full h-svh snap-start flex flex-col justify-center items-center relative bg-slate-100 px-3 border-t border-slate-200">
            <div className="max-w-4xl mx-auto w-full">
              <div className="w-20 h-20 rounded-lg flex items-center justify-center overflow-hidden mb-10 shadow-lg mx-auto bg-white border border-slate-100">
                <Image
                  src="/logo/Logo_hatico.png"
                  alt="HATICO Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-space-grotesk font-bold text-slate-900 tracking-tight mb-10 text-center">
                Kết Nối Với Chúng Tôi
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 px-3">
                <div className="bg-white border border-slate-200 rounded-lg p-8 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">
                    Trụ sở chính
                  </p>
                  <p className="text-xl text-slate-800 font-medium">
                    Tầng 5, tòa số 430 Cầu Am, Vạn Phúc, Hà Đông, Hà Nội
                  </p>
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-blue-600 font-bold mb-2">
                    Bãi xe trưng bày
                  </p>
                  <p className="text-xl text-slate-800 font-medium">
                    Số 137 Việt Hưng, Long Biên, Hà Nội
                  </p>
                </div>
              </div>
              <p className="text-center text-sm text-slate-400">
                © 2026 CÔNG TY CP XNK QUỐC TẾ HATICO. Đã đăng ký bản quyền.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Fallback Grid View (Smaller cards, simple list)
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full relative z-10 bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-900 mb-10 font-space-grotesk">
          Tất cả cấu hình
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-blue-600 font-bold mb-1 text-sm">
                {product.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 h-14 overflow-hidden">
                {product.name}
              </h3>
              {role === "guest" ? (
                <div className="text-lg font-bold text-blue-600 mt-auto">
                  Liên hệ
                </div>
              ) : (
                <div className="text-2xl font-black text-slate-900 mt-auto">
                  {product.basePrice}Tr VNĐ
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
