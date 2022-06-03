import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/features/user/allUsersSlice";
import {
  deleteUser,
  clear,
} from "../../../../redux/features/user/userDetailsSlice";
import "./UserList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./UserData";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";
// import { Button } from "@mui/material";
import { Form, Modal, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const UserList = () => {
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [idDelete, setIdDelete] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.allUsers);
  const { success, message } = useSelector((state) => state.userDetails);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  useEffect(() => {
    if (users) {
      setData(() => {
        return users.map((user, index) => {
          return {
            id: index,
            name: user.name,
            email: user.email,
            role: user.role,
            userId: user._id,
          };
        });
      });
    }
  }, [users]);
  useEffect(() => {
    if (success) {
      toast.success(message);
      dispatch(getAllUsers());
    }
    if (success === false) {
      toast.error(message);
    }
    dispatch(clear());
  }, [success]);

  const handleDeleteUser = () => {
    dispatch(deleteUser({ id: idDelete }));
    setShow(false);
  };
  const handleDelete = (id) => {
    handleShow();
    console.log("id delete", id);
    setIdDelete(id);
    // setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 120,
      headerAlign: "center",
      align: "center",
      minWidth: 100,
      maxwidth: 180,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to="/admin-user-edit"
              state={{ userId: params.row.userId }}
              style={{ textDecoration: "none" }}
            >
              <div className="editButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.userId)}
            >
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách người dùng
        <Link to="/admin-user-new" className="link">
          <FaUserPlus className="addUser" />
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid grid-auto-columns grid-auto-rows"
        rows={data.length > 0 ? data : []}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Xoá Người Dùng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có thực sự muốn xóa người dùng này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Xoá
          </Button>
        </Modal.Footer>
      </Modal>
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
};

export default UserList;
