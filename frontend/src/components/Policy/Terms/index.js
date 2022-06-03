import React from "react";
import './Terms.css';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Terms() {
    return (
        <Container className='terms-container' fluid='md'>
            <Breadcrumb>
                <Breadcrumb.Item as={Link} to='/'>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active className='text-capitalize'>Điều khoản sử dụng</Breadcrumb.Item>
            </Breadcrumb>
            <div className='terms-title'>
                <img src='/images/aboutus/uitbook-logo.png' alt='UITBooks-logo' />
                <p>
                    Điều khoản sử dụng
                </p>
            </div>
            <div className='terms-content'>
                <p>
                    Chào mừng Quý khách hàng truy cập website <b>UITBooks</b> <br />
                    Chúng tôi là Công ty TNHH MTV Nhà sách <b>UITBooks</b> - chuyên phân phối các mặt hàng sách trên thị trường với phương châm "Tiếp cận tri thức một cách rẻ nhất". <br />
                    <b>UITBooks</b> luôn đem lại sự thuận tiện cho khách hàng khi mua sắm trên nền tảng thương mại điện tử. Theo đó nhà sách chúng tôi cần sự chấp thuận của Quý khách hàng với những điều khoản mà UITBooks đưa ra. Cụ thể:
                </p>
                <h4 className='heading-title'>
                    1. Tài khoản của Khách hàng
                </h4>
                <p>

                    Khi đăng ký sử dụng tài khoản trên <b>UITBooks</b>, quý khách cần cung cấp cho website các thông tin cá nhân chính xác và đầy đủ nhất. Khi chọn mật khẩu cho tài khoản truy cập, hãy chọn mật khẩu theo cách mà không ai có thể dễ dàng đoán được.
                </p>
                <p>
                    Sau khi đăng ký, quý khách chịu trách nhiệm bảo quản mật khẩu và không nên tiết lộ mật khẩu cho bất cứ ai hoặc ủy quyền, cho phép bất cứ người nào sử dụng vào bất cứ mục đích nào. <b>UITBooks</b> sẽ luôn coi việc truy cập và sử dụng các dịch vụ trên trang web bằng tên truy cập và mật khẩu của một người nào đó như là việc truy cập và sử dụng các dịch vụ bởi chính khách hàng đó, bất kể tên truy cập và mật khẩu có thể được sử dụng bởi người khác mà chủ sở hữu không biết hoặc không cho phép.
                </p>
                <p>
                    Nếu phát hiện bất cứ người nào biết mật khẩu hoặc sử dụng mật khẩu của mình để truy cập và sử dụng các dịch vụ trên trang web, quý khách cần thông báo ngay lập tức cho chúng tôi và thay đổi mật khẩu hoặc yêu cầu website hỗ trợ cài đặt mật khẩu mới.
                </p>
                <h4 className='heading-title'>
                    2. Quyền bảo lưu và sử dụng thông tin
                </h4>
                <p>
                    Khi truy cập và sử dụng trang web, <b>UITBooks</b> có thể bảo lưu các thông tin như các số liệu thống kê quá trình truy cập, các thông tin cá nhân cung cấp cho phuongnam.com khi đăng ký… Các thông tin cá nhân bao gồm họ tên, số điện thoại, địa chỉ email, địa chỉ chỗ ở… Chúng tôi có thể sử dụng các thông tin này vào việc lập kế hoạch, nghiên cứu, thiết kế và tuyên truyền các dịch vụ hoặc cung cấp thông tin cho các cơ quan pháp luật theo yêu cầu của Luật pháp hoặc của Toà án.
                </p>
                <h4 className='heading-title'>
                    3. Quyền lợi bảo mật thông tin của Khách hàng
                </h4>
                <p>
                    Chúng tôi luôn coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng khi sử dụng dịch vụ của website chúng tôi. Quý khách được đảm bảo rằng thông tin cá nhân mà quý khách cung cấp sẽ không được chuyển giao cho bên thứ ba nào khác vì mục đích thương mại. Mọi thông tin cá nhân đều được bảo mật ngoại trừ trường hợp Cơ quan Pháp luật yêu cầu.
                </p>
                <h4 className='heading-title'>
                    4. Trách nhiệm của khách hàng
                </h4>
                <p>
                    Quý khách không được quyền xâm phạm, xâm nhập, tiếp cận, sử dụng hay tìm cách xâm phạm, xâm nhập, tiếp cận hoặc sử dụng bất kỳ phần nào trong máy chủ của chúng tôi, và/ hoặc bất kỳ khu vực dữ liệu nào nếu không được chúng tôi cho phép.
                </p>
                <p>
                    Quý khách không được quyền gửi lên hoặc truyền phát bất kỳ thông tin bất hợp pháp, lừa gạt, bôi nhọ, sỉ nhục, tục tĩu, khiêu dâm, xúc phạm, đe dọa, lăng mạ, thù hận, kích động… hoặc trái với chuẩn mực đạo đức chung của xã hội dưới bất kì hình thức nào, bao gồm cả việc truyền bá hay khuyến khích những hành vi có thể cấu thành tội phạm hay vi phạm bất cứ điều khoản nào của luật pháp địa phương, quốc gia hay quốc tế. Chúng tôi tôn trọng quyền tự do ngôn luận, nhưng cũng bảo lưu việc có toàn quyền lược bớt, hoặc xoá bỏ một phần hoặc toàn bộ nội dung nào các bạn đưa lên, bất kể việc vi phạm đó là rõ ràng hay chỉ là hàm ý.
                </p>
                <p>
                    Quý khách không được phép gửi hoặc truyền bất kỳ thông điệp nào mang tính quảng cáo, mời gọi, thư dây chuyền, cơ hội đầu tư hay bất kỳ dạng liên lạc có mục đích thương mại nào mà người dùng không mong muốn.
                </p>
                <p>
                    Chúng tôi có toàn quyền, vào mọi lúc, cấm hoặc từ chối truy cập của bạn vào <b>UITBooks</b> hoặc bất kỳ phần nào của website ngay lập tức mà không cần báo trước nếu chúng tôi cho rằng bạn đã vi phạm bất kỳ điều khoản nào trong bản Quy định này, hoặc việc cấm truy cập xuất phát từ nhận định của chúng tôi, khi chúng tôi cho rằng từ chối đó phù hợp và cần thiết trong thẩm quyền của chúng tôi.
                </p>
                <h4 className='heading-title'>
                    5. Đơn hàng và giá cả
                </h4>
                <p>
                    Chúng tôi cam kết sẽ cung cấp thông tin giá cả chính xác nhất cho người mua hàng. Tuy nhiên, đôi lúc vẫn có sai sót xảy ra, ví dụ như trường hợp giá sản phẩm không hiển thị chính xác trên web hoặc sản phẩm đó không có ưu đãi khuyến mãi, tùy theo từng trường hợp chúng tôi sẽ chủ động liên hệ hướng dẫn hoặc thông báo hủy đơn hàng đó cho quý khách nếu quý khách không có nhu cầu tiếp tục mua sản phẩm đó.
                </p>
                <h4 className='heading-title'>
                    6. Luật pháp và thẩm quyền tại lãnh thổ Việt Nam
                </h4>
                <p>
                    Quý khách đồng ý rằng Quy định sử dụng và bất kỳ bất đồng nào phát sinh từ việc bạn sử dụng website này hoặc các sản phẩm và dịch vụ của chúng tôi sẽ được giải quyết theo luật pháp hiện hành của Nước Cộng hoà Xã hội Chủ nghĩa Việt Nam. Thông qua việc đăng ký hoặc sử dụng website và dịch vụ của chúng tôi, quý khách được xem như đã đồng ý và tuân thủ toàn bộ các quy định của Luật pháp Việt Nam.
                </p>
                <p>
                    Bằng việc truy cập và sử dụng các dịch vụ của website chúng tôi nghĩa là quý khách đã đồng ý với các điều khoản sử dụng trên đây. Trang web có quyền thay đổi hoặc chỉnh sửa bất kỳ phần nào trong điều khoản mua bán hàng hóa này và các thay đổi có hiệu lực ngay khi được đăng trên trang web mà không cần thông báo trước. Và khi quý khách tiếp tục sử dụng trang web sau khi các thay đổi về điều khoản này được đăng tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.
                </p>
            </div>
        </Container>
    );
}
