import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import HTMLFlipBook from "react-pageflip";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from "lucide-react";

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

interface TimelinePageProps {
  event: TimelineEvent;
}

const TimelineImagePage = forwardRef<HTMLDivElement, TimelinePageProps>(({ event }, ref) => (
  <article ref={ref} className="timeline-page h-full w-full overflow-hidden bg-[var(--deep-brown)]">
    <div className="relative h-full w-full">
      <ImageWithFallback
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover opacity-95"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/18" />
      <div className="absolute left-7 top-7 rounded-full bg-[#fff8ec]/95 px-5 py-2.5 text-sm font-bold tracking-[0.18em] text-[var(--bronze)] shadow-lg viet-sans">
        {event.year}
      </div>
    </div>
  </article>
));

TimelineImagePage.displayName = "TimelineImagePage";

const TimelineInfoPage = forwardRef<HTMLDivElement, TimelinePageProps>(({ event }, ref) => (
  <article ref={ref} className="timeline-page h-full w-full overflow-hidden bg-[#fff8ec]">
    <div className="relative flex h-full flex-col justify-center overflow-hidden px-12 py-10">
      <div className="pointer-events-none absolute right-[-2.5rem] top-[-2.5rem] select-none text-[12rem] font-bold leading-none text-[var(--bronze)]/[0.055] viet-serif">
        {event.year}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-[var(--bronze)]/24 to-transparent" />

      <div className="relative z-10">
        <div className="mb-8 border-l-4 border-[var(--bronze)] pl-6">
          <h3 className="line-clamp-3 text-3xl font-semibold leading-tight tracking-tight text-[var(--deep-brown)] viet-serif">
            {event.title}
          </h3>
        </div>

        <div className="space-y-6 text-[var(--deep-brown)]">
          <TimelineDetail icon={<Calendar size={19} />} label="Thời gian">
            <span className="text-lg font-bold tracking-tight viet-sans">{event.time}</span>
          </TimelineDetail>

          <TimelineDetail icon={<MapPin size={19} />} label="Địa điểm">
            <span className="line-clamp-4 text-lg font-semibold leading-snug viet-sans">
              {event.location}
            </span>
          </TimelineDetail>

          <TimelineDetail icon={<Users size={19} />} label="Quy mô">
            <span className="line-clamp-5 whitespace-pre-line text-base font-medium leading-snug viet-sans">
              {event.scale || "Đang cập nhật..."}
            </span>
          </TimelineDetail>
        </div>
      </div>
    </div>
  </article>
));

TimelineInfoPage.displayName = "TimelineInfoPage";

