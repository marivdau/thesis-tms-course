import { createSlice } from "@reduxjs/toolkit";

type SubscribeArray = {
  email: string,
}

type State = {
  subscribeList: SubscribeArray[];
  isComplete: boolean;
}

const subscribeSlice = createSlice({
  name: 'subscribeSlice',
  initialState: {
    subscribeList: [],
    isComplete: false,
  } as State,

  reducers: {
    subscribeToNewsLetters(state, action) {
      state.subscribeList.push({
        email: action.payload,
      })
      state.isComplete = true;
    },
  },
});

export const {
  actions: { subscribeToNewsLetters },
  reducer: subscribeReducer,
} = subscribeSlice;
