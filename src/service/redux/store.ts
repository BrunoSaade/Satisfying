import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import selectedCardSlice from "./selectedCardSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    selectedCard: selectedCardSlice
  }
});
