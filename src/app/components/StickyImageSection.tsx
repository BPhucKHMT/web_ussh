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

          {/* ── Left: clean editorial image panel ───────────────────────── */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <div className="relative max-w-[470px] mx-auto">
              <div className="absolute -inset-5 rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(230,194,122,0.18),rgba(192,133,82,0.07))]" />
              <div
                className="relative overflow-hidden rounded-[1.15rem] bg-[#fbf3e7] shadow-[0_24px_70px_rgba(69,37,31,0.13)] ring-1 ring-[var(--bronze)]/10"
                style={{ height: "clamp(430px, 66vh, 640px)" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    className="absolute inset-0 flex items-center justify-center p-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.55, ease: "easeInOut" }}
                  >
                    <ProgressiveImg
                      src={currentImage.src}
                      alt={currentImage.alt}
                      wrapperClass="w-full h-full flex items-center justify-center"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ── Right: article text ──────────────────────────────────────── */}
          <div className="space-y-16 pt-2 pb-16 lg:pt-8">
            {TEXT_BLOCKS.map((block, i) => (
              <section
                key={i}
                ref={(el) => { blockRefs.current[i] = el; }}
                className="relative border-l border-[var(--bronze)]/20 pl-7"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65 }}
                >
                  <div className="space-y-5">
                    {block.body.map((para, j) => (
                      <p
                        key={j}
                        className="text-[var(--deep-brown)]/90"
                        style={{ fontFamily: "var(--font-sans)", fontSize: "1.06rem", lineHeight: 1.9 }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>

                  {/* Mobile-only image */}
                  <div
                    className="lg:hidden mt-8 relative overflow-hidden rounded-[1rem] bg-[#fbf3e7] shadow-[0_18px_45px_rgba(69,37,31,0.10)]"
                    style={{ height: "55vw", minHeight: "260px" }}
                  >
                    <ProgressiveImg
                      src={IMAGES[block.imageIndex].src}
                      alt={IMAGES[block.imageIndex].alt}
                      wrapperClass="w-full h-full flex items-center justify-center"
                      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                    />
                  </div>
                </motion.div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}