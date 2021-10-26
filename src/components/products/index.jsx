import BiyeProducts from "./biyeProducts";
import { useEffect, useState } from "react";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app0WT1tnSiWdYULq/books?api_key=keyCufMBXi6g7IwBf"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.records);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
      <>
          {products.map(product => (
        <BiyeProducts  {...product.fields} key={product.fields.id} />
      ))}
      </>
  )
}

export default Products;
