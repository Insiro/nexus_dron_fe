import { createSlice } from '@reduxjs/toolkit';
const initialUserState = {
    name: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload;
        },
        resetUser: (state) => {
            state.name = null;
        },
    },
});

export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
