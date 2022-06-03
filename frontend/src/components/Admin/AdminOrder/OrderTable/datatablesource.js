import { MdCenterFocusStrong } from "react-icons/md";

export const userColumns = [
  {
    field: "id",
    headerName: "STT",
    headerAlign: "center",
    width: 60,
    align: "center",
  },
  {
    field: "barcode",
    headerAlign: "center",
    headerName: "Mã đơn hàng",
    align: "center",
    width: 130,
  },
  {
    field: "employeeName",
    headerName: "Tên người đặt",
    headerAlign: "center",
    align: "center",
    width: 200,
  },

  {
    field: "status",
    headerName: "Tình trạng",
    headerAlign: "center",
    align: "center",
    width: 170,
    renderCell: (params) => {
      let a;
      if (params.row.status === "Canceled") {
        a = "Hủy đơn";
      } else if (params.row.status === "Shipped") {
        a = "Đã bán";
      } else if (params.row.status === "Processing") {
        a = "Đang xử lý";
      } else if (params.row.status === "Shipping") {
        a = "Đang vận chuyển";
      }

      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {/* {params.row.status}  */}
          {a}
        </div>
      );
    },
  },

  {
    field: "date",
    headerAlign: "center",
    headerName: "Ngày đặt",
    align: "center",
    width: 150,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "Canceled",
    date: "05/08/2022",
  },
  {
    id: 2,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "Shipped",
    date: "05/08/2022",
  },
  {
    id: 3,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "Processing",
    date: "05/08/2022",
  },
  {
    id: 4,
    barcode: "BT012345",
    employeeName: "Bùi Thị Diễn Châu",
    status: "Shipping",
    date: "05/08/2022",
  },
];
