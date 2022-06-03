import './TableChart.scss'

function TableChartBook() {

    return (
        <div className='table-container'>
            <div className='table-caption'>
                Top những quyển sách
            </div>
            <table className="table-chart">
                <thead className="table-chart-thead">
                    <tr className="thead-tr">
                        <th className="thead-th">Sản phẩm</th>
                        <th className="thead-th">Số lượng</th>
                        <th className="thead-th">Giá</th>
                    </tr>
                </thead>
                <tbody className="table-chart-tbody">
                    <tr className="tbody-tr">
                        <td className="tbody-td">Cô gái đến từ hôm qua</td>
                        <td className="tbody-td">60</td>
                        <td className="tbody-td">60.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Cô gái đến từ hôm qua</td>
                        <td className="tbody-td">60</td>
                        <td className="tbody-td">60.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Cô gái đến từ hôm qua</td>
                        <td className="tbody-td">60</td>
                        <td className="tbody-td">60.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Cô gái đến từ hôm qua</td>
                        <td className="tbody-td">60</td>
                        <td className="tbody-td">60.000đ</td>
                    </tr>

                    <tr className="tbody-tr">
                        <td className="tbody-td">Cô gái đến từ hôm qua</td>
                        <td className="tbody-td">60</td>
                        <td className="tbody-td">60.000đ</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default TableChartBook