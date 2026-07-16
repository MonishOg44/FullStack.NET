import React from "react";

function stylecss() {
  return {
    backgroundColor: "lightblue",
    color: "darkblue",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };
}

export default function Stylecss() {
  return (
    <div style={stylecss()}>
      <h1>Hello, React!</h1>
      <button></button>
      <p>This is styled using the stylecss() function.</p>
    </div>
  );
}