import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import globalReducer from './globalReducer';

export const store = configureStore({
    reducer: { user: userReducer, global: globalReducer },
});

export default store;
