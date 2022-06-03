import React from 'react';
import './footer.scss';
import { Container, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';


export default function Footer(props) {
    return (
        <footer>
            <section className='footer-subcription'>
                <div className='footer-subcription-heading'>
                    <MailOutlineIcon className='email-icon' />
                    Đăng ký nhận bản tin
                </div>
                <div className='input-areas'>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Nhập email của bạn" />
                        </Form.Group>
                        <Button variant="outline-primary">Đăng ký</Button>
                    </Form>

                </div>
            </section>
            <Container className='footer-container' fluid="md">
                <div className='footer-links'>
                    {/* Logo and Social Networks */}
                    <div className='footer-icons-wrapper'>
                        <div className='footer-icons-items'>
                            <img src='/images/footer/uitbook-logo.png' alt='UITBooks-logo' className="uitbooks-logo-large" />
                            <img src='/images/footer/UITBooks.com.png' alt='UIT' className='uitbooks' />
                            <div className="footer-info">
                                Chúng tôi đảm bảo giao hàng trong vòng 24h, cam kết đổi trả hàng nếu có sai sót. <br />
                                <Link to="/">UITBooks.com</Link> nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả hệ thống UITBooks trên toàn quốc.
                            </div>
                            <div className="social-icons">
                                <a href='https://www.facebook.com/UITBookStore' target="_blank" title='Facebook'>
                                    <img src='https://drive.google.com/uc?id=1hKFmUYEn44aNhc7AUivTnqAJ-cLCiXIg' />
                                </a>
                                <a href='https://www.instagram.com/hachat_macaron/' target="_blank" title='Instagram'>
                                    <img src='https://drive.google.com/uc?id=1EyW6CxiAiKq1QeWk1hPgkYyuwx_4FaSl' />
                                </a>
                                <a href='https://www.youtube.com/channel/UC_jlqruaC97N8ohRRuUpi0Q' target="_blank" title='Youtube' >
                                    <img src='https://drive.google.com/uc?id=1g3ktW0qJ0H3Ym-tAzDHFElKoVo3lQmia' />
                                </a>
                                <a href='https://twitter.com/HachatMacaron' target="_blank" title='Twitter' >
                                    <img src='https://drive.google.com/uc?id=1Gol-wJK29brj_e6TdWs9X5Tda-am1iac' />
                                </a>
                            </div>
                            <div className="download">
                                <a href='' title='IOS'>
                                    <img src='/images/footer/get-on-appstores.png' />
                                </a>
                                <a href='' title='Google'>
                                    <img src='/images/footer/get-on-chplay.png' />
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Links and Credit */}
                    <div className="footer-link-list">
                        <div className='footer-link-wrapper'>
                            <div className='footer-link-items'>
                                <h2>Liên Kết</h2>
                                <Link to='/' > Trang chủ </Link>
                                <Link to='/books' > Danh mục sách </Link>
                                <Link to='/blogs' > Chia sẻ </Link>
                                <Link to='/about-us' > Giới thiệu </Link>
                            </div>
                            <div className='footer-link-items'>
                                <h2>Chính sách</h2>
                                <Link to='/delivery-policies' > Chính sách giao hàng </Link>
                                <Link to='/return-policies' > Chính sách đổi trả </Link>
                                <Link to='/help' > Câu hỏi thường gặp </Link>
                                <Link to='/terms-of-use' > Điều khoản sử dụng </Link>
                            </div>
                            <div className='footer-link-items'>
                                <h2>Nhóm 6</h2>
                                <a href='' > Kỹ thuật phát triển hệ thống Web </a>
                                <a href='' > Trường Đại học Công Nghệ Thông Tin </a>
                                <img src='/images/aboutus/logo-uit.png' alt='UIT-logo' />
                            </div>
                        </div>
                        <div className='footer-link-items'>
                            <h2 className="contact-us">Liên hệ với chúng tôi</h2>
                            <div className='contact'>
                                <div>
                                    <LocationOnOutlinedIcon />
                                    <p> Khu phố 6, phường Linh Trung, Thủ Đức </p>
                                </div>
                                <div>
                                    <MailOutlineIcon />
                                    <p> UITBooks@gmail.com </p>
                                </div>
                                <div>
                                    <PhoneInTalkOutlinedIcon />
                                    <p> 083.457.7251 </p>
                                </div>
                            </div>
                        </div>
                        <div className="payment">
                            <img src='/images/aboutus/zalopay.png' alt="" />
                            <img src='/images/aboutus/momo.png' alt="" />
                            <img src='/images/aboutus/shopee.png' alt="" />
                            <img src='/images/aboutus/vnpay.png' alt="" />
                        </div>
                    </div>
                </div>
            </Container>
            {/* Copyrights */}
            <section className='social-media'>
                <small className='website-rights'>© Bản quyền thuộc về UITBooks - 2022</small>
            </section>
        </footer >
    );
}
