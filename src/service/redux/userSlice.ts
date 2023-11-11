import { createSlice } from "@reduxjs/toolkit"


const initialValues = {
  uid: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialValues,
  reducers: {
    reducerSetUser: (state, action) => {
      state.uid = action.payload.uid
    }
  }
})

export const { reducerSetUser } = userSlice.actions

export default userSlice.reducer
