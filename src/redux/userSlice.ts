import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

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
            localStorage.setItem('user', JSON.stringify(state)); // Store user data in local storage
        },
        logout(state) {
            state = initialState; // Reset state to clear user info
            localStorage.clear() // Remove user data from local storage
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
