"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { allProductsType } from "@/_slice/type";

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
  padding: " 8px 12px",
  width: "100%",
  height: "100%",
  borderRadius: "16px",
  backgroundColor: theme.palette.neutral.main,
  "& img": {
    alignSelf: "center",
    objectFit: "contain",
  },
  "& h2": {
    fontWeight: "400",
    textAlign: "right",
    color: theme.palette.neutral.dark,
    margin: "8px 0",
    WebkitLineClamp: "1",
    lineHeight: "130%",
  },
}));
const PriceSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  flexDirection: "row-reverse",
  width: "100%",
  height: "45px",
  "& div h4": {
    display: "flex",
    fontSize: "1rem",
    lineHeight: "24px",
    fontWeight: "600",
    color: theme.palette.black.main,
  },
  "& div h5": {
    fontSize: "0.86rem",
    lineHeight: "21px",
    fontWeight: "400",
    textDecorationLine: "line-through",
    color: theme.palette.black.lighter,
  },
  "& span": {
    fontSize: "0.8rem",
    fontWeight: "600",
    backgroundColor: theme.palette.error.main,
    padding: "0 4px",
    color: theme.palette.error.light,
    borderRadius: "16px",
    height: "30px",
    width: "44px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
}));

const AddButtonStyle = {
  height: "45px",
  whiteSpace: "nowrap",
};

export const ProductCard = ({
  title,
  category,
  image,
  price,
  rating,
  discount,
}: allProductsType) => {
  const [initialPrice, setInitialPrice] = useState<number>(price);

  useEffect(() => {
    if (typeof discount === "undefined") {
      console.error("Discount is undefined!");
      return; // Exit if discount is undefined
    }

    if (discount !== 0) {
      const d = 100 - discount;
      const p = (price * d) / 100;
      setInitialPrice(p);
    }
  }, [price]);

  return (
    <MainSection>
      <Image src={image} alt={title} width={160} height={160} />
      <Typography variant="body2" component="h2">
        {title}
      </Typography>
      <PriceSection>
        {/* <CustomizedButton
          variant="contained"
          size="small"
          text="افزودن به سبد"
          color="secondary"
          sx={AddButtonStyle}
        /> */}
        <div>
          <h4>
            {initialPrice.toLocaleString("fa-IR")}

            <Image
              src={'/images/download.jpeg'}
              alt="Iranian_Rial"
              width={20}
              height={20}
              style={{marginRight:'4px'}}
            />
          </h4>
          <h5>{price.toLocaleString("fa-IR")}</h5>
        </div>
        <span>{discount?.toLocaleString("fa-IR")}%</span>
      </PriceSection>
    </MainSection>
  );
};
