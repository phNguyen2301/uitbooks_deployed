import React from 'react';
import { Link } from 'react-router-dom';
import { GrFormView } from 'react-icons/gr';
import { BsShare, BsFillStarFill, BsCircle } from 'react-icons/bs';

export default function BlogItem(props) {
  return (
    <>
      <div className='blog-item m-2 bg-primary bg-opacity-10 shadow-sm rounded'>
        <Link className='blog-item-link text-decoration-none lh-sm text-dark' to={props.path}>
          <figure className='blog-item-wrap' data-category={props.label}>
            <img
              className='blog-item-img img-fluid rounded mx-auto d-block p-2'
              alt={props.title}
              src={props.src}
            />
          </figure>
          <div className='blog-item-content p-2'>
            <div className='blog-item-info' data-category={props.info}>
              <h5 className='blog-item-title'>{props.title}</h5>
              <div className='blog-item-rating text-warning'>
                <i className='me-1'><BsFillStarFill /></i>
                <i className='me-1'><BsFillStarFill /></i>
                <i className='me-1'><BsFillStarFill /></i>
                <i className='me-1'><BsFillStarFill /></i>
                <i className='me-1'><BsFillStarFill /></i>
              </div>
              <p className='blog-item-description mt-2 mb-1'>{props.description}</p>
            </div>
            <div className='blog-item-author d-sm-flex flex-row justify-content-between'>
              <div className='blog-text-left'>
                <span>Tác giả:</span>
                <span className='blog-author-name ms-1 me-2'>{props.author}</span>
                <i className='blog-time-icon me-1'><BsCircle /></i>
                <span className='blog-time'>{props.time}</span>
              </div>
              <div className='blog-text-right'>
                <i className='blog-icon-view me-1'><GrFormView /></i>
                <span className='blog-view me-2'>{props.view}</span>
                <i className='blog-icon-share me-1'><BsShare /></i>
                <span className='blog-share'>0</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}