import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Box sx={{ flexGrow: 1, height: 75 }} />
      <HomePage />
    </div>
  );
}

export default App;
