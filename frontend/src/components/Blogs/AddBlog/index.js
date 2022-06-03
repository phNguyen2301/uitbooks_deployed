import React from 'react';
import './AddBlog.scss';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { GiNotebook } from "react-icons/gi";

export default function AddBlog() {
  return (
    <div className='add-blog-container container-fluid'>
      <div className='add-blog-banner'>
        <img className='img-fluid img-thumbnail' src='https://drive.google.com/uc?id=1j6Z6K-79YG-H8XmefxLdu698Pxwgcks1' alt='Add Blog UITBooks' />
      </div>
      <div className='add-blog-main'>
        <h4 className='add-blog-main-heading text-capitalize pb-2 mt-5 ms-4 me-4'>Thêm blog mới</h4>
        <div className='add-blog-main-content d-flex'>
          <div className='add-blog-main-icon d-flex flex-column mt-3'>
            <img className='logo flex-shrink-1 m-2 ms-0' src='/images/header/uitbook-logo.png' alt='UITBook-logo' />
            <div className='icon-book border text-center mt-5'>
              <i className='icon'><GiNotebook /></i>
              <p className='icon-name'>Blog</p>
            </div>
          </div>
          <form className='add-blog-main-body ms-3 p-3 w-100' action=''>
            <div className='row'>
              <div className='col-sm'>
                <div className='row mb-3'>
                  <label
                    htmlFor='form-title-body'
                    className='col-sm-2 col-form-label add-blog-label'
                  >
                    Tiêu đề
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='text'
                      className='form-control'
                      id='form-title-body'
                    />
                  </div>
                </div>
              </div>

              <div className='col-sm'>
                <div className='row mb-3'>
                  <label
                    htmlFor='form-cover-body'
                    className='col-sm-2 col-form-label add-blog-label'
                  >
                    Chọn ảnh bìa
                  </label>
                  <div className='col-sm-10'>
                    <input
                      type='file'
                      accept='image/*'
                      className='form-control-file'
                      id='form-cover-body'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='blog-editor'>
              <label
                className='col-sm-2 col-form-label add-blog-label'
              >
                Nội dung blog
              </label>
              <CKEditor
                editor={ClassicEditor}
                data=''
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                  console.log('Focus.', editor);
                }}
              />
            </div>
            <div className='add-blog-button text-end'>
              <button type='submit' className='add-blog-btn rounded'>
                Tạo mới
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};