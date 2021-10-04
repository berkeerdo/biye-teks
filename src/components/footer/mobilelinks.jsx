import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import React from "react";

const MainFooter = styled(Box)(({ theme }) => ({
  position: "static",
  bottom: "0",
  width: "100%",
  height: "48px",
}));

const FirstFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "24px",
  backgroundColor: "#D3D0CB",
}));

const SecondFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "24px",
  paddingTop: "3px",
  paddingBottom: "3px",
  backgroundColor: "#1E2019",
}));

const CustomLink = styled(Link)(({ theme }) => ({
  color: "black",
  marginLeft: "1rem",
  marginRight: "1rem",
  fontSize: "13px",

  "&:hover": {
    color: "darkgrey",
  },
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  color: "#FFFFFF",
  fontSize: "14px",
}));

const FooterMobileLinks = () => {
  return (
    <>
      <MainFooter>
        <FirstFooter component="div">
          <CustomLink href="#" underline="none">
            Gizlilik Sözleşmesi
          </CustomLink>
          <CustomLink href="#" underline="none">
            Kullanım Koşulları
          </CustomLink>
          <CustomLink href="#" underline="none">
            Hakkımızda
          </CustomLink>
          <CustomLink href="#" underline="none">
            İletişim
          </CustomLink>
        </FirstFooter>
        <SecondFooter component="div">
          <CustomTypography>
            Biyeteks - 2021 Tüm hakkları saklıdır.
          </CustomTypography>
        </SecondFooter>
      </MainFooter>
    </>
  );
};

export default FooterMobileLinks;
