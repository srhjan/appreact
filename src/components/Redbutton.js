import React from "react";

export default function RedButton({ setRedColor, redColor }) {
  return (
    <div>
      <button
        onClick={() => setRedColor(redColor)}
        className={redColor ? "bg-blue-700" : "bg-red-700"}
      >
        Bouton Rouge
      </button>
    </div>
  );
}
