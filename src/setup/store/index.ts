import { configureStore } from '@reduxjs/toolkit'
import reducer from './root-reducer'

export const store = configureStore({
  reducer,
})

export const { dispatch, getState } = store
export type AppDispatch = typeof store.dispatch
