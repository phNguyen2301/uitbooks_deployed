import React from "react";
import "./InformationBill.scss"
import PropTypes from "prop-types";

const InformationBill = (props) => {
  return (
    <div>
      <div className="myOrder">
        
        <div className="myOrder__information">
          <div className="myOrder__information__quantity">
            Số lượng: {props.quantity} quyển
          </div>
          <div className="myOrder__information__row">
            <div className="myOrder__information__row__name">Tổng tiền: </div>
            <div className="myOrder__information__row__value">{props.totalMoney} đ</div>
          </div>
          <div className="myOrder__information__row">
            <div className="myOrder__information__row__name">Giảm giá: </div>
            <div className="myOrder__information__row__value">{props.discount} đ</div>
          </div>
        </div>
        <hr className="myOrder__line" />
        <div className="myOrder__bill">
          <div className="myOrder__bill__name">Thành tiền:</div>
          <div className="myOrder__bill__value">{props.totalMoney} đ</div>
        </div>
       
      </div>
    </div>
  );
};
InformationBill.propTypes = {
    quantity: PropTypes.number,
    totalMoney: PropTypes.number,
    discount: PropTypes.number,
};

export default InformationBill;
