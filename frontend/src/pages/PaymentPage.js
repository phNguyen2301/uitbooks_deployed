import React from "react";

import BasketHeader from "../components/Basket/BasketHeader/BasketHeader";
import Payment from "../components/Basket/Payment/Payment";
import MainLayout from "../layouts";
import ProtectedRoute from "../routes/PrivateRoute";

const PaymentPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <MainLayout>
          <BasketHeader />
          <Payment />
        </MainLayout>
      </div>
    </ProtectedRoute>
  );
};

export default PaymentPage;
