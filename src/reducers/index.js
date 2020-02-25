import {combineReducers} from 'redux'
import timetableReducer from './timetableReducer'
import subjectsReducer from './subjectsReducer'
import timePatternReducer from './timePatternReducer'
import tasksReducer from './tasksReducer'

export default combineReducers({
    timetable : timetableReducer,
    subjects : subjectsReducer,
    timePattern : timePatternReducer,
    tasks : tasksReducer
})