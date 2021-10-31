import { useEffect, useState } from "react";
import Airtable from "airtable";
import TelaCard from "./telaCard";
import { styled } from "@mui/styles";
import { Grid } from "@mui/material";

const base = new Airtable({ apiKey: "keyCufMBXi6g7IwBf" }).base(
    "app1a5JmlkVQXSqWE"
);

const CustomGrid = styled(Grid)({
    minHeight: "82.3vh",
    overflow: "hidden",
})

function TelaProduct() {


    const [telaProducts, settelaProducts] = useState([]);

    useEffect(() => {

        base("TelaUrunleri").select({ view: "Grid view" }).eachPage((records, fetchNextPage) => {
            settelaProducts(records);
            console.log(records);
            fetchNextPage();
        })
    }, []);

    return (
        <CustomGrid container>
            {telaProducts.map(product => (
                <TelaCard product={product} key={product.id} />
            ))}
        </CustomGrid>
    );
}

export default TelaProduct;
