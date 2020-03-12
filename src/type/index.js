export const CHANGE_SUBJECT = 'CHANGE_SUBJECT'
export const CHANGE_CLASSROOM = 'CHANGE_CLASSROOM'
export const CHANGE_START_TIME = 'CHANGE_START_TIME'
export const CHANGE_FINISH_TIME = 'CHANGE_FINISH_TIME'
export const CHANGE_DAY = 'CHANGE_DAY'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const ADD_NEW_SUBJECT = 'ADD_NEW_SUBJECT'
export const DELETE_SUBJECT = 'DELETE_SUBJECT'
export const SAVE_NAME_SUBJECT = 'SAVE_NAME_SUBJECT'
export const DELETE_NAME_SUBJECT = 'DELETE_NAME_SUBJECT'
export const SAVE_TIME_PATTEN = 'SAVE_TIME_PATTERN'
export const CHANGE_DONE_TASK = 'CHANGE_DONE_TASK'
export const CHANGE_NAME_TASK = 'CHANGE_NAME_TASK'
export const CHANGE_NOTE_TASK = 'CHANGE_NOTE_TASK'
export const CHANGE_SUBJECT_TASK = 'CHANGE_SUBJECT_TASK'
export const CHANGE_COLOR_TASK = 'CHANGE_COLOR_TASK'
export const CHANGE_FINISH_TIME_TASK = 'CHANGE_FINISH_TIME_TASK'
export const INITIAL_STATE = {
    timetable : [ {
        day: 'mon',
        start: '2020-01-01T21:00:00',
        finish: '2020-01-01T21:00:00',
        name: 'Физра',
        color: '#ff9c33',
        classroom: '',
        id: 1,
    },
    {
        day: 'mon',
        start: '2020-01-01T21:00:00',
        finish: '2020-01-01T21:00:00',
        name: 'Физра',
        color: '#ff9c33',
        classroom: '',
        id: 3,
    },
    {
        day: 'mon',
        start: '2020-01-01T21:00:00',
        finish: '2020-01-01T21:00:00',
        name: 'Физра',
        color: '#ff9c33',
        classroom: '',
        id: 2,
    },
    ],
    timePattern : [{
        start : '2020-01-01T05:15:00',
        finish: '2020-01-01T06:55:00',
    }],
    subjects : [{
        name : 'Лазера',
        type : 'credit'
    },
    {
        name : 'Физра',
        type : 'exam'
    },
    {
        name : 'Программирование',
        type : 'exam'
    },{
        name : 'Математика',
        type : 'exam'
    }],
    tasks : [{
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Лазера',
        color : '#30d960',
        done : false,
        id : 1,
        note : 'safasfas'
    },{
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Лазера',
        color : '#ff9c33', 
        done : true,
        id : 2,
        note : 'safasfas'
    },
    {
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Тык',
        color : '#70258c', 
        done : false,
        id : 3,
        note : 'safasfas'

    },
    {
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Лазера',
        color : '#000', 
        done : false,
        id : 4
    },
    {
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Физра',
        color : '#f29e55', 
        done : false ,
        id : 5,
        note : 'safasfas'
    },
    {
        name : 'Реферат',
        finish : '2020-01-01T21:00:00',
        subject : 'Физра',
        color : '#f29e55', 
        done : true ,
        id : 6,
        note : 'safasfas'
    },
    

]
}
