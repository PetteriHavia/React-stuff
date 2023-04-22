import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from '@reduxjs/toolkit';
import { compose } from '@reduxjs/toolkit';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = configureStore({ reducer: allReducers, composeEnhancers  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
