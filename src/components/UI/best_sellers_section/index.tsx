"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import { Box, styled } from "@mui/material";

import { getAllProduct } from "@/services/servers/api";
import { allProductsType } from "@/_slice/type";
import { ProductCard, ReferenceCard } from "@/components/cards";
import { BestSellerBag, MedalStarIcon } from "@/components/icons";
import TitlesSection from "@/components/section_titles";
import SwiperSection from "@/components/swiper";

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "0 16px 16px 0",
  padding: "20px 0",
  height: "300px",
  "& .swiper-section": {
    width: "calc(100% - 160px)",
    "& .swiper-wrapper": {
      gap: "8px",
    },
    "& .swiper-slide": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "12px",
      maxWidth: "250px",
      height: "300px",
    },
  },
}));

const BestSellersSection = () => {
  const [bastProduct, setBastProduct] = useState<allProductsType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: ["BastProduct"],
    queryFn: () => getAllProduct(),
  });

  useEffect(() => {
    if (!isLoading && data) setBastProduct(data);
  }, [data, isLoading]);

  return (
    <Box>
      <TitlesSection title={"پر فروش ترین ها"} titleIcon={<MedalStarIcon />}>
        <MainSection>
          <ReferenceCard
            Icon={<BestSellerBag />}
            title={"پرفروش ترین های ما را بخرید"}
          />

          <SwiperSection>
            {bastProduct.map((item:allProductsType, key) => {
              return (
                <SwiperSlide key={item.id}>
                  <ProductCard
                    carditem={item}
                  />
                </SwiperSlide>
              );
            })}
          </SwiperSection>
        </MainSection>
      </TitlesSection>
    </Box>
  );
};

export default BestSellersSection;
