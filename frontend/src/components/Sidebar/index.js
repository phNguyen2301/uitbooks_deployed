import { useEffect } from "react";
import "./sidebar.scss";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import RateReviewIcon from "@mui/icons-material/RateReview";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest, clear } from "../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === true) {
      toast.success("Logout success");
      dispatch(clear());
      navigate("/");
    }
  }, [status]);
  const handleLogout = () => {
    dispatch(logoutRequest());
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }} className="uitlogo">
          <img src="/images/footer/uitbook-logo.png" alt="UITBooks-logo" />
          <img src="/images/footer/UITBooks.com.png" alt="UIT" />
        </Link>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <p className="title">QUẢN LÝ ADMIN</p>
          <NavLink to="/admin-user-list" style={{ textDecoration: "none" }}>
            <li>
              <AccessibilityIcon className="icon" />
              <span>Quản Lý Người Dùng</span>
            </li>
          </NavLink>
          <NavLink to="/admin-category-list" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Quản Lý Thể Loại Sách</span>
            </li>
          </NavLink>
          <NavLink to="/admin-book-list" style={{ textDecoration: "none" }}>
            <li>
              <MenuBookIcon className="icon" />
              <span>Quản Lý Sách</span>
            </li>
          </NavLink>
          <NavLink to="/admin-order" style={{ textDecoration: "none" }}>
            <li>
              <LocalMallIcon className="icon" />
              <span>Quản Lý Đơn Hàng</span>
            </li>
          </NavLink>
          <NavLink to="/admin-blog-list" style={{ textDecoration: "none" }}>
            <li>
              <RateReviewIcon className="icon" />
              <span>Quản Lý Blog</span>
            </li>
          </NavLink>
          <NavLink to="/admin-statistic" style={{ textDecoration: "none" }}>
            <li>
              <AnalyticsIcon className="icon" />
              <span>Thống Kê</span>
            </li>
          </NavLink>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Đăng Xuất</span>
          </li>
        </ul>
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Sidebar;
