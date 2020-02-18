import {
    INITIAL_STATE,
    CHANGE_SUBJECT,
    CHANGE_CLASSROOM,
    CHANGE_START_TIME,
    CHANGE_FINISH_TIME,
    CHANGE_DAY,
    CHANGE_COLOR,
    ADD_NEW_SUBJECT,
    DELETE_SUBJECT
} from '../type/index'

export default (state = INITIAL_STATE, action) => {
    const newState = state
    switch (action.type) {
        case CHANGE_SUBJECT : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{subject : action.value}): el)
        }
        case CHANGE_CLASSROOM : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{classroom : action.value}): el)
        }
        case CHANGE_START_TIME : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{start : action.value}): el)
        }
        case CHANGE_FINISH_TIME : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{finish : action.value}): el)
        }
        case CHANGE_DAY : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{day : action.value}): el)
        }
        case CHANGE_COLOR : {
            return newState.map(el => el.id === action.id ? Object.assign(el,{color : action.value}): el)
        }
        case ADD_NEW_SUBJECT : {
            let start = new Date(2020, 0, 1, action.start.getHours(), action.start.getMinutes()) 
            let finish = new Date(2020, 0, 1, action.finish.getHours(), action.finish.getMinutes())
            let obj = {
                subject : action.subject || '',
                classroom : action.classroom || '',
                start : start || '2020-01-01T21:00:00',
                finish : finish || '2020-01-11T21:00:00',
                id : `f${(+new Date).toString(16)}`,
                color : action.color || '#ff9c33',
                day : action.day || 'mon'
            }
            newState.push(obj)
            return newState
        }
        case DELETE_SUBJECT : {
            return newState.filter(el => el.id !== action.id )
        }
        default:
            return state
    }

}