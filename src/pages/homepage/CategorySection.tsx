import { Box, Typography } from "@mui/material";
import React from "react";

const CategorySection = () => {
  const dummyArray = [
    "Apex (1)",
    "Dekau (2)",
    "Heater (3)",
    "Cello Tape with Band (4)",
    "Soap (2)",
    "Plate (13)",
    "Cup (2)",
    "Food (1)",
    "Bisleri (10)",
    "Apex (1)",
    "Dekau (2)",
    "Heater (3)",
    "Cello (4)",
    "Soap (2)",
    "Plate (13)",
    "Cup (2)",
    "Food (1)",
    "Bisleri (10)",
    "Apex (1)",
    "Dekau (2)",
    "Heater (3)",
    "Cello (4)",
    "Soap (2)",
    "Plate (13)",
    "Cup (2)",
    "Food (1)",
    "Bisleri (10)",
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        alignItems: "flex-start",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #F0F0F0",
        width: "30%",
        fontFamily: "sans-serif",
        marginTop: 5,
        overflow: "auto",
        maxHeight: 1000,
      }}
    >
      {dummyArray.map((itr) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              width: 150,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {" "}
          </Box>
          <Typography
            style={{
              fontSize: 16,
              fontWeight: 400,
              padding: "4px",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            {itr}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategorySection;
