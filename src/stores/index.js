import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import globalReducer from './globalReducer';
import droneReducer from './droneReducer';
import noticeReducer from './noticeReducer';

export const store = configureStore({
    reducer: { user: userReducer, global: globalReducer, drone: droneReducer , notice: noticeReducer},
});

export default store;
