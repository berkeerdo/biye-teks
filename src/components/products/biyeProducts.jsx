import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/styles";

const CusContainer = styled(Container)({
  minHeight: "80.2vh",
  marginTop: "20px",
});

function BiyeProducts({ title, author, published, coverImage }) {
  return (
    <CusContainer maxWidth="sm">
      <Grid>
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={coverImage}
                alt="factory"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {published}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </CusContainer>
  );
}

export default BiyeProducts;
