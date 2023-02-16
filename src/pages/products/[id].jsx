import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const ProductDetails = ({ product }) => {
  // const {
  //   query: { id },
  // } = useRouter();

  // console.log(id);

  console.log(product);

  return (
    <div>
      <Head>
        <title>Product Details for {product.title}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Link href="/products">Back to Products</Link>
      <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

// export async function getServerSideProps({ params: { id } }) {
//   let data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       product: data,
//     },
//   };
// }

// SSG => Static Site Generation

export async function getStaticProps({ params: { id } }) {
  let data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    props: {
      product: data,
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}
