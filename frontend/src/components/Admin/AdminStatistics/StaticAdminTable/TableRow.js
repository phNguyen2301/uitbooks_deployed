import TableChartCategory from "./TableChart/TableChartCategory"
import './TableChart/TableChart.scss'
import TableChartBook from "./TableChart/TableChartBook"
function TableRow() {
    return (
        <div className="row-table">
            <div className="col">
                <TableChartCategory />
            </div>

            <div className="middle"></div>

            <div className="col">
                <TableChartBook />

            </div>
        </div>)
}

export default TableRow