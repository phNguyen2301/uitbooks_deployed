import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import MyOrderCanceledComponent from "../components/MyAccount/MyOrder/MyOrderCanceled";

function MyOrderCanceled() {
  return (
    <>
      <AccountLayout>
        <MyOrderCanceledComponent />
      </AccountLayout>
    </>
  );
}

export default MyOrderCanceled;
