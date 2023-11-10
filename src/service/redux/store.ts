import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import selectedCardSlice from "./selectedCardSlice";
import selectedImageSlice from "./selectedImageSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    selectedCard: selectedCardSlice,
    selectedImage: selectedImageSlice,
  }
});
