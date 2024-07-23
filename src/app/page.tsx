import BestSellersSection from "@/components/UI/best_sellers_section";
import CoverSection from "@/components/UI/cover_section";
import ImageBox from "@/components/UI/image-box";
import ProductCategoriesSection from "@/components/UI/product_categories_section";
import { initializeAppData, specialSaleData } from "@/services/servers";
import { Container } from "@mui/material";

export default function Home() {
  initializeAppData();
  return (
    <>
      <CoverSection />
      <Container
        sx={{
          maxWidth: "100%!important",
          padding: { xs: "0 12px", sm: "0 20px", md: "0 48px", lg: "0 76px" },
        }}
      >
        <ProductCategoriesSection />
        <ImageBox Data={specialSaleData}/>
      </Container>
        <BestSellersSection />
    </>
  );
}
