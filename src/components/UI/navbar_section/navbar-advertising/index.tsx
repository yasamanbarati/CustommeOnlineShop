"use client";

import { Typography, styled } from "@mui/material";

const AdvertisingNavbarSection = styled(Typography)(({ theme }:any) => ({
    textAlign: 'center',
    width:'100%',
    height:'40px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.neutral.main,
    padding:'7px 0',
    [theme.breakpoints.down('md')]:{
      fontSize: theme.typography.subtitle1,
    }, 
  }))
function NavbarAdvertising() {
  return (
    <AdvertisingNavbarSection variant="body2">
      با عضویت در کاستومی، اولین سفارش خود را ” رایگان” تحویل بگیرید
    </AdvertisingNavbarSection>
  );
}

export default NavbarAdvertising;
