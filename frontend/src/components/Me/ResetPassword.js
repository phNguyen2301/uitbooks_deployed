import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  clearMessage,
  resetPassword,
} from '../../redux/features/user/forgotPasswordSlice';
import './ResetPassword.scss';

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.forgotPassword);

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = params.token;
    dispatch(resetPassword({ password: newPassword, confirmPassword, token }));
  };
  useEffect(() => {
    if (status) {
      toast.success('Cập nhật mật khẩu thành công!');
      dispatch(clearMessage());
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    }
    if (status === false) {
      toast.error('Reset password unsuccess!!');
      dispatch(clearMessage());
      setTimeout(() => {
        navigate('/signin');
      }, 3000);
    }
  }, [dispatch, status, navigate]);
  return (
    <Container className='containerForgotPassWord'>
      <Form className='ForgotPassWordForm'>
        <h4>ĐẶT LẠI MẬT KHẨU</h4>
        <Form.Group className='mb-3' controlId='formNewPassword'>
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formConfirmPassword'>
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' onClick={handleSubmit}>
          Xác nhận
        </Button>
      </Form>
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
    </Container>
  );
}
