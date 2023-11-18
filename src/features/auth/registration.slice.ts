import { createSlice } from '@reduxjs/toolkit';
import { RegistrationPayload } from './types';

const registrationSlice = createSlice({
  name: 'registrationSlice',
  initialState: {
    info: {} as RegistrationPayload,
    isCompleted: false,
  },
  reducers: {
    register(state, action: { payload: RegistrationPayload }) {
      state.isCompleted = true;
      state.info.email = action.payload.email;
      state.info.password = action.payload.password;
      state.info.username = action.payload.username;
      console.log('register info: ', action.payload.email, ' / ', action.payload.password, ' / ', action.payload.username)
    },
    registerFailure(state) {
      state.isCompleted = false;
    },
  },
});

export const {
  actions: { register, registerFailure },
  reducer: registrationReducer,
} = registrationSlice;
