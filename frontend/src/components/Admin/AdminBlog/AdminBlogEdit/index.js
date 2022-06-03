import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./BlogEdit.scss";


function BlogEdit() {
    return (
        <div className="admin-blog-edit-form-infor">
            <div className="admin-form-infor-heading">
                <h4 className="mb-4">Chỉnh sửa blog</h4>
                <hr />
                <p className="dark-grey-text mt-4" />
            </div>

            <form className="admin-blog-edit-form-infor-body p-3" action="">
                <div className="row">
                    <div className="col-sm">
                        <div className="row mb-3">
                            <label
                                htmlFor="form-title-body"
                                className="col-sm-2 col-form-label edit-blog-label"
                            >
                                Tiêu đề
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="form-title-body"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-sm">
                        <div className="row mb-3">
                            <label
                                htmlFor="form-cover-body"
                                className="col-sm-2 col-form-label edit-blog-label"
                            >
                                Chọn ảnh bìa
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="form-control-file"
                                    id="form-cover-body"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-editor">
                    <label
                        className="col-sm-2 col-form-label edit-blog-label"
                    >
                        Nội dung blog
                    </label>
                    <CKEditor
                        editor={ClassicEditor}
                        data=""
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

                <div className="col-auto d-flex justify-content-start">
                    <button type="submit" className="btn btn-primary">
                        Lưu
                    </button>
                </div>
            </form>
        </div>
    )
}
export default BlogEdit;
