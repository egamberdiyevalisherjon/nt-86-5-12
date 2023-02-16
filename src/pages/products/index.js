import Link from "next/link";
import React, { useEffect } from "react";

// const products = [
//   { id: 1, name: "Iphone" },
//   { id: 2, name: "AirPods" },
// ];

const Products = ({ products }) => {
  return (
    <div>
      Products
      {products.map((p) => {
        return (
          <Link key={p.id} href={`/products/${p.id}`}>
            <div>
              <h2>{p.title}</h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Products;

// SSR => Server Side Rendering => Request Time

export async function getServerSideProps() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  return {
    props: {
      products: data,
    },
  };
}
