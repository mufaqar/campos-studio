import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../slices/hippoShow'

export const store = configureStore({
  reducer: {
    hippo: counterSlice,
  },
})