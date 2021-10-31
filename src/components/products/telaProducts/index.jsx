import { useEffect, useState } from "react";
import Airtable from "airtable";
import TelaCard from "./telaCard";

const base = new Airtable({ apiKey: "keyCufMBXi6g7IwBf" }).base(
    "app1a5JmlkVQXSqWE"
);

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
        <>
            {telaProducts.map(product => (
                <TelaCard product={product} key={product.id} />
            ))}
        </>
    );
}

export default TelaProduct;
