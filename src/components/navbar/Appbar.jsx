import React from "react";
import { styled } from "@mui/styles";
import { AppBar, Box, Toolbar, Link } from "@mui/material";
import PoppinsM from "../../fonts/Poppins/Poppins-Regular.ttf";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  position : "relative",
  backgroundColor: "#d3d0cb",
  height: "60px",
  marginBottom : "auto",
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  position : "relative",
  justifyContent: "center",
  fontFamily: { PoppinsM },
  fontWeight: "500",
  marginBottom : "2rem",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  margin: "15px",
  padding: "0 1rem",
  textDecoration: "none",
  color: "black",
  transition: "300ms",
  borderBottom: "1px solid transparent",

  "&:hover": {
    color: "black",
    borderBottom: "solid 1px black",
  },
}));

const AppBarNav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <CustomToolbar>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="#">
            Hakkımızda
          </CustomLink>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="/biye">
            Biye Ürünleri
          </CustomLink>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="/tela">
            Tela Ürünleri
          </CustomLink>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="/contact">
            İletişim
          </CustomLink>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};

export default AppBarNav;
