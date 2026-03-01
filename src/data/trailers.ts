export interface TrailerData {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  specs: {
    dimensions: string; // Kích thước bao (DxRxC)
    payload: string; // Tải trọng chở hàng
    totalWeight: string; // Tổng tải trọng
    tareWeight: string; // Tự trọng
    axles?: string; // Số trục hoặc hệ thống treo
    tires?: string; // Cỡ Lốp
  };
  modelPath: string;
  sketchfabUrl?: string;
}

export const trailers: TrailerData[] = [
  {
    id: "flatbed-01",
    name: "MOÓC SÀN 40 FEET",
    type: "SƠ MI RƠ MOÓC SÀN",
    description:
      "Rơ moóc sàn phẳng 40 feet đa dụng, chuyên chở container, thép hình và vật liệu xây dựng.",
    features: [
      "Khung thép cường lực Q345B",
      "Sàn thép nhám gia cố dầm ngang",
      "Hệ thống phanh kết hợp ABS",
    ],
    specs: {
      dimensions: "12.4 x 2.5 x 1.53",
      payload: "31.5",
      totalWeight: "38.5",
      tareWeight: "7.0",
      axles: "3 Trục (13T/trục)",
      tires: "12R22.5",
    },
    modelPath: "/model/Mooc_flat.glb", // Dùng file 3D thật thay vì placeholder
  },
  {
    id: "tanker-02",
    name: "MOÓC XITEC NHÔM",
    type: "SƠ MI RƠ MOÓC XITEC",
    description:
      "Sơ mi rơ moóc xitec chuyên dụng chở xăng dầu, hóa chất, thiết kế hợp kim nhôm siêu nhẹ.",
    features: [
      "Hợp kim nhôm chống ăn mòn",
      "Hệ thống nạp xả thông minh",
      "Van an toàn chống cháy nổ",
    ],
    specs: {
      dimensions: "11.0 x 2.5 x 3.65",
      payload: "40.0",
      totalWeight: "39.0",
      tareWeight: "6.5",
      axles: "3 Trục Fuwa/Jost",
      tires: "12R22.5",
    },
    modelPath: "/model/Mooc-xuong.glb",
  },
  {
    id: "lowboy-03",
    name: "MOÓC LÙN SIÊU TRỌNG",
    type: "SƠ MI RƠ MOÓC LÙN",
    description:
      "Rơ moóc lùn chịu tải siêu nặng, tối ưu cho chuyên chở máy móc và thiết bị siêu trường.",
    features: [
      "Sàn thấp chịu lực cực đại",
      "Dầm chính chữ I gia cường",
      "Cầu lên xuống thủy lực",
    ],
    specs: {
      dimensions: "13.7 x 3.2 x 3.12",
      payload: "60.0",
      totalWeight: "75.0",
      tareWeight: "15.0",
      axles: "3 Trục (16T/trục)",
      tires: "11.00R20",
    },
    modelPath: "/model/Freestanding Semi Trailer.glb",
  },
];
