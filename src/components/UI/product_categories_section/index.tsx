"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategoriesInfo } from "@/services/servers/api";
import { CategoriesProps } from "@/_slice/type";
import { Grid, Typography, styled } from "@mui/material";
import { MedalStarIcon } from "@/components/icons";
import TitlesSection from "@/components/section_titles";
import "/home/yasamanbarati/Work/customme_online_shop/src/setup/assets/animations/index.css";

const CategoriesCardSection = styled("div")(({ theme }: any) => ({
  position: "relative",
  width: "230px",
  height: "230px",
  borderRadius: "8px",
  objectFit: "cover",
  zIndex: "4",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover img": {
    filter: "brightness(66%) grayscale(0.8)",
    transform: "scale(1.3) translateY(10%)",
  },
  "& h2": {
    zIndex: "3",
    whiteSpace: "nowrap",
    transition: "2s ease",
    opacity: "0",
    color: theme.palette.neutral.main,
  },
  "&:hover h2": {
    opacity: "1",
  },
  [theme.breakpoints.between("md", 1040)]: {
    width: "190px",
    height: "190px",
  },
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "100%",
  },
}));

const CategoryImage = styled("img")(({ theme }: any) => ({
  width: "220px",
  height: "220px",
  top: "5px",
  left: "5px",
  zIndex: "2",
  borderRadius: "8px",
  overflow: "hidden",
  outline: `2px solid ${theme.palette.neutral.main}`,
  transformOrigin: "50% 65%",
  transition: "transform 5s, filter 3s ease-in-out",
  filter: "brightness(90%)",
  [theme.breakpoints.between("md", 1040)]: {
    width: "180px",
    height: "180px",
  },
  [theme.breakpoints.up("xs")]: {
    width: "97%",
    height: "97%",
  },
}));

const CategoryImageBlobBounce = styled("div")(({ theme }: any) => ({
  position: "absolute",
  width: "150px",
  height: "150px",
  top: "50%",
  left: "50%",
  zIndex: "1",
  borderRadius: "50%",
  filter: "blur(12px)",
  opacity: "1",
  background: theme.palette.secondary.main,
  animation: "blobBounce 5s infinite ease",
  [theme.breakpoints.between("md", 1040)]: {
    width: "110px",
    height: "110px",
  },
  [theme.breakpoints.up("xs")]: {
    width: "100%",
    height: "100%",
  },
}));

const ProductCategoriesSection = () => {
  const [categoriesData, setCategoriesData] = useState<CategoriesProps[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["categoriesData"],
    queryFn: () => getCategoriesInfo(),
  });

  useEffect(() => {
    if (!isLoading && data) setCategoriesData(data);
}, [data, isLoading]);

  return (
    <TitlesSection title={"دسته بندی محصولات"} titleIcon={<MedalStarIcon />}>
      <Grid container justifyContent="space-between">
        {categoriesData.map((item, key) => {
          return (
            <Grid
              key={item.id}
              item
              xs={6}
              md={3}
              display="flex"
              justifyContent="center"
            >
              <CategoriesCardSection>
                <CategoryImage src={item.image} alt="Categories" />
                <CategoryImageBlobBounce></CategoryImageBlobBounce>
                <Typography variant="h6" component="h2" position="absolute">
                  {item.name}
                </Typography>
              </CategoriesCardSection>
            </Grid>
          );
        })}
      </Grid>
    </TitlesSection>
  );
};

export default ProductCategoriesSection;
