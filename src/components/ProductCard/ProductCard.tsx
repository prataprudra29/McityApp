import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ProductCard() {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", marginBottom: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          margin: 1,
          fontFamily: "sans-serif",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 100, height: 100 }}
            image="https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/4976955/073ffe51-1d3d-463d-9351-2a6d3a81d4ae/1642520809791-13ecb0a2-b8e2-40a5-8f78-972ddf6e500e.jpeg"
            alt="Apex"
          />
          <Typography
            style={{
              backgroundColor: "#ee741f",
              color: "white",
              width: 60,
              height: 20,
              display: "flex",
              fontSize: 12,
              marginTop: -10,
            }}
          >
            70% OFF
          </Typography>
        </Box>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            style={{ fontSize: 17, fontWeight: "550" }}
          >
            Powder Blender
          </Typography>
          <Typography>per piece</Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography variant="subtitle1" component="div">
              <b>₹80 </b>
              {
                <span
                  style={{ textDecoration: "line-through", color: "#808080" }}
                >
                  ₹300
                </span>
              }
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Button style={{ marginLeft: "auto" }}>Add</Button>
    </Card>
  );
}
