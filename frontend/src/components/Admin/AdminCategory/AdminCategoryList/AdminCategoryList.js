import "./AdminCategoryList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdCategory } from "react-icons/md";
import SearchIcon from "@mui/icons-material/Search";
import { Form, Button } from "react-bootstrap";

const AdminCategoryList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      minWidth: 200,
      maxwidth: 400,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/admin-category-edit" style={{ textDecoration: "none" }}>
              <div className="viewButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
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
      <div className="col-xl-6 col-lg-5 col-md-6">
        <form action="#" className="search-header">
          <div className="input-group w-100">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm"
            />
            <div className="input-group-append">
              <Button variant="dark">
                <SearchIcon />
              </Button>
            </div>
          </div>
        </form>
      </div>
      <div className="datatableTitle">
        Danh sách thể loại
        <Link to="/admin-category-new" className="link">
          <MdCategory className="icon-category-new" />
          Thêm mới
        </Link>
      </div>
      <DataGrid
        className="datagrid grid-auto-columns grid-auto-rows"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminCategoryList;
