import React from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductSection = () => {
  useEffect(() => {
    console.log("jeu");
  }, []);
  return (
    <>
      <ProductCard />
    </>
  );
};

export default ProductSection;
