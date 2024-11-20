import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Enthusiast",
          "Business Analyst",
          "Network Engineer",
          "System Administrator",
          "Problem Solver",
          "Open Source Advocate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
