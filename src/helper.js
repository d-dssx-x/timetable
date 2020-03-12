export const formatTime = (d) => {
    const date = new Date(d)
    let H = date.getHours()
    let M = date.getMinutes()
    if(H < 10) H = '0'+ H
    if(M < 10) M = '0'+ M
    return H + ':' + M
}
export const formatDate = (d) => {
    const mon = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    const date = new Date(d)
    let D = date.getDate(date)
    let M = date.getMonth(date)
    let Y = date.getFullYear(date)
    return D + ' ' + mon[M] + ' ' + Y
}


export const unFormatDate = (d) => {
    return '2020-01-01T'+ d + ':00'
}
