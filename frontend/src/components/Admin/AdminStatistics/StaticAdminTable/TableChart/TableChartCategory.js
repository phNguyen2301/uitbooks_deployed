import './TableChart.scss'

function TableChart() {

    return (
        <div className='table-container'>
            <div className='table-caption'>
                Top thể loại - Sách đã bán
            </div>
            <table className="table-chart">
                <thead className="table-chart-thead">
                    <tr className="thead-tr">
                        <th className="thead-th">Danh mục</th>
                        <th className="thead-th">Số lượng</th>
                        <th className="thead-th">Tổng giá</th>
                    </tr>
                </thead>
                <tbody className="table-chart-tbody">
                    <tr className="tbody-tr">
                        <td className="tbody-td">Tất cả</td>
                        <td className="tbody-td">9</td>
                        <td className="tbody-td">1.236.000đ</td>
                    </tr>
                    <tr className="tbody-tr">
                        <td className="tbody-td">Khoa học viễn tưởng</td>
                        <td className="tbody-td">3</td>
                        <td className="tbody-td">420.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Sách thiếu nhi</td>
                        <td className="tbody-td">2</td>
                        <td className="tbody-td">90.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Tiểu thuyết lãng mạn</td>
                        <td className="tbody-td">2</td>
                        <td className="tbody-td">540.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Truyền cảm hứng</td>
                        <td className="tbody-td">2</td>
                        <td className="tbody-td">186.000đ</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableChart