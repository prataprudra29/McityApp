import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const ProductSection = () => {
  useEffect(() => {
    console.log("jeu");
  }, []);
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #F0F0F0",
        paddingLeft: 2,
        paddingRight: 2,
        marginTop: 5,
        width: "40%",
      }}
    >
      <Typography style={{ fontSize: 20, fontWeight: 440, marginBottom: 10 }}>
        Apex{" "}
        {
          <span
            style={{
              backgroundColor: "#146eb4",
              color: "white",
              paddingRight: 6,
              paddingLeft: 6,
              borderRadius: "10%",
            }}
          >
            2
          </span>
        }
      </Typography>
      <ProductCard />
      <ProductCard />
    </Box>
  );
};

export default ProductSection;
