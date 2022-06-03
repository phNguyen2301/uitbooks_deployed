import BookItem from "../../../Home/Books/BookItem";
import "./FavoritesPostContent.scss";
function FavoritesPostContent() {
  const Books = [
    {
      title: "Cảm Ơn Người Lớn",
      author: "Nguyễn Nhật Ánh",
      img: "https://drive.google.com/uc?id=1SFgK4XIgGATHp0hauLyMf_Ccbs-sDuEj",
      price: "111.500 đ",
    },
    {
      title: "Chuyện Kể Rằng Có Nàng Và Tôi",
      author: "Nhiều tác giả",
      img: "https://drive.google.com/uc?id=15eeAUNLISuTCIDK_YRiSQwCWglfJbHZW",
      price: "111.500 đ",
    },
  ];

  return (
    <div className="favorite-post" style={{ textAlign: "center" }}>
      <div>
        <img
          className="empty-wrapper-post"
          src="https://drive.google.com/uc?id=1uyd61DglezvYQWuyUYyCFdv3hCgWaRsB"
          alt="no item favorites"
        />
        <p>
          <b>Thông cảm cho tụi mình tính năng này đang phát triển nha 🥺</b>
        </p>
      </div>
    </div>
  );
}

export default FavoritesPostContent;
