import React from "react";
import Header from "../components/Header";
import HomePage from "./homepage/HomePage";
import ProductDetail from "./ProductDetail";

function Main() {
  return (
    <div>
      <Header />
      <HomePage />
      <ProductDetail />
    </div>
  );
}

export default Main;
