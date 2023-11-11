import { createSlice } from "@reduxjs/toolkit"

const initialImageState = {
  image: ""
}

const selectedImageSlice = createSlice({
  name: 'image',
  initialState: initialImageState,
  reducers: {
    reducerSetSelectedImage: (state, action) => {
      state.image = action.payload;
    },
  }
})

export const { reducerSetSelectedImage } = selectedImageSlice.actions

export default selectedImageSlice.reducer
