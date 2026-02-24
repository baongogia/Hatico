export interface TrailerData {
  id: string;
  name: string;
  type: string;
  description: string;
  features: string[];
  specs: {
    length: string;
    width: string;
    capacity: string;
  };
  modelPath: string;
  sketchfabUrl?: string;
}

export const trailers: TrailerData[] = [
  {
    id: "flatbed-01",
    name: "Hatico Flatbed Pro",
    type: "Flatbed Trailer",
    description:
      "Rơ moóc sàn phẳng đa dụng, phù hợp chở hàng rời, thép hình, và vật liệu xây dựng với độ bền vượt trội.",
    features: [
      "Khung thép chịu lực cao",
      "Sàn chống trượt",
      "Hệ thống phanh ABS an toàn",
    ],
    specs: {
      length: "12m",
      width: "2.5m",
      capacity: "30 Tấn",
    },
    modelPath: "/models/flatbed.glb", // Placeholder cho file 3D
    sketchfabUrl:
      "https://sketchfab.com/models/76998b4d82604bb7996768835dcaa276/embed?autostart=1&preload=1&transparent=1&ui_infos=0&ui_controls=0&ui_watermark=0&ui_hint=0",
  },
  {
    id: "tanker-02",
    name: "AquaTanker X",
    type: "Tanker Trailer",
    description:
      "Rơ moóc xitec chuyên dụng chở chất lỏng, hóa chất, đảm bảo an toàn tuyệt đối và chống rò rỉ.",
    features: [
      "Bể chứa hợp kim nhôm",
      "Hệ thống bơm xả nhanh",
      "Van an toàn đa màng",
    ],
    specs: {
      length: "11m",
      width: "2.4m",
      capacity: "40 Khối",
    },
    modelPath: "/models/tanker.glb",
  },
  {
    id: "lowboy-03",
    name: "HeavyHaul Lowboy",
    type: "Lowboy Trailer",
    description:
      "Rơ moóc lùn chuyên chở máy móc công trình nặng, thiết bị siêu trường siêu trọng.",
    features: [
      "Sàn thấp tối ưu chiều cao",
      "Khả năng mở rộng chiều ngang",
      "Trục tải trọng lớn",
    ],
    specs: {
      length: "15m",
      width: "3.2m",
      capacity: "60 Tấn",
    },
    modelPath: "/models/lowboy.glb",
  },
];
