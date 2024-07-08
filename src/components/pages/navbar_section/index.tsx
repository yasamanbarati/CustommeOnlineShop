"use client";
import Image from "next/image";
import Link from "next/link";
import { Grid, styled } from "@mui/material";
import SearchInput from "@/components/input/search";
import CustomizedButton from "@/components/button";
import { CartIcon, LoginIcon, MagicPenIcon } from "@/components/icons";
import { navbarLinks } from "@/services/servers";
import NavbarMenu from "./navbar_menu_section";

const NavbarSection = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "auto",
  flexDirection: "column",
}));

const MainNavbarSection = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "105px",
}));

const MainNavbarButtonSection = styled(Grid)(({ theme }: any) => ({
  display: "flex",
  justifyContent: "end",
  alignItems: "center",

  [theme.breakpoints.only("md")]: {
    maxWidth: "30%",
  },
  "& Button:first-child": {
    padding: 0,
    "& span": {
      margin: 0,
    },
  },
  "& Button:last-child": {
    paddingLeft: 0,
  },
}));

const ConnectionsNavbarSection = styled("div")(({ theme }: any) => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  width: "100%",
  gap: "32px",
  borderTop: `1px solid ${theme.palette.black.light}`,
  [theme.breakpoints.up("md")]: {
    height: "64px",
  },
  [theme.breakpoints.down("md")]: {
    height: "0px",
    display: "none",
  },
}));

const LogoSection = styled(Link)(({ theme }: any) => ({
  display: "flex",
  textDecoration: "none",
  position: "relative",
  [theme.breakpoints.up("md")]: {
    width: "170px",
    height: "65px",
  },
  width: "130px",
  height: "40px",
}));

const MainLinks = styled(Link)(({ theme }: any) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  fontSize: "1rem",
  color: "black",
  textDecoration: "none",
  fontWeight: "400",
  [theme.breakpoints.between(885, 1101)]: {
    fontSize: "0.85rem",
  },
}));
const MainNavbar = styled(Grid)(() => ({
  gap: "24px",
  alignItems: "center",
  height: "100%",
}));

export const Navbar = () => {
  return (
    <NavbarSection
      container
      spacing={1}
      my={3}
      padding={{ xs: "0 12px", sm: "0 20px", md: "0 48px", lg: "0 76px" }}
    >
      <MainNavbarSection
        container
        spacing={1}
        height={{ md: "105px", xs: "65px" }}
      >
        <MainNavbar item container xs={5} md={8}>
          <Grid
            item
            xs={2}
            sx={{
              flexGrow: 1,
              display: { md: "none", xs: "flex" },
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <NavbarMenu />
          </Grid>
          <LogoSection href="/">
            <Image src={"/LOGO1.png"} alt="logo" fill={true} />
          </LogoSection>

          <SearchInput sx={{ display: { md: "flex", xs: "none" } }} />
        </MainNavbar>

        <MainNavbarButtonSection
          item
          md={3}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <CustomizedButton
            size="medium"
            variant="text"
            startIcon={<LoginIcon />}
            text="ورود | ثبت نام"
            color="black"
            sx={{ whiteSpace: "nowrap" }}
          />

          <CustomizedButton
            size="medium"
            variant="text"
            startIcon={<CartIcon />}
            text="سبد خرید"
            color="black"
            sx={{ whiteSpace: "nowrap" }}
          />
        </MainNavbarButtonSection>

        <Grid
          item
          xs={2}
          sx={{
            display: { xs: "flex", md: "none" },
          }}
        >
          <CustomizedButton
            size="small"
            variant="text"
            startIcon={<CartIcon />}
          />
          <CustomizedButton
            size="small"
            variant="text"
            startIcon={<LoginIcon />}
          />
        </Grid>
      </MainNavbarSection>

      <SearchInput
        sx={{
          display: { xs: "flex", md: "none" },
          width: "100%",
          height: "100%",
          marginTop: '24px',
        }}
      />

      <ConnectionsNavbarSection>
        {navbarLinks.map((item, key) => {
          return (
            <MainLinks href={item.url} key={item.id}>
              {item.name}
            </MainLinks>
          );
        })}
      </ConnectionsNavbarSection>
    </NavbarSection>
  );
};
