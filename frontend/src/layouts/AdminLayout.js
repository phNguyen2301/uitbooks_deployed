import React from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';

//Đây là layout cho trang Quản lí
export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Sidebar />
      <div style={{ flex: '4' }}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
