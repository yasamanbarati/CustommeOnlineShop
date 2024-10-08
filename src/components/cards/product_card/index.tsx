"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { allProductsType } from "@/_slice/type";
import CustomizedButton from "@/components/button";
import { CartIcon } from "@/components/icons";
import { useDispatch } from "react-redux";
import { setAddToCartAction } from "@/_slice/shapping_card.slice";
<<<<<<< HEAD

=======
interface Props {
  carditem: allProductsType;
}
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2
const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  position: "relative",
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
  position: "absolute",
  top: "20px",
  left: "0px",
  height: "45px",
  whiteSpace: "nowrap",
  "& span": {
    backgroundColor: "transparent",
  },
};

<<<<<<< HEAD
export const ProductCard = ({
  title,
  category,
  image,
  price,
  rating,
  discount,
}: allProductsType) => {
  const dispatch = useDispatch();
  const [initialPrice, setInitialPrice] = useState<number>(price);
  const [discount_, setDiscount] = useState<number | undefined>(discount);
=======
export const ProductCard = ({ carditem }: Props) => {
  const dispatch = useDispatch();

  const [initialPrice, setInitialPrice] = useState<number>(carditem?.price);

  const [discount_, setDiscount] = useState<number | undefined>(
    carditem?.discount
  );
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2

  useEffect(() => {
    if (typeof discount_ === "undefined") {
      console.error("Discount is undefined!");
      return;
    }

    if (discount_ !== 0) {
      const d = 100 - discount_;
      const p = (carditem?.price * d) / 100;
      setInitialPrice(p);
    }
  }, [carditem?.price]);

  return (
    <MainSection className="product-card">
      <Image
        src={carditem?.image}
        alt={carditem?.title}
        width={160}
        height={160}
      />
      <Typography variant="body2" component="h2">
        {carditem?.title}
      </Typography>
      <PriceSection>
        <CustomizedButton
          size="medium"
          variant="text"
          startIcon={<CartIcon />}
          color="black"
          sx={AddButtonStyle}
<<<<<<< HEAD
          // onClickFun={()=> dispatch(setAddToCartAction())}
=======
          handleAddToCart={() => dispatch(setAddToCartAction(carditem))}
>>>>>>> 72dd1030886ff3add9966c4a080dcfed0b1717d2
        />
        <div>
          <h4>
            {initialPrice?.toLocaleString("fa-IR")}

            <Image
              src={"/images/download.jpeg"}
              alt="Iranian_Rial"
              width={20}
              height={20}
              style={{ marginRight: "4px" }}
            />
          </h4>
          {discount_ !== 0 && (
            <h5>{carditem?.price.toLocaleString("fa-IR")}</h5>
          )}
        </div>
        <span>{carditem?.discount?.toLocaleString("fa-IR")}%</span>
      </PriceSection>
    </MainSection>
  );
};
