import React, { useState } from "react";
import { Product, Role } from "@/data/products";
import {
  IoInformationCircleOutline,
  IoHardwareChipOutline,
  IoImagesOutline,
  IoStarOutline,
  IoCloseOutline,
  IoGitCompareOutline,
  IoCheckmarkCircleOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import Image from "next/image";

interface Props {
  product: Product;
  role: Role;
  index: number;
}

export default function ProductCard({ product, role, index }: Props) {
  const [markup, setMarkup] = useState(0);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [previewImageIdx, setPreviewImageIdx] = useState<number | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price * 1000000);
  };

  const isVideo = (path: string) => {
    return path.toLowerCase().endsWith(".mov") || path.toLowerCase().endsWith(".mp4");
  };

  const displayPrice = typeof product.basePrice === "number" ? product.basePrice + markup : product.basePrice;

  return (
    <div className="w-full h-svh snap-start flex flex-col justify-center items-center relative overflow-hidden bg-slate-50">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-multiply z-0 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-400/10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-cyan-400/5 rounded-full blur-[100px] z-0"></div>

      {/* Main product visual area - Top half */}
      <div className="w-full flex shrink-0 h-[40vh] md:h-[45vh] flex-col justify-center items-center relative z-10 px-3 pt-[80px]">
        <div
          className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-start overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1"
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const width = e.currentTarget.clientWidth;
            const index = Math.round(scrollLeft / width);
            if (index !== activeImageIdx) setActiveImageIdx(index);
          }}
        >
          {product.images && product.images.length > 0 ? (
            product.images.map((img, i) => (
              <div
                key={i}
                className="w-full h-full shrink-0 snap-center flex items-center justify-center cursor-pointer relative"
                onClick={() => setPreviewImageIdx(i)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-[8px] shadow-sm border border-slate-200 bg-slate-100">
                  {isVideo(img) ? (
                    <video
                      src={img}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                      onMouseOver={(e) => e.currentTarget.play()}
                      onMouseOut={(e) => e.currentTarget.pause()}
                    />
                  ) : (
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  )}
                  {/* Pill count on bottom right */}
                  <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-xl px-3 py-1 rounded-full text-[10px] font-bold text-white z-10 tracking-[0.15em] shadow-lg ring-1 ring-white/30 flex items-center gap-1.5 transition-all">
                    <span className="opacity-70">{isVideo(img) ? "VIDEO" : "IMAGE"}</span>
                    <span>{i + 1} / {product.images.length}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-full shrink-0 snap-center flex items-center justify-center relative cursor-not-allowed">
              <div className="relative w-full h-full overflow-hidden rounded-[8px] shadow-sm border border-slate-200 bg-slate-100 flex items-center justify-center">
                <svg
                  className="w-20 h-20 text-slate-300 drop-shadow-sm"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.5"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Dots Pagination */}
        {product.images && product.images.length > 1 ? (
          <div className="flex gap-1.5 mt-2 mb-1 justify-center w-full shrink-0">
            {product.images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeImageIdx ? "w-4 bg-blue-600" : "w-1.5 bg-slate-300"}`}
              />
            ))}
          </div>
        ) : (
          <div className="h-4 mt-2 mb-1 shrink-0 w-full"></div>
        )}
      </div>

      {/* Product Content - Bottom half */}
      <div className="w-full flex-1 grow min-h-0 max-w-7xl mx-auto px-3 sm:px-6 flex flex-col justify-start relative z-10 pb-3">
        {/* Title & Price Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 shrink-0 my-3">
          {/* Title */}
          <div className="flex-1 min-w-0">
            <div className="text-blue-600 font-bold mb-1 flex items-center gap-2 text-[10px] md:text-xs uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-lg bg-blue-500 shadow-sm animate-pulse shrink-0"></span>
              <span className="truncate">{product.category}</span>
            </div>
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold md:font-extrabold text-slate-900 font-space-grotesk tracking-tight leading-snug line-clamp-2"
              title={product.name}
            >
              {product.name}
            </h2>
          </div>

          {/* Price */}
          <div className="text-left md:text-right shrink-0 relative">
            <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">
              Giá bán dự kiến
            </p>
            <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tighter">
              {typeof displayPrice === "number" ? formatPrice(displayPrice) : displayPrice}
            </div>

            {/* Hidden admin mark up button */}
            {role === "owner" && (
              <button
                onClick={() => setMarkup((prev) => prev + 5)}
                className="absolute top-0 -right-4 p-1 opacity-0 hover:opacity-100 transition-opacity"
                title="Tăng giá (Admin)"
              >
                <IoStarOutline className="w-3 h-3 text-slate-300" />
              </button>
            )}
          </div>
        </div>

        {/* Action Pills Row */}
        <div className="flex items-stretch gap-2 shrink-0 w-full pb-4 mb-3">
          <button
            onClick={() => setActiveModal("specs")}
            className="flex-2 flex justify-center items-center gap-2 p-2.5 bg-blue-600 border border-blue-700 rounded-lg shadow-md text-white hover:bg-blue-700 transition-all active:scale-95 shrink-0"
          >
            <IoHardwareChipOutline className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
            <span className="text-[11px] md:text-sm font-bold uppercase tracking-wider truncate">
              Cấu hình
            </span>
          </button>
          
          <div className="flex-1 flex gap-2">
            <button
              onClick={() => setActiveModal("reviews")}
              className="flex-1 flex justify-center items-center gap-1.5 p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shrink-0"
              title="Xếp hạng"
            >
              <IoStarOutline className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span className="hidden md:inline text-[11px] font-bold uppercase tracking-wide truncate">
                Xếp hạng
              </span>
            </button>
            <button
              onClick={() => setActiveModal("compare")}
              className="flex-1 flex justify-center items-center gap-1.5 p-2 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shrink-0"
              title="So sánh"
            >
              <IoGitCompareOutline className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <span className="hidden md:inline text-[11px] font-bold uppercase tracking-wide truncate">
                So sánh
              </span>
            </button>
            <button
              onClick={() => setActiveModal("info")}
              className="flex-1 flex items-center justify-center p-2.5 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-600 hover:text-blue-600 hover:border-blue-200 transition-all shrink-0"
              title="Thông tin chi tiết"
            >
              <IoInformationCircleOutline className="w-5 h-5" />
              <span className="hidden md:inline ml-1.5 text-[11px] font-bold uppercase tracking-wide truncate">
                Chi tiết
              </span>
            </button>
          </div>
        </div>

        <div className="w-full grow overflow-y-auto scrollbar-none relative pb-1">
          <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 shadow-sm h-fit mt-2 md:mt-4">
            <div className="flex items-center justify-between mb-4 md:mb-5">
              <h4 className="text-[10px] md:text-xs font-bold uppercase text-slate-400 tracking-[0.25em]">
                Thông số thiết yếu
              </h4>
              <div className="h-px flex-1 bg-slate-100 ml-4"></div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
              {product.specs.map((spec, idx) => (
                <li
                  key={idx}
                  className="text-xs md:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed group"
                >
                  <IoCheckmarkCircleOutline className="mt-0.5 text-blue-500 shrink-0 w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="group-hover:text-slate-900 transition-colors">
                    {spec.includes(":") ? (
                      <>
                        <span className="font-semibold text-slate-900">
                          {spec.split(":")[0]}:
                        </span>
                        <span className="text-slate-600 font-normal">
                          {spec.split(":")[1]}
                        </span>
                      </>
                    ) : (
                      spec
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dynamic Function Modal */}
      <div
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-3 transition-opacity duration-300 ${
          activeModal ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setActiveModal(null)}
      >
        <div
          className={`bg-white rounded-lg w-full max-w-md shadow-2xl overflow-hidden transition-transform duration-300 transform ${
            activeModal ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-3 border-b border-slate-100 bg-slate-50">
            <h3 className="text-base font-bold text-slate-800 font-space-grotesk capitalize flex items-center gap-2">
              {activeModal === "info" && <IoInformationCircleOutline />}
              {activeModal === "specs" && <IoHardwareChipOutline />}
              {activeModal === "gallery" && <IoImagesOutline />}
              {activeModal === "reviews" && <IoStarOutline />}
              {activeModal === "compare" && <IoGitCompareOutline />}
              {activeModal === "info"
                ? "Thông tin sản phẩm"
                : activeModal === "specs"
                  ? "Cấu hình chi tiết"
                  : activeModal === "gallery"
                    ? "Hình ảnh sản phẩm"
                    : activeModal === "compare"
                      ? "Ưu điểm so với đối thủ"
                      : "Đánh giá từ chuyên gia"}
            </h3>
            <button
              onClick={() => setActiveModal(null)}
              className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors border border-transparent"
            >
              <IoCloseOutline className="w-5 h-5" />
            </button>
          </div>{" "}
          <div className="p-4 text-slate-600 text-sm leading-relaxed max-h-[60vh] overflow-y-auto">
            {/* Placeholder content for modals */}
            {activeModal === "info" && (
              <p className="text-sm">
                Đây là phiên bản xuất sắc nhất trong phân khúc{" "}
                {product.category}. Dòng sản phẩm hứa hẹn đem lại hiệu năng vượt
                trội và tiết kiệm chi phí vận hành cho doanh nghiệp. Liên hệ
                trực tiếp HATICO để nhận hồ sơ năng lực chi tiết.
              </p>
            )}
            {activeModal === "specs" && (
              <div className="space-y-3">
                <p className="font-medium text-slate-800 text-base mb-3">
                  Tài liệu kỹ thuật chi tiết:
                </p>
                {product.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex border-b border-slate-100 pb-2 pt-1.5"
                  >
                    <span className="text-slate-400 w-6 font-mono text-xs leading-5">
                      {i + 1}.
                    </span>
                    <span className="text-slate-800 font-medium text-sm leading-6">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            )}
            {activeModal === "gallery" && (
              <div className="grid grid-cols-2 gap-3">
                {product.images && product.images.length > 0 ? (
                  product.images.map((img, i) => (
                    <div
                      key={i}
                      className="aspect-video bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setPreviewImageIdx(i)}
                    >
                      <Image
                        src={img}
                        alt={`Hình ảnh ${product.name} ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <>
                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                      <IoImagesOutline className="text-slate-300 text-2xl" />
                    </div>
                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
                      <IoImagesOutline className="text-slate-300 text-2xl" />
                    </div>
                    <div className="col-span-2 text-center text-[10px] text-slate-400 mt-1">
                      Đang tải chùm ảnh 360 độ...
                    </div>
                  </>
                )}
              </div>
            )}
            {activeModal === "compare" && (
              <div className="space-y-3">
                {product.comparisons && product.comparisons.length > 0 ? (
                  product.comparisons.map((comp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-blue-50/50 p-3 rounded-lg border border-blue-100"
                    >
                      <IoCheckmarkCircleOutline className="text-blue-500 w-5 h-5 shrink-0 mt-0.5" />
                      <p className="text-xs text-slate-700 leading-5">{comp}</p>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-sm text-slate-400 py-6">
                    Đang cập nhật thông tin so sánh thị trường...
                  </div>
                )}
              </div>
            )}
            {activeModal === "reviews" && (
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex text-yellow-500 mb-1 text-xs">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <p className="text-xs">
                    "Thiết kế khung gầm rất cứng cáp, phù hợp đường trường siêu
                    trọng..." - Kỹ sư Nguyễn Văn A
                  </p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <div className="flex text-yellow-500 mb-1 text-xs">
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                    <IoStarOutline />
                  </div>
                  <p className="text-xs">
                    "Giao diện hiện đại, thông số minh bạch. Best choice 2026."
                    - Khách hàng VIP
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="p-3 bg-slate-100 rounded-b-lg border-t border-slate-200 text-center">
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition shadow border border-blue-700 text-sm"
            >
              Đóng lại
            </button>
          </div>
        </div>
      </div>
      {/* Fullscreen Image Preview Modal */}
      {previewImageIdx !== null &&
        product.images &&
        product.images.length > 0 && (
          <div className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center opacity-100 transition-opacity backdrop-blur-md">
            <button
              onClick={() => setPreviewImageIdx(null)}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white bg-black/50 hover:bg-black/80 rounded-full transition-all z-10"
            >
              <IoCloseOutline className="w-8 h-8" />
            </button>

            {product.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewImageIdx((prev) =>
                      prev! === 0 ? product.images.length - 1 : prev! - 1,
                    );
                  }}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-all z-10"
                >
                  <IoChevronBackOutline className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewImageIdx((prev) =>
                      prev! === product.images.length - 1 ? 0 : prev! + 1,
                    );
                  }}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/30 hover:bg-black/60 rounded-full transition-all z-10"
                >
                  <IoChevronForwardOutline className="w-8 h-8" />
                </button>
              </>
            )}

            <div
              className="w-full h-full p-4 md:p-12 flex items-center justify-center relative"
              onClick={() => setPreviewImageIdx(null)}
            >
              <div
                className="relative w-full h-[80%] max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                {isVideo(product.images[previewImageIdx]) ? (
                  <video
                    src={product.images[previewImageIdx]}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={product.images[previewImageIdx]}
                    alt={`Preview ${previewImageIdx + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm font-medium tracking-widest bg-black/40 px-4 py-1.5 rounded-full border border-white/10">
                {previewImageIdx + 1} / {product.images.length}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
