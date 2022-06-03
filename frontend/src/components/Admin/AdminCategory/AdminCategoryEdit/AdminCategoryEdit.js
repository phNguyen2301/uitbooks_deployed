import "../AdminCategoryNew/AdminCategoryNew.scss";

function AdminCategoryEdit() {
  return (
    <div className="wrapper">
      <form className="form-wrapper">
        <div className="form-title-header">
          <h5 className="mb-4">Chỉnh sửa thể loại</h5>
          <hr />
          <p className="dark-blue-text mt-4" />
        </div>

        <div className="form-group">
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
            rows="10"
            placeholder="Sách nói về những câu chuyện ngày xửa ngày xưa, tạp chí và những bài thơ dành cho trẻ em. Văn học thiếu nhi có 2 loại: phong cách cổ điển và phong cách hiện đại. Phong cách hiện đại được phân loại theo hai cách khác nhau đó là: thể loại sách hoặc để nhắm tới độ tuổi của đối tượng độc giả. Còn phong cách cổ điển là những câu chuyện cổ tích."
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Lưu
        </button>
      </form>
    </div>
  );
}

export default AdminCategoryEdit;
