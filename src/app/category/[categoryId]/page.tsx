"use client";
import { Box, Grid } from "@mui/material";
import CategoryPage from "@/components/UI/category_section";

const Page = async ({ params }: { params: { categoryId: string } }) => {
  return (
    <Box
      sx={{
        maxWidth: "100%!important",
        padding: { xs: "0 12px", sm: "0 20px", md: "0 48px", lg: "0 120px" },
      }}
    >
      <CategoryPage id={params.categoryId}/>
    </Box>
  );
};

export default Page;
