"use client";

import { Grid, styled } from "@mui/material";

import ShoppingCard from "@/components/cards/shopping_card";
import { useSelector } from "react-redux";
import { RootState } from "@/setup/store";

const ShoppingCartBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  "& h2": {
    fontSize: "1rem",
    lineHeight: "180%",
    textAlign: "right",
    color: theme.palette.black.main,
    borderBottom: `1px solid ${theme.palette.black.light}`,
    paddingBottom: "8px",
  },
  "& .cart-empty": {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: "600",
    color: theme.palette.neutral.dark,
  },
  "& .shopping-card:last-child": {
    borderBottom: 'none'
  }
}));

const CartTableSection = () => {
  const cart = useSelector((state: RootState) => state.shoppingCard.cartItems);

  return (
    <ShoppingCartBox item xs={12} md={8}>
      <h2>سبد خرید</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">سبد خرید شما خالی است.</p>
      ) : (
        <>
          {cart.map((item) => (
            <ShoppingCard carditem={item} />
          ))}
        </>
      )}
    </ShoppingCartBox>
  );
};

export default CartTableSection;
