"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { Breadcrumbs, Grid, Typography, styled } from "@mui/material";
import { getAllProduct, getCategoriesNameById } from "@/services/servers/api";
import { allProductsType } from "@/_slice/type";
import { ProductCard } from "@/components/cards";

interface Props {
  id: string;
}

const ProductCardSection = styled(Grid)(({ theme }) => ({
  "& .product-card": {
    boxShadow: `0 2px 3px 1px ${theme.palette.black.light}`,
  },
}));

const CategoryPage = ({ id }: Props) => {
  const [products, setProduct] = useState<allProductsType[]>([]);

  const { data: categoryInfo, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["category-item"],
    queryFn: () => getCategoriesNameById(id),
  });

  const { data: productsList, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProduct(),
  });

  useEffect(() => {
    if (!isCategoryLoading && categoryInfo && Boolean(productsList?.length)) {
      const result = productsList?.filter(
        (item: any) => item.category === categoryInfo
      );

      setProduct(result ?? []);
    }
  }, [categoryInfo, productsList, isCategoryLoading]);

  return (
    <>
      <Breadcrumbs aria-label="breadcrumb-category">
        <Link underline="hover" color="inherit" href="/">
          کاستومی
        </Link>
        <Typography color="text.primary">{categoryInfo}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4} mt={4}>
        {products ? (
          products.map((item: allProductsType) => {
            return (
              <ProductCardSection
                item
                xs={12}
                mobileL={6}
                tabletM={4}
                md={3}
                key={item.id}
              >
                <ProductCard carditem={item} />
              </ProductCardSection>
            );
          })
        ) : (
          <p>Loading products...</p>
        )}
      </Grid>
    </>
  );
};

export default CategoryPage;
