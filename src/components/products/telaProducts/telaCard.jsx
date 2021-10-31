import React from 'react'
import Container from "@mui/material/Container";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { styled } from "@mui/styles";

const CusContainer = styled(Container)({
    marginTop: "20px",
    marginBottom: "20px",
    minHeight: "100%",
});

const CustomCard = styled(Card)({
    backgroundColor: "rgb(211, 208, 203)",
    width: "500px",
})


function TelaCard({ product }) {
    return (
        <CusContainer maxWidth="xl">
            <CustomCard>
                <CardMedia
                    component="img"
                    height="300"
                    src={product.fields.imageURL[0].url}
                    alt="factory"
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
        </CusContainer>
    )
}

export default TelaCard
