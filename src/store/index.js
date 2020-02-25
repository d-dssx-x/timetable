import reducer from '../reducers'
import {createStore} from 'redux'
import { INITIAL_STATE } from '../type'


export const store = createStore(reducer,INITIAL_STATE)