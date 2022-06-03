import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  registerRequest,
  clear,
} from "../../../../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../more/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./UserNew.scss";

function UserNew() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // avatar
  const [avatar, setAvatar] = useState("/images/account/avatar.png");
  const [avatarPreview, setAvatarPreview] = useState(
    "/images/account/avatar.png"
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success, loading } = useSelector((state) => {
    console.log("state user", state.user);
    return state.user;
  });

  const handleAvatarChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setAvatar(e.target.value);
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registerRequest({
        name: userName,
        email,
        password,
        avatar: avatar,
      })
    );
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clear());
    }
    if (success) {
      toast.success("Thêm mới người dùng thành công! 🎊");
      dispatch(clear());
      setTimeout(() => {
        navigate("/admin-user-list");
      }, 3000);
    }
  }, [error, success]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="admin-user-new-form-infor">
          <div className="admin-form-infor-heading">
            <h4 className="mb-4">Thêm mới người dùng</h4>
            <hr />
            <p className="dark-grey-text mt-4" />
          </div>

          <form className="admin-user-new-form-infor-body p-3" action="">
            <div className="row">
              <div className="col-sm">
                <div className="row mb-3">
                  <label
                    htmlFor="form-email-body"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="form-email-body"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="form-username-body"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Tên đăng nhập
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="form-username-body"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="form-password-body"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Mật khẩu
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="form-password-body"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm">
                {/* <div className="row mb-3">
                  <label
                    htmlFor="form-role-body"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Lựa chọn role
                  </label>
                  <div className="col-sm-10">
                    <select className="form-control" id="form-role-body">
                      <option selected>Lựa chọn...</option>
                      <option value="admin">Admin</option>
                      <option value="user">Thường</option>
                    </select>
                  </div>
                </div> */}

                <div className="row mb-3">
                  <label
                    htmlFor="form-avatar-body"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Chọn Avatar
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control-file"
                      id="form-avatar-body"
                      name="avatar"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>
                {/* avatar preview */}
                <div className="row mb-3">
                  <label
                    htmlFor="form-avatar-preview"
                    className="col-sm-2 col-form-label add-user-label"
                  >
                    Avatar preview
                  </label>
                  <div className="col-sm-10">
                    <img
                      src={avatarPreview}
                      alt="avt-preview"
                      className="avatar"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto d-flex justify-content-start">
              <button
                type="button"
                className="btn btn-submit"
                onClick={handleOnSubmit}
              >
                Tạo mới
              </button>
              {/* <button type="button" className="btn btn-reset">
                Khôi phục
              </button> */}
            </div>
          </form>
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
      )}
    </>
  );
}
export default UserNew;
