"use client";
import { ReactNode, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SwiperSlide } from "swiper/react";
import { Box, styled } from "@mui/material";

import { allProductsType } from "@/_slice/type";
import { ProductCard } from "@/components/cards";
import TitlesSection from "@/components/section_titles";
import SwiperSection from "@/components/swiper";

interface Props {
  title: string;
  titleIcon: ReactNode;
  queryProductFn: Promise<any>;
  queryProductKey: string;
  filterKey?: string;
}

const MainSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "300px",
  "& .swiper-section": {
    width: "100%",
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
      '& .product-card':{
        boxShadow: `0 2px 3px 1px ${theme.palette.black.light}`
      }
    },
  },
}));

const ProductSliderSection = ({
  title,
  titleIcon,
  queryProductFn,
  queryProductKey,
  filterKey,
}: Props) => {
  const [product, setProduct] = useState<allProductsType[]>([]);

  const { data, isLoading } = useQuery({
    queryKey: [queryProductKey],
    queryFn: () => queryProductFn,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setProduct(data);
      if (filterKey) {
        const newData = data.filter((item: any) => item.category === filterKey);
        setProduct(newData);
      }
    }
  }, [data, isLoading]);

  return (
    <Box>
      <TitlesSection title={title} titleIcon={titleIcon}>
        <MainSection>
          <SwiperSection>
            {product.map((item) => {
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

export default ProductSliderSection;
