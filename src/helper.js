export const formatDate = (d) => {
    const date = new Date(d)
    let H = date.getHours()
    let M = date.getMinutes()
    if(H < 10) H = '0'+ H
    if(M < 10) M = '0'+ M
    return H + ':' + M
}
export const unFormatDate = (d) => {
    return '2020-01-01T'+ d + ':00'
}
