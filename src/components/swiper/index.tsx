import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const SwiperMainSection = styled(Swiper)(({ theme }) => ({
  "& .swiper-button-prev, .swiper-button-next": {
    background: theme.palette.neutral.main,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    boxShadow: `0 0 9px 1px ${theme.palette.black.light}`,
  },
  "& .swiper-button-prev:after, .swiper-button-next:after": {
    fontSize: "24px",
    color: theme.palette.black.light,
  },
}));

const SwiperSection = ({ children }: Props) => {
  return (
    <SwiperMainSection
      slidesPerView="auto"
      navigation={true}
      loop={true}
      modules={[Navigation]}
      className="swiper-section"
    >
      {children}
    </SwiperMainSection>
  );
};

export default SwiperSection;
