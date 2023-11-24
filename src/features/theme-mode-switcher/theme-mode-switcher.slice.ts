import { createSlice } from '@reduxjs/toolkit';

const themeModeSlice = createSlice({
  name: 'themeModeSlice',
  initialState: {
    isDarkThemeActive: false,
  },
  reducers: {
    themeModeChangeToDark(state) {
      state.isDarkThemeActive = true;
    },
  },
});

export const {
  actions: { themeModeChangeToDark },
  reducer: themeModeReducer,
} = themeModeSlice;
