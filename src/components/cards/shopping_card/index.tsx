import React from "react";
import { Box, TextField, Typography, styled } from "@mui/material";

import { dispatch } from "@/setup/store";
import { allProductsType } from "@/_slice/type";
import {
  setDecreaseQuantityAction,
  setIncreaseQuantityAction,
  setRemoveFromCartAction,
} from "@/_slice/shapping_card.slice";
import { Add, Clear, Remove } from "@mui/icons-material";
import Image from "next/image";

interface Props {
  carditem: allProductsType;
}
const CardBox = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  borderBottom: `1px solid ${theme.palette.black.light}`,
  padding: "16px 0",
  "& svg": {
    width: "25px",
    height: "25px",
  },
}));
const CardInformationBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "12px",
  "& h3": {
    width: "300px",
  },
  width: "calc(100% - 116px)",
}));

const CardQuantityBox = styled("div")(() => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",
  gap: "2px",
  "& .MuiInputBase-root": {
    width: "50px",
    height: "50px",
    borderRadius: "8px",
    "& input": {
      textAlign: "center",
    },
  },
}));
const ShoppingCard = ({ carditem }: Props) => {
  const handelRemoveItem = (i: number | string) => {
    dispatch(setRemoveFromCartAction(i));
  };
  const handelDecreaseQuantity = (i: number | string) => {
    dispatch(setDecreaseQuantityAction(i));
  };
  const handelIncreaseQuantity = (i: number | string) => {
    dispatch(setIncreaseQuantityAction(i));
  };

  return (
    <CardBox key={carditem.id} className="shopping-card">
      <CardInformationBox>
        <Clear onClick={() => handelRemoveItem(carditem.id)} />
        <Image
          alt={carditem.title}
          src={carditem.image}
          width={100}
          height={100}
        />
        <Typography variant="body1" component="h3">
          {carditem.title}
        </Typography>
        <Typography variant="body1" component="h4" fontWeight='400'>
          {carditem.price.toLocaleString("fa-IR")} تومان
        </Typography>
      </CardInformationBox>
      <CardQuantityBox>
        <Add onClick={() => handelIncreaseQuantity(carditem.id)} />
        <TextField value={carditem.quantity!} disabled />
        <Remove onClick={() => handelDecreaseQuantity(carditem.id)} />
      </CardQuantityBox>
    </CardBox>
  );
};

export default ShoppingCard;
