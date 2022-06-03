import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import MyOrderShippingComponent from "../components/MyAccount/MyOrder/MyOrderShipping";

function MyOrderShipping() {
  return (
    <>
      <AccountLayout>
        <MyOrderShippingComponent />
      </AccountLayout>
    </>
  );
}

export default MyOrderShipping;
