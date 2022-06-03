import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrder,
  updateStatusOrder,
  clear,
} from "../../../../redux/features/order/orderDetailsSlice";
import { useLocation } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import moment from "moment";
import "./AdminOrderDetail.scss";

import PropTypes from "prop-types";
import InformationAddress from "./InformationAddress/InformationAddress";
import InformationProduct from "./InformationProduct/InformationProduct";
import InformationBill from "./InformationBill/InformationBill";
import Loading from "../../../../more/Loader";
import { ToastContainer, toast } from "react-toastify";

const AdminOrderDetail = (props) => {
  const [orderDetails, setOrderDetails] = useState();
  const [address, setAddress] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  let totalQuantity = 0
  let totalPrice = 0
  const location = useLocation();
  const dispatch = useDispatch();
  const orderId = location.state.orderId;

  const { loading, order, success, message } = useSelector(
    (state) => state.orderDetails
  );

  useEffect(() => {
    dispatch(getOrder({ id: orderId }));
  }, []);
  useEffect(() => {
    if (order) {
      setOrderDetails(order);
      setAddress(
        order.shippingInfo.address +
          ", " +
          order.shippingInfo.ward +
          ", " +
          order.shippingInfo.district +
          ", " +
          order.shippingInfo.city
      );
    }
  }, [order]);
  useEffect(() => {
    if (orderDetails) {
      // const data = {
      //   status: orderStatus,
      // };
      dispatch(updateStatusOrder({ id: orderId, orderStatus }));
    }
  }, [orderStatus]);
  useEffect(() => {
    if (success) {
      toast.success("update order status success");
      dispatch(getOrder({ id: orderId }));
    }
    if (success === false) {
      toast.error(message);
    }
    dispatch(clear());
  }, [success]);
  const overplay = useRef();
  const showEdit = () => {
    overplay.current.classList.remove("close");
  };
  const closeEdit = () => {
    overplay.current.classList.add("close");
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="AdminOrderDetailContainer">
          <Container>
            <h4 className="title">Chi tiết đơn hàng {orderId}</h4>

            <Row>
              <Col xs="12" md="6" lg="6">
                <FormGroup>
                  <div className="orderRow">
                    <label className="orderRow__label order__date__label">
                      Ngày tạo:{" "}
                    </label>
                    <div className="orderRow__value order__date__value">
                      {moment(
                        orderDetails ? orderDetails.createdAt : ""
                      ).format("DD/MM/YYYY")}
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="orderRow">
                    <label className="orderRow__label ">Tình trạng:</label>
                    <div className="order__state ">
                      <select
                        value={orderDetails ? orderDetails.orderStatus : ""}
                        onChange={(e) => setOrderStatus(e.target.value)}
                      >
                        <option value="Processing">Đang xử lý</option>
                        <option value="Shipping">Đang giao</option>
                        <option value="Shipped">Đã giao</option>
                        <option value="Canceled">Đã hủy</option>
                      </select>
                    </div>
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="orderRow">
                    <label className="orderRow__label ">Thanh toán:</label>
                    <div className="orderRow__value ">{props.payMethod}</div>
                  </div>
                </FormGroup>
              </Col>
              <Col xs="12" md="6" lg="6">
                <InformationAddress
                  address={orderDetails ? address : ""}
                  numberPhone={
                    orderDetails ? orderDetails.shippingInfo.phone : ""
                  }
                  gmail={orderDetails ? orderDetails.shippingInfo.email : ""}
                  showEdit={showEdit}
                />
              </Col>
            </Row>
            <div className="product">
              {orderDetails ? (
                orderDetails.orderItems.map((orderItem, index) => {
                  totalQuantity += orderItem.quantity
                  totalPrice += orderItem.price * orderItem.quantity
                  return (
                    <InformationProduct
                      key={index}
                      image={orderItem.image}
                      nameBook={orderItem.name}
                      price={orderItem.price}
                      quantity={orderItem.quantity}
                    />
                  );
                })
              ) : (
                <></>
              )}
            </div>
            <InformationBill
              quantity={totalQuantity}
              totalMoney={totalPrice}
              discount={0}
            />
          </Container>
          <div ref={overplay} className="overplay close">
            <div className="form">
              <Form>
                <div className="form__group">
                  <label>Địa chỉ nhà</label>
                  <input
                    type="text"
                    placeholder="Phường 6, Linh trung, Thủ Đức"
                  />
                </div>
                <div className="form__group">
                  <label>Số điện thoại</label>
                  <input type="text" placeholder="0123456789" />
                </div>
                <div className="form__group">
                  <label>Địa chỉ gmail</label>
                  <input type="text" placeholder="dienchau@gmail.com" />
                </div>
                <div className="form__btn">
                  <div>
                    <div className="form__btn__close" onClick={closeEdit}>
                      Đóng
                    </div>
                    <div className="form__btn__save">Lưu</div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </>
  );
};

AdminOrderDetail.propTypes = {
  orderCode: PropTypes.string,
  orderDate: PropTypes.string,
  payMethod: PropTypes.string,
};

export default AdminOrderDetail;
