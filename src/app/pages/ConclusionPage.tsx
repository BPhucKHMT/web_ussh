import { ArticleContent, DropCap } from "../components/ArticleContent";
import { motion } from "motion/react";
import { LivingProcessImage } from "../components/LivingProcessImage";
import ketImage from "../../imports/Ket1.jpg";

export function ConclusionPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 bg-[var(--ivory)]"
    >
      <div className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex justify-center items-center gap-4"
        >
          <div className="h-px w-16 bg-[var(--bronze)]"></div>
          <span className="text-[var(--bronze)] font-sans text-xl tracking-[0.2em] uppercase">Kết</span>
          <div className="h-px w-16 bg-[var(--bronze)]"></div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--deep-brown)] font-serif font-bold leading-tight"
          style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
        >
          Tiếp nối di sản
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-[var(--wood-brown)] font-serif italic"
          style={{ fontSize: "clamp(1.25rem, 3vw, 1.5rem)", maxWidth: "80%", margin: "2rem auto 0" }}
        >
          "Một sự thay đổi trong cách người trẻ tiếp cận di sản..."
        </motion.p>
      </div>

      <ArticleContent>
        <DropCap>
          Dòng người diễu hành rồi cũng khép lại, những khoảnh khắc “cổ nhân giữa phố thị” dần lùi về phía sau, nhưng dư âm mà Tóc Xanh Vạt Áo để lại vẫn âm ỉ lan tỏa, vượt ra ngoài khuôn khổ của một sự kiện.
        </DropCap>
        
        <p>
          Từ những bước đi giữa lòng đô thị đến những câu chuyện được kể qua từng lớp áo, điều còn đọng lại chính là sự thay đổi trong cách người trẻ tiếp cận di sản: không còn xa cách, mà trở nên gần gũi, sống động và mang hơi thở của hôm nay.
        </p>

        <p>
          Giữa dòng người hôm ấy, Hồng Sơn nổi bật không chỉ bởi bộ trực lĩnh đại khâm. Từ sự tò mò ban đầu khi tham gia Tóc Xanh Vạt Áo, Sơn dần hình thành mong muốn được góp phần tái hiện lịch sử qua chính những gì mình đang theo đuổi. Anh cho rằng bản thân chỉ là “một hạt cát nhỏ”, nhưng chính những “hạt cát” như vậy đang tạo nên một cộng đồng người trẻ chủ động tìm hiểu, phục dựng và lan tỏa giá trị văn hóa truyền thống.
        </p>

        <p>
          Hành trình đó phản ánh một cách tiếp nối di sản khác biệt. Không còn là sự lặp lại theo khuôn mẫu hay tiếp nhận mang tính áp đặt, người trẻ hôm nay tiếp cận văn hóa bằng sự chủ động: tìm hiểu, thực hành và sáng tạo trên nền tảng những giá trị cốt lõi. Khi di sản được đặt trong đời sống đương đại, được lựa chọn và duy trì một cách tự nhiên, nó sẽ không còn đứng yên trong quá khứ mà tiếp tục được bồi đắp và phát triển trong tương lai.
        </p>
      </ArticleContent>

      <LivingProcessImage
        src={ketImage}
        alt="Dư âm Tóc Xanh Vạt Áo"
        variant="fullBleed"
      />
    </motion.div>
  );
}