function TimelineDetail({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--bronze)]/10 bg-white text-[var(--bronze)] shadow-sm">
        {icon}
      </div>
      <div className="flex-1">
        <span className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--bronze)] opacity-50">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const flipBookRef = useRef<any>(null);

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;

    const buttons = scrollContainerRef.current.querySelectorAll(".timeline-point");
    const targetButton = buttons[index] as HTMLElement;
    if (!targetButton) return;

    const containerWidth = scrollContainerRef.current.offsetWidth;
    const buttonLeft = targetButton.offsetLeft;
    const buttonWidth = targetButton.offsetWidth;

    scrollContainerRef.current.scrollTo({
      left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToIndex(activeIndex);
  }, [activeIndex]);

  const flipToIndex = (index: number) => {
    const safeIndex = Math.max(0, Math.min(events.length - 1, index));
    flipBookRef.current?.pageFlip()?.flip(safeIndex * 2, "top");
  };

  const handlePrev = () => {
    flipBookRef.current?.pageFlip()?.flipPrev("top");
  };

  const handleNext = () => {
    flipBookRef.current?.pageFlip()?.flipNext("top");
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[var(--ivory)] px-6 py-32">
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .viet-serif { font-family: "Playfair Display", "Times New Roman", serif; }
        .viet-sans { font-family: "Inter", "Segoe UI", Roboto, sans-serif; }
        .timeline-flipbook { margin: 0 auto !important; filter: drop-shadow(0 52px 70px rgba(46, 26, 23, 0.18)); }
        .timeline-flipbook .page { border-radius: 2.35rem; overflow: hidden; background: white; }
        .timeline-page { box-shadow: inset -18px 0 28px rgba(96, 61, 36, 0.08), inset 1px 0 0 rgba(255, 255, 255, 0.8); }
        @media (prefers-reduced-motion: reduce) {
          .timeline-flipbook { transition: none !important; }
        }
      `}} />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-[var(--bronze)] opacity-60 viet-sans">The Journey</span>
          <h2
            className="text-[var(--deep-brown)] viet-serif"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Hành trình lan tỏa Việt phục
          </h2>
        </motion.div>

        <div className="group relative mb-40 max-w-full">
          <div className="absolute left-0 right-0 top-6 h-px bg-[var(--bronze)]/10" />
          <motion.div
            className="absolute left-0 top-6 z-10 h-[2px] origin-left bg-gradient-to-r from-[var(--bronze)]/20 via-[var(--bronze)] to-[var(--bronze)]/20"
            animate={{ width: `${(activeIndex / (events.length - 1)) * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          />

          <div
            ref={scrollContainerRef}
            className="no-scrollbar relative flex cursor-grab snap-x snap-mandatory items-start gap-40 overflow-x-auto px-[45%] py-3 active:cursor-grabbing"
          >
            {events.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => flipToIndex(idx)}
                className="timeline-point group relative flex flex-shrink-0 snap-center flex-col items-center"
                style={{ width: "160px" }}
              >
                <div className="relative z-20 mb-10">
                  <motion.div
                    animate={{
                      scale: activeIndex === idx ? 1.6 : 1,
                      backgroundColor: activeIndex === idx ? "var(--bronze)" : "white",
                      borderColor: "var(--bronze)",
                      borderWidth: activeIndex === idx ? "0px" : "1.5px",
                    }}
                    className="h-3.5 w-3.5 rounded-full shadow-sm transition-all duration-300"
                  />
                  {activeIndex === idx && (
                    <motion.div
                      layoutId="active-ring"
                      className="absolute -inset-3 rounded-full border border-[var(--bronze)]/30"
                    />
                  )}
                </div>

                <div className={`text-center transition-all duration-700 ${activeIndex === idx ? "opacity-100" : "opacity-30"}`}>
                  <div className="mb-3 text-3xl font-bold tracking-tighter text-[var(--bronze)] viet-serif">
                    {event.year}
                  </div>
                  <div className="mx-auto max-w-[140px] text-[9px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-[var(--deep-brown)] viet-sans">
                    {event.title.split("“")[1]?.split("”")[0] || event.title}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[600px] max-w-[1030px] px-4 lg:px-8">
          <div className="absolute inset-x-8 bottom-[-14px] h-12 rounded-b-[2.5rem] bg-[var(--deep-brown)]/10 blur-2xl lg:inset-x-10" />
          <div className="absolute inset-x-8 inset-y-0 rounded-[2.5rem] border border-[var(--bronze)]/10 bg-[#f4ead9] shadow-[0_30px_90px_-60px_rgba(46,26,23,0.3)] lg:inset-x-10" />

          <div className="relative z-10 flex h-full items-center justify-center">
            <HTMLFlipBook
              ref={flipBookRef}
              width={480}
              height={600}
              size="stretch"
              minWidth={320}
              maxWidth={480}
              minHeight={520}
              maxHeight={600}
              drawShadow
              flippingTime={850}
              usePortrait={false}
              startZIndex={10}
              autoSize
              maxShadowOpacity={0.42}
              showCover={false}
              mobileScrollSupport={false}
              swipeDistance={24}
              clickEventForward
              useMouseEvents
              className="timeline-flipbook rounded-[3rem]"
              style={{}}
              startPage={0}
              onFlip={(event: { data: number }) => setActiveIndex(Math.floor(Number(event.data) / 2))}
            >
              {events.flatMap((event) => [
                <TimelineImagePage key={`${event.id}-image`} event={event} />,
                <TimelineInfoPage key={`${event.id}-info`} event={event} />,
              ])}
            </HTMLFlipBook>
          </div>

          <div className="hidden xl:block">
            <button
              onClick={handlePrev}
              className="group absolute left-[-80px] top-1/2 z-20 h-14 w-14 -translate-y-1/2 rounded-full border border-[var(--bronze)]/5 bg-white text-[var(--bronze)] shadow-xl transition-all hover:bg-[var(--bronze)] hover:text-white disabled:opacity-0"
              disabled={activeIndex === 0}
            >
              <ChevronLeft size={28} className="mx-auto transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group absolute right-[-80px] top-1/2 z-20 h-14 w-14 -translate-y-1/2 rounded-full border border-[var(--bronze)]/5 bg-white text-[var(--bronze)] shadow-xl transition-all hover:bg-[var(--bronze)] hover:text-white disabled:opacity-0"
              disabled={activeIndex === events.length - 1}
            >
              <ChevronRight size={28} className="mx-auto transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
