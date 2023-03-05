import React from "react";
import { AppBar } from "@mui/material";

export const Navbar = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        position: "absolute",
        height: "50px",
        justifyContent: "center",
        paddingLeft: "25px",

        fontWeight: "bold",
        fontSize: "30px",
        color: "black",

        backgroundColor: "white",
      }}
    >
      WaterCom
    </AppBar>
  );
};
