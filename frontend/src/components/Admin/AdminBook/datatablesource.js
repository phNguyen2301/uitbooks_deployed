export const userColumns = [
  {
    field: "stt",
    headerName: "STT",
    width: 40,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "id",
    headerName: "id",
    width: 40,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "img",
    headerName: "Hình ảnh",
    headerAlign: "center",
    align: "center",
    // width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {/* {params.row.username} */}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Tên sách",
    width: 180,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "category",
    headerName: "Thể loại",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "author",
    headerName: "Tác giả",
    width: 160,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "publisher",
    headerName: "NXB",
    width: 120,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "description",
    headerName: "Mô tả",
    width: 250,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "pageNumber",
    headerName: "Số trang",
    width: 70,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Stock",
    headerName: "Tồn kho",
    width: 80,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "price",
    headerName: "Giá",
    width: 90,
    headerAlign: "center",
    align: "center",
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    img: "https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy",
    bookName: "Milk and honey",
    category: "Thơ",
    author: "Rupi Kaur",
    publisher: "Simon & Schuster",
    description:
      "Tập thơ và văn xuôi về sự sống còn. Về trải nghiệm bạo lực, lạm dụng, tình yêu, mất mát và nữ tính.",
    price: "150.000đ",
    pageNumber: "200",
    stock: "500",
  },

  {
    id: 2,
    img: "https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K",
    bookName: "Psychology Money",
    category: "Tâm lý học",
    author: "Morgan Housel",
    publisher: "Harriman",
    description:
      "Đầu tư tiền bạc, tài chính cá nhân và các quyết định kinh doanh - thường được dạy như một lĩnh vực dựa trên toán học.",
    price: "504.000đ",
    pageNumber: "200",
    stock: "500",
  },

  {
    id: 3,
    img: "https://drive.google.com/uc?id=1SNwfEQMgarJBqvFH2ECYpEIxPGdGR1FG",
    bookName: "Company of One",
    category: "Kinh doanh & kinh tế",
    author: "Paul Javis",
    publisher: "Houghton",
    description:
      "Company of One là một cách tiếp cận mới mẻ, tập trung vào việc duy trì quy mô nhỏ và tránh tăng trưởng, cho mọi quy mô kinh doanh.",
    price: "450.000đ",
    pageNumber: "200",
    stock: "500",
  },

  {
    id: 4,
    img: "https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj",
    bookName: "Mere Christianity",
    category: "Thơ",
    author: "Lewis",
    publisher: "HarperCollins",
    description:
      "Cuốn sách tập hợp các chương trình phát thanh huyền thoại của CS Lewis trong những năm chiến tranh.",
    price: "373.000đ",
    pageNumber: "200",
    stock: "500",
  },
];
