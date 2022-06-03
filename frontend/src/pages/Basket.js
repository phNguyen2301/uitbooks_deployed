import React from "react";
import PropTypes from "prop-types";
import BasketHeader from "../components/Basket/BasketHeader/BasketHeader";
import ItemBasket from "../components/Basket/ItemBasket/ItemBasket";
import MainLayout from "../layouts";
import ProtectedRoute from "../routes/PrivateRoute";
const LayoutBasket = props => {
  return (
    <ProtectedRoute>
      <MainLayout>
        <BasketHeader/>
        <ItemBasket/>
      </MainLayout>
    </ProtectedRoute>
  )
}

LayoutBasket.propTypes = {}

export default LayoutBasket