import { createSlice } from '@reduxjs/toolkit';

interface UserState {
    id?: number; // Optional for flexibility
    name?: string;
    email?: string;
}

const initialState: UserState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state = action.payload; // Immutably assign new user data
        },
        logout(state) {
            state = initialState; // Reset state to clear user info
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
