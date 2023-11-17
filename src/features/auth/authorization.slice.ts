import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationPayload } from './types';

const authorizationSlice = createSlice({
  name: 'authorizationSlice',
  initialState: {
    isInProgress: false,
    isInComplete: false,
  },
  reducers: {
    authorization(state, action: { payload: AuthorizationPayload }) {},
    authorizationSuccess(state) {
      state.isInComplete = true;
      state.isInProgress = false;
    },
    authorizationFailure(state) {
      state.isInProgress = false;
    },
    authorizationLogout(state) {

    },
    authorizationLogoutSuccess(state) {
      state.isInComplete = false;
    }
  },
});

export const {
  actions: {
    authorization,
    authorizationSuccess,
    authorizationFailure,
    authorizationLogout,
    authorizationLogoutSuccess,
  },
  reducer: authorizationReducer,
} = authorizationSlice;
