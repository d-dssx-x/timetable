import {
    INITIAL_STATE, SAVE_TIME_PATTEN,
} from '../type/index'

export default (state = [], action) => {
    const newState = state 
    switch (action.type){
        case SAVE_TIME_PATTEN : {
            const valueH = new Date(action.start).getHours()
            const valueM = new Date(action.start).getMinutes()
            if(newState.findIndex(el=>{
                const tmpHours = new Date(el.start).getHours()
                const tmpMinutes = new Date(el.start).getMinutes()
                if(tmpHours === valueH && tmpMinutes ===  valueM){
                    return true
                }
            }) === -1){
                let obj = {
                    start : action.start,
                    finish : action.finish
                }
                newState.push(obj)
            }
        }
    }
    return newState
}