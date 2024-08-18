import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "@/_slice/layout.slice";
import shoppingCardSlice from "@/_slice/shapping_card.slice";

export const store = configureStore({
  reducer: {
    layout: layoutSlice,
    shoppingCard: shoppingCardSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch; 
export const { dispatch, getState } = store;
