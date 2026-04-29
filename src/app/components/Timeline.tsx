import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Info } from "lucide-react";

// Import images from Timeline folder
import m1Img from "../../imports/Timeline/dong-dao-ban-tre-tham-du_SCPD (1).jpg";
import m2Img from "../../imports/Timeline/mua2.jpg";
import m3Img from "../../imports/Timeline/z7771927096680_82f51c2b29a3fc0cb74d266dd44cdba3.jpg";
import m4Img from "../../imports/Timeline/img-8074-6235.avif";
import odysseyImg from "../../imports/Timeline/odyssey.jpg";
import m5Img from "../../imports/Timeline/bazaarvietnam-miss-cosmo-2024-va-a-hau-miss-cosmo-2024-thich-thu-mac-viet-phuc-thum.jpg";
import bhbhImg from "../../imports/Timeline/233A5413-1741404929.webp";
import m6Img from "../../imports/Timeline/tocxanhvatao2026khoanguyen18-1774089616213.webp";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  time: string;
  location: string;
  scale?: string;
  composition?: string;
  image: string;
}

const events: TimelineEvent[] = [
  {
    id: "m1",
    year: "2021",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 1",
    time: "10/01/2021",
    location: "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG-HCM",
    scale: "Khoảng 3.000 người tham gia",
    image: m1Img,
  },
  {
    id: "m2",
    year: "2022",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 2",
    time: "13/3/2022",
    location: "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG-HCM",
    scale: "Hàng nghìn lượt tham dự",
    image: m2Img,
  },
  {
    id: "m3",
    year: "2023",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 3",
    time: "23/04/2023",
    location: "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG-HCM",
    scale: "15 đơn vị văn hoá & 18 gian hàng trải nghiệm",
    image: m3Img,
  },
  {
    id: "m4",
    year: "2024",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 4",
    time: "24/03/2024",
    location: "Trường Đại học Khoa học Xã hội và Nhân văn - ĐHQG-HCM",
    scale: "Khoảng 6.000 người tham dự\nHơn 30 gian hàng trải nghiệm",
    image: m4Img,
  },
  {
    id: "odyssey",
    year: "2024",
    title: "Triển lãm & Trải nghiệm cổ phục “Việt phục Odyssey”",
    time: "04/05/2024",
    location: "Nhà Văn hóa Sinh viên TP.HCM",
    scale: "Hàng nghìn sinh viên tham gia",
    image: odysseyImg,
  },
  {
    id: "m5",
    year: "2025",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 5",
    time: "22-23/03/2025",
    location: "đường Phạm Ngọc Thạch và Đại học KHXH&NV TP.HCM",
    scale: "• Hơn 1.000 người tham gia đồng diễn\n• Hơn 30 đơn vị văn hoá\n• Góp mặt nghệ sĩ: Phương Thanh, Denis Đặng...",
    image: m5Img,
  },
  {
    id: "bhbh",
    year: "2025",
    title: "Diễu hành Việt phục “Bách Hoa Bộ Hành”",
    time: "08/03/2025",
    location: "Tuyến đường trung tâm Quận 1",
    scale: "Khoảng 1.000 người diễu hành\n30 đơn vị cổ phục",
    image: bhbhImg,
  },
  {
    id: "m6",
    year: "2026",
    title: "Ngày hội Việt phục “Tóc Xanh Vạt Áo” - Mùa 6 (lần VII)",
    time: "21-22/03/2026",
    location: "Từ Hồ Con Rùa đến Công viên Phan Đình Phùng",
    scale: "Hơn 1.000 người tham gia",
    image: m6Img,
  },
];

