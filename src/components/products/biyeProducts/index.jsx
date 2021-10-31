import { useEffect, useState } from "react";
import Airtable from "airtable";
import BiyeCard from "./biyeCard";

const base = new Airtable({ apiKey: "keyCufMBXi6g7IwBf" }).base(
  "app1a5JmlkVQXSqWE"
);

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
    <>
      {biyeProducts.map(product => (
        <BiyeCard product={product} key={product.id} />
      ))}
    </>
  );
}

export default BiyeProduct;
