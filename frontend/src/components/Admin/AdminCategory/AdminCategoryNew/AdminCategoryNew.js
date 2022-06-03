import "./AdminCategoryNew.scss";
import { categoryData } from "../../../../more/data";
import { useState } from "react";

function AdminCategoryNew() {
  // console.log(categoryData);
  // const [dataCategory, setDatacategory] = useState(categoryData)

  return (
    <div className="wrapper">
      <form className="form-wrapper">
        <div className="form-title-header">
          <h5 className="mb-4">Thêm thể loại mới</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>

        <div className="form-group">
          {/* <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <input  type="text" className="form-control" /> */}

          <label className="form-group-label" htmlFor="category-select-add">
            Thể loại
          </label>
          <select className="form-control form-select" id="category-select-add">
            <option>Kinh tế</option>
            <option>Kỹ năng sống</option>
            <option>Ngôn tình</option>
            <option>Tâm lý</option>
            <option>Tiếng Anh</option>
            <option>Tiểu thuyết</option>
            <option>Chuyên ngành</option>
            <option>Ngoại ngữ</option>
            <option>Thường thức đời sống</option>
            <option>Khác</option>
          </select>
        </div>

        <div className="form-group">
          <label
            className="form-group-label"
            htmlFor="exampleFormControlTextarea1"
          >
            Mô tả sách
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>

        <button type="button" class="btn btn-submit">
          Tạo mới
        </button>
        <button type="button" class="btn btn-reset">
          Khôi phục
        </button>
      </form>
    </div>
  );
}

export default AdminCategoryNew;
