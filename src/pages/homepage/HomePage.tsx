import React from "react";
import CartSection from "./CartSection";
import CategorySection from "./CategorySection";
import ProductSection from "./ProductSection";

const HomePage = () => {
  return (
    <div className="w-100 float-left">
      <div className="container">
        <CategorySection />
        <ProductSection />
        <CartSection />
      </div>
    </div>
  );
};

export default HomePage;
