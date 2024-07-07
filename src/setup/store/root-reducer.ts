import { combineReducers } from "@reduxjs/toolkit"
import { homeSlice } from "@/_slice/home.slice"
import layoutSlice from "@/_slice/layout,slice"

const rootReducer = combineReducers({
  home: homeSlice.reducer,
  layout : layoutSlice,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
