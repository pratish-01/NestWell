// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,

}});

export default store;

// Optionally export RootState and AppDispatch types if using TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
