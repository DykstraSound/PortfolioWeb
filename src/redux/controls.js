import { createSlice } from '@reduxjs/toolkit';

export const controlsSlice = createSlice({
  name: 'controls',
  initialState: {
    show_menu: false,
  },
  reducers: {
    setShowMenu: (state, action) => {
      state.show_menu = action.payload;
    },
  },
});

export const { setShowMenu } = controlsSlice.actions;

export default controlsSlice.reducer;
