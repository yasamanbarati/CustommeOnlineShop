import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoriesProps, ReduxBodyType, allProductsType } from "./type";
const initialState: ReduxBodyType = {
  productCategories: [],
  allProducts: [],
  BestsellingProducts: [],
};

const setProductCategories = (
  state: ReduxBodyType,
  action: PayloadAction<CategoriesProps[]>
) => {
  state.productCategories = action.payload;
};

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: { setProductCategories },
});

const { actions } = homeSlice;

export const {
  setProductCategories: setProductCategoriesAction,
} = actions;

export default homeSlice.reducer;
