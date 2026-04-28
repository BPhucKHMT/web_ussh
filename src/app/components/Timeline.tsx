import { useState } from "react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

const events: TimelineEvent[] = [
  {
    year: "2021",
    title: "Khởi đầu của phong trào",
    description: "Các cộng đồng Việt phục lan tỏa mạnh trên mạng xã hội.",
    image: "https://images.unsplash.com/photo-1759671826216-a722dc6febb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWaWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZyUyMGFvJTIwZGFpJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzc3MzY2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: "2022",
    title: "Nghiên cứu và học hỏi",
    description: "Workshop, talkshow, chụp ảnh cổ phong xuất hiện nhiều hơn.",
    image: "https://images.unsplash.com/photo-1763400126795-d83e07d3449e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWaWV0bmFtZXNlJTIwY3VsdHVyZSUyMGZhYnJpYyUyMHNpbGslMjBlbWJyb2lkZXJ5fGVufDF8fHx8MTc3NzM2NjExNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: "2023",
    title: "Workshop và cộng đồng",
    description: "Tóc Xanh Vạt Áo và Bách Hoa Bộ Hành mở rộng quy mô.",
    image: "https://images.unsplash.com/photo-1775471234117-adff84750dd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBwYXR0ZXJuJTIwY3JhZnQlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzczNjYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: "2024",
    title: "Việt phục trong đời sống",
    description: "Việt phục bước vào trường học, không gian đô thị và sự kiện văn hóa.",
    image: "https://images.unsplash.com/photo-1767603308062-07ac70a9c689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxWaWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZyUyMGFvJTIwZGFpJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzc3MzY2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: "2025",
    title: "Sự công nhận rộng rãi",
    description: "Kết nối với nghệ sĩ, nhà thiết kế, truyền thông đại chúng.",
    image: "https://images.unsplash.com/photo-1763400234383-8b9ecbb9c043?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxWaWV0bmFtZXNlJTIwY3VsdHVyZSUyMGZhYnJpYyUyMHNpbGslMjBlbWJyb2lkZXJ5fGVufDF8fHx8MTc3NzM2NjExNXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    year: "2026",
    title: "Hiện tại và tương lai",
    description: "Mùa lễ hội rực rỡ, người trẻ tiếp tục đưa Việt phục vào đời sống.",
    image: "https://images.unsplash.com/photo-1761014219884-cfeb9d9b5de0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtZXNlJTIwdHJhZGl0aW9uYWwlMjBjbG90aGluZyUyMGFvJTIwZGFpJTIweW91bmclMjBwZW9wbGV8ZW58MXx8fHwxNzc3MzY2MTE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Timeline() {
  const [activeYear, setActiveYear] = useState("2021");

  const activeEvent = events.find((e) => e.year === activeYear);

  return (
    <section className="bg-gradient-to-b from-[var(--ivory)] to-[var(--background)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center mb-16 text-[var(--deep-brown)]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 600 }}
        >
          Dòng thời gian Việt phục trẻ: 2021–2026
        </h2>

        <div className="relative mb-12">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-[var(--wood-brown)]/30" />

          <div className="relative flex justify-between items-center">
            {events.map((event) => (
              <button
                key={event.year}
                onClick={() => setActiveYear(event.year)}
                className="relative group"
              >
                <div
                  className={`w-12 h-12 rounded-full border-3 transition-all ${
                    activeYear === event.year
                      ? "bg-[var(--bronze)] border-[var(--deep-teal)] shadow-lg scale-125"
                      : "bg-[var(--ivory)] border-[var(--bronze)] hover:scale-110"
                  }`}
                >
                  {activeYear === event.year && (
                    <motion.div
                      layoutId="timelineGlow"
                      className="absolute inset-0 rounded-full bg-[var(--silk-gold)] opacity-50 blur-md"
                    />
                  )}
                </div>
                <div
                  className={`absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap transition-all ${
                    activeYear === event.year ? "text-[var(--bronze)]" : "text-[var(--wood-brown)]"
                  }`}
                  style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
                >
                  {event.year}
                </div>
              </button>
            ))}
          </div>
        </div>

        {activeEvent && (
          <motion.div
            key={activeEvent.year}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-[var(--ivory)] rounded-2xl p-6 lg:p-10 shadow-xl relative overflow-hidden border border-[var(--wood-brown)]/10 mt-12"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232e1a17' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
            }}
          >
            <div className="h-[400px] rounded-lg overflow-hidden relative z-10">
              <ImageWithFallback
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <h3
                className="mb-4 text-[var(--deep-brown)]"
                style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 600 }}
              >
                {activeEvent.title}
              </h3>
              <p
                className="text-[var(--wood-brown)] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem" }}
              >
                {activeEvent.description}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
