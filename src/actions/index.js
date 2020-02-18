import {CHANGE_SUBJECT, CHANGE_CLASSROOM, CHANGE_FINISH_TIME, CHANGE_DAY, CHANGE_START_TIME, CHANGE_COLOR, ADD_NEW_SUBJECT, DELETE_SUBJECT} from '../type'

export const subjectChange = (value,id) =>{
    return {
        type : CHANGE_SUBJECT,
        value : value,
        id : id
    }
}
export const classroomChange = (value,id) => {
    return {
        type : CHANGE_CLASSROOM,
        value : value,
        id : id
    }
}
export const startTimeChange = (value,id) => {
    return {
        type : CHANGE_START_TIME,
        value : value,
        id : id
    }
}
export const finishTimeChange = (value,id) => {
    return {
        type : CHANGE_FINISH_TIME,
        value : value,
        id : id
    }
}
export const dayChange = (value,id) => {
    return {
        type : CHANGE_DAY, 
        value : value,
        id : id
    }
}
export const colorChange = (value,id) => {
    return {
        type : CHANGE_COLOR,
        value : value,
        id : id
    }
}
export const deleteSubject = (id) => {
    return {
        type : DELETE_SUBJECT,
        id : id
    }
}
export const addSubject = (subject,classroom,start,finish,color,day) => {
    return {
        type : ADD_NEW_SUBJECT,
        subject : subject,
        classroom : classroom,
        start : start,
        finish : finish,
        color : color,
        day : day
    }
}