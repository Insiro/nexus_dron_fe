import { createSlice } from '@reduxjs/toolkit';
const initialGlobalState = {
    opened: false,
};

const globalSlice = createSlice({
    name: 'global',
    initialState: initialGlobalState,
    reducers: {
        toggleSidebar: (state) => {
            state.opened = !state.opened;
        },
        resetSidebar: (state) => {
            state.opened = false;
        },
    },
});

export const { toggleSidebar, resetSidebar } = globalSlice.actions;
export default globalSlice.reducer;
