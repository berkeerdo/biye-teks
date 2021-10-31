import React from "react";
import { styled } from "@mui/styles";
import { Box, Button, Stack } from "@mui/material";
import Factory from "../../assets/factory.png";

const DivWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#393e41",
  position: "relative",
  maxWidth: "100%",
  minHeight: "400px",
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#393e41",
  position: "absolute",
  right: "15%",
  top: "35%"
}));

const FactoryImg = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "10%",
  left: "10%",
  width: "600px",
  height: "300px",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  // backgroundColor: "#1E2019",
  backgroundColor: "#587B7F",
  color: "white",
  borderRadius: "30px",
  width: "300px",
  height: "50px",
  "&:hover": {
    backgroundColor: "darkgrey",
    color: "black",
  },
}));

const Product = () => {
  return (
    <>
      <DivWrapper>
        <FactoryImg src={Factory} alt="Factory" />
        <ButtonWrapper>
          <Stack spacing={3}>
            <CustomButton href="/biye">Biye Çeşitleri</CustomButton>
            <CustomButton href="/tela">Tela Çeşitleri</CustomButton>
          </Stack>
        </ButtonWrapper>
      </DivWrapper>
    </>
  );
};

export default Product;