const DRAG_THRESHOLD = 50;

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const activeEvent = events[activeIndex];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const buttons = scrollContainerRef.current.querySelectorAll(".timeline-point");
      const targetButton = buttons[index] as HTMLElement;
      if (targetButton) {
        const containerWidth = scrollContainerRef.current.offsetWidth;
        const buttonLeft = targetButton.offsetLeft;
        const buttonWidth = targetButton.offsetWidth;
        
        scrollContainerRef.current.scrollTo({
          left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => Math.min(events.length - 1, prev + 1));
  };

  const onDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    if (offset < -DRAG_THRESHOLD && activeIndex < events.length - 1) {
      handleNext();
    } else if (offset > DRAG_THRESHOLD && activeIndex > 0) {
      handlePrev();
    }
  };

  return (
    <section className="bg-[var(--ivory)] py-32 px-6 relative overflow-hidden min-h-screen flex flex-col justify-center">
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Premium Vietnamese Font Support */
        .viet-serif { font-family: "Playfair Display", "Times New Roman", serif; }
        .viet-sans { font-family: "Inter", "Segoe UI", Roboto, sans-serif; }
      `}} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="text-[var(--bronze)] viet-sans tracking-[0.4em] uppercase text-xs mb-4 block opacity-60">The Journey</span>
          <h2
            className="text-[var(--deep-brown)] viet-serif"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Hành trình lan tỏa Việt phục
          </h2>
        </motion.div>

        {/* ── Premium Scrubber Navigation ─────────────────────────── */}
        <div className="relative mb-40 group max-w-full">
          <div className="absolute left-0 right-0 top-6 h-[1px] bg-[var(--bronze)]/10" />
          <motion.div 
            className="absolute left-0 top-6 h-[2px] bg-gradient-to-r from-[var(--bronze)]/20 via-[var(--bronze)] to-[var(--bronze)]/20 z-10 origin-left"
            animate={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          <div 
            ref={scrollContainerRef}
            className="relative flex items-start gap-40 overflow-x-auto py-3 px-[45%] no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          >
            {events.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => setActiveIndex(idx)}
                className="timeline-point relative flex-shrink-0 flex flex-col items-center group snap-center"
                style={{ width: "160px" }}
              >
                <div className="relative mb-10 z-20">
                  <motion.div 
                    animate={{ 
                      scale: activeIndex === idx ? 1.6 : 1,
                      backgroundColor: activeIndex === idx ? "var(--bronze)" : "white",
                      borderColor: activeIndex === idx ? "var(--bronze)" : "var(--bronze)",
                      borderWidth: activeIndex === idx ? "0px" : "1.5px"
                    }}
                    className="w-3.5 h-3.5 rounded-full shadow-sm transition-all duration-300" 
                  />
                  {activeIndex === idx && (
                    <motion.div 
                      layoutId="active-ring"
                      className="absolute -inset-3 rounded-full border border-[var(--bronze)]/30"
                    />
                  )}
                </div>

                <div className={`text-center transition-all duration-700 ${activeIndex === idx ? "opacity-100" : "opacity-30"}`}>
                  <div className="text-[var(--bronze)] viet-serif font-bold text-3xl tracking-tighter mb-3">
                    {event.year}
                  </div>
                  <div className="text-[var(--deep-brown)] viet-sans text-[9px] uppercase tracking-[0.2em] font-semibold max-w-[140px] mx-auto leading-relaxed">
                    {event.title.split("“")[1]?.split("”")[0] || event.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Stable Immersive Content Card ────────────────────────── */}
        <div className="relative px-4 lg:px-12 max-w-6xl mx-auto h-[750px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={onDragEnd}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-[0_60px_120px_-40px_rgba(46,26,23,0.15)] border border-[var(--bronze)]/5 cursor-grab active:cursor-grabbing w-full h-full"
            >
              <div className="grid lg:grid-cols-2 gap-0 h-full">
                <div className="relative h-[350px] lg:h-full overflow-hidden bg-[var(--deep-brown)]">
                  <ImageWithFallback
                    src={activeEvent.image}
                    alt={activeEvent.title}
                    className="w-full h-full object-cover opacity-95 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
                </div>

                <div className="p-10 lg:p-16 flex flex-col justify-center h-full relative bg-[var(--ivory)]/10 backdrop-blur-xl">
                  {/* Background Watermark */}
                  <div className="absolute top-0 right-0 text-[18rem] viet-serif font-bold text-[var(--bronze)]/[0.04] select-none pointer-events-none translate-x-1/3 -translate-y-1/3 leading-none">
                    {activeEvent.year}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative z-10"
                  >
                    <div className="mb-10 min-h-[120px] flex items-center border-l-4 border-[var(--bronze)] pl-8">
                      <h3 className="text-[var(--deep-brown)] viet-serif text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
                        {activeEvent.title}
                      </h3>
                    </div>

                    <div className="space-y-6 lg:space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--bronze)] shadow-sm border border-[var(--bronze)]/10 flex-shrink-0">
                          <Calendar size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--bronze)] font-bold mb-1.5 opacity-50">Thời gian</span>
                          <span className="text-[var(--deep-brown)] viet-sans text-lg lg:text-xl font-medium tracking-tight">{activeEvent.time}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--bronze)] shadow-sm border border-[var(--bronze)]/10 flex-shrink-0">
                          <MapPin size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--bronze)] font-bold mb-1.5 opacity-50">Địa điểm</span>
                          <span className="text-[var(--deep-brown)] viet-sans text-lg lg:text-xl font-medium leading-relaxed tracking-tight">{activeEvent.location}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-6">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--bronze)] shadow-sm border border-[var(--bronze)]/10 flex-shrink-0">
                          <Users size={20} />
                        </div>
                        <div className="flex-1">
                          <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--bronze)] font-bold mb-1.5 opacity-50">Quy mô</span>
                          <div className="text-[var(--deep-brown)] viet-sans text-base lg:text-lg font-normal tracking-tight whitespace-pre-line leading-snug">
                            {activeEvent.scale || "Đang cập nhật..."}
                          </div>
                        </div>
                      </div>

                      {(activeEvent.composition) && (
                        <div className="flex items-start gap-6">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[var(--bronze)] shadow-sm border border-[var(--bronze)]/10 flex-shrink-0">
                            <Info size={20} />
                          </div>
                          <div className="flex-1">
                            <span className="block text-[9px] uppercase tracking-[0.2em] text-[var(--bronze)] font-bold mb-1.5 opacity-50">Thành phần / Ghi chú</span>
                            <p className="text-[var(--deep-brown)] viet-sans text-sm lg:text-base leading-relaxed opacity-80">
                              {activeEvent.composition}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <div className="hidden xl:block">
            <button 
              onClick={handlePrev}
              className="absolute left-[-80px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border border-[var(--bronze)]/5 text-[var(--bronze)] shadow-xl hover:bg-[var(--bronze)] hover:text-white transition-all disabled:opacity-0 group"
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={28} className="mx-auto group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white border border-[var(--bronze)]/5 text-[var(--bronze)] shadow-xl hover:bg-[var(--bronze)] hover:text-white transition-all disabled:opacity-0 group"
              disabled={activeIndex === events.length - 1}
            >
              <ChevronRight size={28} className="mx-auto group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
