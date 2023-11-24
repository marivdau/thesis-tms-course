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
    themeModeChangeToLight(state) {
      state.isDarkThemeActive = false;
    }
  },
});

export const {
  actions: { themeModeChangeToDark, themeModeChangeToLight },
  reducer: themeModeReducer,
} = themeModeSlice;
