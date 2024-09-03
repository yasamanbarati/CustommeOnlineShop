import { Box, Grid } from "@mui/material";

import CartTableSection from "@/components/UI/shopping_cart_section/cart_table";
import SettlementTable from "@/components/UI/shopping_cart_section/settlementـtable";

const Cart = () => {
  return (
    <Box padding={{ xs: "0 12px", sm: "0 20px", md: "0 48px", lg: "0 120px" }}>
      <Grid container spacing={3}>
        <CartTableSection />
        <SettlementTable />
      </Grid>
    </Box>
  );
};

export default Cart;
