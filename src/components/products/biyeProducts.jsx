import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/styles";
import ProductCard from "./card";

const CusContainer = styled(Container)({
  marginTop: "20px",
  marginBottom : "20px",
  minHeight : "100%",
});

function BiyeProducts({ product }) {

  return (
    <CusContainer maxWidth="xl">
        <ProductCard product = {product}/>
    </CusContainer>
  );
}

export default BiyeProducts;
