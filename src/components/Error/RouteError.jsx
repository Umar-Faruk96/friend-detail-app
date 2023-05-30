import React from "react";

const RouteError = () => {
  const errorStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
  };
  
  return (
    <div style={errorStyle}>
      <h1>Oops.....! The page not found</h1>
    </div>
  );
};

export default RouteError;
