export const formatDate = (d) => {
    const date = new Date(d)
    let H = date.getHours()
    let M = date.getMinutes()
    if(H < 10) H = '0'+ H
    if(M < 10) M = '0'+ M
    return H + ':' + M
}

export const createPARAM_ADD = (PARAM) => {
    const day = PARAM.day.slice(0,3).toLowerCase()
    PARAM.store = {start : '2020-02-11T21:00:44.000Z',finish : '2020-02-11T21:00:44.000Z',subject : '', id : `f${(+new Date).toString(16)}`,color: "#70258c",classroom : '',add : false, day : day}
    return PARAM
}