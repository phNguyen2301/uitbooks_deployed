import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loadUser } from "../../../redux/features/user/userSlice";
import {
  updateInfo,
  updatePassword,
  clear,
} from "../../../redux/features/user/profileUserSlice";
import Loading from "../../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "./AccountInfor.scss";

function AccountInfor() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.user);
  const { isUpdated, error } = useSelector((state) => {
    return state.profileUser;
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    dispatch(loadUser());
  }, []);
  // update info
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    dispatch(updateInfo({ name, email, avatar }));
  };
  useEffect(() => {
    if (isUpdated) {
      toast.success("Udpate success");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      dispatch(loadUser());
    }
    if (error) {
      toast.error(error);
      dispatch(loadUser());
    }
    dispatch(clear());
  }, [isUpdated, error]);
  // update password
  const handleUpdatePassword = (e) => {
    e.preventDefault();
    dispatch(updatePassword({ oldPassword, newPassword, confirmPassword }));
  };
  const handleAvatarChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setAvatar(e.target.value);
    }
    console.log(avatar);
  };
  return (
    <div className="col-lg-8 my-account-form ">
      <>
        {loading ? (
          <Loading />
        ) : (
          <div className="my-account-form-infor">
            <div className="form-infor-heading">
              <h4 className="mb-4">Thông tin cá nhân</h4>
              <hr />
              <p className="dark-grey-text mt-4" />
            </div>

            <form className="form-infor-body p-3" action="">
              <div className="row mb-3">
                <label
                  htmlFor="form-username-body"
                  className="col-sm-2 col-form-label"
                >
                  Họ tên
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="form-username-body"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <label
                  htmlFor="inputAvatar"
                  className="col-sm-2 col-form-label"
                >
                  Avatar
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    className="form-control"
                    id="inputAvatar"
                    name="avatar"
                    // value={avatar}
                    onChange={handleAvatarChange}
                  />
                </div>
              </div>

              {/* <div className="row mb-3">
                <label
                  htmlFor="form-adress-body"
                  className="col-sm-2 col-form-label"
                >
                  Địa chỉ
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="form-adress-body"
                    value="Khu phố 6, Linh Trung, Thủ Đức"
                  />
                </div>
              </div> */}

              {/* <div className="row mb-3">
            <label
              htmlFor="form-phoneNumber-body"
              className="col-sm-2 col-form-label"
            >
              SĐT
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="form-phoneNumber-body"
                value="0123456789"
              />
            </div>
          </div> */}

              <div className="col-auto d-flex justify-content-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleUpdateInfo}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </>

      <div className="my-account-form-password">
        <div className="form-password-heading">
          <h4 className="mb-4">Thay đổi mật khẩu</h4>
          <hr />
          <p className="dark-grey-text mt-4" />
        </div>

        <form className="form-password-body p-3" action="">
          <div className="row mb-3">
            <label
              htmlFor="currentPassword"
              className="col-sm-2 col-form-label"
            >
              Mật khẩu hiện tại
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="newPassword" className="col-sm-2 col-form-label">
              Mật khẩu mới
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <label
              htmlFor="confirmPassword"
              className="col-sm-2 col-form-label"
            >
              Xác nhận mật khẩu
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="col-auto d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleUpdatePassword}
            >
              Cập nhật mật khẩu
            </button>
          </div>
        </form>
      </div>
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
  );
}

export default AccountInfor;
