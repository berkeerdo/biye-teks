import React from "react";
import { styled } from "@mui/styles";
import { AppBar, Box, Toolbar, Link } from "@mui/material";
import PoppinsM from "../../fonts/Poppins/Poppins-Regular.ttf";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#d3d0cb",
  height: "50px",
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: "center",
  alignContent : "center",
  fontFamily: { PoppinsM },
  fontWeight: "500",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  marginRight: "14px",
  fontSize: "15px",
  textDecoration: "none",
  color: "black",

  "&:hover": {
    color: "black",
  },
}));

const MobileAppBarNav = () => {
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

export default MobileAppBarNav;
