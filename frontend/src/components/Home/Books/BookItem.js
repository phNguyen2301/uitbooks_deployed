import React from "react";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import "./BookItem.css";
import { Rating } from "@material-ui/lab";
import { numberWithCommas } from "../../../more/FormatNumber";

export default function BookItem(props) {
  const ratingStars = () => {
    if (props.rating === 3) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 3.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStar className="star-unfilled" />
        </div>
      );
    } else if (props.rating === 4.5) {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarHalf className="star-halffilled" />
        </div>
      );
    } else {
      return (
        <div className="rating-container">
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
          <BsIcons.BsStarFill className="star-filled" />
        </div>
      );
    }
  };
  const priceDiscount = props.price + 15000;
  return (
    <>
      <Link to={`/book/${props.id}`}>
        <li className="book-item">
          <div className="book-item-container">
            {/* <img className='book-item-img'
                    alt={props.title}
                    src={props.src}
                />
                <div className='book-item-info'>
                    <div className='book-item-name'>
                        <h5 className='book-item-title'>{props.title}</h5>
                        <h6 className='book-item-author'>{props.author}</h6>
                    </div>

                    <div className='book-item-rate-stock'>
                        {ratingStars()}
                        <span>Đã bán</span>
                        <p>{props.sold}</p>
                    </div>

                    <div className='book-item-prices'>
                        <p>{props.price}</p>
                    </div> */}
            <figure className="book-item-img-wrap">
              <img className="book-item-img" alt="sach-hay" src={props.img} />
            </figure>
            <div className="book-item-info">
              <div className="book-item-name">
                <p href="/" className="book-item-title">
                  {props.title}
                </p>
                <h6 className="book-item-author">{props.author}</h6>
              </div>

              <div className="book-item-rate-stock">
                {/* <div className="rating-container">
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStarFill className="star-filled" />
                  <BsIcons.BsStar className="star-unfilled" />
                  <BsIcons.BsStar className="star-unfilled" />
                </div> */}
                <Rating value={props.ratings} size="small" readOnly />

                <div className="line"></div>
                <span className="sold">Đã bán {props.Sold}</span>
              </div>

              <div className="book-item-prices">
                <p>{numberWithCommas(priceDiscount)} đ</p>
                <p>{numberWithCommas(props.price)} đ</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  );
}
