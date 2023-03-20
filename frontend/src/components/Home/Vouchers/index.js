import React from 'react';
import { Container } from 'react-bootstrap';
import './Vouchers.css';

export default function Vouchers() {
  return (
    <Container className='vouchers-container' fluid='md'>
      <h3 className='voucher-title'>Mã Quà Tặng Cho Thành Viên Mới</h3>
      <div className='vouchers'>
        <img
          className='voucher'
          src='https://iili.io/HhzZqvI.png'
          alt='thieu-nhi'
        />
        <img
          className='voucher'
          src='https://iili.io/HhzZfYN.png'
          alt='149-298k'
        />
        <img
          className='voucher'
          src='https://iili.io/HhzZK2p.png'
          alt='299-498k'
        />
        <img
          className='voucher'
          src='https://iili.io/HhzZ34R.png'
          alt='tren-499k'
        />
      </div>
    </Container>
  );
}
