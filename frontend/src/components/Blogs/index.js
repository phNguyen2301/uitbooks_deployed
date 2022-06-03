import React from 'react';
import './Blogs.scss';
import BlogItem from './BlogItem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';

export default function Blogs() {
    return (
        <div className='blogs-container container-fluid'>
            <div className='blogs-banner'>
                <img className='img-fluid' src='/images/blogs/blog-banner.png' alt='Blog UITBooks' />
            </div>
            <div className='blogs-intro m-5 text-center'>
                <h1 className='m-2 fw-bold'>Nơi chia sẻ về những cuốn sách mà bạn yêu thích</h1>
                <p>Chào mừng đến với Blog UITBooks. Những lời giới thiệu, chia sẻ những cuốn sách hay được viết bởi những người yêu sách, khám phá các cuộc phỏng vấn độc quyền với các nhà văn yêu thích của bạn, các bài báo của tác giả và các trích đoạn cũng như các đề xuất của chuyên gia, các tổng hợp sách mới nhất dành cho mọi lưới tuổi.</p>
            </div>
            <div className='blogs-review'>
                <img className='img-fluid shadow-lg' src='/images/blogs/blog-review.png' alt='Blog Review' />
            </div>
            <div className='blogs container-fluid mt-5'>
                <div className='blog-trend'>
                    <h2 className='blogs-title mt-2 p-2 bg-primary bg-opacity-10 ms-2'>Xu hướng</h2>
                    <Carousel>
                        <Carousel.Item>
                            <div className='blog-trend-item'>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='1'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='2'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='3'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='blog-trend-item'>
                                <Row>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='4'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='5'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                    <Col xs={6} md={4}>
                                        <BlogItem
                                            key='6'
                                            src='/images/blogs/blog-trend-img1.png'
                                            title='Review Sách Sống Lành Để Trẻ – Tuổi Tác Không Quyết Định Bạn Già Hay Trẻ'
                                            description='“You are what you eat”, câu nói này có ý muốn nhấn mạnh vai trò của những gì chúng ta đưa vào cơ thể mỗi ngày. Cách bạn ăn uống sẽ quyết định nguồn năng lượng trong cơ thể bạn, tâm trạng của bạn và thậm chí cả hành động của bạn.'
                                            author='Nguyễn Văn A'
                                            time='22/04/2022'
                                            view='134'
                                            share='0'
                                            path='/blog'
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}