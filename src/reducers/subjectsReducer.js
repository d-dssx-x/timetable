import {
    INITIAL_STATE,
    SAVE_NAME_SUBJECT,
    DELETE_NAME_SUBJECT
} from '../type/index'

export default (state = [], action) => {
    const newState = state 
    switch(action.type){
        case SAVE_NAME_SUBJECT : {
            if(newState.findIndex((el)=>el.name === action.value) === -1) newState.push({
                name : action.value,
                form : ''
            })
            return newState
        }
        // case DELETE_NAME_SUBJECT : {
        //     newState.splice(action.index,1)
        // }
        default:
            return state
    }
}