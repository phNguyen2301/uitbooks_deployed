import React from "react";
import './Delivery.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Deli() {
    return (
        <Container className='delivery-container' fluid='md'>
            <Breadcrumb>
                <Breadcrumb.Item as={Link} to='/'>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-capitalize'>Chính sách giao hàng</Breadcrumb.Item>
            </Breadcrumb>
            <div className='delivery-title'>
                <img src='/images/aboutus/uitbook-logo.png' alt='UITBooks-logo' />
                <p>
                    Chính sách giao hàng
                </p>
            </div>
            <div className='delivery-content'>
                <p>
                    Với đa phần đơn hàng, <b>UITBooks</b> cần vài giờ làm việc để kiểm tra thông tin và đóng gói hàng. Nếu các sản phẩm đều có sẵn hàng, <b>UITBooks.com</b> sẽ nhanh chóng bàn giao cho đối tác vận chuyển. Nếu đơn hàng có sản phẩm sắp phát hành, cửa hàng nhà sách UITBooks sẽ ưu tiên giao những sản phẩm có hàng trước cho Quý khách hàng.
                </p>
                <p>
                    Trong một số trường hợp, hàng nằm không có sẵn tại kho gần nhất, thời gian giao hàng có thể chậm hơn so với dự kiến do điều hàng. Các phí vận chuyển phát sinh, <b>UITBooks</b> sẽ hỗ trợ hoàn toàn.
                </p>
                <p>
                    Thời gian giao hàng không tính thứ 7, Chủ nhật, các ngày Lễ, Tết và không bao gồm tuyến huyện đảo xa.
                </p>
                <p>
                    Có thể thay đổi thời gian giao hàng nếu khách hàng yêu cầu và UITBooks chủ động đổi trong trường hợp chịu ảnh hưởng của thiên tai hoặc các sự kiện đặc biệt khác.
                </p>
                <p>
                    Đơn hàng của quý khách sẽ được giao tối đa trong 2 lần. Trường hợp lần đầu giao hàng không thành công, sẽ có nhân viên liên hệ để sắp xếp lịch giao hàng lần 2 với quý khách, trong trường hợp vẫn không thể liên lạc lại được hoặc không nhận được bất kì phản hồi nào từ phía quý khách, đơn hàng sẽ không còn hiệu lực.
                </p>
                <p>
                    Để kiểm tra thông tin hoặc tình trạng đơn hàng của quý khách, xin vui lòng inbox fanpage hoặc gọi số hotline, cung cấp tên, số điện thoại để được kiểm tra.
                </p>
                <p>
                    Khi hàng được giao đến quý khách, vui lòng ký xác nhận với nhân viên giao hàng và kiểm tra lại số lượng cũng như loại hàng hóa được giao có chính xác không. Xin quý khách vui lòng giữ lại biên lại vận chuyển và hóa đơn mua hàng để đối chiếu kiểm tra.
                </p>
                <p>
                    THỜI GIAN VÀ CHI PHÍ GIAO HÀNG TẠI TỪNG KHU VỰC TRONG LÃNH THỔ VIỆT NAM:
                </p>
                <h4 className='heading-title'>
                    1. Nội thành TP.HCM và Hà Nội
                </h4>
                <p>
                    Thời gian: 1-2 ngày
                </p>
                <p>
                    Chi phí: 15.000đ/ đơn hàng (không giới hạn giá trị)
                </p>
                <h4 className='heading-title'>
                    2. Các tỉnh thành khác
                </h4>
                <p>
                    Thời gian: 2-3 ngày
                </p>
                <p>
                    Chi phí: 30.000đ/ đơn hàng (không giới hạn giá trị)
                </p>
            </div>
        </Container>
    );
}