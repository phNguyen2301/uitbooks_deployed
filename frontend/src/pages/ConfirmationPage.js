import React from 'react'
import MainLayout from "../layouts";
// import BasketHeader from "../components/Basket/ComponentBasket/BasketHeader";
// import Confirmation from "../components/Basket/ComponentBasket/Confirmation";
import BasketHeader from "../components/Basket/BasketHeader/BasketHeader";
import Confirmation from "../components/Basket/Confirmation/Confirmation";
import ProtectedRoute from '../routes/PrivateRoute';
const ConfirmationPage = () => {
  return (
    <ProtectedRoute>
      <div>
          <MainLayout>
              <BasketHeader/>
              <Confirmation/>
          </MainLayout>
      </div>
    </ProtectedRoute>
  )
}

export default ConfirmationPage