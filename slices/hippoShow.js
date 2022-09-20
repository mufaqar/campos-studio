import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const hippoShow = createSlice({
  name: 'hippo',
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = true
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { changeState } = hippoShow.actions
export default hippoShow.reducer