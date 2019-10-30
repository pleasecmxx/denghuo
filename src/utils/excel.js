import Blob from './excel/Blob'
import { export_json_to_excel } from './excel/Export2Excel.js'


function formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
}

/**
 * 
 * @param {*} tableData 数据
 * @param {*} name      excel表名
 * @param {*} tHeader   表头部
 * @param {*} filterVal 表头部对应属性的值
 */
export const ExportExcel = (tableData, name, tHeader, filterVal) => {
    require.ensure([], () => {
        // const tHeader = ['序号', '昵称', '姓名'];
        // // 上面设置Excel的表格第一行的标题
        // const filterVal = ['index', 'nickName', 'name'];
        // 上面的index、nickName、name是tableData里对象的属性
        const data = formatJson(filterVal, tableData);
        export_json_to_excel(tHeader, data, name);
    })
}