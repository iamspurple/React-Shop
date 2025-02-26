import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  id: null,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser(state, action) {
      (state.email = action.payload.email),
        (state.id = action.payload.id),
        (state.token = action.payload.token);
    },
    logoutUser(state) {
      (state.email = null), (state.id = null), (state.token = null);
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;
