import { Box, Grid, Typography, styled } from "@mui/material";
import { FooterFootnoteSocialIcons } from "./footer_footnote_social_icons/footer_footnote_social_icons";

const FooterFootnoteBox = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.dark,
  minHeight: "78px",
  "& span": {
    color: theme.palette.neutral.main,
    textAlign: "right",
  },
}));
export const FooterFootnote = () => {
  return (
    <FooterFootnoteBox
      padding={{ xs: "0 12px", sm: "0 20px", md: "25px 48px", lg: "25px 76px" }}
    >
      <Grid
        container
        flexDirection={{ sm: "row", xs: "column-reverse" }}
        justifyContent={{ sm: "space-between" }}
        alignItems={{ sm: "flex-start", xs: "center" }}
      >
        <Grid item md={10} sm={7} xs={10}>
          <Typography component="span" variant="body2">
            کلیه حقوق این سایت نزدسیپا محفوظ بوده و بازنشر محتوا با ذکر منبع بلا
            مانع است
          </Typography>
        </Grid>
        <Grid item sm={4} xs={8} display={{ md: "none", xs: "block" }}>
          <FooterFootnoteSocialIcons />
        </Grid>
      </Grid>
    </FooterFootnoteBox>
  );
};
