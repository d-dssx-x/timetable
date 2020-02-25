import React from 'react';
import {Provider} from 'react-redux'
import Routers from './src/router/Routers'
import { store } from './src/store';

export default function App() {
  return (
    <Provider store = {store}>
      <Routers />
    </Provider>
  );
}
