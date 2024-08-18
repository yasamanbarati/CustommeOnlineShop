"use client";
import { ErrorOutline } from "@mui/icons-material";
import CustomizedButton from "@/components/button";
import { Grid, styled } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "@/setup/store";

const CheckoutBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  boxShadow: `0px 4px 8px ${theme.palette.black.light}`,
  borderRadius: "16px",
  overflow: "hidden",
  marginBottom: "30px",
  backgroundColor: "#fff",
  border: "none",
  gap: "16px",
  padding: "24px",
  "& .bill-card": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottom: `1px solid ${theme.palette.black.light}`,
    paddingBottom: "12px",
    "&:last-child": {
      borderBottom: "none",
      paddingBottom: "0",
    },
    "& h3, h4": {
      fontSize: "0.86rem",
      fontWeight: "600",
      color: theme.palette.black.main,
    },
  },
}));
const ConditionsBox = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  padding: "24px 12px",
  border: `1px solid ${theme.palette.black.light}`,
  borderRadius: "16px",
  marginTop: "30px",
  "& span": {
    fontSize: "0.76rem",
    fontWeight: "400",
    color: theme.palette.neutral.dark,
    position: "relative",
    paddingRight: "34px",
    "&::after": {
      position: "absolute",
      content: `''`,
      top: "8px",
      right: "4px",
      width: "20px",
      height: "20px",
      backgroundColor: theme.palette.neutral.dark,
      borderRadius: "50%",
    },
  },
}));

const SettlementTable = () => {
  const finalPrice = useSelector(
    (state: RootState) => state.shoppingCard.totalItems
  );

  const transportPrice = 50000;
  return (
    <Grid item xs={12} md={4}>
      <CheckoutBox>
        <div className="bill-card">
          <h3>جمع جزء</h3>
          <h4>{finalPrice.toLocaleString("fa-IR")} تومان</h4>
        </div>
        <div className="bill-card">
          <h3>حمل و نقل</h3>
          <h4>{transportPrice.toLocaleString("fa-IR")} تومان</h4>
        </div>
        <div className="bill-card">
          <h3>مجموع قابل پرداخت</h3>
          <h4>{(finalPrice + transportPrice).toLocaleString("fa-IR")} تومان</h4>
        </div>
      </CheckoutBox>
      <CustomizedButton variant="contained" size="large" text="ثبت سفارش" />
      <ConditionsBox>
        <ErrorOutline color="warning" />
        <span>ارسال رایگان برای سفارش های بالای ۷۰۰,۰۰۰ تومن</span>
        <span>در صورت اتمام موجودی کالاها از سبد خرید حذف میشوند.</span>
        <span>لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.</span>
      </ConditionsBox>
    </Grid>
  );
};

export default SettlementTable;
