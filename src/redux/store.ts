import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import the user slice reducer

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

// Type definitions for root state and dispatch function
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
