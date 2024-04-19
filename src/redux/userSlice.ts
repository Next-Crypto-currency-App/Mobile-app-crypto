import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getStorage } from '../utils/storage';

interface UserState {
    id?: number; // Optional for flexibility
    username?: string;
    name?: string;
    email?: string;
}



const initialState: UserState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserState(state, action: { payload: UserState }) {
            state = action.payload; // Immutably assign new user data
            localStorage.setItem('user', JSON.stringify(state)); // Store user data in local storage
        },
        logoutUser(state) {
            state = initialState; // Reset state to clear user info
            localStorage.clear() // Remove user data from local storage
            location.href = "/"
        },
    },
});

export const { setUserState, logoutUser } = userSlice.actions;
export const selectUser = (state: RootState) => {
    if (state.user.email) return state.user
    const localUser = getStorage('user');
    if (localUser) localUser;
    // console.log(localUser, "local user")
    return localUser
};
export default userSlice.reducer;
