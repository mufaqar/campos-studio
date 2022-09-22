import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const hippoShow = createSlice({
  name: 'hippo',
  initialState,
  reducers: {
    showState: (state) => {
      state.value = true
    },
    hideState: (state) => {
      state.value = false
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { showState, hideState } = hippoShow.actions
export default hippoShow.reducer