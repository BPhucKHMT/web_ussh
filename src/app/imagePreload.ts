import biaChuong1 from "../imports/bia_chuong1.JPG";
import img2272 from "../imports/IMG_2272.JPG";
import eventCrowd from "../imports/656004211_866480449779741_7990508900861967897_n.jpg";
import eventColor from "../imports/z7716763529757_5036ad59810120b5aba05f65287d4727.jpg";
import chuong3_1 from "../imports/chuong3_1.jpg";
import chuong3_2 from "../imports/Chuong3_2.jpg";
import chuong3_3 from "../imports/Chuong3_3.png";
import chuong3_4 from "../imports/Chuong3_4.jpg";

const preloadedImages = new Map<string, HTMLImageElement>();

export const chapterImageSources = [
  biaChuong1,
  img2272,
  eventCrowd,
  eventColor,
  chuong3_1,
  chuong3_2,
  chuong3_3,
  chuong3_4,
  "https://images.unsplash.com/photo-1763400126795-d83e07d3449e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWaWV0bmFtZXNlJTIwY3VsdHVyZSUyMGZhYnJpYyUyMHNpbGslMjBlbWJyb2lkZXJ5fGVufDF8fHx8MTc3NzM2NjExNXww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function preloadChapterImages() {
  if (typeof window === "undefined") return;

  for (const src of chapterImageSources) {
    if (!src || preloadedImages.has(src)) continue;

    const img = new Image();
    img.decoding = "async";
    img.src = src;
    preloadedImages.set(src, img);
  }
}
