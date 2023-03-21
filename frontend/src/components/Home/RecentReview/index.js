import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { toast, ToastContainer } from 'react-toastify';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { getMostReviewProducts } from '../../../redux/features/product/mostReviewProductsSlice';
import BookItem from '../Books/BookItem';
import './RecentReview.css';

export default function RecentReview() {
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
  const { error, products } = useSelector((state) => state.mostReviewProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(`${error}`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    dispatch(getMostReviewProducts());
  }, [dispatch, error]);
  return (
    <Container className='recent-review-container'>
      <div className='recent-review-title'>
        <h3>Review gần đây</h3>
      </div>
      <Slider className='recent-review-books' {...settings}>
        {products &&
          products.map((item, index) => {
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
      <div className='text-center mt-0'>
        <Link to='/books'>
          <Button className='see-more' variant='primary'>
            Xem thêm &rarr;
          </Button>
        </Link>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
