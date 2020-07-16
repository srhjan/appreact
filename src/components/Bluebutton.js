import React, { useState } from "react";

export default function BlueButton() {
  const [isInverted, setIsInverted] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsInverted(!isInverted)}
        className={isInverted ? "bg-blue-700" : "bg-red-700"}
      >
        Bouton Rouge
      </button>
      <br />
      <button
        onClick={() => setIsInverted(!isInverted)}
        className={isInverted ? "bg-red-700" : "bg-blue-700"}
      >
        Bouton Bleu
      </button>
    </div>
  );
}
