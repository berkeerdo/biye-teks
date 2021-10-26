import BiyeProducts from "./biyeProducts";
import { useEffect, useState } from "react";
import Airtable from "airtable";

const base = new Airtable({ apiKey: "keyCufMBXi6g7IwBf" }).base(
  "app1a5JmlkVQXSqWE"
);

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    base("BiyeUrunleri").select({ view: "Grid view" }).eachPage((records, fetchNextPage) => {
      setProducts(records);
      console.log(records);
      fetchNextPage();
    })
  }, []);


  return (
    <>
      {products.map(product => (
        <BiyeProducts product={product} key={product.id} />
      ))}
    </>
  )
}

export default Products;
