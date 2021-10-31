import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { styled } from "@mui/styles";


const CustomCard = styled(Card)({
  backgroundColor: "rgb(211, 208, 203)",
  width: "500px",
  margin : "60px",
  textAlign : "center",
})


function BiyeCard({ product }) {

  return (
    <Grid item>
      <CustomCard>
        <CardMedia
          component="img"
          height="300"
          src={product.fields.imageURL[0].url}
          alt="Product Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.fields.Product}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.fields.Details}
          </Typography>
        </CardContent>
      </CustomCard>
    </Grid>
  );
}

export default BiyeCard;
