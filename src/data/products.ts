export type Role = "guest" | "owner" | null;

export interface Product {
  id: string;
  name: string;
  category: string;
  specs: string[];
  basePrice: number; // Tạm tính theo đơn vị triệu VNĐ
  images: string[];
  comparisons: string[];
}

export const MOOC_PRODUCTS: Product[] = [
  // 1. Dòng Moóc Mui (STT 1-4 trong data.md)
  {
    id: "mui-730",
    name: "MOÓC MUI KHUNG BỬNG 730MM (Double Coin)",
    category: "Moóc mui",
    specs: [
      "Kích thước: 12400 x 2500 x 4000 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 7000 kg",
      "Tải trọng CPTGGT: 32050 kg",
      "Chiều dài cơ sở: 7200 + 1310 + 1310 (mm)",
      "Lốp: 12R22.5 hiệu Double coin",
      "Cầu: 13 tấn",
      "Bửng cao: 730mm"
    ],
    basePrice: 365,
    images: ["/image/mooc_khung/mc.jpg", "/image/mooc_khung/mcs.jpg"],
    comparisons: ["Nhẹ hơn đối thủ 500kg", "Thép T700 nguyên khối", "Sơn tĩnh điện 2 lớp"]
  },
  {
    id: "mui-1m",
    name: "MOÓC KHUNG MUI BỬNG 1M",
    category: "Moóc mui",
    specs: [
      "Kích thước: 12400 x 2500 x 4000 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 7000 kg",
      "Tải trọng CPTGGT: 32050 kg",
      "Chiều dài cơ sở: 7500 + 1310 + 1310 (mm)",
      "Lốp: 12R22.5 hiệu Double coin",
      "Cầu: 13 tấn"
    ],
    basePrice: 350,
    images: ["/image/mooc_khung/mc.jpg", "/image/mooc_khung/mcs.jpg"],
    comparisons: []
  },
  {
    id: "mui-08m",
    name: "MOÓC KHUNG MUI BỬNG 0.8M",
    category: "Moóc mui",
    specs: [
      "Kích thước: 12400 x 2500 x 4000 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 7000 kg",
      "Tải trọng CPTGGT: 32050 kg",
      "Chiều dài cơ sở: 7000 + 1310 + 1310 (mm)",
      "Lốp: 12R22.5 hiệu Double coin",
      "Cầu: 13 tấn"
    ],
    basePrice: 350,
    images: ["/image/mooc_khung/mc.jpg", "/image/mooc_khung/mcs.jpg"],
    comparisons: []
  },
  {
    id: "mui-1200R20",
    name: "MOÓC KHUNG MUI 3 TRỤC (Lốp 1200R20)",
    category: "Moóc mui",
    specs: [
      "Kích thước: 12400 x 2500 x 4000 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 10000 kg",
      "Tải trọng CPTGGT: 29050 kg",
      "Chiều dài cơ sở: 7200 + 1310 + 1310 (mm)",
      "Lốp: 12.00R20-20pr",
      "Cầu: 16 tấn",
      "Bửng cao: 78cm"
    ],
    basePrice: 420,
    images: ["/image/mooc_khung/mc.jpg", "/image/mooc_khung/mcs.jpg"],
    comparisons: []
  },

  // 2. Dòng Moóc Sàn (STT 5-11 trong data.md)
  {
    id: "san-40f-1200",
    name: "MOÓC SÀN 3 TRỤC 40F (Lốp 12.00R20)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 12500 x 2500 x 1550 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 7700 kg",
      "Tải trọng: 31750 kg",
      "Lốp: 12.00R20 – 20PR gai chân chó",
      "Cơ sở: 7000 + 1310 + 1310 (mm)",
      "Cầu: 13 tấn"
    ],
    basePrice: 355,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8420.MOV",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-40f-12R225",
    name: "MOÓC SÀN 3 TRỤC 40F (Lốp 12R22.5)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 12500 x 2500 x 1450 (mm)",
      "Tổng tải: 39050 kg",
      "Tự trọng: 6500 kg",
      "Tải trọng: 32550 kg",
      "Lốp: 12R22.5-18PR gai cục",
      "Cơ sở: 7000 + 1310 + 1310 (mm)"
    ],
    basePrice: 335,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-45f-14m",
    name: "MOÓC SÀN 45F 8 TẤN (Bản 14.0m)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 14000 x 2500 x 1500 (mm)",
      "Tổng tải: 39050kg",
      "Tự trọng: 8000kg",
      "Tải trọng: 31050 kg",
      "Lốp: 12.00R20-20pr gai chân chó",
      "Cơ sở: 7800 + 1310 + 1310 (mm)",
      "Cầu: 13 tấn"
    ],
    basePrice: 370,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-45f-14.3m-8t",
    name: "MOÓC SÀN 45F 8 TẤN (Bản 14.3m)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 14300 x 2500 x 1500 (mm)",
      "Tổng tải: 39050kg",
      "Tự trọng: 8200kg",
      "Tải trọng: 30850 kg",
      "Lốp: 12.00R20-20pr HD628",
      "Cơ sở: 8100 + 1310 + 1310 (mm)",
      "Cầu: 16 tấn"
    ],
    basePrice: 375,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-45f-14.3m-9.5t",
    name: "MOÓC SÀN 45F 9.5 TẤN (Bản 14.3m)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 14300 x 2500 x 1500 (mm)",
      "Tổng tải: 39050kg",
      "Tự trọng: 9500kg",
      "Tải trọng: 29550 kg",
      "Lốp: 12.00R20-20pr HD628",
      "Cơ sở: 8100 + 1310 + 1310 (mm)",
      "Cầu: 16 tấn"
    ],
    basePrice: 420,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-15m-estimate",
    name: "MOÓC SÀN 15M (Bản SIÊU DÀI)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 15300 x 2500 x 1500 (mm)",
      "Tổng tải: 39050kg",
      "Tự trọng: 9000kg (Tạm tính)",
      "Tải trọng: 30000 kg (Tạm tính)",
      "Lốp: 12.00R20-20pr HD628",
      "Cơ sở: 8500 + 1310 + 1310 (mm) (Ước tính)",
      "Cầu: 16 tấn"
    ],
    basePrice: 450, // Ước tính dựa trên bản 14.3m là 420
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: ["Phân khúc siêu dài hiếm gặp", "Tối ưu cho hàng cồng kềnh"]
  },
  {
    id: "lung-40f",
    name: "MOÓC LỬNG 40F (Xác 6.8 Tấn)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 12400 x 2500 x 2200 (mm)",
      "Lọt lòng: 12220 x 2400 x 450 (mm)",
      "Tổng tải: 39050 Kg",
      "Tự trọng: 6800 Kg",
      "Tải trọng: 32250 kg",
      "Lốp: 12R22.5 Double coin",
      "Cơ sở: 7500 + 1310 + 1310 (mm)",
      "Cầu: 13 tấn"
    ],
    basePrice: 320,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: []
  },
  {
    id: "san-thap-14m2",
    name: "MOÓC SÀN THẤP 14M2 (3 trục)",
    category: "Moóc sàn",
    specs: [
      "Kích thước: 14200 x 2500 x 1650 (mm)",
      "Cơ sở: 7700 + 1310 + 1310 (mm)",
      "Tổng tải: 39000 kg",
      "Tự trọng: 9500 Kg",
      "Tải trọng: 29500 kg",
      "Lốp: 8.25R20",
      "Cầu: 16 tấn"
    ],
    basePrice: 595,
    images: [
      "/image/mooc_san/IMG_8418.JPG",
      "/image/mooc_san/IMG_8419.JPG",
      "/image/mooc_san/IMG_8421.JPG",
      "/image/mooc_san/IMG_8422.JPG"
    ],
    comparisons: ["Không xin giấy phép đặc biệt"]
  },

  // 3. Dòng Moóc Xương (STT 12-15 trong data.md)
  {
    id: "xuong-thang-khongsam",
    name: "XƯƠNG THẲNG KHÔNG SĂM 45F",
    category: "Moóc xương",
    specs: [
      "Kích thước: 14000 x 2500 x 1580 (mm)",
      "Tổng tải: 39050 Kg",
      "Tự trọng: 6000 Kg",
      "Tải trọng: 33050kg",
      "Lốp: 12R22.5 Double coin",
      "Sắt xi: 600mm",
      "Cơ sở: 7900 + 1310 + 1310 (mm)",
      "Cầu: 13 tấn"
    ],
    basePrice: 325,
    images: ["/image/mooc_xuong/IMG_8502.JPG"],
    comparisons: []
  },
  {
    id: "xuong-thang-cosam",
    name: "XƯƠNG THẲNG CÓ SĂM 45F",
    category: "Moóc xương",
    specs: [
      "Kích thước: 14000 x 2500 x 1580 (mm)",
      "Tổng tải: 39050 Kg",
      "Tự trọng: 6900 Kg",
      "Tải trọng: 32150kg",
      "Lốp: 12.00R20 HD628",
      "Sắt xi: 600mm",
      "Cơ sở: 7900 + 1310 + 1310 (mm)",
      "Cầu: 16 tấn"
    ],
    basePrice: 345,
    images: ["/image/mooc_xuong/IMG_8502.JPG"],
    comparisons: []
  },
  {
    id: "xuong-cocon-cosam",
    name: "XƯƠNG CỔ CÒ CÓ SĂM",
    category: "Moóc xương",
    specs: [
      "Kích thước: 14130 x 2500 x 1500 (mm)",
      "Tổng tải: 39050 Kg",
      "Tự trọng: 6500 Kg",
      "Tải trọng: 32550kg",
      "Lốp: 12.00R20 HD628",
      "Sắt xi: 600mm",
      "Cơ sở: 7900 + 1310 + 1310 (mm)",
      "Cầu: 16 tấn"
    ],
    basePrice: 345,
    images: ["/image/mooc_xuong/IMG_8502.JPG"],
    comparisons: []
  },
  {
    id: "xuong-cocon-khongsam",
    name: "XƯƠNG CỔ CÒ KHÔNG SĂM",
    category: "Moóc xương",
    specs: [
      "Kích thước: 14130 x 2500 x 1500 (mm)",
      "Tổng tải: 39050 Kg",
      "Tự trọng: 6000 Kg",
      "Tải trọng: 33000kg",
      "Lốp: 12R22.5 Double coin",
      "Sắt xi: 600mm",
      "Cơ sở: 7900 + 1310 + 1310 (mm)"
    ],
    basePrice: 320,
    images: ["/image/mooc_xuong/IMG_8502.JPG"],
    comparisons: []
  },

  // 4. Dòng Moóc Ben (STT 16-19 trong data.md)
  {
    id: "ben-vuong-8.6t",
    name: "MOÓC BEN VUÔNG 8.6 TẤN (CÓ SĂM)",
    category: "Moóc ben",
    specs: [
      "Kích thước: 9280 x 2500 x 3650 (mm)",
      "Lọt lòng: 8600 x 2380 x 1240 (mm)",
      "Tổng tải: 36900 Kg",
      "Tự trọng: 8600 Kg",
      "Tải trọng: 28300 kg",
      "Lốp: 12.00R20 (20PR) HD628",
      "Tháp ben: 214 (mm)",
      "Cầu: 13 tấn"
    ],
    basePrice: 540,
    images: [
      "/image/mooc_ben/IMG_8516.jpg",
      "/image/mooc_ben/IMG_8525.JPG",
      "/image/mooc_ben/IMG_8531.MOV",
      "/image/mooc_ben/IMG_8552.JPG",
      "/image/mooc_ben/IMG_8569.JPG",
      "/image/mooc_ben/IMG_8574.JPG",
      "/image/mooc_ben/IMG_8578.JPG"
    ],
    comparisons: []
  },
  {
    id: "ben-u-8.7t",
    name: "MOÓC BEN U LỐP CÓ SĂM",
    category: "Moóc ben",
    specs: [
      "Kích thước: 9280 x 2500 x 3650 (mm)",
      "Lọt lòng: 8350 x 2380 x 1320 (mm)",
      "Tổng tải: 36900 Kg",
      "Tự trọng: 8700 Kg",
      "Tải trọng: 28200 kg",
      "Lốp: 12.00R20 (20PR) HD628",
      "Tháp ben: 214 (mm)"
    ],
    basePrice: 540,
    images: [
      "/image/mooc_ben/IMG_8516.jpg",
      "/image/mooc_ben/IMG_8525.JPG",
      "/image/mooc_ben/IMG_8552.JPG",
      "/image/mooc_ben/IMG_8569.JPG",
      "/image/mooc_ben/IMG_8574.JPG",
      "/image/mooc_ben/IMG_8578.JPG"
    ],
    comparisons: []
  },

  // 5. Dòng Téc (STT 20-21 trong data.md)
  {
    id: "tec-bui-thep",
    name: "TÉC CHỞ BỤI THÉP ( HATICO )",
    category: "Téc",
    specs: [
      "Kích thước: 11420 x 2500 x 3980 (mm)",
      "Tổng tải: 39060 Kg",
      "Tự trọng: 9100 Kg",
      "Tải trọng: 29960 kg",
      "Lốp: 1200R20 (20PR) HD628",
      "Thành thép: T700 4.5mm",
      "Động cơ: weichai 44kw"
    ],
    basePrice: 610,
    images: [],
    comparisons: []
  },

  // 6. Siêu trường siêu trọng (STT 22-28 trong data.md)
  {
    id: "st-18.8m",
    name: "MOÓC SIÊU TRƯỜNG 18.8M (4 TRỤC)",
    category: "Siêu trường",
    specs: [
      "Kích thước: 18800 x 3200 x 1720 (mm)",
      "Tổng tải: 73350Kg",
      "Tự trọng: 13300kg",
      "Tải trọng: 60050kg",
      "Lốp: 285/70R19.5",
      "Cầu: 16 tấn (4 trục)"
    ],
    basePrice: 755,
    images: [],
    comparisons: []
  },
  {
    id: "fooc-4truc-19.9m",
    name: "FOỌC 4 TRỤC 19.9M (RÚT 5M)",
    category: "Siêu trường",
    specs: [
      "Kích thước: 19900(+5m) x 3200 x 1760 (mm)",
      "Tổng tải: 92400kg",
      "Tự trọng: 23800kg",
      "Tải trọng: 68600kg",
      "Lốp: 12.00R20 Jangxin",
      "Cầu: 25 tấn",
      "Khóa chốt hơi"
    ],
    basePrice: 1110,
    images: [],
    comparisons: []
  },

  // 7. Đầu kéo
  {
    id: "dk-440-lap",
    name: "ĐẦU KÉO 440 HP CẦU LÁP (2026)",
    category: "Đầu kéo",
    specs: ["Động cơ: 440 hp", "Cầu: Láp", "Đời xe: 2026"],
    basePrice: 1245,
    images: [],
    comparisons: []
  },
  {
    id: "dk-440-dau",
    name: "ĐẦU KÉO 440 HP CẦU DẦU (2026)",
    category: "Đầu kéo",
    specs: ["Động cơ: 440 hp", "Cầu: Dầu", "Đời xe: 2026"],
    basePrice: 1285,
    images: [],
    comparisons: []
  },
  {
    id: "xe-shacman-4",
    name: "XE SHACMAN 4 CHÂN MÁY 400",
    category: "Đầu kéo",
    specs: [
      "Cấu hình: WP10H.400E50",
      "Tải tự đổ: 8X4 cabin X3000",
      "Lốp: 12.00R20",
      "Thùng dầu: 400L",
      "Tỷ số truyền: 4.266"
    ],
    basePrice: 1350, // Tạm tính vì data.md ko ghi giá cụ thể cho Shacman
    images: [],
    comparisons: []
  }
];
