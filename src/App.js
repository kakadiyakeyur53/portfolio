import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import { Button } from "@mui/material";
import About from "./About";

const App = () => {
  const [loaded, setloaded] = useState(false);

  const Loader = () => {
    return (
      <div
        onClick={() => {
          setloaded(true);
        }}
        className="container-fluid"
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          className="mx-ato"
          src={require("./assets/images/route.png")}
          width
          style={{ height: "10vh" }}
        />
        <div style={{ color: "white" }}>Tap Here To Continue</div>
      </div>
    );
  };

  return <div style={{}}>{loaded ? <About /> : <Loader />}</div>;
};

export default App;
