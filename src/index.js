// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from "./redux/index";
import App from './App';

import { PrimeReactProvider } from 'primereact/api';

ReactDOM.render(
  <PrimeReactProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </PrimeReactProvider>
  ,
  document.getElementById('root')
);
