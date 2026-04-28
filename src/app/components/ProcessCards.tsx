import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Tra cứu tư liệu",
    description: "Nghiên cứu sách cổ, hình ảnh lịch sử, tranh vẽ thời xưa để hiểu cấu trúc, hoa văn, màu sắc của từng loại trang phục.",
  },
  {
    number: "02",
    title: "Đối chiếu hiện vật",
    description: "So sánh với hiện vật còn lưu giữ tại bảo tàng, tư liệu từ các nhà sưu tập để đảm bảo tính chính xác.",
  },
  {
    number: "03",
    title: "Vẽ hoa văn",
    description: "Tái tạo các họa tiết truyền thống: long, ly, quy, phượng, hoa sen, hoa cúc... theo đúng phong cách từng triều đại.",
  },
  {
    number: "04",
    title: "Chọn chất liệu",
    description: "Lựa chọn vải phù hợp: lụa, gấm, vải thổ cẩm... vừa trung thành với lịch sử, vừa phù hợp với khí hậu Việt Nam.",
  },
  {
    number: "05",
    title: "May dựng mẫu",
    description: "Cắt may theo kỹ thuật truyền thống, điều chỉnh số đo để vừa vặn với cơ thể người Việt hiện đại.",
  },
  {
    number: "06",
    title: "Điều chỉnh cho đời sống",
    description: "Cải tiến một số chi tiết để phù hợp với sinh hoạt hàng ngày: túi trong, khuy kéo, vải thoáng mát hơn.",
  },
];

export function ProcessCards() {
  return (
    <section className="bg-gradient-to-b from-[var(--ivory)] to-[var(--background)] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3
          className="text-center mb-4 text-[var(--deep-brown)]"
          style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 600 }}
        >
          Quy trình tái tạo một bộ Việt phục
        </h3>
        <p
          className="text-center mb-16 text-[var(--wood-brown)] max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem" }}
        >
          "Làm cổ phục là làm khoa học. Mỗi mũi kim đều cần có căn cứ lịch sử."
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[var(--bronze)]"
            >
              <div
                className="text-[var(--bronze)] mb-3"
                style={{ fontFamily: "var(--font-serif)", fontSize: "2.5rem", fontWeight: 600 }}
              >
                {step.number}
              </div>
              <h4
                className="mb-3 text-[var(--deep-brown)]"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem", fontWeight: 600 }}
              >
                {step.title}
              </h4>
              <p
                className="text-[var(--wood-brown)] leading-relaxed"
                style={{ fontFamily: "var(--font-sans)", fontSize: "1rem" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
