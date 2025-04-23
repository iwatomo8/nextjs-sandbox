// IDと画像パスのマッピングを管理する

export interface ImageInfo {
  path: string;
  alt: string;
  width: number;
  height: number;
}

export function getImageInfoById(id: string): ImageInfo {
  switch (id) {
    case "1":
      return {
        path: "/bg_sakura_night.jpg",
        alt: "夜桜の背景",
        width: 1200,
        height: 630,
      };
    case "2":
      return {
        path: "/ohanami_group.png",
        alt: "お花見グループ",
        width: 1200,
        height: 630,
      };
    case "3":
      return {
        path: "/ohanami_walk.png",
        alt: "お花見散歩",
        width: 1200,
        height: 630,
      };
    default:
      return {
        path: "/snowman_yukidaruma_toketa.png",
        alt: "溶けた雪だるま",
        width: 1200,
        height: 630,
      };
  }
}

// 画像の絶対URLを取得する
export function getImageUrl(imagePath: string): string {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  return `${baseURL}${imagePath}`;
}
