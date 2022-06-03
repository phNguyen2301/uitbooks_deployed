import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import cartSlice from "./features/cart/cartSlice";
import favouriteSlice from "./features/favourite/favouriteSlice";
import newOrderSlice from "./features/order/newOrderSlice";
import myOrdersSlice from "./features/order/myOrdersSlice";
import newProductSlice from "./features/product/newProductSlice";
import newReviewSlice from "./features/product/newReviewSlice";
import productDetailsSlice from "./features/product/productDetailsSlice";
import productReviewsSlice from "./features/product/productReviewsSlice";
import allOrdersSlice from "./features/order/allOrdersSlice";
import orderDetailsSlice from "./features/order/orderDetailsSlice";
import productSlice from "./features/product/productSlice";
import productsSlice from "./features/product/productsSlice";
import reviewSlice from "./features/product/reviewSlice";
import userSlice from "./features/user/userSlice";
import forgotPasswordSlice from "./features/user/forgotPasswordSlice";
import profileUserSlice from "./features/user/profileUserSlice";
import newsProductsSlice from "./features/product/newsProductsSlice";
import popularProductsSlice from "./features/product/popularProductsSlice";
import productsAdminSlice from "./features/product/productsAdminSlice";
import allUsersSlice from "./features/user/allUsersSlice";
import userDetailsSlice from "./features/user/userDetailsSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import ratedProductsSlice from "./features/product/ratedProductsSlice";
import mostReviewProductsSlice from "./features/product/mostReviewProductsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  cart: cartSlice,
  favourite: favouriteSlice,
  products: productsSlice,
  allOrders: allOrdersSlice,
  newOrder: newOrderSlice,
  myOrders: myOrdersSlice,
  orderDetails: orderDetailsSlice,
  product: productSlice,
  productsAdmin: productsAdminSlice,
  newProduct: newProductSlice,
  newsProducts: newsProductsSlice,
  popularProducts: popularProductsSlice,
  ratedProducts: ratedProductsSlice,
  mostReviewProducts: mostReviewProductsSlice,
  productDetails: productDetailsSlice,
  newReview: newReviewSlice,
  productReviews: productReviewsSlice,
  review: reviewSlice,
  user: userSlice,
  profileUser: profileUserSlice,
  forgotPassword: forgotPasswordSlice,
  allUsers: allUsersSlice,
  userDetails: userDetailsSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
