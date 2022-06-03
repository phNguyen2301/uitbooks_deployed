import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./basketHeader.scss";
const BasketHeader = () => {
  const { pathname } = useLocation();

  return (
    <div className="basket-header">
      <Container>
        <Row>
          <Col xs="12" md="7" lg="8">
            <ul className="basket-header__steps">
              <li
                className={`basket-header__steps__item ${
                  pathname === "/my-basket" ? "active" : ""
                } progress-step_1 `}
              >
                <div className="basket-header__steps__item__tagName">
                  Giỏ hàng
                </div>
              </li>
              <li
                className={`progress-step-split ${
                  pathname === "/my-basket" ? "active" : ""
                } progress-step_1 ${
                  pathname === "/payment" ? "active_step_next" : ""
                }`}
              ></li>
              <li
                className={`basket-header__steps__item ${
                  pathname === "/payment" ? "active" : ""
                } progress-step_2`}
              >
                <div className="basket-header__steps__item__tagName">
                  Thanh toán
                </div>
              </li>
              <li
                className={`progress-step-split ${
                  pathname === "/payment" ? "active" : ""
                } progress-step_2 ${
                  pathname === "/confirm-order" ? "active_step_next" : ""
                }`}
              ></li>
              <li
                className={`basket-header__steps__item ${
                  pathname === "/confirm-order" ? "active" : ""
                } progress-step_3`}
              >
                <div className="basket-header__steps__item__tagName">
                  Xác nhận
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BasketHeader;
