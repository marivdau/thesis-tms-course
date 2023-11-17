import { createSlice } from '@reduxjs/toolkit';
import { ForgotPasswordPayload } from './types';

const forgotPasswordSlice = createSlice({
  name: 'forgotPasswordSlice',
  initialState: {},
  reducers: {
    forgotPassword(state, action: { payload: ForgotPasswordPayload }) {},
  },
});

export const {
  actions: { forgotPassword },
  reducer: forgotPasswordReducer,
} = forgotPasswordSlice;
