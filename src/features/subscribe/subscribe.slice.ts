import { createSlice } from "@reduxjs/toolkit";

type SubscribeArray = {
  email: string,
}

type State = {
  subscribeList: SubscribeArray[];
}

const subscribeSlice = createSlice({
  name: 'subscribeSlice',
  initialState: {
    subscribeList: [],
  } as State,

  reducers: {
    subscribeToNewsLetters(state, action) {
      state.subscribeList.push({
        email: action.payload,
      })
    },
  },
});

export const {
  actions: { subscribeToNewsLetters },
  reducer: subscribeReducer,
} = subscribeSlice;
