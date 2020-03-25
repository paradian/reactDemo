import XLSX from 'xlsx'

function importExcel (file) {
    const {files} = file.target 
    const fileReader = new FileReader()
    var total =[]
    let promise = new Promise((resolve,reject) =>{
    fileReader.onload = (event) => {
            let data = []
            try {
                const {result} = event.target
                const workBook = XLSX.read(result,{type:'binary'})
              
                for(const sheet in workBook.Sheets){
                    if (workBook.Sheets.hasOwnProperty(sheet)) {
                        // 利用 sheet_to_json 方法将 excel 转成 json 数据
                        data = data.concat(XLSX.utils.sheet_to_json(workBook.Sheets[sheet]));
                        // break; // 如果只取第一张表，就取消注释这行
                    }
                }
                console.log(data)
                total = data
                console.log(total,'total',new Date().getTime())
                resolve(data)
                return total
            }
            catch(error){
                console.log(error)
            }
            // console.log(data,'dataaaa')
            // total = data
            // console.log(total,'dataaaa')
        }
    
    })
    fileReader.readAsBinaryString(files[0]);
    return promise

  
    // // console.log( fileReader.readAsBinaryString(files[0]))
    // // return data
    // return  total
}

function exportExcel(headers,data,fileName) {
    const _headers = headers
    .map((item, i) => Object.assign({}, { key: item.key, title: item.title, position: String.fromCharCode(65 + i) + 1 }))
    .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { key: next.key, v: next.title } }), {});

const _data = data
    .map((item, i) => headers.map((key, j) => Object.assign({}, { content: item[key.key], position: String.fromCharCode(65 + j) + (i + 2) })))
    // 对刚才的结果进行降维处理（二维数组变成一维数组）
    .reduce((prev, next) => prev.concat(next))
    // 转换成 worksheet 需要的结构
    .reduce((prev, next) => Object.assign({}, prev, { [next.position]: { v: next.content } }), {});

// 合并 headers 和 data
const output = Object.assign({}, _headers, _data);
// 获取所有单元格的位置
const outputPos = Object.keys(output);
// 计算出范围 ,["A1",..., "H2"]
const ref = `${outputPos[0]}:${outputPos[outputPos.length - 1]}`;

// 构建 workbook 对象
const wb = {
    SheetNames: ['mySheet'],
    Sheets: {
        mySheet: Object.assign(
            {},
            output,
            {
                '!ref': ref,
                '!cols': [{ wpx: 45 }, { wpx: 100 }, { wpx: 200 }, { wpx: 80 }, { wpx: 150 }, { wpx: 100 }, { wpx: 300 }, { wpx: 300 }],
            },
        ),
    },
};

  
// 导出 Excel
XLSX.writeFile(wb, fileName);
}

function dateFilter(date) {
    let y = date.getFullYear()
    let m = date.getMonth() + 1
    let d = date.getDay()
    if (m < 10) m = '0' + '' + m
    if (d < 10) d = '0' + '' + d
    return (y + '-' + m + '-' + d)
  }
  
  function timeFilter(date) {
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    if (h < 10) h = '0' + '' + h
    if (m < 10) m = '0' + '' + m
    if (s < 10) s = '0' + '' + s
    return (h + ':' + m + ':' + s)
  }
export default {
    importExcel,
    exportExcel,
    dateFilter,
    timeFilter
}