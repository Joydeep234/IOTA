import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/CounterSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})