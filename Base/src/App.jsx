import React from "react";
import { useState } from "react"

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      {/* <div
        className="w-full h-screen duration-200"
        style={{
          backgroundColor: color,
        }}
      ></div> */}
      <h1 className="bg-green-400">Hello world</h1>
    </>
  );
}

export default App;
