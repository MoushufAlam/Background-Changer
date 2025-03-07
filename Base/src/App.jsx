import React from "react";
import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-2000"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-3xl bg-white px-3 py-2">
            <button
              onClick={() => setColor("Olive")}
              className="outline-none px-4 rounded-full text-white shadow-lg hover:cursor-pointer"
              style={{
                backgroundColor: "Olive",
              }}
              >
              Olive
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg hover:cursor-pointer"
              style={{
                backgroundColor: "green",
              }}
              >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full text-white shadow-lg hover:cursor-pointer"
              style={{
                backgroundColor: "blue",
              }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
