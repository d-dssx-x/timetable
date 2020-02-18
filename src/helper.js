export const formatDate = (d) => {
    const date = new Date(d)
    let H = date.getHours()
    let M = date.getMinutes()
    if(H < 10) H = '0'+ H
    if(M < 10) M = '0'+ M
    return H + ':' + M
}
