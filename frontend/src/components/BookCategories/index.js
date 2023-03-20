import Slider from '@material-ui/core/Slider';
import React, { useEffect, useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {
  authorData,
  categoryData,
  priceData,
  publiserData,
} from '../../more/data';
import Loading from '../../more/Loader';
import BookItem from '../Home/Books/BookItem';
import './BookCategories.scss';

import { Button } from 'react-bootstrap';
import {
  clearErrors,
  getProduct,
} from '../../redux/features/product/productsSlice';

export default function BookCategories() {
  const dispatch = useDispatch();
  let { keyword } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 1000000]);
  const [category, setCategory] = useState();
  const [ratings, setRatings] = useState(0);
  const [author, setAuthor] = useState();
  const [publisher, setPublisher] = useState();
  // pagination
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  // selector
  const { products, loading, error, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const priceHandlerSlider = (event, newPrice) => {
    setPrice(newPrice);
  };
  const priceHandlerClick = (e) => {
    setPrice([priceData[4], Number(e.target.value)]);
  };
  const reserHandler = (e) => {
    setPrice([0, 1000000]);
    setCategory();
    setAuthor();
    setPublisher();
    setCurrentPage(1);
  };
  useEffect(() => {
    if (!keyword) keyword = '';
    if (error) {
      // alert(error);
      console.log(error);
      dispatch(clearErrors());
    }

    // console.log(keyword);
    const infoData = {
      keyword: keyword,
      price: price,
      author: author,
      publisher: publisher,
      category: category,
      currentPage: currentPage,
      ratings: ratings,
    };
    console.log(category);
    console.log(author);
    dispatch(getProduct(infoData));
  }, [
    dispatch,
    keyword,
    currentPage,
    price,
    category,
    ratings,
    alert,
    error,
    author,
    publisher,
  ]);
  return (
    <div className='categories-container container-fluid'>
      <div className='categories-breadcrumb ms-5 mt-2 mb-5'>
        <Breadcrumb>
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>
            Trang chủ
          </Breadcrumb.Item>
          <Breadcrumb.Item className='text-capitalize' active>
            Danh mục sách
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className='categories-main-container m-5 mt-3'>
        <Tab.Container
          id='list-group-tabs-example'
          defaultActiveKey='#van-hoc-trong-nuoc'
        >
          <Row>
            <Col sm={3}>
              <div className='categories-nav-container'>
                <div className='categories-nav mb-5'>
                  <h6 className='categories-nav-title p-3 mb-0 fw-bold rounded'>
                    Danh Mục
                  </h6>
                  <ListGroup
                    variant='pills'
                    className='categories-nav-main d-flex flex-column text-capitalize'
                  >
                    {categoryData.map((item, i) => (
                      <div className='list-group-item form-check'>
                        <label className='form-check-label'>
                          <input
                            className='form-check-input ms-1 me-2'
                            type='radio'
                            name='flexRadioDefault'
                            value={item}
                            onClick={(e) => {
                              reserHandler();
                              setCategory(e.target.value);
                            }}
                          />
                          {item}
                        </label>
                      </div>
                    ))}
                    <div className='list-group-item form-check'>
                      <label className='form-check-label'>
                        <input
                          className='form-check-input ms-1 me-2'
                          type='radio'
                          name='flexRadioDefault'
                          value=''
                          onClick={(e) => {
                            reserHandler();
                            setCategory();
                          }}
                        />
                        Khác
                      </label>
                    </div>
                  </ListGroup>
                </div>
                <div className='categories-author mb-5'>
                  <h6 className='categories-author-title p-3 mb-0 fw-bold rounded'>
                    Tác giả
                  </h6>
                  {authorData.map((item, i) => (
                    <div className='list-group-item form-check'>
                      <label className='form-check-label'>
                        <input
                          className='form-check-input ms-1 me-2'
                          type='radio'
                          name='flexRadioDefault'
                          value={item}
                          onClick={(e) => {
                            reserHandler();
                            setAuthor(e.target.value);
                          }}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                  <div className='list-group-item form-check'>
                    <label className='form-check-label'>
                      <input
                        className='form-check-input ms-1 me-2'
                        type='radio'
                        name='flexRadioDefault'
                        value=''
                        onClick={(e) => setAuthor()}
                      />
                      Khác
                    </label>
                  </div>
                </div>
                <div className='categories-price mb-5'>
                  <h6 className='categories-price-title p-3 mb-0 fw-bold rounded'>
                    Giá sản phẩm
                  </h6>
                  <Slider
                    value={price}
                    onChange={priceHandlerSlider}
                    valueLabelDisplay='auto'
                    aria-labelledby='range-slider'
                    min={0}
                    max={1000000}
                  />
                  {priceData.map((item, i) => (
                    <div className='list-group-item form-check'>
                      <label className='form-check-label'>
                        <input
                          className='form-check-input ms-1 me-2'
                          type='radio'
                          name='flexRadioDefault'
                          value={item}
                          onClick={(e) => {
                            if (i === 0) priceData[i - 1] = 0;
                            setPrice([
                              priceData[i - 1],
                              Number(e.target.value),
                            ]);
                          }}
                        />
                        {priceData[i - 1]}đ - {priceData[i]}đ
                      </label>
                    </div>
                  ))}
                  <div className='list-group-item form-check'>
                    <label className='form-check-label'>
                      <input
                        className='form-check-input ms-1 me-2'
                        type='radio'
                        name='flexRadioDefault'
                        value=''
                        onClick={priceHandlerClick}
                      />
                      Trên 500000đ
                    </label>
                  </div>
                </div>
                <div className='categories-publisher mb-5'>
                  <h6 className='categories-publisher-title p-3 mb-0 fw-bold rounded'>
                    Nhà xuất bản
                  </h6>
                  {publiserData.map((item, i) => (
                    <div className='list-group-item form-check'>
                      <label className='form-check-label'>
                        <input
                          className='form-check-input ms-1 me-2'
                          type='radio'
                          name='flexRadioDefault'
                          value={item}
                          onClick={(e) => setPublisher(e.target.value)}
                        />
                        {item}
                      </label>
                    </div>
                  ))}
                  <div className='list-group-item form-check'>
                    <label className='form-check-label'>
                      <input
                        className='form-check-input ms-1 me-2'
                        type='radio'
                        name='flexRadioDefault'
                        value=''
                        onClick={(e) => setPublisher()}
                      />
                      Khác
                    </label>
                  </div>
                </div>
                <Button variant='outline-primary' onClick={reserHandler}>
                  Khôi phục
                </Button>
              </div>
            </Col>
            <Col sm={9}>
              {loading ? (
                <Loading />
              ) : (
                <div className='categories-main'>
                  {products.length === 0 ? (
                    <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>
                      Buồn quá 😭 Không có sách bạn muốn tìm đâu nha!!!
                    </h3>
                  ) : (
                    <div>
                      <h3 className='categories-main-title p-2 ps-3 text-light text-capitalize'>
                        Sách của UITBooks nà nha
                      </h3>
                      <div className='category-books row row-cols-3'>
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
                      </div>
                      <div
                        className='pagination__box'
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          margin: '6vmax',
                        }}
                      >
                        <Pagination
                          activePage={currentPage}
                          itemsCountPerPage={resultPerPage}
                          totalItemsCount={productsCount}
                          onChange={setCurrentPageNo}
                          nextPageText='Tiếp'
                          prevPageText='Trước'
                          firstPageText='Đầu'
                          lastPageText='Cuối'
                          itemClass='page-item'
                          linkClass='page-link'
                          activeClass='pageItemActive'
                          activeLinkClass='pageLinkActive'
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
