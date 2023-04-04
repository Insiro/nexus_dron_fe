import { createSlice } from '@reduxjs/toolkit';
const initialGlobalState = {
    opensidebar: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState: initialGlobalState,
    reducers: {
        toggleSidebar: (state) => {
            state.opensidebar = !state.opensidebar;
        },
        resetSidebar: (state) => {
            state.opensidebar = false;
        },
    },
});

export const { toggleSidebar, resetSidebar } = globalSlice.actions;
export default globalSlice.reducer;
