import React from "react";
import { Container } from 'react-bootstrap';
import './Vouchers.css';

export default function Vouchers() {
    return (
        <Container className='vouchers-container' fluid='md'>
            <h3 className='voucher-title'>
                Mã Quà Tặng Cho Thành Viên Mới
            </h3>
            <div className='vouchers'>
                <img className='voucher' src='https://drive.google.com/uc?id=1YulUILZrMkQKu1KV7ROSEmJHQDK-LWpS' alt='thieu-nhi' />
                <img className='voucher' src='https://drive.google.com/uc?id=1NjpFn_Dr5Bg-vpiJJEvgfqYOEXc6CuBf' alt='149-298k' />
                <img className='voucher' src='https://drive.google.com/uc?id=1N_Uid1q3DEbdLcZqhEM_67SJKEDKwAR_' alt='299-498k' />
                <img className='voucher' src='https://drive.google.com/uc?id=1-GMANvzhNH3T3wDKWsTPB5rYBno27Law' alt='tren-499k' />
            </div>
        </Container >
    );
}