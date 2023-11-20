import { createSlice } from "@reduxjs/toolkit";

import { IUserProps } from "@/types/user.interface";

interface IUserState {
  user: IUserProps | null;
}

const initialState: IUserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { reducer, actions } = userSlice;
