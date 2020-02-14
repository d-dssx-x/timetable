import React from 'react';
import {Provider} from 'react-redux'
import { createStore} from 'redux';
import Routers from './src/router/Routers'
import reducer from './src/reducers'
import { INITIAL_STATE } from './src/type';

const store = createStore(reducer,INITIAL_STATE)

export default function App() {
  return (
    <Provider store = {store}>
      <Routers />
    </Provider>
  );
}
