
import { configureStore } from "@reduxjs/toolkit";

import appleSlice from "./apple";

const store = configureStore({
  reducer: {
    apples: appleSlice.reducer,
  },
});
export const appleActions = appleSlice.actions;

export default store;