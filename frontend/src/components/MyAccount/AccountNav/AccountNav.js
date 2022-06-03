import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./AccountNav.scss";
import { loadUser } from "../../../redux/features/user/userSlice";
import Loading from "../../../more/Loader";

function AccountNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { pathname } = useLocation();
  const { loading, user } = useSelector((state) => state.user);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="col-lg-3 my-account-nav text-center">
          <div className="nav-content p-3">
            <nav className="navbar navbar-light bg-light">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse my-account-nav-content"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <img
                      src={user ? user.avatar.url : ""}
                      className="rounded-circle my-account-nav-avatar m-2"
                      alt="Avatar"
                    />
                    <h5 className="mb-2">
                      <strong>Tài khoản của tôi</strong>
                    </h5>

                    <span className="nav-item input-group d-flex ">
                      <NavLink
                        to="/my-account"
                        activeclassname="active-account"
                        className="nav-link-account"
                      >
                        {/* <i className="bi bi-person"></i> */}
                        <span className="nav-item-icon-link">
                          <FaUserCircle />
                        </span>
                        Thông tin tài khoản
                      </NavLink>
                    </span>

                    <span className="nav-item input-group d-flex ">
                      <NavLink
                        to="/my-order-shipping"
                        activeclassname="active-account"
                        className={`nav-link-account ${
                          pathname === "/my-order-ordered" ? "active" : ""
                        }
                    ${pathname === "/my-order-canceled" ? "active" : ""}`}
                      >
                        {/* <i className="bi bi-journal-check"></i>  */}
                        <span className="nav-item-icon-link">
                          <FaRegListAlt />
                        </span>
                        Đơn hàng của tôi
                      </NavLink>
                    </span>

                    <span className={`nav-item input-group d-flex`}>
                      <NavLink
                        to="/my-favorite-book"
                        // isActive={() =>
                        //   ["/favorites-book", "/favorites-post"].includes(pathname)
                        // }
                        activeclassname="active-account"
                        className={`nav-link-account 
                    ${pathname === "/my-favorite-post" ? "active" : ""} `}
                      >
                        {/* <i className="bi bi-heart"></i>  */}
                        <span className="nav-item-icon-link">
                          <FaHeart />
                        </span>
                        Yêu thích
                      </NavLink>
                    </span>

                    <span className="nav-item input-group d-flex ">
                      <NavLink
                        to="/add-blog"
                        activeclassname="active-account"
                        className="nav-link-account"
                      >
                        {/* <i className="bi bi-pencil"></i>  */}
                        <span className="nav-item-icon-link">
                          <FaFileSignature />
                        </span>
                        Viết Blog
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default AccountNav;
