import {CHANGE_SUBJECT, CHANGE_CLASSROOM, CHANGE_FINISH_TIME, CHANGE_DAY, CHANGE_START_TIME, CHANGE_COLOR, ADD_NEW_SUBJECT, DELETE_SUBJECT, SAVE_NAME_SUBJECT, DELETE_NAME_SUBJECT, SAVE_TIME_PATTEN, CHANGE_DONE_TASK, CHANGE_NAME_TASK, CHANGE_COLOR_TASK, CHANGE_SUBJECT_TASK, CHANGE_NOTE_TASK, CHANGE_FINISH_TIME_TASK} from '../type'


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
export const addSubject = (name,classroom,start,finish,color,day) => {
    return {
        type : ADD_NEW_SUBJECT,
        name : name,
        classroom : classroom,
        start : start,
        finish : finish,
        color : color,
        day : day
    }
}
export const saveNameSubject = (value) => {
    return {
        type : SAVE_NAME_SUBJECT,
        value : value
    }
}
export const deleteNameSubject = (index) => {
    return {
        type : DELETE_NAME_SUBJECT,
        index : index
    }
}
export const saveTimePattern = (start,finish) => {
    return {
        type : SAVE_TIME_PATTEN,
        start : start,
        finish : finish
    }
}
export const doneTask = (id,value) => {
    return {
        type : CHANGE_DONE_TASK,
        id : id,
        value : value
    }
}
export const nameTask = (id,value) => {
    return {
        type : CHANGE_NAME_TASK,
        id : id,
        value : value
    }
}
export const colorTask = (id,value) =>{
    return {
        type : CHANGE_COLOR_TASK,
        id : id,
        value :value
    }
}
export const subjectTask = (id,value) => {
    return {
        type : CHANGE_SUBJECT_TASK,
        id : id,
        value : value
    }
}
export const noteTask = (id,value) => {
    return {
        type : CHANGE_NOTE_TASK,
        id : id,
        value : value
    }
}
export const finishTask = (id,value) => {
    return {
        type : CHANGE_FINISH_TIME_TASK,
        id : id,
        value : value
    }
}