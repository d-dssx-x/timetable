import {createStore} from 'redux'




const initialState = {
    monday : [
        {
            start : '2020-02-12T18:24:44.675Z',
            finish : '2020-02-12T18:24:44.675Z',
            subject : 'Лазера',
            color : '#70258c',
            classroom : '442'
        },
    ],
    tuesday : [
        {
            start : '2020-02-12T18:24:44.675Z',
            finish : '2020-02-12T18:24:44.675Z',
            subject : 'Math',
            color : '#ff9c33',
            classroom : '442'
        }
    ],
    wednesday = [
        {
            start : '2020-02-12T18:24:44.675Z',
            finish : '2020-02-12T18:24:44.675Z',
            subject : 'Math',
            color : '#ff9c33',
            classroom : '442'
        }
    ],
    thursday : [],
    friday : [],
    saturday : [],
    sunday : []
}

// const actionChangeSubject = {
//     type : 
// }

const reducer = (state = initialState, action) => {
    return state;
}




const store = Redux.createStore(reducer)