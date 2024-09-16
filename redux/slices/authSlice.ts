import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  username: string;
  password: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: '',
  password: ''
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string; password: string }>) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = '';
      state.password = '';
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
