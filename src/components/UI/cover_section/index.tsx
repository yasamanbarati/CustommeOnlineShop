"use client";
import { Grid, styled } from "@mui/material";
import CustomizedButton from "@/components/button";
import { BrushIcon } from "@/components/icons";

const MainCoverSection = styled(Grid)(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "auto",
  position: "relative",
  borderRadius: "16px",
  backgroundColor: theme.palette.primary.light,
  "&::after": {
    content: `''`,
    position: "absolute",
    width: "241px",
    height: "381px",
    borderRadius: "8px",
    background: theme.palette.neutral.main,
    boxShadow: `12px -12px 0px ${theme.palette.primary.light},`,
    top: "72px",
    right: "-215px",
    zIndex: "2",
    transform: "rotate(9deg)",
  },
  "&::before": {
    content: `''`,
    position: "absolute",
    width: "241px",
    height: "381px",
    borderRadius: "8px",
    background: theme.palette.neutral.main,
    boxShadow: `12px -12px 20px ${theme.palette.primary.light}`,
    bottom: "-47px",
    left: "-114px",
    zIndex: "2",
    transform: "rotate(-9deg)",
  },
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    "&::before": {
      width: "150px",
      height: "200px",
      bottom: "-47px",
      left: "-92px",
    },
  },
}));

const MainInformationCover = styled(Grid)(({ theme }: any) => ({
  "& h1": {
    lineHeight: "140%",
  },
  "& p": {
    lineHeight: "180%",
    fontWeight: "400",
  },
  [theme.breakpoints.down("lg")]: {
    "& h1": {
      fontSize: "1.5rem",
      whiteSpace: "nowrap",
    },
    "& p": {
      fontSize: "0.875rem",
    },
  },
  [theme.breakpoints.down("md")]: {
    "& h1": {
      textAlign: "center",
    },
    "& p": {
      textAlign: "center",
    },
  },
  "& Button": {
    marginTop: "24px",
  },
}));
const MainImageCover = styled(Grid)(() => ({
  height: "355px",
  "& img": {
    width: "100%",
    height: "100%",
  },
}));
const CoverSection = () => {
  return (
    <MainCoverSection container padding={{ md: "40px 55px", xs: "20px" }}>
      <MainInformationCover item xs={12} md={6}>
        <h1>آنلاین شاپ کاستومی</h1>
        <p>
          آنلاین شاپ کاستومی محصولات متنوعی دارد
        </p>

        <CustomizedButton
          size="medium"
          variant="outlined"
          color="secondary"
          text="دیدن محصولات"
        />
      </MainInformationCover>

      <MainImageCover item xs={12} md={6}>
        <img src={"/images/cover.png"} alt="cover" />
      </MainImageCover>
    </MainCoverSection>
  );
};

export default CoverSection;
