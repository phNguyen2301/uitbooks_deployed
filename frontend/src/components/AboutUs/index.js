import React from 'react';
import './AboutUs.css';
import { Container } from 'react-bootstrap';
// import Logo from "../../../public/images/aboutus/uitbook-logo.png";
// import Hotline from '../../../public/images/aboutus/uitbook-logo.png';
// import Email from '../../../public/images/aboutus/uitbook-logo.png';
// import Location from '../../../public/images/aboutus/uitbook-logo.png';
// import Website from '../../../public/images/aboutus/we.png';

export default function About() {
    return (
        <Container className='about-us-container' fluid='md'>
            <div className='about-us-title'>
                <img src='/images/aboutus/uitbook-logo.png' alt='UITBooks-logo' />
                <p>
                    Giới thiệu
                </p>
            </div>
            <div className='about-us-content'>
                <p>
                    Nhà sách trên mạng <b>UITBooks</b> là nơi mà Quý khách có thể dễ dàng lựa chọn cho mình những quyển sách hay, có giá trị đích thực với giá cả phải chăng. <br />
                    Quý khách hoàn toàn có thể yên tâm về chất lượng của từng sản phẩm mà chúng tôi cung cấp. Với đội ngũ nhân viên thân thiện, nhiệt tình, có trình độ chuyên môn về lĩnh vực Kinh doanh xuất bản phẩm, chúng tôi hi vọng sẽ mang lại cho quý khách nhiều sự lựa chọn trong việc tìm kiếm và thưởng thức những cuốn sách hay, có giá trị. <br />
                    <b>UITBooks</b> cam kết sẽ không ngừng cải tiến và nâng cao chất lượng dịch vụ nhằm thỏa mãn tối đa nhu cầu của khách hàng. Cụ thể:
                </p>
                <h3 className='heading-title'>
                    1. Về hàng hóa:
                </h3>
                <ul>
                    <li>
                        Hàng hóa phong phú, có giá trị cao.
                    </li>
                    <li>
                        Sản phẩm mới được cập nhật thường xuyên.
                    </li>
                    <li>
                        Sản phẩm đến tay khách hàng luôn đúng với những thông tin mô tả trên website <b>UITBooks</b>
                    </li>
                </ul>
                <h3 className='heading-title'>
                    2. Về giá cả:
                </h3>
                <ul>
                    <li>
                        Giá bán luôn thấp hơn hoặc bằng với giá bìa. <b>UITBooks</b> luôn có những chương trình giảm giá từ 10 – 30% cho những sản phẩm mới.
                    </li>
                </ul>
                <h3 className='heading-title'>
                    3. Dịch vụ:
                </h3>
                <ul>
                    <li>
                        Bao sách Plastic Miễn Phí (Trừ những tựa sách quá khổ, quá nhỏ, sách dạng Hộp hoặc Flash card, sách bìa cứng)
                    </li>
                    <li>
                        Hỗ trợ khách hàng từ 8h - 21h các ngày trong tuần.
                    </li>
                    <li>
                        Giao hàng thu tiền tận nơi
                    </li>
                    <li>
                        Giao hàng nhanh từ 1 – 2 ngày trên toàn quốc. Miễn phí vận chuyển với những đơn hàng ≥ 80.000đ (Tham khảo thêm Bảng giá phí vận chuyển tại <b>UITBooks</b>).

                    </li>
                    <li>
                        Đặt hàng theo yêu cầu của Quý khách.
                    </li>
                    <li>
                        Phương thức thanh toán linh hoạt,…
                    </li>
                </ul>
                <p>
                    Khi cần sự giúp đỡ hoặc góp ý về chất lượng và dịch vụ của <b>UITBooks</b>, Quý khách có thể liên hệ với chúng tôi theo những địa chỉ sau để được giải đáp trong thời gian nhanh nhất:
                </p>
            </div>
            <address className='about-us-contact'>
                <div className='hotline'>
                    <img src='/images/aboutus/hotline.png' alt='Hotline' />
                    Hotline: <a href="tel:0834577251">083.457.7251</a>
                </div>
                <div className='email'>
                    <img src='/images/aboutus/email.png' alt='Email' />
                    Email: <a href="mailto:UITBooks@gmail.com">UITBooks@gmail.com</a>
                </div>
                <div className='location'>
                    <img src='/images/aboutus/location.png' alt='Location' />
                    Địa chỉ: Khu phố 6, Linh Trung, Thủ Đức
                </div>
                <div className='website'>
                    <img src='/images/aboutus/website.png' alt='Website' />
                    Website: <a href="UITBooks.com">UITBooks</a>
                </div>
            </address>
        </Container >
    );
}