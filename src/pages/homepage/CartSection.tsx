import { Box, Typography } from "@mui/material";
import EmptyCart from "../../assets/images/emptyCart.png";
import React from "react";

const CartSection = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid #F0F0F0",
        paddingLeft: 2,
        marginTop: 5,
        fontFamily: "sans-serif",
      }}
    >
      <Typography component="div" variant="h5" margin="8px">
        Bag
      </Typography>

      <div style={{ alignItems: "center", textAlign: "center" }}>
        <img
          src={EmptyCart}
          style={{ height: 150, width: 300, marginTop: 30 }}
          alt="Empty Cart"
        />
        <Typography component="div" color="primary">
          Your bag is empty
        </Typography>
        <Typography component="div" color="gray">
          Looks like you havn't made choice yet
        </Typography>
      </div>
    </Box>
  );
};

export default CartSection;
