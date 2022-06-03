import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import "./BlogDetail.scss";
import BlogItem from "../BlogItem";
import { BsCircle, BsFillStarFill } from "react-icons/bs";
import { IoPersonCircleSharp } from "react-icons/io5";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

export default function BlogDetail() {
  return (
    <div className="blog-container container-fluid">
      <div className="blog-breadcrumb ms-5 mt-2">
        <Breadcrumb>
          <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item href="/blogs" className="text-capitalize">
            Chia sẻ
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="text-capitalize">
            Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay
            Trẻ
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="blog-main-container">
        <Container>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Row>
            <Col xs={12} md={8}>
              <div className="blog-detail">
                <div className="blog-detail-main">
                  <div className="blog-main bg-light bg-gradient rounded p-2">
                    <div className="blog-main-author border-bottom pb-2 mb-2">
                      <span>Tác giả:</span>
                      <span className="blog-author-name ms-1 me-2">
                        Nguyễn Văn A
                      </span>
                      <i className="blog-time-icon me-1">
                        <BsCircle />
                      </i>
                      <span className="blog-time">01/04/2022</span>
                    </div>
                    <div className="blog-main-content text-dark-80">
                      <div className="blog-cover-img">
                        <img
                          className="img-fluid mb-2"
                          src="/images/blogs/blog-trend-img1.png"
                          alt="blog-cover-img"
                        />
                      </div>
                      <div className="blog-content">
                        <h1 className="blog-tilte mt-2">
                          Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết
                          Định Bạn Già Hay Trẻ
                        </h1>
                        <p>
                          “You are what you eat”, câu nói này có ý muốn nhấn
                          mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi
                          ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng
                          trong cơ thể bạn, tâm trạng của bạn và thậm chí cả
                          hành động của bạn.
                        </p>
                        <p>
                          Cuốn sách Sống Lành Để Trẻ của Norman W. Walker sẽ
                          cung cấp cho bạn những kiến thức để xây dựng và duy
                          trì một lối sống trẻ trung, lành mạnh; không chỉ dừng
                          lại ở cách chúng ta ăn uống mà còn vô số những tri
                          thức thú vị và bổ ích khác.
                        </p>
                        <h2>Tác giả sách Sống Lành Để Trẻ</h2>
                        <p>
                          Sống Lành Để Trẻ được viết bởi Norman Wardhaugh
                          Walker. Ông là một doanh nhân người Anh, cũng là người
                          đi đầu phong trào ăn sạch, sống xanh trên thế giới.
                          Ông Walker ủng hộ việc ăn rau tươi sống, nước ép trái
                          cây để cải thiện và duy trì một cơ thể trẻ trung, khỏe
                          mạnh.{" "}
                        </p>
                        <p>
                          Tác giả này đã có nhiều cuốn sách viết về lối sống
                          xanh, có thể kể đến Raw Vegetable Juices: What’s
                          Missing in Your Body?, Become Younger hay The
                          Vegetarian Guide to Diet and Salad.
                        </p>
                        <h3>Nội dung sách Sống Lành Để Trẻ</h3>
                        <p>
                          Được viết từ năm 1979 nhưng cuốn sách Sống Lành Để Trẻ
                          đã chia sẻ những kiến thức đi trước thời đại. Sách
                          truyền cảm hứng để chúng ta ăn sạch, sống xanh, kết
                          nối nhiều hơn với cơ thể của mình thông qua những
                          phương pháp sống lành mạnh.
                        </p>
                        <p>
                          Cuốn Sống Lành Để Trẻ gồm 26 chương, đi từ những suy
                          nghĩ sai lầm về cơ thể và sức khỏe cho tới kiến thức
                          về các loại thực phẩm, các bệnh tiêu hóa thường gặp và
                          cuối cùng là triết lý sống thuận tự nhiên.
                        </p>
                        <h4>Điều gì quyết định chúng ta trẻ hay già?</h4>
                        <p>
                          Liệu tuổi tác có phải thứ duy nhất quyết định chúng ta
                          trẻ hay già? Nhiều người chỉ mới 30 nhưng còn ít tươi
                          tắn hơn những người đã ngoài 70 tuổi. Muốn trông trẻ
                          trung và khỏe mạnh, chúng ta cần có năng lượng và sinh
                          lực chứ không dừng lại ở những con số trên giấy tờ.
                        </p>
                        <p>
                          Như tác giả chia sẻ trong cuốn Sống Lành Để Trẻ, trẻ
                          trung tức là tất cả hoặc phần lớn những thuộc tính của
                          tuổi trẻ. Những thuộc tính này đều được thể hiện qua
                          đôi mắt, vành môi, đó là những nét tự nhiên toát ra từ
                          thần thái của chúng ta, vượt xa cả những lớp trang
                          điểm hay hóa trang cầu kì.
                        </p>
                        <img
                          className="blog-content-img img-fluid mb-2"
                          src="/images/blogs/blog-trend-img2.png"
                          alt="blog-img"
                        />
                        <h4>
                          Hiểu hơn về mối quan hệ giữa thực phẩm và cơ thể bạn
                        </h4>
                        <p>
                          Theo Sống Lành Để Trẻ, cơ thể con người có 8 tuyến:
                          tuyến tùng, tuyến yên, tuyến ức, tuyến giáp, tuyến cận
                          giáp, tuyến tụy, tuyến thượng thận, tuyến sinh dục.
                          Mỗi tuyến lại đảm nhận một chức năng nhất định trong
                          cơ thể và có ảnh hưởng lẫn nhau. Trong 8 tuyến trên,
                          tuyến yên đóng vai trò kiểm soát cơ thể, điều chỉnh
                          việc ăn uống của chúng ta.{" "}
                        </p>
                        <p>
                          Những thực phẩm được quảng cáo rầm rộ nhất hóa ra lại
                          là những kẻ thù thầm lặng với sức khỏe của chúng ta.
                          Thành phần chính của chúng ta tinh bột và bột mì, hai
                          chất này đều khiến cơ thể người nhanh lão hóa và trông
                          già trước tuổi. Rất nhiều biện pháp chữa bệnh được
                          quảng cáo là nhanh, hiệu quả, triệt để hóa ra đều góp
                          phần rút ngắn thời gian sống của chúng ta.{" "}
                        </p>
                        <h4>Vậy làm sao để trẻ?</h4>
                        <p>
                          Theo Sống Lành Để Trẻ, đầu tiên, chúng ta cần xây dựng
                          cho mình một chế độ ăn hợp lý. Hãy hạn chế ăn tinh bột
                          vì những chất khó phân hủy trong nước cũng khó phân
                          hủy trong cơ thể người. Những thứ béo ngậy như sữa bò,
                          kem hóa ra lại tạo chất dịch nhờn, tạo đờm không tốt
                          cho chúng ta như nó vẫn hay được quảng cáo. Hạn chế ăn
                          protein động vật, hạn chế nicotin dung nạp vào cơ thể
                          bằng cách nói không với thuốc lá và hạn chế uống cafe.{" "}
                        </p>
                        <p>
                          Nhịn ăn cũng là một cách thanh lọc cơ thể. Bạn có thể
                          cân nhắc nhịn ăn trong 6 – 8 ngày, thay vào đó, hãy
                          uống nước hoa quả. Tuy vậy, không nên nhịn ăn trong 1
                          – 2 tháng vì như vậy sẽ ảnh hưởng lâu dài đến sức khỏe
                          và khó phục hồi.
                        </p>
                        <p>
                          Tiếp theo, hãy loại bỏ các chất thải trong dạ dày, làm
                          sạch cơ thể bằng cách thụt phân, rửa ruột. Khi cơ thể
                          đã được thanh lọc, hãy uống nước ép rau củ quả tươi để
                          cung cấp dinh dưỡng cho cơ thể. Nước rau củ quả tươi
                          giúp cơ thể được có thêm dưỡng chất, khoáng chất,
                          vitamin ngay lập tức trong khi các bộ phận của cơ thể
                          không phải làm việc nặng nhọc để tiêu hóa chúng.
                        </p>
                        <p>
                          Cuối cùng nhưng không kém phần quan trọng, phải luôn
                          giữ cho tinh thần thoải mái, lành mạnh, suy nghĩ đúng
                          đắn và tích cực chính là chìa khóa để có một cơ thể và
                          tâm trí thực sự khỏe khoắn.
                        </p>
                        <h3>Nhận xét về cuốn sách Sống Lành Để Trẻ</h3>
                        <p>
                          Sống Lành Để Trẻ trước tiên đã truyền cho người đọc
                          cảm hứng sống xanh, sống sạch và tư duy xây dựng sức
                          khỏe toàn diện cả thể chất và tinh thần.
                        </p>
                        <p>
                          Đọc sách để thấy rằng, không bao giờ là quá muộn để
                          tìm lại cơ thể trẻ trung, khỏe khoắn. Cơ thể khỏe mạnh
                          là món quà chúng ta có thể tự ban tặng cho mình thông
                          qua ăn uống, luyện tập và cân bằng tinh thần.
                        </p>
                        <p>
                          Tuy vậy, những kiến thức trong sách Sống Lành Để Trẻ
                          chỉ là nguồn tài liệu tham khảo. Muốn áp dụng những
                          phương pháp trong sách, bạn cần cân nhắc thể trạng của
                          bản thân, tham khảo thêm những nguồn tài liệu uy tín
                          và những người có chuyên môn trước khi áp dụng triệt
                          để.
                        </p>
                        <img
                          className="blog-content-img img-fluid mb-2"
                          src="/images/blogs/blog-trend-img3.png"
                          alt="blog-img"
                        />
                        <h3>Đoạn trích từ cuốn Sống Lành Để Trẻ</h3>
                        <p>
                          Để thực hiện được điều ấy và để đạt được mục tiêu TRẺ
                          HÓA, chúng ta phải học tập, nghiên cứu; hơn hết thảy,
                          kinh nghiệm chính là chất liệu nghiên cứu quý giá
                          nhất. Kinh nghiệm cá nhân tôi cho thấy, việc được sống
                          ở một độ tuổi vốn được coi là “xưa nay hiếm” – được
                          làm một ông lão bảy mươi tuổi sung mãn, sáng suốt,
                          minh mẫn, tràn đầy nhiệt huyết và có cơ thể tráng kiện
                          ngang ngửa một chàng trai ba mươi tuổi – quả là một
                          mục tiêu đáng hướng tới.{" "}
                        </p>
                        <h3>Lời kết</h3>
                        <p>
                          Ai cũng muốn mình khỏe và đẹp hơn mỗi ngày. Đó hoàn
                          toàn là điều khả thi, nếu bạn đủ hiểu biết, kiên trì
                          và kỷ luật. Đọc sách Sống Lành Để Trẻ để tìm lại cơ
                          thể khỏe khoắn, nuôi dưỡng tâm trí bình an và sống
                          cuộc đời trọn vẹn bạn nhé.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-other bg-light bg-gradient rounded p-2 mt-5">
                  <h4 className="blog-other-title p-2 ps-0 border-bottom border-1 border-black-70 text-black-70">
                    Bài viết liên quan
                  </h4>
                  <Carousel>
                    <Carousel.Item>
                      <div className="blog-other-item">
                        <Row>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="1"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="2"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="3"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Item>
                    <Carousel.Item>
                      <div className="blog-other-item">
                        <Row>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="4"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="5"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                          <Col xs={6} md={4}>
                            <BlogItem
                              key="6"
                              src="/images/blogs/blog-trend-img1.png"
                              title="Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ"
                              description="“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn."
                              path="/blog"
                            />
                          </Col>
                        </Row>
                      </div>
                    </Carousel.Item>
                  </Carousel>
                </div>
                <div className="blog-comment bg-light bg-gradient rounded p-2 mt-5 mb-5">
                  <h4 className="blog-other-title mt-2 p-2 ps-0 border-bottom border-1 border-black-70 text-black-70">
                    Đánh giá
                  </h4>
                  <div className="blog-comment-rating">
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <i className="blog-item-rating text-warning me-1">
                      <BsFillStarFill />
                    </i>
                    <p className="d-inline ms-2 align-middle">
                      5.0 <i>(4 đánh giá)</i>
                    </p>
                  </div>
                  <p className="blog-comment-number mt-2">2 bình luận</p>
                  <form>
                    <div className="blog-comment-write d-flex">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-field flex-grow-1 ms-3 d-flex align-items-end flex-column">
                        <textarea
                          id="blog-cmt-field"
                          className="w-100 ps-2"
                          name="comment"
                          placeholder="Viết bình luận của bạn"
                          rows={3}
                        ></textarea>
                        <div className="blog-comment-button mt-2 mb-4">
                          <button
                            type="submit"
                            className="blog-cmt-btn border rounded text-center fs-6"
                          >
                            Đăng
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="blog-comment-others">
                    <div className="blog-comment-user d-flex border-top">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-container flex-grow-1 ms-3 mt-4">
                        <div className="blog-comment-userinfo d-flex">
                          <div className="blog-comment-name w-100 fw-bold">
                            <p>Nguyễn Văn B</p>
                          </div>
                          <div className="blog-comment-date flex-shrink-1 text-secondary fs-6">
                            <p>04/04/2022</p>
                          </div>
                        </div>
                        <div className="blog-comment-content">
                          <p>Bài viết rất hay!</p>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comment-user d-flex border-top">
                      <div className="blog-comment-avatar flex-shrink-0 fs-1">
                        <IoPersonCircleSharp />
                      </div>
                      <div className="blog-comment-container flex-grow-1 ms-3 mt-4">
                        <div className="blog-comment-userinfo d-flex">
                          <div className="blog-comment-name w-100 fw-bold">
                            <p>Nguyễn Văn A</p>
                          </div>
                          <div className="blog-comment-date flex-shrink-1 text-secondary fs-6">
                            <p>03/04/2022</p>
                          </div>
                        </div>
                        <div className="blog-comment-content">
                          <p>Mình nhất định sẽ mua cuốn sách này về đọc.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <div className="blog-sidebar position-sticky">
                <div className="blog-categories bg-light bg-gradient rounded p-2 mb-5">
                  <h6 className="blog-categories-title p-2 pb-1 d-inline-flex bd-highlight text-white mb-0 text-capitalize">
                    Chuyên mục blog
                  </h6>
                  <div className="blog-categories-list border-top border-1 border-dark">
                    <ListGroup variant="flush text-capitalize">
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Xu hướng</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Tác giả nổi bật</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Đời sống</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Nuôi dạy trẻ</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Kỹ năng</ListGroup.Item>
                      </Link>
                    </ListGroup>
                  </div>
                </div>
                <div className="book-categories bg-light bg-gradient rounded p-2 mb-5">
                  <h6 className="book-categories-title p-2 pb-1 d-inline-flex bd-highlight text-white mb-0 text-capitalize">
                    Danh mục sách
                  </h6>
                  <div className="book-categories-list border-top border-1 border-dark">
                    <ListGroup variant="flush text-capitalize">
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Nổi bật</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Văn học trong nước
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Văn học nước ngoài
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Sách kỹ năng sống
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Sách thiếu nhi</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>Sách tuổi teen</ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Sách chuyên ngành
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Sách thường thức đời sống
                        </ListGroup.Item>
                      </Link>
                      <Link to="/books" style={{ textDecoration: "none" }}>
                        <ListGroup.Item action>
                          Công ty phát hành
                        </ListGroup.Item>
                      </Link>
                    </ListGroup>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
