export const CHANGE_SUBJECT = 'CHANGE_SUBJECT'
export const CHANGE_CLASSROOM = 'CHANGE_CLASSROOM'
export const CHANGE_START_TIME = 'CHANGE_START_TIME'
export const CHANGE_FINISH_TIME = 'CHANGE_FINISH_TIME'
export const CHANGE_DAY = 'CHANGE_DAY'
export const CHANGE_COLOR = 'CHANGE_COLOR'
export const ADD_NEW_SUBJECT = 'ADD_NEW_SUBJECT'
export const DELETE_SUBJECT = 'DELETE_SUBJECT'
export const INITIAL_STATE = {
    subjects : [ {
        day: 'mon',
        start: '2020-02-12T18:24:44.675Z',
        finish: '2020-02-12T18:24:44.675Z',
        subject: 'Лазера',
        color: '#70258c',
        classroom: '442',
        id: 1,
        add : true
    },
    {
        day: 'tue',
        start: '2020-02-12T18:24:44.675Z',
        finish: '2020-02-12T18:24:44.675Z',
        subject: 'Math',
        color: '#ff9c33',
        classroom: '442',
        id: 2,
        add : true
    },
    {
        day: 'wed',
        start: '2020-02-12T18:24:44.675Z',
        finish: '2020-02-12T18:24:44.675Z',
        subject: 'Math',
        color: '#ff9c33',
        classroom: '442',
        id: 3,
        add : true
    }]
}