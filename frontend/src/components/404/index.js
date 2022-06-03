import React from 'react';
import './404.scss';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <Container className='not-found-container' fluid='md'>
            <div className='row'>
                <div className='col-md-6 error-left'>
                    <div className='error-content'>
                        <h1 className='error-title'>
                            Ooops...
                        </h1>
                        <h2>Không tìm thấy trang</h2>
                        <p className='des'>Trang bạn đang truy cập không tồn tại hoặc xảy ra lỗi.  </p>
                        <img className='finding-img' src='https://drive.google.com/uc?id=1eut3_K0I5WIkWbEiGFOeQoSPUEYjhz0D' alt='finding' />
                        <Link to='/'>
                            <Button variant='primary'>Trang chủ</Button>
                        </Link>
                    </div>
                </div>
                <div className='col-md-6 error-right'>
                    <div className='error-img'>
                        <img src='https://drive.google.com/uc?id=1cBsbKwZVjun-FezPQGzNOwKxpfEwndZK' alt='404' />
                    </div>
                </div>
            </div>
        </Container >
    );
}