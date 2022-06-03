import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BookItem from "../Books/BookItem";
import { Button, Container } from "react-bootstrap";
import "./ComingSoon.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewsProducts } from "../../../redux/features/product/newsProductsSlice";
import { Link } from "react-router-dom";

const Books = [
  {
    title: "Ra Bờ Suối Ngắm Hoa Kèn Hồng",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1evMkN-8Yzk2FL51iREJZXawvg1-CpMVc",
    price: "100.500 đ",
  },
  {
    title: "Làm Bạn Với Bầu Trời",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1f81BHRFLAE1yEddPLdRUJO3jXJ2_SQPS",
    price: "150.500 đ",
  },
  {
    title: "Chúc Một Ngày Tốt Lành",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1qiStbESBEiBavZGEgTvcvoI7UHW9MKEy",
    price: "90.500 đ",
  },
  {
    title: "Ngày Xưa Có Một Chuyện Tình",
    author: "Nguyễn Nhật Ánh",
    img: "https://drive.google.com/uc?id=1iljqkkb1hT_FPSzkZJc0y5XtwNfzNL1K",
    price: "111.500 đ",
  },
  {
    title: "Tàn Lửa",
    author: "Shizukui Shusuke",
    img: "https://drive.google.com/uc?id=1SNwfEQMgarJBqvFH2ECYpEIxPGdGR1FG",
    price: "111.500 đ",
  },
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
  {
    title: "Cố Định Một Đám Mây",
    author: "Nguyễn Ngọc Tư",
    img: "https://drive.google.com/uc?id=1DRQUMkxDzs4ldQwJ0X746gDL9boMVW_Q",
    price: "111.500 đ",
  },
];
export default function ComingSoon() {
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { error, products } = useSelector((state) => state.newsProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsProducts());
  }, [dispatch]);
  return (
    <Container className="coming-soon-container">
      <div className="coming-soon-title">
        <h3>Mới nhất</h3>
        <img src="https://drive.google.com/uc?id=19KnqBhGINLa8yoIvJZAIRZ3GvP7rpjIp" />
      </div>
      <Slider className="best-seller-books" {...settings}>
        {products &&
          products.map((item, index) => {
            //   console.log(item.images);
            return (
              <BookItem
                key={index}
                id={item._id}
                title={item.name}
                author={item.author}
                //   img={item.images[0].url}
                img={item.images[0].url}
                price={item.price}
                Sold={item.Sold}
                ratings={item.ratings}
              />
            );
          })}
      </Slider>
      <div className="text-center mt-0">
        <Link to="/books">
          <Button className="see-more" variant="primary">
            Xem thêm &rarr;
          </Button>
        </Link>
      </div>
    </Container>
  );
}
