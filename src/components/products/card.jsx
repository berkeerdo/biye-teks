import React from 'react'
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";

function ProductCard({ product }) {
    return (
            <Card>
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
            </Card>
    )
}

export default ProductCard
