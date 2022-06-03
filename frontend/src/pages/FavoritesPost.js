import React from "react";
import AccountLayout from "../layouts/AccountLayout";
import FavoritesPostComponent from "../components/MyAccount/Favorites/FavoritesPost";

function FavoritesPost() {
  return (
    <>
      <AccountLayout>
        <FavoritesPostComponent />
      </AccountLayout>
    </>
  );
}

export default FavoritesPost;
