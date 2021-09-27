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
  marginLeft : "20%",
  marginRight : "20%",
  marginBottom : "20px",
}));

const FactoryImg = styled("img")(({ theme }) => ({
  marginTop : "20px",
  marginLeft : "14%",
  marginRight : "14%",
  marginBottom : "50px",
  width: "70%",
  height: "20%",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1E2019",
  color: "white",
  borderRadius: "50",
  width: "50%",
  height : "50px",
  "&:hover": {
    backgroundColor: "darkgrey",
    color : "black",
  },
}));

const Product = () => {
  return (
    <>
      <DivWrapper>
        <FactoryImg src={Factory} />
        <ButtonWrapper>
          <Stack direction = "row" spacing = {2}>
            <CustomButton>Biye Çeşitleri</CustomButton>
            <CustomButton>Tela Çeşitleri</CustomButton>
          </Stack>
        </ButtonWrapper>
      </DivWrapper>
    </>
  );
};

export default Product;
