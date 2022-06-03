import React from "react";
import './FAQ.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';

export default function FAQ() {
    return (
        <Container className='faqs-container' fluid='md'>
            <Breadcrumb>
                <Breadcrumb.Item as={Link} to='/'>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-capitalize'>Câu hỏi thường gặp</Breadcrumb.Item>
            </Breadcrumb>
            <div className='faqs-title'>
                <img src='/images/aboutus/uitbook-logo.png' alt='UITBooks-logo' />
                <p>
                    Câu hỏi thường gặp
                </p>
            </div>
            <div className='faqs-content'>
                <h4 className='heading-title'>
                    1. Tôi có thể tới tận nơi xem sản phẩm trước khi mua không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Rất tiếc rằng <b>UITBooks</b> hiện chỉ cung cấp dịch vụ mua hàng qua kênh thương mại điện tử là website <b>UITBooks</b>. Chúng tôi hiện chưa có cho mình cửa hàng offline để Quý khách hàng có thể đến trực tiếp để dễ dàng chọn lựa sản phẩm.
                        <br /> Tuy nhiên, chúng tôi sẽ hỗ trợ và tư vấn nhiệt tình qua các kênh liên hệ nhằm giúp bạn lựa chọn chính xác cho mình những quyển sách mong muốn và giao hàng tận nơi, hoàn toàn tiện lợi.
                    </p>
                </div>
                <h4 className='heading-title'>
                    2. Trường hợp đơn hàng của tôi có sản phẩm đã hết hàng thì sao?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Đối với trường hợp này, bộ phận Chăm Sóc Khách Hàng sẽ liên hệ với bạn để báo về tình trạng đơn hàng của bạn và đề xuất hướng giải quyết, đồng thời chúng tôi cũng sẽ thông báo về tình trạng sản phẩm đã hết hàng của bạn ngay khi có hàng trở lại.
                    </p>
                </div>
                <h4 className='heading-title'>
                    3. Tôi muốn thêm/bớt sản phẩm, thay đổi địa chỉ giao hàng ?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Khi đã đặt hàng thành công, quý khách có thể truy cập vào tài khoản, phần Quản lý đơn hàng hoặc kiểm tra email để kiểm tra lại thông tin đơn hàng.
                    </p>
                    <p>
                        Trong trường hợp cần chỉnh sửa cho đơn hàng, quý khách có thể liên hệ với bộ phận hỗ trợ khách hàng bằng cách vào trang "Liên hệ" và lựa chọn kênh thông tin liên lạc, sau đó chỉ cần cung cấp thông tin chi tiết gồm:
                    </p>
                    <p>
                        _ Mã số đơn hàng <br />
                        _ Tên sản phẩm/địa chỉ mới và thông tin cần chỉnh sửa
                    </p>
                    <ul>
                        <li>
                            Lưu ý: Trong trường hợp cần hỗ trợ gấp, Quý khách vui lòng gọi đến Hotline: 083.457.7251 để được hỗ trợ sớm và kịp thời nhất. Những trường hợp còn lại, Quý khách vui lòng hạn chế sử dụng phương thức hỗ trợ qua Hotline nhằm tránh tình trạng nghẽn tổng đài.
                        </li>
                    </ul>

                </div>
                <h4 className='heading-title'>
                    4. Tôi có thể hủy đơn hàng đã đặt được không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Quý khách chỉ có thể hủy đơn hàng khi đơn hàng chưa được gọi xác nhận từ bộ phận chăm sóc khách hàng của <b>UITBooks</b>. Nếu không có nhu cầu nhận hàng, quý khách vui lòng tham khảo thêm chính sách đổi &amp; trả hàng của chúng tôi.
                    </p>
                </div>
                <h4 className='heading-title'>
                    5. Tôi có thể đặt dịch vụ gói &amp; tặng quà được không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Cửa hàng nhà sách UITBooks chúng tôi có cung cấp dịch vụ gói, tặng quà và gửi lời nhắn theo quà. Đối với dịch vụ này, quý khách buộc phải thanh toán hóa đơn mua hàng và phí gói quà trước khi chúng tôi thực hiện dịch vụ. Phí dịch vụ gói quà dao động từ 5.000 - 10.000đ và giấy gói ngẫu nhiên.
                    </p>
                </div>
                <h4 className='heading-title'>
                    6. Tôi có thể yêu cầu viết hóa đơn VAT cho đơn hàng của mình không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Cửa hàng nhà sách UITBooks chúng tôi có viết hóa đơn VAT theo yêu cầu của khách hàng.
                    </p>
                    <ul>
                        <li>
                            Lưu ý: hóa đơn chỉ được gửi sau khi đơn hàng đã thực hiện thành công (đã giao hàng &amp; thu tiền).
                        </li>
                    </ul>
                </div>
                <h4 className='heading-title'>
                    7. Vì sao đơn hàng của tôi chưa tới?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Nếu như vì lý do nào đó đơn hàng của quý khách chưa được giao như đúng hẹn, vui lòng kiểm tra trạng thái đơn hàng trong trang Quản lý đơn hàng hoặc liên hệ với bộ phận Hỗ trợ khách hàng của chúng tôi để được hỗ trợ:
                    </p>
                </div>
                <h4 className='heading-title'>
                    8. Tôi ủy thác cho người khác nhận hàng và thanh toán hộ được không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Quý khách có thể ủy thác cho người khác nhận hàng và thanh toán thay mình. Trong trường hợp này, người được ủy thác cần nêu đúng họ tên và số điện thoại người ủy thác. Người được ủy thác phải ký xác thực đã nhận đơn hàng thay.
                    </p>
                </div>
                <h4 className='heading-title'>
                    9. Tôi có thể đổi hoặc trả hàng đã mua không?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Quý khách vui lòng kiểm tra kỹ hàng hóa trước khi ký xác nhận với nhân viên giao hàng. Trường hợp sản phẩm bị hư hỏng, không sử dụng được (lỗi do phía công ty), chúng tôi sẵn lòng đổi sản phẩm khác theo yêu cầu của khách hàng trong thời gian nhanh nhất tùy theo khu vực kể từ lúc nhận hàng lỗi. Để yêu cầu đổi sản phẩm khác, vui lòng gửi yêu cầu đến bộ phận chăm sóc khách hàng của chúng tôi.
                    </p>
                    <p>
                        Để thực hiện việc đổi hàng, quý khách vui lòng gửi hàng về địa chỉ công ty (Khu phố 6, phường Linh Trung, TP. Thủ Đức, TP.HCM), hàng gửi về phải bảo đảm như hiện trạng ban đầu. Sau khi nhận được hàng quý khách gửi về, chúng tôi sẽ thực hiện gửi hàng thay thế cho quý khách. Quý khách sẽ không phải chịu chi phí nào khác.
                    </p>
                    <p>
                        Chúng tôi sẽ không thực hiện việc đổi hàng trong trường hợp sản phẩm bị hư hỏng đến từ phía của quý khách.
                    </p>
                </div>
                <h4 className='heading-title'>
                    10. Tôi muốn góp ý, phàn nàn về dịch vụ thì phải làm sao?
                </h4>
                <div className='FAQ-answer'>
                    <QuestionAnswerOutlinedIcon />
                    <p>
                        Chúng tôi luôn chào đón mọi góp ý, phàn nàn của quý khách để dịch vụ của chúng tôi ngày một hoàn thiện hơn. Quý khách có thể gửi mọi góp ý, khiếu nại của mình qua <b>UITBooks@gmail.com</b>, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
                    </p>
                </div>
            </div>
        </Container>
    );
}
