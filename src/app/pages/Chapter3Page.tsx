import { ArticleContent, DropCap, PullQuote, Subhead } from "../components/ArticleContent";
import { ImageBlock } from "../components/ImageBlock";
import { LivingProcessImage } from "../components/LivingProcessImage";
import { NextChapter } from "../components/NextChapter";
import { SplitLayout } from "../components/SplitLayout";
import { motion } from "motion/react";
import chuong3_1 from "../../imports/chuong3_1.jpg";
import chuong3_2 from "../../imports/Chuong3_2.jpg";
import chuong3_3 from "../../imports/Chuong3_3.png";
import chuong3_4 from "../../imports/Chuong3_4.jpg";

export function Chapter3Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-[var(--bronze)] font-sans text-xl tracking-widest uppercase"
        >
          Chương 3
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[var(--deep-brown)] font-serif font-semibold leading-tight"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          “Nhạc trưởng” sau những <span className="whitespace-nowrap">tà áo</span>
        </motion.h1>
      </div>

      <SplitLayout
        imageSrc={chuong3_1}
        imageAlt="Mẫu trang phục Thủy Tinh"
        caption="Mẫu trang phục “Thủy Tinh” lấy cảm hứng từ nét trong trẻo khi tĩnh lặng và sự uyển chuyển khi cuộn trào của dòng nước. Ảnh: Mộc Miên Thị"
      >
        <DropCap>
          Hành trình bảo tồn văn hóa của thế hệ trẻ không dừng lại ở những buổi diễu hành rực rỡ sắc màu, mà nó còn len lỏi vào từng xưởng may, từng bản vẽ và những đêm thức trắng nghiên cứu tư liệu để phục chế.
        </DropCap>
        <p>
          Đứng sau sự hồi sinh của những tà áo Nhật Bình, áo ngũ thân hay những chiếc yếm đào tại Ngày hội Việt phục “Tóc Xanh Vạt Áo” chính là những “nhạc trưởng” trẻ tuổi. Họ là những người chọn dấn thân vào con đường phục dựng di sản với thái độ nghiêm túc và bền bỉ. Với những nhà sáng lập trẻ, việc “mặc lịch sử” không phải là một cuộc dạo chơi nhất thời, mà là trách nhiệm của những người tiếp nối và gìn giữ, nơi quy trình làm nghề trở thành thước đo cho lòng tự tôn dân tộc.
        </p>

        <p>
          Để đưa một bộ cổ phục từ trang giấy bước ra đời thực, những nhà sáng lập trẻ phải tuân thủ một quy trình khắt khe. Nó bắt đầu từ việc tra cứu, đối chiếu tư liệu để trả lời những câu hỏi: “Ai mặc? Mặc khi nào? Mặc để làm gì?”. Khác với thời trang ứng dụng thông thường, làm cổ phục là làm khoa học. Bạn Lê Huyền Trang, nhà sáng lập thương hiệu Việt phục Mộc Miên Thị chia sẻ về sự “lì” và “dám sai” của mình: “Người làm nghiên cứu tụi mình nghèo lắm nhưng được cái lì, dám thử, dám ‘sai’ để lần sau chính mình và cả người khác nhìn vào mà tránh”. Chính lòng tự tôn dân tộc đã giúp những sinh viên không chuyên về thời trang như Trang có thể vẽ lại từng hoa văn, chọn từng chất liệu vải và in ấn tỉ mỉ để tạo nên những bộ yếm, quây thường hay đối khâm bình dị nhưng ấn tượng.
        </p>
      </SplitLayout>

      <SplitLayout
        imageSrc={chuong3_2}
        imageAlt="Thường phục triều Lê"
        caption="Thường phục triều Lê - trang phục của người phụ nữ Việt Đàng Ngoài năm 1778. Ảnh: Việt phục Nhân Nguyễn"
      >
        <p>
          Sự nghiêm túc ấy cũng được tìm thấy tại Tiệm Việt phục Nhân Nguyễn, nơi anh Nguyễn Hoài Nhân đã bền bỉ “giữ lửa” suốt gần 10 năm. Với Nhân, cổ phục không đơn thuần là quần áo, mà là ký ức của ông bà, là tinh hoa của tiền nhân, là những giá trị văn hoá đã được nắn nót qua bao thế hệ. Khi phục dựng bộ trang phục đám cưới Nam Kỳ xưa, anh không chỉ may một chiếc áo mà còn tái hiện lại cả một đời sống tinh thần của vùng đất Lục tỉnh.
        </p>

        <PullQuote>
          "Điều quan trọng là những người làm nghề cần giữ được tâm và trách nhiệm, để góp phần định hướng đúng đắn và bảo vệ giá trị văn hoá lâu dài" - Nguyễn Hoài Nhân.
        </PullQuote>

        <p>
          Anh quan niệm: “Điều quan trọng là những người làm nghề cần giữ được tâm và trách nhiệm, để góp phần định hướng đúng đắn và bảo vệ giá trị văn hoá lâu dài”. Quy trình từ nghiên cứu, lên ý tưởng đến may dựng mẫu của những người trẻ này chính là nền tảng vững chắc nhất để ngăn chặn sự biến tướng, giúp văn hóa không bị “đứt gãy” trước những làn sóng xu hướng nhất thời.
        </p>
      </SplitLayout>

      <div className="bg-[var(--ivory)] pt-12 pb-4 px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[var(--deep-brown)] font-serif font-semibold tracking-wide"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          QUY TRÌNH PHỤC DỰNG
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-24 h-1 bg-[var(--bronze)] mx-auto mt-6 rounded-full opacity-80"
        ></motion.div>
      </div>

      <LivingProcessImage
        src={chuong3_3}
        alt="Quy trình tái tạo Việt phục"
      />

      <SplitLayout
        imageSrc={chuong3_4}
        imageAlt="Chiếc nón lá"
        caption="Chiếc nón lá với ý tưởng độc đáo kết hợp hoa văn trên trống đồng của Tiêu Tường Huy. Ảnh: NVCC"
      >
        <Subhead>Giao thoa giữa nguyên bản và đương đại</Subhead>

        <p>
          Tuy nhiên, bảo tồn không có nghĩa là bảo thủ. Để di sản thực sự sống lại, những người trẻ này đã bản lĩnh lựa chọn sự giao thoa khéo léo giữa “nguyên bản” và “hơi thở đương đại”. Họ hiểu rằng nếu quá khắt khe, văn hóa sẽ bị đóng khung trong bảo tàng. Khi thiết kế mỗi sản phẩm mới cho Mộc Miên Thị, Lê Huyền Trang đã có những điều chỉnh tinh tế khi đưa bảng màu pastel nhẹ nhàng vào trang phục thời Lý - vốn chủ yếu là tông màu tối để phù hợp với thẩm mỹ hiện đại của giới trẻ. Hay như việc đưa sắc tím vốn dành cho quý tộc xưa trở nên gần gũi hơn. Huyền Trang quan niệm rằng những thay đổi nhỏ không vi phạm thuần phong mỹ tục, chuẩn mực văn hóa nên được nhìn nhận cởi mở để cổ phục được lan tỏa rộng rãi hơn.
        </p>

        <p>
          Không chỉ dừng lại ở những bộ Việt phục, các giá trị văn hóa còn đi vào những vật phẩm đời thường qua bàn tay của Tiêu Tường Huy - sinh viên Trường Đại học Bách Khoa (ĐHQG TPHCM). Từ việc mô phỏng những tuyệt tác phức tạp như Cửu Long Thông Thiên thời Nguyễn, Huy đã khéo léo đưa họa tiết hoa sen, trống đồng lên nón lá, túi xách hay dây đeo thẻ sinh viên. Thương hiệu “Việt Thương” mà Huy đang ấp ủ mang ý nghĩa “người Việt thương văn hóa Việt”, một sự khẳng định về bản lĩnh của Gen Z trong việc biến di sản thành một phần của phong cách sống hiện đại. Sự chuyển mình này giúp Việt phục thoát khỏi cái mác “đồ hóa trang” để trở thành một lựa chọn quen thuộc hằng ngày.
        </p>
        
        <p>
          Hành trình của các nhà sáng lập thương hiệu Việt phục trẻ là minh chứng rõ nét cho việc người trẻ không hề “quay lưng” với quá khứ. Ngược lại, họ đang bảo tồn văn hóa bằng một nội lực vững chắc: có kiến thức, có thực lực và có cả sự chuẩn bị về kinh tế để nuôi dưỡng đam mê dài hơi. Họ chấp nhận nếm “quả đắng” trong những lần dám sai để rồi đổi lấy vị ngọt là sự tự hào khi thấy thế hệ trẻ tự tin khoác lên mình “bản sắc dân tộc”. Văn hóa Việt không chỉ là di sản cần được bảo vệ, mà còn là một thực thể sống động, đang được những người trẻ kế thừa, viết tiếp câu chuyện văn hoá và lan tỏa một cách đầy kiêu hãnh.
        </p>
      </SplitLayout>

      <NextChapter to="/ket" label="Kết thúc" />
    </motion.div>
  );
}