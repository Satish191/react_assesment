import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'


import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux';

import todoReducer from './Redux/Reducer/TodoReducer';

const reducers = combineReducers({

    allTodo: todoReducer,
})

const store= createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    
  </React.StrictMode>  
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
