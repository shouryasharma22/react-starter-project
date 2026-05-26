import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})