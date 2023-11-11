import { createSlice } from "@reduxjs/toolkit"


const initialValues = {
  id: null,
  title: null,
  date: null,
  image: null,
  rates: {},
}

const selectedCardSlice = createSlice({
  name: 'selectedCard',
  initialState: initialValues,
  reducers: {
    reducerSetSelectedCard: (state, action) => {
      state.id = action.payload.id,
      state.title = action.payload.title,
      state.date = action.payload.date,
      state.image = action.payload.image
      state.rates = action.payload.rates
    }
  }
})

export const { reducerSetSelectedCard } = selectedCardSlice.actions

export default selectedCardSlice.reducer