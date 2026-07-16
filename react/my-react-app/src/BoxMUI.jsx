import React from "react";
import Box from "@mui/material/Box";

function BoxMUI() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // full viewport height
      }}
    >
      <Box
        sx={{
          width: 200,
          height: 200,
          backgroundColor: "primary.main",
        }}
      />
    </Box>
  );
}

export default BoxMUI;