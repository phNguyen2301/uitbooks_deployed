import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPassword,
  clearMessage,
} from "../../redux/features/user/forgotPasswordSlice";
import { Container, Form, Button } from "react-bootstrap";
import Loading from "../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ResetPassword.scss";

export default function ResetPassword() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.forgotPassword);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = params.token;
    dispatch(resetPassword({ password: newPassword, confirmPassword, token }));
  };
  useEffect(() => {
    if (status) {
      toast.success("Cập nhật mật khẩu thành công!");
      dispatch(clearMessage());
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
    if (status === false) {
      toast.error("Reset password unsuccess!!");
      dispatch(clearMessage());
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [status]);
  return (
    <Container className="containerForgotPassWord">
      <Form className="ForgotPassWordForm">
        <h4>ĐẶT LẠI MẬT KHẨU</h4>
        <Form.Group className="mb-3" controlId="formNewPassword">
          <Form.Label>Mật khẩu mới</Form.Label>
          <Form.Control
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Xác nhận mật khẩu</Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Xác nhận
        </Button>
      </Form>
      <ToastContainer
        position="bottom-center"
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
