import React from "react";
import './Return.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function ReturnBack() {
    return (
        <Container className='return-container' fluid='md'>
            <Breadcrumb>
                <Breadcrumb.Item as={Link} to='/'>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-capitalize'>Điều khoản sử dụng</Breadcrumb.Item>
            </Breadcrumb>
            <div className='return-title'>
                <img src='/images/aboutus/uitbook-logo.png' alt='UITBooks-logo' />
                <p>
                    Chính sách đổi trả hàng
                </p>
            </div>
            <div className='return-content'>
                <p>
                    Để nâng cao chất lượng dịch vụ và trải nghiệm mua sắm của khách hàng, Cửa hàng nhà sách <b>UITBooks</b> chúng tôi có những chính sách phù hợp khi khách hàng có nhu cầu đổi/ trả/ hoàn tiền sản phẩm.
                    <br />Chúng tôi luôn coi trọng và bảo vệ quyền lợi của người tiêu dùng với mong muốn mang đến cho quý khách chất lượng phục vụ tốt nhất
                </p>
                <h4 className='heading-title'>
                    1. Các trường hợp được đổi trả
                </h4>
                <p>
                    - Giao nhầm sản phẩm: tựa sách, hình thức bìa, giá bìa,...
                </p>
                <p>
                    - Hàng hoá không đúng như mô tả trên website (màu sắc, kiểu dáng, chức năng) hoặc hàng hóa bị hư hỏng trong quá trình giao hàng.
                </p>
                <p>
                    - Đơn hàng đã thanh toán trước nhưng sản phẩm của đơn hàng đã hết tại cửa hàng nhà sách UITBooks.
                </p>
                <p>
                    - Sản phẩm bị lỗi do in ấn, kỹ thuật.
                </p>
                <p>
                    - Phát hiện hàng giả, hàng nhái
                </p>
                <h4 className='heading-title'>
                    2. Chính sách đổi trả hàng
                </h4>
                <img src='https://drive.google.com/uc?id=1nDcw6GyFzwY_A2ujxmBJFdxyFd8fIGim' alt='return-policy' />
                <h4 className='heading-title'>
                    3. Hướng dẫn các bước đổi/trả hàng
                </h4>
                <p>
                    - Bước 1: Vui lòng liên hệ hotline 083.457.7251 hay gửi email về địa chỉ UITBooks@gmail.com để thông báo việc yêu cầu đổi/ trả hàng
                </p>
                <p>
                    - Bước 2: Nhân viên chăm sóc khách hàng sẽ liên hệ với bạn để xác nhận; kiểm tra &amp; tiếp nhận hàng được yêu cầu đổi/ trả hàng (chỉ áp dụng đối với các trường hợp đổi/ trả hàng do lỗi xuất phát từ chúng tôi)
                </p>
                <p>
                    (Trường hợp đổi hàng theo nhu cầu (màu sắc, kích thước...) bạn vui lòng liên hệ 083.457.7251 để được hướng dẫn cụ thể)
                </p>
                <p>

                    - Bước 3: Khi yêu cầu đổi trả được giải quyết, quý khách vui lòng gửi sản phẩm như hiện trạng khi nhận hàng ban đầu về địa chỉ cửa hàng nhà sách UITBooks bao gồm sản phẩm và đầy đủ phụ kiện, giấy tờ chứng từ kèm theo (nếu có)
                </p>
                <p className='conclusion'>
                    <b>UITBooks</b> sẽ giao sản phẩm thay thế hoặc tiến hành hoàn tiền (trường hợp trả hàng) trong vòng 5-7 ngày tùy khu vực kể từ ngày xác nhận việc đổi/ trả hàng.
                </p>
            </div>
        </Container>
    );
}
