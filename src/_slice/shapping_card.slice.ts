import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ReduxShoppingCardType, allProductsType } from "./type";

const initialState: ReduxShoppingCardType = {
  cartItems: [],
  totalItems: 0,
  countCart: 0,
};

const setAddToCart = (
  state: ReduxShoppingCardType,
  action: PayloadAction<allProductsType>
) => {
  const product = action.payload;
  console.log({ product });
  const isExist = state.cartItems.findIndex((e) => e.id === product.id);
  if (isExist >= 0) {
    const q = state.cartItems[isExist].quantity!;
    state.cartItems = state.cartItems.map((item, index) =>
      index === isExist ? { ...item, quantity: q + 1 } : product
    );
  } else {
    state.cartItems = [
      ...state.cartItems,
      {
        ...product,
        quantity: 1,
      },
    ];
    state.countCart = state.countCart + 1;
  }
  setFinalPrice(state);

  console.log(state.cartItems);
};

const setRemoveFromCart = (
  state: ReduxShoppingCardType,
  action: PayloadAction<number | string>
) => {
  state.cartItems = state.cartItems.filter(
    (item) => item.id !== action.payload
  );
  state.countCart = state.countCart > 0 ? state.countCart - 1 : 0;
  setFinalPrice(state);
};

const setIncreaseQuantity = (
  state: ReduxShoppingCardType,
  action: PayloadAction<number | string>
) => {
  state.cartItems = state.cartItems.map((product) =>
    product.id === action.payload
      ? { ...product, quantity: product.quantity! + 1 }
      : product
  );
  setFinalPrice(state);
};

const setDecreaseQuantity = (
  state: ReduxShoppingCardType,
  action: PayloadAction<number | string>
) => {
  state.cartItems = state.cartItems
    .map((product) =>
      product.id === action.payload
        ? { ...product, quantity: product.quantity! - 1 }
        : product
    )
    .filter((product) => product.quantity! > 0);
    setFinalPrice(state);
};

const setFinalPrice = (state: ReduxShoppingCardType) => {
  state.totalItems = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity!,
    0
  );
};

export const shoppingCardSlice = createSlice({
  name: "shoppingCard",
  initialState: initialState,
  reducers: {
    setAddToCart,
    setRemoveFromCart,
    setIncreaseQuantity,
    setDecreaseQuantity,
    setFinalPrice,
  },
});

const { actions } = shoppingCardSlice;

export const {
  setAddToCart: setAddToCartAction,
  setRemoveFromCart: setRemoveFromCartAction,
  setIncreaseQuantity: setIncreaseQuantityAction,
  setDecreaseQuantity: setDecreaseQuantityAction,
  setFinalPrice: setFinalPriceAction,
} = actions;

export default shoppingCardSlice.reducer;
