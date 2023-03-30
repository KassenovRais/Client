import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MenuDish  from './Store/reducer';
import OrderSlice from './Store/order'
// import FormReducer from './Store/formReducer'

const store = configureStore({
  reducer: {
    menu: MenuDish,
    order: OrderSlice,
  }
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
    
);


