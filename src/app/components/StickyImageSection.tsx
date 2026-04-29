import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProgressiveImg } from "./ProgressiveImg";
import img6716 from "../../imports/IMG_6716.JPG";
import hs4 from "../../imports/hs4.jpg";

interface ImageEntry {
  src: string;
  alt: string;
  caption?: string;
}

const IMAGES: ImageEntry[] = [
  {
    src: img6716,
    alt: "Các bạn trẻ tự tin trong trang phục truyền thống trên phố",
  },
  {
    src: hs4,
    alt: "Chi tiết hoa văn trên Việt phục",
  },
];

const TEXT_BLOCKS = [
  {
    heading: "Kiến thức đến từ tình yêu",
    body: [
      `Là người trẻ yêu văn hóa, Hồng Sơn đã sớm tìm hiểu về Việt phục. Anh có thể nhận diện ngay các kiểu Việt phục, từ Áo tấc, Nhật Bình, ngũ thân tay chẽn đến giao lĩnh, viên lĩnh. Với Hồng Sơn, kiến thức này đến rất tự nhiên và với anh đó là điều bạn trẻ yêu truyền thống nào cũng có thể làm được.`,
      `“Mình chỉ là hạt cát nhỏ thôi. Hiện nay, giới trẻ đóng vai trò rất lớn trong việc nghiên cứu, phỏng dựng giá trị của cha ông, từ trang phục đến văn hóa, nghi lễ, ẩm thực… Đó là tín hiệu rất đáng mừng”, Hồng Sơn chia sẻ.`,
    ],
    imageIndex: 0,
  },
  {
    heading: "Sự phục dựng của thế hệ số",
    body: [
      `Quả thật vậy, từ sự phát triển của công nghệ thông tin cùng niềm yêu thích văn hóa truyền thống, các bạn trẻ luôn cố gắng phục dựng nhiều giá trị xưa cũ, trong đó có Việt phục. Trang phục truyền thống của Việt Nam không chỉ có áo dài, áo tứ thân, áo ngũ thân, áo bà ba…`,
      `Trên dòng chảy lịch sử Việt, cổ phục của dân tộc ta rất đa dạng về kiểu dáng và thiết kế. Chính những nỗ lực của các bạn trẻ đã góp phần lớn làm nên sự thành công của Tóc Xanh Vạt Áo mùa 6 cùng nhiều sự kiện Việt phục khác.`,
    ],
    imageIndex: 1,
  },
  {
    heading: "Văn hóa còn thì dân tộc còn",
    body: [
      `Không đơn thuần chỉ là một trào lưu, tình yêu Việt phục xuất phát từ tình yêu dân tộc, yêu lấy những nét đẹp văn hóa truyền thống. Từng tà áo thướt tha, từng đường kim mũi chỉ, từng nét hoa văn tỉ mỉ… là cả một câu chuyện, mang hơi thở hồn xưa.`,
      `Cố Tổng Bí Thư Nguyễn Phú Trọng từng nhấn mạnh tầm quan trọng của việc lưu giữ hồn thiêng cha ông: “Văn hóa còn thì dân tộc còn”. Cách người trẻ trân trọng, chú tâm tìm hiểu và phục dựng Việt phục là minh chứng cho thấy thế hệ tương lai đang thực hiện sứ mệnh với đất nước, dân tộc.`,
    ],
    imageIndex: 1, // Repeat the detail image or stick to the previous one
  },
];

export function StickyImageSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = TEXT_BLOCKS.map((block, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(block.imageIndex);
        },
        { threshold: 0.45, rootMargin: "-10% 0px -10% 0px" }
      );
      if (blockRefs.current[i]) obs.observe(blockRefs.current[i]!);
      return obs;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const currentImage = IMAGES[activeIndex];

  return (
    <section className="bg-[var(--ivory)] py-16 px-6">
      <div className="max-w-[1180px] mx-auto">
        <div className="lg:grid lg:grid-cols-[52%_1fr] lg:gap-16 items-start">

          {/* ── Left: sticky image ──────────────────────────────────────── */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <div
              className="relative"
              style={{
                height: "auto",
                maxHeight: "85vh",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  className="relative" // Changed from absolute inset-0 to allow auto height
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <ProgressiveImg
                    src={currentImage.src}
                    alt={currentImage.alt}
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Caption moved BELOW the image container */}
            <div className="mt-4 px-2">
              <AnimatePresence mode="wait">
                {currentImage.caption && (
                  <motion.div
                    key={`caption-${activeIndex}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p
                      className="text-[var(--deep-brown)] italic opacity-70"
                      style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", lineHeight: 1.5 }}
                    >
                      {currentImage.caption}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right: scrollable text ───────────────────────────────────── */}
          <div className="space-y-24 pt-4 pb-16">
            {TEXT_BLOCKS.map((block, i) => (
              <div
                key={i}
                ref={(el) => { blockRefs.current[i] = el; }}
              >
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Paragraphs */}
                  <div className="space-y-5">
                    {block.body.map((para, j) => (
                      <p
                        key={j}
                        className="text-[var(--deep-brown)]"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.85 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Mobile-only image */}
                  <div
                    className="lg:hidden mt-8 relative overflow-hidden"
                    style={{ height: "55vw", minHeight: "240px", background: "#2e1a17", borderRadius: "3px" }}
                  >
                    <ProgressiveImg
                      src={IMAGES[block.imageIndex].src}
                      alt={IMAGES[block.imageIndex].alt}
                      wrapperClass="w-full h-full"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                    {IMAGES[block.imageIndex].caption && (
                      <div
                        className="absolute bottom-0 left-0 right-0 px-4 py-3"
                        style={{ background: "rgba(46,26,23,0.72)" }}
                      >
                        <p
                          className="text-[var(--ivory)]/80 italic"
                          style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem" }}
                        >
                          {IMAGES[block.imageIndex].caption}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}