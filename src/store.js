import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './redux/employeeSlice';

const store = configureStore({
  reducer: {
    employee: employeeReducer
  }
});

export default store;
