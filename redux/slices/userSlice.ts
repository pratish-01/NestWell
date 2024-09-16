import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  location: string;
}

const initialState: UserState = {
  name: 'Pratish Poojary',
  email: 'robotbantai@gmail.com',
  location: 'Maharashtra, India',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.location = action.payload.location;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
