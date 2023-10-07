import React from "react";
import Container from "./Container";
import { getAllPosts } from "@/service/posts";
import ProductsData from "./ProductsData";
//import { Product } from "@/service/posts";
import { Products } from "../../type";

const Products = async () => {
  const products = await getAllPosts();
  //console.log(products);

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {products?.map((item: Products) => (
        <ProductsData item={item} key={item._id} />
      ))}
    </Container>
  );
};

export default Products;