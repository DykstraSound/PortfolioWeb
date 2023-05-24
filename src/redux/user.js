import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    userInfo: null,
    current_user: null,
  },
  reducers: {
    setUserAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.current_user = action.payload;
    },
  },
});

export const { setUserAuth, setUserInfo, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
