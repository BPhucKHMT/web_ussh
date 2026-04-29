import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import hs2 from "../../imports/hs2.jpg";

export function IntroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[var(--ivory)] relative overflow-hidden">
      {/* Subtle Grain Overlay for the whole section */}
      <div
        className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 py-24 relative z-20">
        {/* ── First Paragraph with Drop Cap ────────────────────────────────── */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p
            className="text-[var(--deep-brown)] leading-relaxed text-justify"
            style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", lineHeight: 1.8 }}
          >
            <span
              className="float-left text-[var(--bronze)] mr-4 mt-1 select-none"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "6rem",
                lineHeight: "0.8",
                fontWeight: 700,
              }}
            >
              G
            </span>
            iữa phố thị sầm uất, thật lạ lùng khi bắt gặp những “cổ nhân” đang thực hiện các bước nhảy hiện đại. Thay vì trang phục năng động thường ngày, hàng trăm bạn trẻ khoác lên mình Việt phục rực rỡ với hoa văn tỉ mỉ. Trong dòng người ấy, Phan Hồng Sơn (22 tuổi, Tp.HCM) thu hút sự chú ý trong trang phục trực lĩnh đại khâm thời Lê Trung Hưng. Đây là kiểu áo có sắc đen tuyền, tay thụng và bảng cổ chìm.
          </p>
        </motion.div>

        {/* ── Cinematic Full-Width Image (Updated to object-contain) ──────────────── */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mb-24 overflow-hidden"
        >
          <div
            className="group relative w-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(75,46,43,0.2)]"
            style={{
              height: "clamp(420px, 72vh, 760px)",
              background: "var(--ivory)"
            }}
          >
            <ImageWithFallback
              src={hs2}
              alt="Phan Hồng Sơn trong trang phục trực lĩnh đại khâm"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              className="transition duration-700 ease-out group-hover:scale-[1.035] group-hover:brightness-[1.04]"
            />
          </div>
        </motion.figure>

        {/* ── Second Paragraph & Quote ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center max-w-6xl mx-auto"
        >
          <div className="space-y-8">
            <p
              className="text-[var(--deep-brown)] leading-relaxed text-justify"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.15rem", lineHeight: 1.8 }}
            >
              Tuy là lần đầu tham gia Tóc Xanh Vạt Áo - một sự kiện Việt phục lớn tại Tp.HCM, Hồng Sơn vẫn nhanh chóng bắt nhịp và hăng hái tham gia mọi hoạt động.
            </p>
          </div>

          <div className="relative">
            <div
              className="p-10 relative overflow-hidden group shadow-2xl"
              style={{ background: "var(--deep-teal)", borderRadius: "2px" }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--silk-gold)]/20 -mr-4 -mt-4" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[var(--silk-gold)]/20 -ml-4 -mb-4" />
              
              <blockquote
                className="text-[var(--ivory)] italic"
                style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", lineHeight: 1.6 }}
              >
                “Ban đầu mình tham gia vì tò mò và muốn trải nghiệm sự khác biệt giữa Tóc Xanh Vạt Áo với các sự kiện Việt phục khác. Giờ đây, mình càng mong muốn trở thành một phần của tiết mục trình diễn để tái hiện bức tranh lịch sử Việt Nam hào hùng, tươi đẹp”.
              </blockquote>
              <div
                className="mt-8 flex items-center gap-4 text-[var(--silk-gold)]"
                style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem" }}
              >
                <div className="w-8 h-px bg-[var(--silk-gold)]" />
                <span className="font-semibold uppercase tracking-widest text-xs">Hồng Sơn chia sẻ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
