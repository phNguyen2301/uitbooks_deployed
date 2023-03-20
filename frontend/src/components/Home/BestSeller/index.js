import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getPopularProducts } from '../../../redux/features/product/popularProductsSlice';
import BookItem from '../Books/BookItem';
import './BestSeller.css';

export default function BestSeller() {
  const { error, products } = useSelector((state) => state.popularProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularProducts());
  }, [dispatch]);
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
  return (
    <Container className='best-seller-container'>
      <div className='best-seller-title'>
        <h3>Bán chạy nhất</h3>
        <img src='https://iili.io/HhzQWmX.gif' alt='best-seller' />
      </div>
      <Slider className='best-seller-books' {...settings}>
        {products &&
          products.map((item, index) => {
            return (
              <BookItem
                key={index}
                id={item._id}
                title={item.name}
                author={item.author}
                img={item.images[0].url}
                price={item.price}
                Sold={item.Sold}
                ratings={item.ratings}
              />
            );
          })}
      </Slider>
      <div className='text-center mt-0'>
        <Link to='/books'>
          <Button className='see-more' variant='primary'>
            Xem thêm &rarr;
          </Button>
        </Link>
      </div>
    </Container>
  );
}
