import { ChapterCover } from "../components/ChapterCover";
import { ArticleContent, DropCap, PullQuote, Subhead } from "../components/ArticleContent";
import { ImageBlock } from "../components/ImageBlock";
import { GarmentExplainer } from "../components/GarmentExplainer";
import { NextChapter } from "../components/NextChapter";
import { motion } from "motion/react";

export function Chapter2Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ChapterCover
        id="chuong-2"
        number="Chương 2"
        title="Dòng chảy Việt phục"
        description=""
        image="https://images.unsplash.com/photo-1763400126795-d83e07d3449e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxWaWV0bmFtZXNlJTIwY3VsdHVyZSUyMGZhYnJpYyUyMHNpbGslMjBlbWJyb2lkZXJ5fGVufDF8fHx8MTc3NzM2NjExNXww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      <ArticleContent>
        <DropCap>
          Vào thế kỷ XVII, khi sứ thần Việt Nam sang Yên Kinh, những người phụ lão Trung Quốc nhìn thấy đoàn người trong bộ áo mũ chỉnh tề đã bật khóc.
        </DropCap>
        <p>
          Không phải vì ngạc nhiên mà vì nhận ra, trong tà áo của người Việt, hình bóng của một nền văn minh mà chính họ vừa mất. Nhà Thanh bắt toàn bộ người Hán cạo tóc, đổi y phục theo thói Mãn Châu. Người Việt, bằng cách giữ lấy trang phục của mình, đã vô tình trở thành người bảo tồn ký ức của cả một nền văn minh lớn hơn họ tưởng.
        </p>
        <p>
          Câu chuyện đó không có trong sách giáo khoa. Nhưng nó giải thích rất nhiều về lý do tại sao, hơn ba trăm năm sau, những bạn trẻ như Khánh My và Tú Anh cảm thấy điều gì đó rất thật khi khoác lên mình một tà áo cũ.
        </p>

        <Subhead>Không phải “bản sao” mà là sản phẩm của ý thức tự chủ</Subhead>
        <p>
          Người Việt sớm ý thức được rằng quy chế áo mũ trong cung đình là cách một quốc gia tự định vị mình trong nền văn minh đương thời. Vì lẽ đó, ngay sau khi giành lại độc lập năm 939, Ngô Quyền đã quy định màu sắc trang phục để phân định phẩm trật quan lại. Đây một hành động mang tính biểu tượng: xác lập triều đình, lễ nghi riêng và khẳng định một nền văn minh độc lập. Đồng thời, trang phục người Việt còn gắn với đạo lý “Người mà không có cương thường thì tuy mặc xiêm áo, cũng có khác nào cầm thú”. Quan niệm của Mạc Đăng Dung năm 1517 cho thấy một lý lẽ: trang phục là hình thức bên ngoài của một trật tự đạo đức bên trong, là thước đo để phân biệt giữa văn minh và hỗn mang.
        </p>
        <p>
          Nhưng di sản đó không được trao tay trọn vẹn, nó từng nhiều lần bị đứt gãy. Năm 1407, chính quyền nhà Minh đồng hóa sâu rộng nhằm cắt đứt ký ức văn hóa. Vì vậy, khi giành lại độc lập, Lê Lợi không chỉ khôi phục biên giới, mà khôi phục cả “phong tục áo mũ lại được đúng như xưa”. Trang phục, một lần nữa, trở thành dấu hiệu cho thấy quốc gia đã trở lại đúng vị trí của mình.
        </p>
        <p>
          Đến năm 1744, chúa Nguyễn Phúc Khoát đổi toàn bộ trang phục Đàng Trong, khởi nguồn của áo ngũ thân. Dưới thời Minh Mạng, áo tứ thân, váy đụp và khố bị cấm triệt để, lần đầu tiên trong lịch sử, toàn bộ dân gian bị ép thay đổi cách ăn mặc. Đầu thế kỷ XX, làn sóng Âu hóa quét qua, cuốn theo nhiều lớp trang phục truyền thống vào quên lãng. Mỗi lần đứt gãy là một lớp ký ức bị chôn vùi.
        </p>
        <p>
          Đáng buồn hơn, sau mỗi lần đứt gãy, những trang phục truyền thống không hoàn toàn có thể phục hồi nguyên vẹn. Cổn Miện, lễ phục cao quý nhất của hoàng đế, nhiều lần bị “xóa sổ” mỗi khi triều đại thay đổi. Đến năm 1834, vua Minh Mạng ban dụ rằng “xem sử sách nước ta, không thấy có áo Cổn mũ Miện” và tự coi triều Nguyễn là nơi đặt định lại từ đầu. Chi tiết này cho thấy rõ một thực tế việc “khôi phục” nhiều khi không còn là nối tiếp, mà là tái tạo trên nền ký ức đã đứt gãy.
        </p>
        
        <PullQuote>
          "Y phục dân gian Nam Hà, Bắc Hà đều được theo tục cũ" - Chiếu lên ngôi của vua Quang Trung.
        </PullQuote>

        <p>
          Trải qua nhiều biến đổi, người Việt vẫn rất ý thức bảo vệ trang phục của mình, đó là một truyền thống có bề dày lịch sử. Theo đó, triều đình Việt Nam nhìn chung đều muốn dân chúng giữ nguyên phong tục trang phục vốn có. Năm 1375, nhà Trần - Hồ “cấm quân dân mặc kiểu áo của người phương Bắc”. Tháng 12 năm 1437 vua Lê Thái Tông ra lệnh cho người Minh ở Đại Việt phải phải mặc theo phong tục người Kinh. Điều này tiếp tục được minh chứng qua chiếu lên ngôi của vua Quang Trung.
        </p>
        <p>
          Từ 1696 đến 1727, nhà Lê ba lần liên tiếp cấm người Việt mô phỏng trang phục người Thanh. Nguyễn Trãi còn liệt kê tỉ mỉ từng kiểu trang phục ngoại lai và kết luận: không nên noi theo để làm loạn quốc tục.
        </p>
        <p>
          Người trẻ hôm nay tìm lại Việt phục không phải việc làm mới. Đó là sự tiếp nối một truyền thống bảo vệ bản sắc đã có bề dày hàng trăm năm. Nếu cha ông từng phải ra sắc lệnh để giữ lấy trang phục của mình, thì người trẻ hôm nay đang tìm lại bằng cách nào?
        </p>

        <Subhead>Học lại một thứ đã bị gián đoạn</Subhead>
        <p>
          Những năm gần đây, Việt phục đang dần rời khỏi không gian trình diễn để bước vào đời sống đô thị. Các chương trình do các trường đại học tổ chức đã khiến cổ phục được giới thiệu rộng rãi với công chúng trẻ. Trong đó, phải kể đến chương trình “Tóc xanh Vạt áo” do Trường Đại học Khoa học Xã hội và Nhân văn tổ chức hằng năm, thu hút đông đảo sinh viên tham gia. Sự kiện đã tạo hiệu ứng tích cực trên báo chí và mạng xã hội, góp phần đưa Việt phục từ khuôn khổ sự kiện bước vào nhịp sống thường nhật của giới trẻ.
        </p>
        <p>
          Từ những không gian trải nghiệm ấy, Việt phục còn khơi gợi nhu cầu tìm hiểu sâu hơn. Anh Lê Hồng Sơn cho biết, anh thường tìm hiểu về Việt phục qua các nguồn trên mạng, đồng thời đọc thêm những đầu sách như Đại Việt sử ký, Sứ Đàng Trong, Hoàng Lê nhất thống chí hay Ngàn năm áo mũ. Người trẻ hôm nay đang tìm hiểu Việt phục theo cách của thế hệ số: bắt đầu từ TikTok, YouTube hay workshop trải nghiệm, rồi dần tìm đến tư liệu và hiện vật bảo tàng. Đây là một thuận lợi khi tri thức trở nên dễ tiếp cận hơn, nhưng cũng đặt ra rủi ro về sự lệch chuẩn nếu thông tin thiếu kiểm chứng.
        </p>
        <p>
          Họa sĩ, nhà nghiên cứu mỹ thuật Nguyễn Đức Bình - Chủ nhiệm CLB Đình làng Việt nhìn nhận đây là chuyển biến trong nhận thức xã hội, từ tiếp nhận văn hóa thụ động sang chủ động tìm hiểu và thực hành. Nhưng ông cũng đặt ra yêu cầu đi kèm: “Song song với phong trào, cần có sự dẫn dắt của nghiên cứu nghiêm túc, của những người làm chuyên môn, để tránh tình trạng hiểu sai, pha tạp hoặc ‘sáng tạo’ thiếu căn cứ lịch sử”.
        </p>
        <p>
          Người trẻ không chỉ học về vải, họ học về lịch sử, triết học và cách cha ông từng hiểu thế giới. Năm vạt của chiếc áo ngũ thân không chỉ là năm mảnh vải, đó còn là ngũ thường: nhân, nghĩa, lễ, trí, tín được mặc lên người.
        </p>

        <PullQuote>
          "Cổ phục cần được trân trọng như ‘gốc rễ’, còn cách tân là ‘cành lá’. Gốc có vững thì cây mới phát triển bền lâu" - Nhà nghiên cứu Nguyễn Đức Bình.
        </PullQuote>

        <p>
          Nhưng ranh giới giữa phục dựng và sáng tạo vẫn rất nhập nhằng. Ông Bình phân định, cổ phục đúng nghĩa phải dựa trên tư liệu lịch sử chứ không thể chỉ dựa vào cảm quan thẩm mỹ. Đồng thời, trang phục cách tân phải được gọi đúng tên. “Việc đặt sai tên mới là điều nguy hiểm”, vì lâu dần, những hình ảnh đó có thể thay thế nhận thức đúng đắn về cổ phục trong công chúng, đặc biệt là với những người chưa có điều kiện tiếp cận chuyên sâu.
        </p>
        <p>
          Bảo tồn và sáng tạo là luôn bổ trợ cho nhau, miễn là không đánh tráo khái niệm. Bởi “Cổ phục cần được trân trọng như ‘gốc rễ’, còn cách tân là ‘cành lá’. Gốc có vững thì cây mới phát triển bền lâu”.
        </p>
      </ArticleContent>

      <GarmentExplainer />

      <NextChapter to="/chuong-3" label="Chương 3" />
    </motion.div>
  );
}
