import React from "react";

export default function BlueButton({ setBlueColor, blueColor }) {
  return (
    <div>
      <button
        onClick={() => setBlueColor(blueColor)}
        className={blueColor ? "bg-red-700" : "bg-blue-700"}
      >
        Bouton Bleu
      </button>
    </div>
  );
}
