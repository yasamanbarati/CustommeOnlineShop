"use client";
import Image from "next/image";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

interface Props {
  id: number;
  title?: string | undefined;
  price?: number;
  category?: string;
  image?: string | undefined;
  rating?: {
    rate?: number;
    count?: number;
  };
}
const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: " 8px 12px",
  maxWidth: "250px",
  height: "300px",
  borderRadius: "16px",
  "& img": {
    width: "full",
    height: "160px",
  },
}));

export const ProductCard = ({
  title,
  category,
  image,
  price,
  rating,
}: Props) => {
  return (
    <MainSection>
      <Image src={process.env.PUBLIC_URL + image} alt={title} />
      <span>{category}</span>
      <Typography variant="body1" component="h2">
        {title}
      </Typography>
    </MainSection>
  );
};
