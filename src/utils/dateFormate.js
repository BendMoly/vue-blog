/**
 * 数据库时间date格式化
 * @param {string} strDate 
 */
export function dateFormate(strDate){
    var date = new Date(strDate);
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
}