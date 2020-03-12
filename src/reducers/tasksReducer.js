import { CHANGE_DONE_TASK, CHANGE_NAME_TASK, CHANGE_COLOR_TASK, CHANGE_SUBJECT_TASK, CHANGE_NOTE_TASK, CHANGE_FINISH_TIME_TASK } from "../type"


export default (state = [], action) => {
    const newState = state 
    switch (action.type){
        case CHANGE_DONE_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{done : !action.value}): el)
        }
        case CHANGE_NAME_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{name : action.value}):el)
        }
        case CHANGE_NOTE_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{note : action.value}):el)
        }
        case CHANGE_SUBJECT_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{subject : action.value}):el)
        }
        case CHANGE_COLOR_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{color : action.value}):el) 
        }
        case CHANGE_FINISH_TIME_TASK : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{finish: action.value}):el) 
        }
    }
    return newState
}