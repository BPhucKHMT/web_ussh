import { ChapterCover } from "../components/ChapterCover";
import { ArticleContent, DropCap, PullQuote } from "../components/ArticleContent";
import { Timeline } from "../components/Timeline";
import { NextChapter } from "../components/NextChapter";
import { ProgressiveImg } from "../components/ProgressiveImg";
import { motion } from "motion/react";
import biaChuong1 from "../../imports/bia_chuong1.JPG";
import img2272 from "../../imports/IMG_2272.JPG";
import eventCrowd from "../../imports/656004211_866480449779741_7990508900861967897_n.jpg";
import eventColor from "../../imports/z7716763529757_5036ad59810120b5aba05f65287d4727.jpg";

export function Chapter1Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[var(--ivory)] min-h-screen"
    >
      <ChapterCover
        id="chuong-1"
        number="Chương 1"
        title={'Không phải \u201cCosplay\u201d, đây là văn hoá'}
        description="Chiều tối 21/3, hơn một ngàn bạn trẻ trong những bộ Việt phục rực rỡ đã cùng xuống phố đồng diễn cho đêm hội Tóc Xanh Vạt Áo."
        image={biaChuong1}
      />

      <section className="py-24 px-6 bg-[var(--ivory)]">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-[var(--deep-brown)] mx-auto" style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}>
            <DropCap>
              Chiều tối 21/3, hơn một ngàn bạn trẻ trong những bộ Việt phục rực rỡ đã cùng xuống phố đồng diễn cho đêm hội Tóc Xanh Vạt Áo.
            </DropCap>
            <p>
              Để tạo nên sự thành công và vẻ đẹp đồng điệu cho sự kiện, họ đã cùng nhau luyện tập miệt mài nhiều ngày, dùng nhiệt huyết để tái hiện những câu chuyện lịch sử.
            </p>
            <p>
              Chúng tôi bắt gặp Lê Lâm Khánh My (21 tuổi, Tp.HCM) thướt tha trong kiểu áo ngũ thân tay chẽn màu xanh nhạt. Khi được hỏi về trang phục, Khánh My hào hứng "khoe": "Kiểu áo này tuy đơn giản, không đính kết cầu kỳ nhưng chính nét suông rộng, khoáng đạt ấy lại toát lên vẻ tinh tế và phong thái tự tại của người Việt xưa. Càng mặc, mình càng thấy yêu sự giản dị này".
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky image + text block 1 ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[var(--ivory)] relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative">

          {/* Sticky image column */}
          <div className="lg:sticky lg:top-24 order-2 lg:order-1 h-[85vh] flex flex-col justify-center pb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(75,46,43,0.2)" }}
            >
              <ProgressiveImg
                src={img2272}
                alt="Khánh My trong trang phục Việt phục"
                wrapperClass="w-full h-full"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <p className="text-[var(--wood-brown)] text-sm italic mt-4 text-center"
               style={{ fontFamily: "var(--font-sans)" }}>
              Khánh My (21 tuổi, Tp.HCM) thướt tha trong kiểu áo ngũ thân tay chẽn.
            </p>
          </div>

          {/* Text column */}
          <div className="order-1 lg:order-2 space-y-16 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="prose prose-lg text-[var(--deep-brown)] bg-[var(--ivory)] p-8 rounded-2xl border border-[var(--bronze)]/10 shadow-sm"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              <p>
                Nhìn cách Khánh My trân trọng tà áo trên người, chúng tôi hiểu cô cũng như bao người trẻ khác đều có tình yêu mãnh liệt đối với Việt phục. Là một sinh viên năm 3 ngành Báo chí - Truyền thông, Khánh My thường tham gia quay, chụp cho Tóc Xanh Vạt Áo các mùa trước. Những khi cầm máy ảnh tác nghiệp, cô sinh viên trẻ cảm nhận được sâu sắc bầu không khí sôi động của đêm hội.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="prose prose-lg text-[var(--deep-brown)] bg-[var(--ivory)] p-8 rounded-2xl border border-[var(--bronze)]/10 shadow-sm relative"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              <div className="absolute top-[-20px] left-4 text-[4rem] text-[var(--bronze)]/30 leading-none font-serif">"</div>
              <p className="relative z-10">
                Khi Tóc Xanh Vạt Áo mùa 6 quay trở lại, cô mong muốn được trực tiếp hòa mình và trở thành một phần của không gian văn hóa ấy. Khánh My tâm tình: <strong>"Mình tham gia trình diễn vì muốn được sống trọn vẹn trong bầu không khí văn hóa, được mặc trên người bộ Việt phục mà mình trân quý. Cảm giác được làm một 'đại sứ' thực thụ, tự tay chạm vào di sản và cùng mọi người lan tỏa hồn cốt dân tộc chính là cách mình chọn để tri ân những giá trị của cha ông".</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full-width image ──────────────────────────────────────────── */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        <figure className="w-full flex flex-col items-center">
          <div className="w-full rounded-xl overflow-hidden"
               style={{ boxShadow: "0 12px 40px rgba(75,46,43,0.15)" }}>
            <ProgressiveImg
              src={eventCrowd}
              alt="Sự thành công của đêm hội"
              wrapperClass="w-full"
              className="w-full h-auto object-contain"
              style={{ maxHeight: "90vh" }}
            />
          </div>
          <figcaption className="mt-4 text-center text-sm italic text-[var(--wood-brown)]"
                      style={{ fontFamily: "var(--font-sans)" }}>
            Đêm hội thu hút đông đảo người trẻ tham gia.
          </figcaption>
        </figure>
      </div>

      <ArticleContent>
        <p>
          Để nói đến sự thành công của đêm hội, không thể không nhắc đến là tinh thần nhiệt huyết và thái độ nghiêm túc của những người tham gia. Đêm hội không chỉ có lớp thanh niên đôi mươi mà còn có sự góp mặt của người lớn tuổi, tạo nên sự kết nối thế hệ rất đẹp. Cả hai thế hệ cùng trình diễn trên tinh thần đề cao sự chỉn chu, từ cách chọn trang phục đến cách thể hiện trên sân khấu.
        </p>
        <p>
          Khánh My vui vẻ nói với chúng tôi rằng đó là "tinh thần yêu sử, quý nghề". Cần phải công nhận rằng cách nói của cô đúng trong trường hợp này, khi mà tình yêu văn hóa - truyền thống làm bùng lên sức nóng của đêm hội.
        </p>
      </ArticleContent>

      {/* ── Sticky image + text block 2 ──────────────────────────────── */}
      <section className="py-20 px-6 bg-[var(--ivory)] relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start relative">

          <div className="lg:sticky lg:top-24 order-2 lg:order-1 h-[85vh] flex flex-col justify-center pb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full h-full flex items-center justify-center rounded-xl overflow-hidden"
              style={{ boxShadow: "0 20px 50px rgba(75,46,43,0.2)" }}
            >
              <ProgressiveImg
                src={eventColor}
                alt="Hình ảnh sự kiện"
                wrapperClass="w-full h-full"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <p className="text-[var(--wood-brown)] text-sm italic mt-4 text-center"
               style={{ fontFamily: "var(--font-sans)" }}>
              Một bức tranh Việt phục đa sắc màu.
            </p>
          </div>

          <div className="order-1 lg:order-2 space-y-16 lg:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="prose prose-lg text-[var(--deep-brown)] bg-[var(--ivory)] p-8 rounded-2xl border border-[var(--bronze)]/10 shadow-sm"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              <p>
                Chương trình đồng diễn Việt phục bắt đầu, hàng trăm ngọn cờ tung bay dưới khán đài sân khấu, đung đưa theo nhịp bài hát "Nhà tôi có một lá cờ". Khi được nhận xét là cô gái hát vang và nhiệt tình nhất, Trần Lâm Tú Anh (22 tuổi, Bình Dương) cười duyên với chúng tôi. Cô không giấu được sự tự hào và phấn khởi khi trở thành một phần của ngày hội Việt Phục lớn nhất trong năm.
              </p>
              <p>
                "Mình cảm nhận được các bạn trẻ cũng giống mình, ai cũng đau đáu tìm về những nét đẹp văn hóa - truyền thống". Đến với chương trình, cô diện tà áo dài truyền thống có chất liệu gấm, màu xanh lá đậm. Điểm thêm nhiều họa tiết nổi thêu bằng chỉ hồng như cánh hạc, hoa và cánh quạt.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="prose prose-lg text-[var(--deep-brown)] bg-[var(--ivory)] p-8 rounded-2xl border border-[var(--bronze)]/10 shadow-sm"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              <p>
                Một bức tranh Việt phục đa sắc màu. Màu đỏ phối với hoa văn ổ phụng của Nhật Bình, màu xanh nhạt của ngũ thân tay chẽn, màu xanh đậm của áo dài cho đến màu đen tuyền của chiếc trực lĩnh đại khâm. Sự đa dạng ấy cho thấy tương lai của bức tranh văn hóa nói chung và bức tranh Việt phục nói riêng, ngày càng rộng mở thêm đa sắc màu.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="prose prose-lg text-[var(--deep-brown)] bg-[var(--ivory)] p-8 rounded-2xl border border-[var(--bronze)]/10 shadow-sm relative"
              style={{ fontFamily: "var(--font-sans)", fontSize: "1.125rem", lineHeight: 1.8 }}
            >
              <div className="absolute top-[-20px] left-4 text-[4rem] text-[var(--bronze)]/30 leading-none font-serif">"</div>
              <p className="relative z-10">
                Tú Anh cho rằng: <strong>"Sự thành công của ngày hội là tín hiệu tốt cho thấy người trẻ đang dần tìm về giá trị văn hóa của cha ông. Điều này có thể chứng minh bởi hiệu ứng truyền thông cũng như số lượng người tham dự".</strong>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <ArticleContent>
        <p>
          Tóc Xanh Vạt Áo - một ngọn lửa lớn được thắp lên từ hàng trăm "ngọn lửa nhỏ" là những bạn trẻ như Khánh My và Tú Anh. Họ khoác lên mình bộ trang phục cổ xưa không phải vì mục đích thương mại hay chạy theo trào lưu, mà để lan tỏa tình yêu cội nguồn. Chính nhiệt huyết ấy đã tạo nên sức hút mãnh liệt cho đêm hội, khẳng định dòng chảy văn hóa vẫn luôn vẹn nguyên trong lòng thế hệ trẻ.
        </p>
      </ArticleContent>

      <section className="py-16 px-6 bg-[var(--bronze)]/5 border-t border-[var(--bronze)]/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--deep-brown)] text-xl leading-relaxed italic mb-8"
             style={{ fontFamily: "var(--font-sans)" }}>
            "Giai đoạn 2021 - 2026 đánh dấu bước ngoặt rực rỡ của cổ phong Việt với sự lên ngôi của hai sự kiện Việt phục lớn nhất cả nước: Tóc Xanh Vạt Áo và Bách Hoa Bộ Hành. Tóc Xanh Vạt Áo đã mang đến 6 mùa lễ hội đầy sức sống, từ giảng đường trường Đại học Khoa học Xã hội và Nhân văn (ĐHQG-HCM) ra đến các tuyến phố trung tâm TP.HCM. Bách Hoa Bộ Hành cũng đã tạo nên làn sóng diễu hành rầm rộ, kết nối dòng chảy văn hóa trải dài từ Hà Nội, Huế đến TP.HCM. Cùng với sự cộng hưởng của các chương trình như Việt phục Odyssey tại Nhà Văn hóa Sinh viên, bức tranh Việt phục đã mở rộng quy mô từ những buổi talkshow chuyên sâu đến các màn diễu hành hàng ngàn người, thu hút sự đồng hành của giới nghệ sĩ và các cơ quan ban ngành."
          </p>
        </div>
      </section>

      <Timeline />

      <NextChapter to="/chuong-2" label="Chương 2" />
    </motion.div>
  );
}