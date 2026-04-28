import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import heroImg from "../../imports/DIEU_HANH_KHUNG_SACH_DUNG_TINH_THAN_NMA_BO_DO_KHAC.jpg";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const [pastHero, setPastHero] = useState(false);
  const [docHeight, setDocHeight] = useState(1);
  const [winHeight, setWinHeight] = useState(1);

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Dramatic scroll animations for a premium feel
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const update = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.8);
      setDocHeight(document.documentElement.scrollHeight);
      setWinHeight(window.innerHeight);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const totalProgress = useTransform(scrollY, [0, docHeight - winHeight], [0, 1]);

  return (
    <>
      {/* ── Sticky mini-header ─────── */}
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={pastHero ? { y: 0, opacity: 1 } : { y: -64, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4"
        style={{ 
          background: "rgba(75,46,43,0.92)", 
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(212,175,55,0.15)"
        }}
      >
        <span
          className="text-[var(--silk-gold)] tracking-[0.3em] uppercase font-semibold"
          style={{ fontFamily: "var(--font-sans)", fontSize: "0.8rem" }}
        >
          TÓC XANH, VẠT ÁO
        </span>
      </motion.header>

      {/* ── Reading progress bar ─────────────────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-[var(--silk-gold)] origin-left"
        style={{ scaleX: totalProgress, boxShadow: "0 0 10px rgba(212,175,55,0.5)" }}
      />

      {/* ── Hero section ─────────────────────────────────────────────────── */}
      <section
        ref={containerRef}
        id="mo"
        className="relative h-screen w-full overflow-hidden"
        style={{ background: "#3A2220" }}
      >
        {/* Background image with parallax + scale */}
        <motion.div
          className="absolute inset-0 w-full h-[120%]"
          style={{
            y: imgY,
            scale: imgScale,
          }}
        >
          <img
            src={heroImg}
            alt="Đoàn người mặc Việt phục rực rỡ"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            // @ts-ignore
            fetchPriority="high"
          />
        </motion.div>

        {/* Deep vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, rgba(75,46,43,0.2) 0%, rgba(58,34,32,0.6) 60%, rgba(45,26,24,1) 100%)",
          }}
        />

        {/* Grain layer */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            opacity: 0.06,
            mixBlendMode: "soft-light",
          }}
        />

        {/* Content with parallax exit */}
        <motion.div 
          style={{ y: titleY }}
          className="relative z-20 h-full flex flex-col items-center justify-end pb-[14vh] px-6 text-center"
        >
          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 8vw, 6rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              color: "var(--ivory)",
              textShadow: "0 10px 40px rgba(0,0,0,0.5)",
              maxWidth: "1000px",
              letterSpacing: "-0.02em"
            }}
          >
            TÓC XANH, VẠT ÁO
            <br />
            <span className="block mt-4" style={{ color: "var(--silk-gold)", fontSize: "0.45em", letterSpacing: "0.1em", fontWeight: 500 }}>
              KHI NGƯỜI TRẺ "MẶC LỊCH SỬ" LÊN MÌNH
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="mt-10 max-w-2xl text-[var(--ivory)]/90 leading-relaxed italic"
            style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            "Giữa phố thị sầm uất, những người trẻ khoác lên mình Việt phục — không chỉ để trình diễn, mà để kể lại một dòng chảy lịch sử bằng chính cơ thể mình."
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}