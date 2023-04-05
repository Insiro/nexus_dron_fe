import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import globalReducer from './globalReducer';
import droneReducer from './droneReducer';

export const store = configureStore({
    reducer: { user: userReducer, global: globalReducer, drone: droneReducer },
});

export default store;
