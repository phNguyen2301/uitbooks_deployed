import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import MyOrderOrderedComponent from "../components/MyAccount/MyOrder/MyOrderOrdered";

function MyOrderOrdered() {
  return (
    <>
      <AccountLayout>
        <MyOrderOrderedComponent />
      </AccountLayout>
    </>
  );
}

export default MyOrderOrdered;
