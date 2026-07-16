import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function CardMUI() {
  return (
    <Card sx={{ maxWidth: 300, margin: "20px auto" }}>
      <CardContent>
        <Typography variant="h5" component="div">
          React Card Example
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a simple card using Material UI’s Card, CardContent, and Typography components.
        </Typography>
      </CardContent>
    </Card>
  );
}