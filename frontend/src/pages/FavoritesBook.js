import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import FavoritesBookComponent from "../components/MyAccount/Favorites/FavoritesBook";

function FavoritesBook() {
  return (
    <>
      <AccountLayout>
        <FavoritesBookComponent />
      </AccountLayout>
    </>
  );
}

export default FavoritesBook;
