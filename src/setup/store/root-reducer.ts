import { combineReducers } from "@reduxjs/toolkit";
import layoutSlice from "@/_slice/layout.slice";
import { shoppingCardSlice } from "@/_slice/shapping_card.slice";

const rootReducer = combineReducers({
  layout: layoutSlice,
  shoppingCard: shoppingCardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
