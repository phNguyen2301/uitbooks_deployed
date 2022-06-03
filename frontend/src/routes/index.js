import { React, useLayoutEffect } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import AboutUs from "../pages/AboutUs";
import Delivery from "../pages/Delivery";
import Return from "../pages/Return";
import TermsOfUse from "../pages/TermsOfUse";
import FAQs from "../pages/FAQs";

import Basket from "../pages/Basket";
import PageSignIn from "../pages/PageSignIn";
import ConfirmationPage from "../pages/ConfirmationPage";
import PaymentPage from "../pages/PaymentPage";
import Categories from "../pages/Categories";
import Book from "../pages/Book";
import Blogs from "../pages/Blogs";
import Blog from "../pages/Blog";

import Account from "../pages/Account";
import FavoritesBook from "../pages/FavoritesBook";
import FavoritesPost from "../pages/FavoritesPost";
import MyOrderShipping from "../pages/MyOrderShipping";
import MyOrderOrdered from "../pages/MyOrderOrdered";
import MyOrderCanceled from "../pages/MyOrderCanceled";
import AddBlog from "../pages/AddBlog";
import SignUp from "../pages/SignUp";
import ResetPassword from "../components/Me/ResetPassword";

import AdminUserList from "../pages/AdminUserList";
import AdminUserNew from "../pages/AdminUserNew";
import AdminUserEdit from "../pages/AdminUserEdit";
import AdminBlogList from "../pages/AdminBlogList";
import AdminBlogNew from "../pages/AdminBlogNew";
import AdminBlogEdit from "../pages/AdminBlogEdit";

import AdminBookList from "../pages/AdminBookList";
import AdminCategoryList from "../pages/AdminCategoryList";
import AdminBookNew from "../pages/AdminBookNew";
import AdminBookEdit from "../pages/AdminBookEdit";
import AdminCategoryNew from "../pages/AdminCategoryNew";
import AdminCategoryEdit from "../pages/AdminCategoryEdit";

import AdminOrderDetailPage from "../pages/AdminOrderDetailPage";
import AdminOrderPage from "../pages/AdminOrderPage";
import AdminStatisticsPage from "../pages/AdminStatisticsPage";

import NotFound from "../pages/404";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/delivery-policies" element={<Delivery />} />
          <Route path="/return-policies" element={<Return />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/help" element={<FAQs />} />

          <Route path="/my-basket" element={<Basket />} />
          <Route path="/confirm-order" element={<ConfirmationPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/signin" element={<PageSignIn />} />

          <Route path="/books/:keyword" element={<Categories />} />
          <Route path="/books" element={<Categories />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />

          <Route path="/my-account" element={<Account />} />
          <Route path="/my-favorite-book" element={<FavoritesBook />} />
          <Route path="/my-favorite-post" element={<FavoritesPost />} />
          <Route path="/my-order-shipping" element={<MyOrderShipping />} />
          <Route path="/my-order-ordered" element={<MyOrderOrdered />} />
          <Route path="/my-order-canceled" element={<MyOrderCanceled />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/password/reset/:token" element={<ResetPassword />} />

          <Route path="/admin-user-list" element={<AdminUserList />} />
          <Route path="/admin-user-new" element={<AdminUserNew />} />
          <Route path="/admin-user-edit" element={<AdminUserEdit />} />
          <Route path="/admin-blog-list" element={<AdminBlogList />} />
          <Route path="/admin-blog-new" element={<AdminBlogNew />} />
          <Route path="/admin-blog-edit" element={<AdminBlogEdit />} />

          <Route path="/admin-book-list" element={<AdminBookList />} />
          <Route path="/admin-book-new" element={<AdminBookNew />} />
          <Route path="/admin-book-edit/:id" element={<AdminBookEdit />} />

          <Route path="/admin-category-list" element={<AdminCategoryList />} />
          <Route path="/admin-category-new" element={<AdminCategoryNew />} />
          <Route path="/admin-category-edit" element={<AdminCategoryEdit />} />

          <Route path="/admin-order" element={<AdminOrderPage />} />
          <Route path="/admin-order/edit" element={<AdminOrderDetailPage />} />
          <Route path="/admin-statistic" element={<AdminStatisticsPage />} />

          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}
