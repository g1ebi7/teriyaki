import { configureStore } from "@reduxjs/toolkit";

import { reducer as userReducer } from "./user.reducer";

export const store = configureStore({
  reducer: userReducer,
  devTools: true,
});

export type TypeRootState = ReturnType<typeof store.getState>;
