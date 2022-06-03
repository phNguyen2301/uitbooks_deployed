import "./AdminBookList.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import { MdDelete, MdMenuBook, MdOutlinePreview } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorsDeleted,
  deleteProduct,
  resetStateDelete,
} from "../../../../redux/features/product/productSlice";
import {
  getProductsAdmin,
  clearErrors,
} from "../../../../redux/features/product/productsAdminSlice";
import { toast, ToastContainer } from "react-toastify";
import { getAllReviews } from "../../../../redux/features/product/productReviewsSlice";
import {
  clearErrorsDeleteReview,
  deleteReviews,
  resetStateDeletedReview,
} from "../../../../redux/features/product/reviewSlice";
import moment from "moment";
import Loading from "../../../../more/Loader";

function getFormattedDate(date) {
  return new Date(date).toLocaleDateString("en-GB");
}

const AdminBookList = () => {
  const dispatch = useDispatch();
  // Modal comment previews
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [bookId, setBookId] = useState();

  const { loading, error, products } = useSelector(
    (state) => state.productsAdmin
  );
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  );
  const { error: reviewError, reviews } = useSelector(
    (state) => state.productReviews
  );
  const { error: reviewDeleteError, isDeleted: isDeletedReview } = useSelector(
    (state) => state.review
  );
  // console.log(reviewError, reviews);
  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };
  const getReviewsHandler = (id) => {
    dispatch(getAllReviews(id));
  };
  const deleteReviewHandler = (id, bookId) => {
    const idData = {
      reviewId: id,
      bookId: bookId,
    };
    dispatch(deleteReviews(idData));
  };
  useEffect(() => {
    if (reviewDeleteError && !isDeletedReview) {
      toast.error(`${reviewDeleteError}`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleClose();
      dispatch(clearErrorsDeleteReview());
    }
    if (isDeletedReview) {
      toast.success("Xóa  thành công! 🎊", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      handleClose();
      dispatch(resetStateDeletedReview());
    }
  }, [reviews, reviewDeleteError, alert, isDeletedReview]);
  useEffect(() => {
    dispatch(getProductsAdmin());
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError && isDeleted) {
      toast.success("Xóa sách thành công! 🎊", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(resetStateDelete());
      dispatch(clearErrorsDeleted());
      dispatch(getProductsAdmin());
    } else if (deleteError != null) {
      toast.error("Thất bại! Vui lòng thử lại 😭", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(clearErrorsDeleted());
    }
  }, [dispatch, alert, error, deleteError, isDeleted]);
  // done
  const actionColumn = [
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/admin-book-edit/${params.getValue(params.id, "id")}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">
                <BiEdit />
              </div>
            </Link>
            <div
              className="reviewsButton"
              onClick={(e) => {
                e.preventDefault();
                setShow(true);
                setBookId(params.getValue(params.id, "id"));
                getReviewsHandler(params.getValue(params.id, "id"));
              }}
            >
              <MdOutlinePreview />
            </div>
            <div
              className="deleteButton"
              onClick={() => {
                // console.log(params.getValue(params.id, "id"));
                deleteProductHandler(params.getValue(params.id, "id"));
              }}
            >
              <MdDelete />
            </div>
            {/* <div className="reviewsButton" onClick={handleShow}>
              <MdOutlinePreview />
            </div> */}
          </div>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item, index) => {
      rows.push({
        stt: index + 1,
        id: item._id,
        name: item.name,
        Stock: item.Stock,
        pageNumber: item.pageNumber,
        price: item.price,
        category: item.category,
        author: item.author,
        publisher: item.publisher,
        description: item.description,
        // img: item.images[0].url
        //   ? item.images[0].url
        //   : "https://res.cloudinary.com/uitbooks/image/upload/v1653576546/books/cnign5w5v4qlelbw9dhq.jpg",
        img: item.images[0].url,
      });
    });
  // const [data, setFilteredData] = useState(rows);
  // const [search, setSearch] = useState("");
  // const filter = (e) => {
  //   const key = e.target.value;
  //   if (key !== "") {
  //     const filteredData = rows.filter((item) => {
  //       return item.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
  //         .includes(key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D'));
  //     });
  //     setFilteredData(filteredData);
  //   } else {
  //     setFilteredData(rows);
  //     setSearch("");
  //   }
  //   setSearch(key);
  // };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className="datatable">
          <div className="col-xl-6 col-lg-5 col-md-6">
            <form action="#" className="search-header">
              <div className="input-group w-100">
                <input
                  type="text"
                  // value={search}
                  // onChange={filter}
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
            Danh sách các quyển sách
            <Link to="/admin-book-new" className="link">
              <MdMenuBook className="icon-book-new" />
              Thêm mới
            </Link>
          </div>
          <DataGrid
            className="datagrid"
            rows={rows}
            columns={userColumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
          <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
              <Modal.Title>Danh Sách Bình Luận</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <Form className="form">
                {reviews &&
                  reviews.map((item, i) => (
                    <div className="book-comment-others" key={i}>
                      <div className="book-comment-user d-flex border-top">
                        <div className="book-comment-avatar flex-shrink-0 fs-1">
                          <IoPersonCircleSharp />
                        </div>
                        <div className="book-comment-container flex-grow-1 ms-3 mt-4">
                          <div className="book-comment-userinfo d-flex">
                            <div className="book-comment-name w-100 fw-bold">
                              {/* <p>{item.name}</p> */}
                              <p>{item.name}</p>
                            </div>
                            <div className="book-comment-date flex-shrink-1 text-secondary fs-6">
                              {/* <p>{item.time}</p> */}
                              <p>{moment(item.time).format("DD/MM/YYYY")}</p>
                            </div>
                            <RiDeleteBin2Fill
                              className="book-comment-delete-icon ms-5"
                              onClick={(e) => {
                                console.log(item._id, bookId);
                                deleteReviewHandler(item._id, bookId);
                              }}
                            />
                          </div>
                          <div className="book-comment-content">
                            {/* <p>{item.comment}</p> */}
                            <p>{item.comment}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
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
      )}
    </Fragment>
  );
};

export default AdminBookList;
