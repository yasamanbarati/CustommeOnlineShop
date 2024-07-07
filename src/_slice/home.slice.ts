import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ReduxBodyType, allProductsType } from "./type"

const initialState: ReduxBodyType = {
  productCategories: [],
  allProducts: [],
  BestsellingProducts: [],
}

const setProductCategories = (
  state: ReduxBodyType,
  action: PayloadAction<string[]>,
) => {
  state.productCategories = action.payload
}

const setBestsellingProducts = (
  state: ReduxBodyType,
  action: PayloadAction<allProductsType[]>,
) => {
  state.BestsellingProducts = action.payload
  
  state.BestsellingProducts= state.BestsellingProducts.filter((product: {price : number}) => product.price >= 50);
  
}

export const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {setProductCategories,setBestsellingProducts},
})

const { actions } = homeSlice

export const {
  setProductCategories:setProductCategoriesAction,
  setBestsellingProducts: setBestsellingProductsAction,
} = actions

export default homeSlice.reducer
