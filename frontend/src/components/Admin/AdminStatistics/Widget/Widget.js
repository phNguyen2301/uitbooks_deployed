// import React from 'react'
// import PropTypes from 'prop-types'

// const BlockStatistics = props => {
//   return (
//     <div>
//         <div className="BlockStatistics">
            
//         </div>
//     </div>
//   )
// }

// BlockStatistics.propTypes = {
    

// }

// export default BlockStatistics


import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Khách hàng",
        isMoney: false,
        quantity: "5K",
        link: "See all users",
        background: "#0DD6B8",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "#fff",
              // backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Đơn hàng",
        quantity: "7K",
        isMoney: false,
        link: "View all orders",
        background: "#FFBA68",

        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              // backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "#fff",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "Doanh thu",
        quantity: "50 Triệu",
        isMoney: true,
        link: "View net earnings",
        background: "#D592FF",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ 
              // backgroundColor: "rgba(0, 128, 0, 0.2)", 
            color: "#fff" }}
          />
        ),
      };
      break;
    case "book":
      data = {
        title: "Quyển sách",
        isMoney: false,
        link: "See details",
        quantity: "10K",
        background: "#FF9B8A",
        icon: (
          <MenuBookIcon
            className="icon"
            style={{
              // backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "#fff",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      {/* <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div> */}
      <div className="widget__left">
        <div className="widget__left__icon" style={{backgroundColor: data.background}}>
        
        {data.icon}
        </div>
      </div>
      <div className="widget__right">
        <div className="widget__right__quantity">
          {data.quantity}
        </div>
        <div className="widget__right__title">
          {data.title}
        </div>
      </div>
    </div>
  );
};

export default Widget;

