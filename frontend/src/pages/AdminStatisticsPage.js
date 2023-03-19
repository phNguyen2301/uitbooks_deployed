import React from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar/index';

// import AdminStatistics from '../components/Admin/AdminStatistics/index'
import AdminStatistics from '../components/Admin/AdminStatistics/index';
import ProtectedRoute from '../routes/PrivateRoute';
const AdminStatisticsPage = () => {
  return (
    <ProtectedRoute isAdmin={true}>
      <div className='AdminStatistics__container'>
        <div style={{ display: 'flex', width: '100%' }}>
          <Sidebar />
          <div style={{ flex: '4' }}>
            <Navbar />
            <AdminStatistics />
            {/* <UserEdit /> */}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

AdminStatisticsPage.propTypes = {};

export default AdminStatisticsPage;
