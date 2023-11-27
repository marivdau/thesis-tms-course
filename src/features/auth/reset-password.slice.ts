import { createSlice } from '@reduxjs/toolkit';
import { ResetPasswordPayload } from './types';

const forgotPasswordSlice = createSlice({
  name: 'forgotPasswordSlice',
  initialState: {
    email: {} as ResetPasswordPayload,
  },
  reducers: {
    forgotPassword(state, action: { payload: ResetPasswordPayload }) {
      state.email = action.payload;
      console.log(action.payload);
    },
  },
});

export const {
  actions: { forgotPassword },
  reducer: forgotPasswordReducer,
} = forgotPasswordSlice;
