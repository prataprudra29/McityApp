import React from "react";
import CartSection from "./CartSection";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CategorySection />
      <ProductSection />
      <CartSection />
    </div>
  );
};

export default HomePage;
