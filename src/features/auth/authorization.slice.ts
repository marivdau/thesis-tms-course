import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationPayload } from './types';

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: {
    auth: {} as AuthorizationPayload,
    token: false
  },
  reducers: {
    authorization(state, action: { payload: AuthorizationPayload }) {
      state.auth.email = action.payload.email;
      state.auth.password = action.payload.password;
      console.log('auth pair: ', action.payload.email, ' / ', action.payload.password);
      state.token = true;
    },
    authorizationFailure(state) {
      state.token = false;
    },
    authorizationLogout(state) {
      state.token = false;
    },
  },
});

export const {
  actions: { authorization, authorizationFailure, authorizationLogout, },
  reducer: authorizationReducer,
} = authorizationSlice;
