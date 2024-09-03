import ProductSliderSection from "@/components/UI/ product-slider_section";
import BestSellersSection from "@/components/UI/best_sellers_section";
import CoverSection from "@/components/UI/cover_section";
import ImageBox from "@/components/UI/image-box";
import ProductCategoriesSection from "@/components/UI/product_categories_section";
import { MedalStarIcon } from "@/components/icons";
import {
  journalData,
  specialSaleData,
} from "@/services/servers";
import { getAllProduct } from "@/services/servers/api";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <CoverSection />
      <Container
        sx={{
          maxWidth: "100%!important",
          padding: { xs: "0 12px", sm: "0 20px", md: "0 48px", lg: "0 120px" },
        }}
      >
        <ProductCategoriesSection />
        <BestSellersSection />
        <ImageBox Data={specialSaleData} />
        <ProductSliderSection
          title="محصولات"
          titleIcon={<MedalStarIcon />}
          queryProductKey={"products"}
          queryProductFn={getAllProduct()}
        />
        <ImageBox Data={journalData} />
      </Container>
    </>
  );
}
