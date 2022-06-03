import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserDetails,
  clear,
} from "../../../../redux/features/user/userDetailsSlice";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../../../more/Loader";
import "./UserEdit.scss";

function UserEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, user, success } = useSelector((state) => state.userDetails);
  const userId = location.state.userId;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    dispatch(getUserDetails({ userId }));
  }, []);

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setRole(user.role);
      if (user.avatar.url) {
        setAvatar(user.avatar.url);
      }
    }
  }, [user]);

  useEffect(() => {
    if (success) {
      toast.success("Update success, redirect admin page after 3s");
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    }
    if (success === false) {
      toast.error("Update not success");
    }
    dispatch(clear());
  }, [success]);

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
  };

  const handleUpdateUserDetails = (e) => {
    e.preventDefault();
    dispatch(updateUserDetails({ id: userId, name, email, role, avatar }));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="admin-user-edit-form-infor">
          <div className="admin-form-infor-heading">
            <h4 className="mb-4">Chỉnh sửa thông tin</h4>
            <hr />
            <p className="dark-grey-text mt-4" />
          </div>

          <form className="admin-user-edit-form-infor-body p-3" action="">
            <div className="row">
              <div className="col-sm">
                {/* <div className="row mb-3">
                            <label
                                htmlFor="form-name-body"
                                className="col-sm-2 col-form-label edit-user-label"
                            >
                                Họ tên
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="form-name-body"
                                />
                            </div>
                        </div> */}
                <div className="row mb-3">
                  <label
                    htmlFor="form-email-body"
                    className="col-sm-2 col-form-label edit-user-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="form-email-body"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* <div className="row mb-3">
                            <label
                                htmlFor="form-phoneNumber-body"
                                className="col-sm-2 col-form-label edit-user-label"
                            >
                                SĐT
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="form-phoneNumber-body"
                                />
                            </div>
                        </div> */}

                {/* <div className="row mb-3">
                            <label
                                htmlFor="form-adress-body"
                                className="col-sm-2 col-form-label edit-user-label"
                            >
                                Địa chỉ
                            </label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="form-address-body" />
                            </div>
                        </div> */}
              </div>

              <div className="col-sm">
                <div className="row mb-3">
                  <label
                    htmlFor="form-username-body"
                    className="col-sm-2 col-form-label edit-user-label"
                  >
                    Tên đăng nhập
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
                {/* <div className="row mb-3">
                            <label
                                htmlFor="form-password-body"
                                className="col-sm-2 col-form-label edit-user-label"
                            >
                                Mật khẩu
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="form-password-body"
                                />
                            </div>
                        </div> */}
                <div className="row mb-3">
                  <label
                    htmlFor="form-role-body"
                    className="col-sm-2 col-form-label edit-user-label"
                  >
                    Lựa chọn role
                  </label>
                  <div className="col-sm-10">
                    <select
                      className="form-control"
                      id="form-role-body"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option selected>Lựa chọn...</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="form-avatar-body"
                    className="col-sm-2 col-form-label edit-user-label"
                  >
                    Chọn Avatar
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="file"
                      name="avatar"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="form-avatar-body"
                    className="col-sm-2 col-form-label edit-user-label"
                  >
                    Avatar preview
                  </label>
                  <div className="col-sm-10">
                    {avatar ? (
                      <img
                        src={avatar}
                        className="avatar"
                      />
                    ) : (
                      "Chưa có Avatar"
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-auto d-flex justify-content-start">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleUpdateUserDetails}
              >
                Update
              </button>
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
export default UserEdit;
