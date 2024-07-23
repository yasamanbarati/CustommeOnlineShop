"use client";
import { ReactNode } from "react";
import { Typography, styled } from "@mui/material";
import CustomizedButton from "@/components/button";

interface Props {
  Icon: ReactNode;
  title: string;
}

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  alignItems: "center",
  position: "relative",
  maxWidth: "180px",
  height: "256px",
  padding: "0 16px",
  "& svg": {
    position: "absolute",
    top: '-35px',
    zIndex: "1",
    transform: "scale(0.62)",
    filter: "drop-shadow(2px 1px 4px black)",
  },
}));

export const ReferenceCard = ({ Icon, title }: Props) => {
  return (
    <MainSection>
      {Icon}
      <Typography
        variant="h6"
        component="h2"
        color="white"
        zIndex={1}
        pb={4}
        textAlign="center"
      >
        {title}
      </Typography>
      <CustomizedButton
        variant="text"
        size="small"
        text="مشاهده بیشتر"
        color="neutral"
      />
    </MainSection>
  );
};
