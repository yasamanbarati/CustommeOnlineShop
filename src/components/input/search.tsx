"use client";
import { IconButton, InputBase, styled, SxProps } from "@mui/material";
import { SearchIcon } from "@/components/icons";

const InputSection = styled("div")(({ theme }: any) => ({
  position: "relative",
  width: "400px",
  height: "48px",
  borderRadius: "12px",
  padding: "12px",
  gap: "8px",
  background: theme.palette.primary.light,
  boxShadow: "0px 4px 4px #00000025",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  "& button": {
    position: "absolute",
    left: "10px",
    "& svg": {
      width: "24px",
      height: "24px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    width: "500px",
  },
  [theme.breakpoints.down("md")]: {
    height: "42px",
  },
}));

const SearchInput = ({ sx }: any) => {
  return (
    <InputSection sx={sx}>
      <InputBase
        placeholder="جستحو"
        inputProps={{ "aria-label": "Search Product" }}
        sx={{ width: "90%", height: "100%" }}
      />
      <IconButton type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </InputSection>
  );
};

export default SearchInput;
