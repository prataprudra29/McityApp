import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import HomePage from "./homepage/HomePage";

function Main() {
  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1, height: 75 }} />
      <HomePage />
    </div>
  );
}

export default Main;
