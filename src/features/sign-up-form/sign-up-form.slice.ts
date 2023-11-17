import { createSlice } from '@reduxjs/toolkit';

type State = {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
};
const signUpFormSlice = createSlice({
  name: 'signUpForm',
  initialState: {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  },
  reducers: {
    setName(state, action: { payload: State['name'] }) {
      state.name = action.payload;
    },
    setEmail(state, action: {payload: State['email']}) {
        state.email = action.payload;
    },
    setPassword(state, action: {payload: State['password']}) {
        state.password = action.payload;
    },
    setConfirmedPassword(state, action: {payload: State['confirmedPassword']}) {
        state.confirmedPassword = action.payload;
    },
  },
});

export const {
  actions: { setName, setEmail, setPassword, setConfirmedPassword },
  reducer: signUpFormReducer,
} = signUpFormSlice;
