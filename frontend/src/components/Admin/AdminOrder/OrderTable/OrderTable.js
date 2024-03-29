import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllOrders } from '../../../../redux/features/order/allOrdersSlice';
import {
  clear,
  deleteOrder,
} from '../../../../redux/features/order/orderDetailsSlice';
import { userColumns } from './datatablesource';
import './OrderTable.scss';

import { toast, ToastContainer } from 'react-toastify';

const OrderTable = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.allOrders);
  const { success, message } = useSelector((state) => state.orderDetails);
  const [data, setData] = useState([]);
  // modal
  const [show, setShow] = useState(false);
  const [idOrderDelete, setIdOrderDelete] = useState('');

  const handleClose = () => {
    setShow(false);
  };
  const handleDeleteOrder = () => {
    dispatch(deleteOrder({ id: idOrderDelete }));
    setShow(false);
  };
  // const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  useEffect(() => {
    if (orders) {
      setData(() => {
        return orders.map((order, index) => {
          // let id = order.user;
          // dispatch(getUserDetails({ userId: id }));
          return {
            id: index + 1,
            barcode: order._id,
            // employeeName: order.user.name,
            status: order.orderStatus,
            date: moment(order.createdAt).format('DD/MM/YYYY'),
          };
        });
      });
      // console.log('data', data);
    }
  }, [orders, data]);
  const handleDelete = (id) => {
    setShow(true);
    setIdOrderDelete(id);
  };
  useEffect(() => {
    if (success) {
      toast.success('delete order success');
      dispatch(getAllOrders());
    }
    if (success === false) {
      toast.error(message);
    }
    dispatch(clear());
  }, [dispatch, success, message]);

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      headerAlign: 'center',
      width: 100,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link
              to='/admin-order/edit'
              style={{ textDecoration: 'none' }}
              state={{ orderId: params.row.barcode }}
            >
              <div className='viewButton'>
                <BiEdit />
              </div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.barcode)}
            >
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <div className='col-xl-6 col-lg-5 col-md-6'>
        <form action='#' className='search-header'>
          <div className='input-group w-100'>
            <input
              type='text'
              className='form-control'
              placeholder='Tìm kiếm'
            />
            <div className='input-group-append'>
              <Button variant='dark'>
                <SearchIcon />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className='datatableTitle'>
        Quản lý đơn hàng
        {/* <Link to="/users/new" className="link">
          Thêm mới
        </Link> */}
      </div>
      <DataGrid
        className='datagrid'
        rows={data ? data : []}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xóa đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn chấc chắn muốn xóa order {idOrderDelete} này!!?
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Đóng
          </Button>
          <Button variant='danger' onClick={handleDeleteOrder}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderTable;
