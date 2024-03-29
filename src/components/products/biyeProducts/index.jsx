import { useEffect, useState } from "react";
import Airtable from "airtable";
import BiyeCard from "./biyeCard";
import { Grid } from "@mui/material";
import { styled } from "@mui/styles";

const base = new Airtable({ apiKey: "keyCufMBXi6g7IwBf" }).base(
  "app1a5JmlkVQXSqWE"
);

const CustomGrid = styled(Grid) ({
  minHeight : "82.3vh",
  overflow: "hidden",
})

function BiyeProduct() {

  const [biyeProducts, setbiyeProducts] = useState([]);


  useEffect(() => {
    base("BiyeUrunleri").select({ view: "Grid view" }).eachPage((records, fetchNextPage) => {
      setbiyeProducts(records);
      console.log(records);
      fetchNextPage();
    })
  }, []);


  return (
    <CustomGrid container>
      {biyeProducts.map(product => (
        <BiyeCard product={product} key={product.id} />
      ))}
    </CustomGrid>
  );
}

export default BiyeProduct;
