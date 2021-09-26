import React from "react";
import { styled } from "@mui/styles";
import { AppBar, Box, Toolbar, Link } from "@mui/material";
import PoppinsM from "../../fonts/Poppins/Poppins-Regular.ttf";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#d3d0cb",
  height: "60px",
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "center",
  fontFamily: { PoppinsM },
  fontWeight: "500",
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
          <CustomLink sx={{ fontFamily: "Poppins" }} href="#">
            Biye Ürünleri
          </CustomLink>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="#">
            Tela Ürünleri
          </CustomLink>
          <CustomLink sx={{ fontFamily: "Poppins" }} href="#">
            İletişim
          </CustomLink>
        </CustomToolbar>
      </CustomAppBar>
    </Box>
  );
};

export default AppBarNav;